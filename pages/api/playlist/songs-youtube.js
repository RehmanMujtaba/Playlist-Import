import axios from "axios";

export default async function getPlaylist(req, res) {
  try {
    const { id } = req.query;
    const youtubeAccessToken = req.cookies.youtubeAccessToken;

    if (!youtubeAccessToken) {
      return res.status(401).json({ message: "Access token not found" });
    }

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems`,
      {
        params: {
          part: "snippet",
          playlistId: id,
          maxResults: 50,
        },
        headers: {
          Authorization: `Bearer ${youtubeAccessToken}`,
        },
      }
    );

    console.log(response.data);

    const playlist = {
      id: id,
      name: response.data.items[0].snippet.title,
      description: response.data.items[0].snippet.description,
      image: response.data.items[0].snippet.thumbnails.default.url,
      tracks: response.data.items.map((item) => ({
        id: item.snippet.resourceId.videoId,
        name: item.snippet.title,
        artist: item.snippet.channelTitle,
      })),
    };

    res.status(200).json(playlist);
  } catch (error) {
    console.error("Error fetching YouTube playlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}