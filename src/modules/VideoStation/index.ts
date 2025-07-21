import { getInfo } from "./Info";
import { getAcrossLibrary, getLibrary } from "./Library";
import { getStreamUrl, getStreamId } from "./Streaming";
import { getMoiveInfo } from "./Movie";

// fs methods
export const METHODS = {
  getInfo,
  getAcrossLibrary,
  getLibrary,
  getStreamUrl,
  getMoiveInfo,
  getStreamId,
};

// name space
export const SPELLING_KEY = "VideoStation";
export const SIMPLIFY_KEY = "vs";

// type
export type TMethods = typeof METHODS;
