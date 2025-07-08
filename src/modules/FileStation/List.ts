import { FileStationApi, SynologyApiResponse } from "@/types";
import { isUndfined } from "@/utils";

/**
 * fetch filestation list
 */
export type FileStationFileListRequest = {
  limit?: number;
  offset?: number;
  sort_by?: string;
  sort_direction?: "ASC" | "DESC";
  version?: number;
  filetype?: string;
  folder_path?: string;
  additional?: string[];
};

export type FileStationFileListItem = {
  isdir: boolean;
  name: string;
  path: string;
  additional?: {
    type: string;
    size: number;
    time: {
      atime: number;
      mtime: number;
      ctime: number;
      btime: number;
    };
    real_path: string;
    mount_point_type: string;
    indexed: boolean;
    description: Record<string, any>;
  };
};

export type FileStationFileListResponse = SynologyApiResponse<{
  files: FileStationFileListItem[];
  offset: number;
  total: number;
}>;

export async function getFileList(params: FileStationFileListRequest = {}) {
  const { additional = ["real_path", "size", "owner", "time"], filetype = "all" } = params;
  if (isUndfined(params.folder_path)) {
    throw new Error("folder_path is required");
  }
  const res = await this.run(FileStationApi.List, {
    params: {
      method: "list",
      additional: `[${additional.join(",")}]`,
      filetype: filetype,
      folder_path: params.folder_path,
      ...params,
    },
  });
  return res.data as FileStationFileListResponse;
}

/**
 * fetch file share list
 * */

export type FileStationFileShareListRequest = {
  limit?: number;
  offset?: number;
  sort_by?: string;
  sort_direction?: "ASC" | "DESC";
  additional?: string[];
  onlywritable?: boolean;
};

export type FileStationFileShareListResponse = SynologyApiResponse<{
  shares: FileStationFileListItem &
    {
      hybridshare_cache_status: number;
      hybridshare_pin_status: number;
    }[];
  offset: number;
  total: number;
}>;

export async function getFileListShare(params: FileStationFileShareListRequest = {}) {
  const { additional = ["real_path", "size", "owner", "time"], onlywritable = false } = params;

  const res = await this.run(FileStationApi.List, {
    params: {
      method: "list_share",
      additional: `[${additional.join(",")}]`,
      onlywritable: onlywritable,
      ...params,
    },
  });
  return res.data as FileStationFileShareListResponse;
}
