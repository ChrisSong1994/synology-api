/**
 * reference :https://global.download.synology.com/download/Document/Software/DeveloperGuide/Package/FileStation/All/enu/Synology_File_Station_API_Guide.pdf
 */

import { getInfo } from "./Info";
import { getFileList, getFileListShare } from "./List";
import { addFavorite, deleteFavorite, getFavoriteList } from "./Favorite";
import { searchStart, searchStop, getSearchList } from "./Search";
import { createFolder } from "./CreateFolder";
import { getDownloadFile } from "./Download";
import { deleteFileStart } from "./Delete";
import { uploadFile } from "./Upload";

// methods
export const METHODS = {
  getInfo,
  getFileList,
  getFileListShare,
  getFavoriteList,
  addFavorite,
  deleteFavorite,
  searchStart,
  searchStop,
  getSearchList,
  createFolder,
  getDownloadFile,
  deleteFileStart,
  uploadFile,
};

// name space
export const KEY = "FileStation";
export const ALIAS_KEY = "fs";

// type
export type TMethods = typeof METHODS;
