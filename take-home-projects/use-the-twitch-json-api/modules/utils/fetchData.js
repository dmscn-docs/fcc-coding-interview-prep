import { database } from "./database.js";

export async function fetchData(streamers) {
  const channelsUrls = streamers.map(
    (streamer) =>
      `https://twitch-proxy.freecodecamp.rocks/twitch-api/channels/${streamer}`
  );
  const streamsUrls = streamers.map(
    (streamer) =>
      `https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/${streamer}`
  );

  const responses = await Promise.all([
    ...channelsUrls.map((url) => fetch(url)),
    ...streamsUrls.map((url) => fetch(url)),
  ]);

  const jsonResponses = await Promise.all(
    responses.map((response) => response.json())
  );

  const dataChannels = jsonResponses.slice(0, streamers.length);
  const dataStreams = jsonResponses.slice(streamers.length);

  for (let i = 0; i < streamers.length; i++) {
    const { stream } = dataStreams[i];
    const { display_name, logo, url } = dataChannels[i];

    if (stream !== null) {
      const { game, channel } = stream;
      database.add({
        name: channel.display_name,
        description: `${game} - ${channel.status}`,
        profileImage: channel.logo,
        url: channel.url,
        state: true,
      });
    } else {
      database.add({
        name: display_name,
        description: "Offline",
        profileImage: logo,
        url: url,
        state: false,
      });
    }
  }
}
