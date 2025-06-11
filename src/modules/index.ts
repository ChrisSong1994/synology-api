import { AudioStationProp, AudioStationMethods } from "./AudioStation";

export class BaseSynologyApi {
  [AudioStationProp]: typeof AudioStationMethods;
  constructor() {}
}

const instanceBindings = new WeakMap();

Object.defineProperty(BaseSynologyApi.prototype, AudioStationProp, {
  get() {
    if (!instanceBindings.has(this)) {
      instanceBindings.set(this, {
        getSongList: AudioStationMethods.getSongList.bind(this),
      });
    }
    return instanceBindings.get(this);
  },
});
