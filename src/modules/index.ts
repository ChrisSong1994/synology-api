import * as AudioStation from "./AudioStation";
import * as FileStation from "./FileStation";
import * as VideoStation from "./VideoStation";
import * as Auth from "./Auth";
import * as Core from "./Core";
import * as Docker from "./Docker";

import { BindMethods } from "../decorators";

type EnumFromArray<T extends string[]> = {
  [K in T[number]]: K;
};

export const SynologyApiModules = [FileStation, AudioStation, VideoStation, Auth, Core, Docker];

export const SynologyApiKeys = SynologyApiModules.reduce((acc, module) => {
  acc = { ...acc, [module.KEY]: module.KEY, [module.ALIAS_KEY]: module.ALIAS_KEY };
  return acc;
}, []);

export const SynologyApiKeysMap: EnumFromArray<typeof SynologyApiKeys> = SynologyApiModules.reduce(
  (acc, module) => {
    acc[module.KEY] = module.KEY;
    acc[module.ALIAS_KEY] = module.ALIAS_KEY;
    return acc;
  },
  {}
);

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
  [Core.KEY]: Core.TMethods;
  [Core.ALIAS_KEY]: Core.TMethods;
  [Docker.KEY]: Docker.TMethods;
  [Docker.ALIAS_KEY]: Docker.TMethods;
  constructor() {}
}
