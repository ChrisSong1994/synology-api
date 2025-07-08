/**
 * reference :https://global.download.synology.com/download/Document/Software/DeveloperGuide/Package/FileStation/All/enu/Synology_File_Station_API_Guide.pdf
 */

import { getInfo } from "./Info";
import { getFileList, getFileListShare } from "./List";

export const FileStationMethods = {
  getInfo,
  getFileList,
  getFileListShare,
};

export const FileStationKey = "FileStation";
