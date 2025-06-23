import { AudioStationSongListRequest, AudioStationSongListResponse } from "./types";


/**
 * fetch song list
 * */
export async function getSongList(params: AudioStationSongListRequest) {
  const res = await this.run("SYNO.AudioStation.Song", {
    params: {
      method: "list",
      library: "all",
      limit: params.limit,
      offset: params.offset,
    },
  });
  return res.data as AudioStationSongListResponse;
}
