import { AudioStationApi } from "@/types";
import { AudioStationSongListRequest, AudioStationSongListResponse } from "./types";

/**
 * fetch song list
 * */
export async function getSongList(params: AudioStationSongListRequest) {
  const res = await this.run(AudioStationApi.Song, {
    params: {
      method: "list",
      library: "all",
      limit: params.limit,
      offset: params.offset,
    },
  });
  return res.data as AudioStationSongListResponse;
}
