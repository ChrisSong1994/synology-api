
import { SynologyApiResponse } from "@/types";
import { isUndfined } from "./utils";

const CODE_SUCCESS = 0;
const CODE_UNKNOWN = 9999;
export const COMMON_CODES = "COMMON_CODES";

export const SYNOLOGY_ERROR_CODES = {
  ['FileStation']: {
    400: "Invalid parameter of file operation",
    401: "Unknown error of file operation",
    402: "System is too busy",
    403: "Invalid user does this file operation",
    404: "Invalid group does this file operation",
    405: "Invalid user and group does this file operation",
    406: "Can't get user/group information from the account server",
    407: "Operation not permitted",
    408: "No such file or directory",
    409: "Non-supported file system",
    410: "Failed to connect internet-based file system (e.g., CIFS)",
    411: "Read-only file system",
    412: "Filename too long in the non-encrypted file system",
    413: "Filename too long in the encrypted file system",
    414: "File already exists",
    415: "Disk quota exceeded",
    416: "No space left on device",
    417: "Input/output error",
    418: "Illegal name or path",
    419: "Illegal file name",
    420: "Illegal file name on FAT file system",
    421: "Device or resource busy",
    599: "No such task of the file operation",

    // favorite
    800: "A folder path of favorite folder is already added to user's favorites.",
    801: "A name of favorite folder conflicts with an existing folder path in the user's favorites.",
    802: "There are too many favorites to be added.",

    // copy move
    1000: "Failed to copy files/folders. More information in <errors> object.",
    1001: " Failed to move files/folders. More information in <errors> object.",
    1002: " An error occurred at the destination. More information in <errors> object.",
    1003: " Cannot overwrite or skip the existing file because no overwrite parameter is given.",
    1004: " File cannot overwrite a folder with the same name, or folder cannot overwrite a file with the same name.",
    1006: "Cannot copy/move file/folder with special characters to a FAT32 file system.",
    1007: " Cannot copy/move a file bigger than 4G to a FAT32 file system.",

    // create folder
    1100: "Failed to create a folder. More information in <errors> object.",
    1101: "The number of folders to the parent folder would exceed the system limitation.",

    // sharing
    2000: " Sharing link does not exist.",
    2001: "Cannot generate sharing link because too many sharing links exist.",
    2002: " Failed to access sharing links.",
  },
  ['AudioStation']: {},
  ["COMMON_CODES"]: {
    [CODE_SUCCESS]: "Success",
    100: "Unknown error",
    101: "No parameter of API, method or version",
    102: "The requested API does not exist",
    103: "The requested method does not exist",
    104: "The requested version does not support the functionality",
    105: "The logged in session does not have permission",
    106: "Session timeout",
    107: "Session interrupted by duplicated login",
    108: "Failed to upload the file",
    109: "The network connection is unstable or the system is busy",
    110: "The network connection is unstable or the system is busy",
    111: "The network connection is unstable or the system is busy",
    112: "Preserve for other purpose",
    113: "Preserve for other purpose",
    114: "Lost parameters for this API",
    115: "Not allowed to upload a file",
    116: "Not allowed to perform for a demo site",
    117: "The network connection is unstable or the system is busy",
    118: "The network connection is unstable or the system is busy",
    119: "Invalid session / SID not found.",
    // # 120-149 Preserve for other purpose
    120: "Preserve for other purpose",
    121: "Preserve for other purpose",
    122: "Preserve for other purpose",
    123: "Preserve for other purpose",
    124: "Preserve for other purpose",
    125: "Preserve for other purpose",
    126: "Preserve for other purpose",
    127: "Preserve for other purpose",
    128: "Preserve for other purpose",
    129: "Preserve for other purpose",
    130: "Preserve for other purpose",
    131: "Preserve for other purpose",
    132: "Preserve for other purpose",
    133: "Preserve for other purpose",
    134: "Preserve for other purpose",
    135: "Preserve for other purpose",
    136: "Preserve for other purpose",
    137: "Preserve for other purpose",
    138: "Preserve for other purpose",
    139: "Preserve for other purpose",
    140: "Preserve for other purpose",
    141: "Preserve for other purpose",
    142: "Preserve for other purpose",
    143: "Preserve for other purpose",
    144: "Preserve for other purpose",
    145: "Preserve for other purpose",
    146: "Preserve for other purpose",
    147: "Preserve for other purpose",
    148: "Preserve for other purpose",
    149: "Preserve for other purpose",
    150: "Request source IP does not match the login IP",
    160: "Insufficient application privilege",
    [CODE_UNKNOWN]: "Unknown error",
  },
};

export const resWithErrorCode = (apiKey: string, res: SynologyApiResponse<any>) => {
  const errorCodes = SYNOLOGY_ERROR_CODES[apiKey];
  const commonErrorCode = SYNOLOGY_ERROR_CODES[COMMON_CODES];
  const code = res?.error?.code;
  if (isUndfined(code)) return res;
  return {
    ...res,
    error: {
      ...res.error,
      reason:
        res?.error?.message || errorCodes?.[code] || commonErrorCode?.[code] || "Unknown error",
    },
  };
};
