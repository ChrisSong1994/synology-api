import { AudioStationApi, SynologyApiResponse } from "@/types";

/**
 * fetch song list
 * */

export type AudioStationSongListRequest = {
  limit?: number;
  offset?: number;
  method?: string;
  library?: string;
  additional?: string;
  version?: number;
  sort_by?: string;
  sort_direction?: string;
};

export type AudioStationSongListResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  songs: {
    [key: string]: any;
  };
}>;

export async function getSongList(params: AudioStationSongListRequest) {
  const res = await this.run(AudioStationApi.Song, {
    params: {
      method: "list",
      library: "all",
      ...params,
    },
  });
  return res.data as AudioStationSongListResponse;
}
