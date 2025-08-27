/**
 * reference :https://global.download.synology.com/download/Document/Software/DeveloperGuide/Package/FileStation/All/enu/Synology_File_Station_API_Guide.pdf
 */

import { getInfo } from "./Info";
import { getFileList, getShareFileList, getVirtualFolderList } from "./List";
import {
  addFavorite,
  deleteFavorite,
  getFavoriteList,
  clearBrokenFavorite,
  editFavorite,
} from "./Favorite";
import { startSearch, stopSearch, getSearchList, cleanSearch } from "./Search";
import { createFolder } from "./CreateFolder";
import { getDownloadFile } from "./Download";
import { stopDeleteFile, startDeleteFile, getDeleteFileStatus } from "./Delete";
import { uploadFile } from "./Upload";
import { getThumbUrl } from "./Thumb";
import { startDirSizeCalc, stopDirSizeCalc, getDirSizeCalcStatus } from "./DirSize";
import { startMD5Calc, stopMD5Calc, getMD5CalcStatus } from "./MD5";
import { checkPermission } from "./CheckPermission";
import { rename } from "./Rename";
import { startCopyMove, getCopyMoveStatus, stopCopyMove } from "./CopyMove";
import {
  getSharingInfo,
  getSharingList,
  createSharingLink,
  deleteSharingLink,
  editSharingLink,
  clearInvalidSharingLink,
} from "./Sharing";
import { getBackgroundTaskList, clearFinishedBackgroundTasks } from "./BackgroundTask";
// methods
export const METHODS = {
  getInfo,
  getFileList,
  getShareFileList,
  getVirtualFolderList,
  getFavoriteList,
  addFavorite,
  deleteFavorite,
  editFavorite,
  clearBrokenFavorite,
  startSearch,
  stopSearch,
  getSearchList,
  cleanSearch,
  createFolder,
  getDownloadFile,
  stopDeleteFile,
  startDeleteFile,
  getDeleteFileStatus,
  uploadFile,
  getThumbUrl,
  startDirSizeCalc,
  stopDirSizeCalc,
  getDirSizeCalcStatus,
  startMD5Calc,
  getMD5CalcStatus,
  stopMD5Calc,
  checkPermission,
  rename,
  clearFinishedBackgroundTasks,
  getBackgroundTaskList,
  getSharingInfo,
  getSharingList,
  createSharingLink,
  deleteSharingLink,
  editSharingLink,
  clearInvalidSharingLink,
  startCopyMove,
  getCopyMoveStatus,
  stopCopyMove,
};

// name space
export const KEY = "FileStation";
export const ALIAS_KEY = "fs";

// type
export type TMethods = typeof METHODS;
