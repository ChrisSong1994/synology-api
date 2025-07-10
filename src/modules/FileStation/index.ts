/**
 * reference :https://global.download.synology.com/download/Document/Software/DeveloperGuide/Package/FileStation/All/enu/Synology_File_Station_API_Guide.pdf
 */

import { getInfo } from "./Info";
import { getFileList, getFileListShare } from "./List";

// fs methods
export const METHODS = {
  getInfo,
  getFileList,
  getFileListShare,
};

// name space
export const SPELLING_KEY = "FileStation";
export const SIMPLIFY_KEY = "fs";

// type
export type TMethods = typeof METHODS;
