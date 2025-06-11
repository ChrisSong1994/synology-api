import { SynologyApi } from "../core";
import {
  AudioStationSongListRequest,
  AudioStationSongListResponse,
} from "../types/AudioStation.Song";

export const AudioStationMethods = {
  getSongList: async function (params: AudioStationSongListRequest) {
    const res = await (this as SynologyApi).run("SYNO.AudioStation.Song", {
      params: {
        method: "list",
        library: "all",
        limit: params.limit,
        offset: params.offset,
      },
    });
    return res.data as AudioStationSongListResponse;
  },
};

const instanceBindings = new WeakMap();

Object.defineProperty(SynologyApi.prototype, "AudioStation", {
  get() {
    if (!instanceBindings.has(this)) {
      instanceBindings.set(this, {
        getSongList: AudioStationMethods.getSongList.bind(this),
      });
    }
    return instanceBindings.get(this);
  },
});
