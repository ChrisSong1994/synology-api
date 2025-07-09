import { AudioStationKey, AudioStationMethods } from "./AudioStation";
import { FileStationKey, FileStationMethods } from "./FileStation";

export { AudioStationKey } from "./AudioStation";
export { FileStationKey } from "./FileStation";

type SynologyApiMethods = typeof AudioStationMethods | typeof FileStationMethods;

export class BaseSynologyApi {
  [AudioStationKey]: typeof AudioStationMethods;
  [FileStationKey]: typeof FileStationMethods;
  constructor() {}
}

// bind methods to BaseSynologyApi instance
function methodsBundler(instance: BaseSynologyApi, methods: SynologyApiMethods) {
  const output = {};
  for (const key in methods) {
    output[key] = methods[key].bind(instance);
  }
  return output;
}

// proxy methods namespace to BaseSynologyApi instance
Object.defineProperties(BaseSynologyApi.prototype, {
  [FileStationKey]: {
    get() {
      return methodsBundler(this, FileStationMethods);
    },
  },
  [AudioStationKey]: {
    get() {
      return methodsBundler(this, AudioStationMethods);
    },
  },
});
