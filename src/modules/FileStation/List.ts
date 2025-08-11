import { FileStationApi, SynologyApiResponse } from "@/types";
import { isUndfined } from "@/utils";

/**
 * fetch filestation list
 */
export type FileListRequest = {
  limit?: number;
  offset?: number;
  sort_by?: string;
  sort_direction?: "ASC" | "DESC";
  filetype?: "file" | "dir" | "all";
  folder_path?: string;
  additional?: Array<
    "real_path" | "size" | "owner" | "time" | "perm" | "type" | "mount_point_type"
  >;
  pattern?: string;
};

export type FileListItem = {
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

export type FileListResponse = SynologyApiResponse<{
  files: FileListItem[];
  offset: number;
  total: number;
}>;

export async function getFileList(params: FileListRequest = {}): Promise<FileListResponse> {
  const { additional = ["real_path", "size", "owner", "time"], filetype = "all" } = params;
  if (isUndfined(params.folder_path)) {
    throw new Error("folder_path is required");
  }
  const res = await this.run(FileStationApi.List, {
    params: {
      method: "list",
      ...params,
      additional: JSON.stringify(additional),
    },
  });
  return res;
}

/**
 * fetch file share list
 * */

export type FileShareListRequest = {
  limit?: number;
  offset?: number;
  sort_by?: string;
  sort_direction?: "ASC" | "DESC";
  additional?: string[];
  onlywritable?: boolean;
};

export type FileShareListResponse = SynologyApiResponse<{
  shares: FileListItem &
    {
      hybridshare_cache_status: number;
      hybridshare_pin_status: number;
    }[];
  offset: number;
  total: number;
}>;

export async function getShareFileList(
  params: FileShareListRequest = {}
): Promise<FileShareListResponse> {
  const { additional = ["real_path", "size", "owner", "time"], onlywritable = false } = params;

  const res = await this.run(FileStationApi.List, {
    params: {
      method: "list_share",
      ...params,
      additional: JSON.stringify(additional),
    },
  });
  return res;
}

/**
 * fetch file share list
 * */

export type VirtualFolderListRequest = {
  type?: "Nfs" | "cifs" | "iso";
  limit?: number;
  offset?: number;
  sort_by?: string;
  sort_direction?: "ASC" | "DESC";
  additional?: Array<
    "real_path" | "owner" | "time" | "perm" | "mount_point_type" | "volume_status"
  >;
};

export type VirtualFolderListResponse = SynologyApiResponse<{
  folders: Array<{
    path: string;
    name: string;
    additional?: {
      real_path?: string;
      owner?: Record<string, any>;
      time?: Record<string, any>;
      perm?: Record<string, any>;
      mount_point_type?: string;
      volume_status?: Record<string, any>;
    };
  }>;
  offset: number;
  total: number;
}>;

export async function getVirtualFolderList(
  params: VirtualFolderListRequest = {}
): Promise<VirtualFolderListResponse> {
  const { additional = [] } = params;

  const res = await this.run(FileStationApi.VirtualFolder, {
    params: {
      method: "list",
      ...params,
      additional: JSON.stringify(additional),
    },
  });
  return res;
}
