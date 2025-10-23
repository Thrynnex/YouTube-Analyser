// This is our secure, server-side function.
// It will run on Vercel, not in the user's browser.

export default async function handler(request, response) {
  // Get the secret API key from Vercel's environment variables
  const apiKey = process.env.YOUTUBE_API_KEY;

  // Get the videoId that the frontend sent to us
  const { videoId } = request.query;

  // If the frontend didn't send a videoId, return an error
  if (!videoId) {
    return response.status(400).json({ error: 'Video ID is required' });
  }

  // This is the same Google API URL we used before
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,statistics`;

  try {
    // Call the YouTube API from our secure backend
    const youtubeResponse = await fetch(apiUrl);
    const data = await youtubeResponse.json();

    // If the API call fails, send back the error
    if (!youtubeResponse.ok) {
      throw new Error(data.error?.message || 'Failed to fetch video details.');
    }

    // Success! Send the YouTube data back to our frontend
    response.status(200).json(data);
  } catch (error) {
    // Handle any other errors
    response.status(500).json({ error: error.message });
  }
}
