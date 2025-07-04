import { AudioStationKey, AudioStationMethods } from "./AudioStation";
import { FileStationKey, FileStationMethods } from "./FileStation";

type SynologyApiMethods = typeof AudioStationMethods | typeof FileStationMethods;

// bind methods to BaseSynologyApi instance
function methodsBundler(instance: any, methods: SynologyApiMethods) {
  const output = {};
  for (const key in methods) {
    output[key] = methods[key].bind(instance);
  }
  return output;
}
export class BaseSynologyApi {
  [AudioStationKey]: typeof AudioStationMethods;
  constructor() {}
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
