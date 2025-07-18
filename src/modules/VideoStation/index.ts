import { getInfo } from "./Info";
import { getAcrossLibrary, getLibrary } from "./Library";

// fs methods
export const METHODS = {
  getInfo,
  getAcrossLibrary,
  getLibrary,
};

// name space
export const SPELLING_KEY = "VideoStation";
export const SIMPLIFY_KEY = "vs";

// type
export type TMethods = typeof METHODS;
