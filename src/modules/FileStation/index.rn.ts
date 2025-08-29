import { METHODS as BASE_METHODS } from "./index.base";
import { uploadFile } from "./Upload.rn";

export const METHODS = {
  ...BASE_METHODS,
  uploadFile,
};

export type TMethods = typeof METHODS;
// name space
export const KEY = "FileStation";
export const ALIAS_KEY = "fs";
