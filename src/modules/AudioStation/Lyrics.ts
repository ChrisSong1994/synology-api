import { AudioStationApi, SynologyApiResponse } from "@/types";

export async function getLyrics(
  params: { id: string } // song id
): Promise<SynologyApiResponse<{ lyrics: string }>> {
  const res = await this.run(AudioStationApi.Lyrics, {
    params: {
      method: "getlyrics",
      id: params.id,
    },
  });
  return res;
}

export type AudioStationSearchLyricsParams = {
  title?: string;
  artist?: string;
  limit?: number;
  additional?: Array<"full_lyrics" | string>;
};

export type AudioStationSearchLyricsResponse = SynologyApiResponse<{
  lyrics: Array<{
    additional: {
      full_lyrics: string;
    };
    artist: string;
    id: string;
    partial_lyrics: string;
    plugin: string;
    title: string;
  }>;
}>;

export async function searchLyrics(
  params: AudioStationSearchLyricsParams
): Promise<AudioStationSearchLyricsResponse> {
  const {
    additional = ["full_lyrics"],
    limit = 1,
    ...extraParams
  } = params;

  const res = await this.run(AudioStationApi.LyricsSearch, {
    params: {
      method: "searchlyrics",
      limit: limit,
      additional: additional.join(","),
      ...extraParams,
    },
  });

  return res;
}
