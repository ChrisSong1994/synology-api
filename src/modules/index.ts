import * as AudioStation from "./AudioStation";
import * as FileStation from "./FileStation";
import * as VideoStation from "./VideoStation";
import * as Auth from "./Auth";
import { BindMethods } from "../decorators";

export const SynologyApiModules = [FileStation, AudioStation, VideoStation, Auth];

export const SynologyApiKeys = {
  FileStation: FileStation.KEY,
  fs: FileStation.ALIAS_KEY,
  AudioStation: AudioStation.KEY,
  as: AudioStation.ALIAS_KEY,
  VideoStation: VideoStation.KEY,
  vs: VideoStation.ALIAS_KEY,
  Auth: Auth.KEY,
  au: Auth.ALIAS_KEY,
};

export const SynologyApiMethods = SynologyApiModules.reduce((acc, module) => {
  acc[module.KEY] = module.METHODS;
  acc[module.ALIAS_KEY] = module.METHODS;
  return acc;
}, {});

@BindMethods(SynologyApiMethods)
export class BaseSynologyApi {
  [AudioStation.KEY]: AudioStation.TMethods;
  [AudioStation.ALIAS_KEY]: AudioStation.TMethods;
  [FileStation.KEY]: FileStation.TMethods;
  [FileStation.ALIAS_KEY]: FileStation.TMethods;
  [VideoStation.KEY]: VideoStation.TMethods;
  [VideoStation.ALIAS_KEY]: VideoStation.TMethods;
  [Auth.KEY]: Auth.TMethods;
  [Auth.ALIAS_KEY]: Auth.TMethods;
  constructor() {}
}
