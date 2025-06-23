import { AudioStationKey, AudioStationMethods } from "./AudioStation";

// bind methods to BaseSynologyApi instance
function methodsBundler(instance: any, methods: typeof AudioStationMethods) {
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
  [AudioStationKey]: {
    get() {
      return methodsBundler(this, AudioStationMethods);
    },
  },
});
