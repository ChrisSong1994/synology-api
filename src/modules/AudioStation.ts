import {
  AudioStationSongListRequest,
  AudioStationSongListResponse,
} from "../types/AudioStation.Song";

async function getSongList(params: AudioStationSongListRequest) {
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

export const AudioStationMethods = {
  getSongList,
};

export const AudioStationProp = "AudioStation";
