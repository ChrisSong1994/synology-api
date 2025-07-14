import * as AudioStation from "./AudioStation";
import * as FileStation from "./FileStation";

export const SynologyApiKeys = {
  FileStation: FileStation.SPELLING_KEY,
  fs: FileStation.SIMPLIFY_KEY,
  AudioStation: AudioStation.SPELLING_KEY,
  as: AudioStation.SIMPLIFY_KEY,
};

export type SynologyApiMethods = FileStation.TMethods | AudioStation.TMethods;

// export type BaseSynologyApiKeyMethods = FileStation.IKeyMethods

export class BaseSynologyApi {
  [AudioStation.SPELLING_KEY]: AudioStation.TMethods;
  [AudioStation.SIMPLIFY_KEY]: AudioStation.TMethods;
  [FileStation.SPELLING_KEY]: FileStation.TMethods;
  [FileStation.SIMPLIFY_KEY]: FileStation.TMethods;
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
  // FileStation
  [SynologyApiKeys.FileStation]: {
    get() {
      return methodsBundler(this, FileStation.METHODS);
    },
  },
  [SynologyApiKeys.fs]: {
    get() {
      return methodsBundler(this, FileStation.METHODS);
    },
  },
  // AudioStation
  [SynologyApiKeys.AudioStation]: {
    get() {
      return methodsBundler(this, AudioStation.METHODS);
    },
  },
  [SynologyApiKeys.as]: {
    get() {
      return methodsBundler(this, AudioStation.METHODS);
    },
  },
});
