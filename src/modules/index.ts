import * as AudioStation from "./AudioStation";
import * as FileStation from "./FileStation";
import * as VideoStation from "./VideoStation";
import * as Auth from "./Auth";

export const SynologyApiKeys = {
  FileStation: FileStation.SPELLING_KEY,
  fs: FileStation.SIMPLIFY_KEY,
  AudioStation: AudioStation.SPELLING_KEY,
  as: AudioStation.SIMPLIFY_KEY,
  VideoStation: VideoStation.SPELLING_KEY,
  vs: VideoStation.SIMPLIFY_KEY,
  Auth: Auth.SPELLING_KEY,
  au: Auth.SIMPLIFY_KEY,
};

export type SynologyApiMethods =
  | FileStation.TMethods
  | AudioStation.TMethods
  | VideoStation.TMethods
  | Auth.TMethods;

// export type BaseSynologyApiKeyMethods = FileStation.IKeyMethods

export class BaseSynologyApi {
  [AudioStation.SPELLING_KEY]: AudioStation.TMethods;
  [AudioStation.SIMPLIFY_KEY]: AudioStation.TMethods;
  [FileStation.SPELLING_KEY]: FileStation.TMethods;
  [FileStation.SIMPLIFY_KEY]: FileStation.TMethods;
  [VideoStation.SPELLING_KEY]: VideoStation.TMethods;
  [VideoStation.SIMPLIFY_KEY]: VideoStation.TMethods;
  [Auth.SPELLING_KEY]: Auth.TMethods;
  [Auth.SIMPLIFY_KEY]: Auth.TMethods;
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
  // VideoStation
  [SynologyApiKeys.VideoStation]: {
    get() {
      return methodsBundler(this, VideoStation.METHODS);
    },
  },
  [SynologyApiKeys.vs]: {
    get() {
      return methodsBundler(this, VideoStation.METHODS);
    },
  },
  // Auth
  [SynologyApiKeys.Auth]: {
    get() {
      return methodsBundler(this, Auth.METHODS);
    },
  },
  [SynologyApiKeys.au]: {
    get() {
      return methodsBundler(this, Auth.METHODS);
    },
  },
});
