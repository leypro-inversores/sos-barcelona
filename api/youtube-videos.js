
const CHANNEL_ID = 'UCHPgrvFRfAD9U7Bb6NWkvGQ';

export default async function handler(request, response) {
  let statusCode = 200;
  let result = { videos: [] };

  if (request.method !== 'GET') {
    statusCode = 405;
    result = { error: 'Método no permitido.' };
  } else if (!process.env.YOUTUBE_API_KEY) {
    statusCode = 500;
    result = { error: 'La API Key de YouTube no está configurada.' };
  } else {
    try {
      const params = new URLSearchParams({
        part: 'snippet',
        channelId: CHANNEL_ID,
        type: 'video',
        order: 'date',
        maxResults: '6',
        key: process.env.YOUTUBE_API_KEY
      });

      const url = `https://www.googleapis.com/youtube/v3/search?${params.toString()}`;

      const youtubeResponse = await fetch(url);
      const youtubeData = await youtubeResponse.json();

      if (!youtubeResponse.ok) {
        statusCode = youtubeResponse.status;
        result = {
          error: youtubeData.error?.message || 'Error consultando YouTube.'
        };
      } else {
        const videos = (youtubeData.items || []).map((item) => ({
          id: item.id?.videoId,
          title: item.snippet?.title,
          publishedAt: item.snippet?.publishedAt,
          thumbnail:
            item.snippet?.thumbnails?.high?.url ||
            item.snippet?.thumbnails?.medium?.url ||
            item.snippet?.thumbnails?.default?.url
        })).filter((video) => video.id);

        result = { videos: videos.slice(0, 6) };
      }
    } catch (error) {
      statusCode = 502;
      result = { error: 'No fue posible consultar YouTube.' };
    }
  }

  response.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400'
  );

  return response.status(statusCode).json(result);
}
