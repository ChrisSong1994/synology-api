import { getInfo } from "./Info";
import { getAcrossLibrary, getLibrary } from "./Library";
import { getStreamUrl, getStreamId } from "./Streaming";
import { getMoiveInfo } from "./Movie";

// methods
export const METHODS = {
  getInfo,
  getAcrossLibrary,
  getLibrary,
  getStreamUrl,
  getMoiveInfo,
  getStreamId,
};

// name space
export const KEY = "VideoStation";
export const ALIAS_KEY = "vs";

// type
export type TMethods = typeof METHODS;
