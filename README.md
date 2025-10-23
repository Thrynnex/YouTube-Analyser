# Definitive YouTube Analyzer

![Project Screenshot](https://i.imgur.com/your-screenshot-url.png) <!-- Add a screenshot of your app here! -->

A sleek, secure, and fully responsive web application for extracting comprehensive details from any YouTube video. This project features a modern "glassmorphism" UI and a secure backend powered by Vercel Serverless Functions to protect the YouTube Data API key.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F%5BYOUR_USERNAME%5D%2F%5BYOUR_REPO_NAME%5D)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features

- **Secure API Key Handling:** The YouTube API key is stored and used exclusively on the backend, never exposed to the client's browser.
- **Fully Responsive Design:** A flawless user experience on any device, from small mobile phones to large desktop monitors.
- **Modern UI/UX:** A beautiful "glassmorphism" interface with smooth animations, interactive elements, and an intelligent skeleton loader for a premium feel.
- **Comprehensive Data Extraction:** Fetches video title, channel, description, tags, and all key statistics (views, likes, comments).
- **Interactive Copy-to-Clipboard:** Easily copy the video title, description, and any available thumbnail URL with a single click.
- **One-Click Deployment:** Ready to be deployed instantly on Vercel.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js (via Vercel Serverless Function)
- **API:** YouTube Data API v3
- **Deployment:** Vercel & GitHub

## 🚀 Getting Started

Follow these steps to get your own instance of the YouTube Analyzer up and running.

### Prerequisites

- A [GitHub](https://github.com/) account.
- A [Vercel](https://vercel.com/) account (you can sign up with your GitHub account).
- A **YouTube Data API v3 Key** from the [Google Cloud Console](https://console.cloud.google.com/apis/library/youtube.googleapis.com).

### Deployment Instructions

1.  **Fork/Clone this Repository:**
    Start by forking this repository to your own GitHub account, or clone it to your local machine.

2.  **Deploy to Vercel:**
    Click the "Deploy with Vercel" button at the top of this README, or import your forked repository directly from your Vercel dashboard.

3.  **Add Environment Variable:**
    During the import process on Vercel, you will be prompted to configure the project. Expand the **"Environment Variables"** section and add the following:

    -   **Name:** `YOUTUBE_API_KEY`
    -   **Value:** `[Your YouTube API Key Here]`

    ![Vercel Environment Variable Setup](https://i.imgur.com/your-env-variable-screenshot.png) <!-- It's helpful to add a screenshot of this step! -->

4.  **Deploy:**
    Click the "Deploy" button. Vercel will handle the rest! Once the deployment is complete, you will have a live, secure, and fully functional YouTube Analyzer.

## 📁 Project Structure

The project is structured for easy deployment on Vercel:

```
/
├── api/
│   └── youtube.js    # The secure backend serverless function
│
├── index.html        # The main frontend file (HTML, CSS, JS)
├── LICENSE           # Project license
└── README.md         # Project documentation
```

-   The `index.html` file contains all the user-facing code. It sends requests to our own API endpoint.
-   The `/api/youtube.js` file is automatically detected by Vercel as a serverless function. It receives requests, securely uses the API key to fetch data from YouTube, and returns it to the frontend.

## 📄 License

This project is open-source and is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.
