import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./util";

describe("SynologyApi AudioStation", async () => {
  const synologyApi = createSynologyApi();

  test("SynologyApi getInfo", async () => {
    const result = await synologyApi.as.getInfo();
    expect(result.data.version).toBeDefined();
  });

  test("SynologyApi getSongList", async () => {
    const result = await synologyApi.as.getSongList({
      limit: 10,
      offset: 0,
    });
    expect(result.data.songs.length).toBeLessThanOrEqual(10);
    if (result.data.songs?.[0]) {
      const result2 = await synologyApi.as.setSongRating({
        id: result.data.songs[0].id,
        rating: 5,
      });
      expect(result2.success).toBeDefined();
    }
  });

  test("SynologyApi getAlbumList", async () => {
    const result = await synologyApi.as.getAlbumList({
      limit: 10,
      offset: 0,
    });
    expect(result.data.albums.length).toBeLessThanOrEqual(10);
    expect(result.success).toBeDefined();
  });
  test("SynologyApi getArtistList", async () => {
    const result = await synologyApi.as.getArtistList({
      limit: 10,
      offset: 0,
    });
    expect(result.data.artists.length).toBeLessThanOrEqual(10);
    expect(result.success).toBeDefined();
  });

  test("SynologyApi Playlist", async () => {
    const temp_name = `playlist_${Math.random().toString(36).substring(7)}`;
    const result = await synologyApi.as.createPlaylist({
      name: temp_name,
    });
    expect(result.data.id).toBeDefined();
    const plResult = await synologyApi.as.getPlaylist({ limit: 10, offset: 0 });
    expect(plResult.data.playlists.length).toBeLessThanOrEqual(10);
    const dlResult = await synologyApi.as.deletePlaylist({ id: result.data.id });
    expect(dlResult.success).toBeDefined();
    const nextPlResult = await synologyApi.as.getPlaylist({ limit: 10, offset: 0 });
    expect(plResult.data.total - nextPlResult.data.total).toEqual(1);
  });

  test("SynologyApi getFolderList", async () => {
    const result = await synologyApi.as.getFolderList({
      limit: 10,
      offset: 0,
    });
    expect(result.data.items.length).toBeLessThanOrEqual(10);
    expect(result.success).toBeDefined();
  });

  test("SynologyApi getLyrics", async () => {
    const result = await synologyApi.as.getSongList({
      limit: 10,
      offset: 0,
    });
    if (result.data.songs?.[0]) {
      const lyricsRes = await synologyApi.as.getLyrics({
        id: result.data.songs[0].id,
      });
      expect(lyricsRes.data?.lyrics).toBeDefined();
    }
  });

  test("SynologyApi searchLyrics", async () => {
    const result = await synologyApi.as.searchLyrics({
      title: "给我一首歌的时间",
      artist: "周杰伦",
      limit: 1,
    });
    expect(result.data.lyrics.length).toBeLessThanOrEqual(1);
  });
});
