# Playlist-Import

**Note: This project is a work in progress.**

This project copies an existing playlist from Spotify to Youtube

## Features

- Authenticate with Spotify + Youtube and retrieve user playlists.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm

  ## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/RehmanMujtaba/PlayList-Import
   cd PlayList-Import
   npm install

2. Set up environment variables:

Create a .env file in the root of the project and add the following from your YouTube and Spotify API access:

```txt
YOUTUBE_CLIENT_ID=your_youtube_client_id
YOUTUBE_CLIENT_SECRET=your_youtube_client_secret
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
PORT=3000
```

3. Start the server

```
node server.js
```
