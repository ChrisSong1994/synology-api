import { FileStationKey, AudioStationKey } from "@/modules";
import { SynologyApiResponse } from "@/types";
import { isUndfined } from "./utils";

const CODE_SUCCESS = 0;
const CODE_UNKNOWN = 9999;

export const SYNOLOGY_ERROR_CODES = {
  [FileStationKey]: {
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
  },
  [AudioStationKey]: {},
  COMMON_CODES: {
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
  const code = res?.error?.code;
  if (isUndfined(code)) return res;
  return {
    ...res,
    error: {
      ...res.error,
      message: res?.error?.message || errorCodes?.[code] || "Unknown error",
    },
  };
};
