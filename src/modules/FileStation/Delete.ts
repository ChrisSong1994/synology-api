import { FileStationApi, SynologyApiResponse } from "@/types";

export type DeleteFileParams = {
  path: string | string[];
  accurate_progress?: boolean;
};

export type DeleteFileResponse = SynologyApiResponse<{
  taskid: string;
}>;
export async function startDeleteFile(params: DeleteFileParams): Promise<DeleteFileResponse> {
  const { accurate_progress = true, path } = params;
  const paths = Array.isArray(path) ? path : [path];

  const res = await this.run(FileStationApi.Delete, {
    params: {
      method: "start",
      path: JSON.stringify(paths),
      accurate_progress,
    },
  });
  return res;
}

export async function stopDeleteFile(params: {
  taskid: string;
}): Promise<SynologyApiResponse<any>> {
  const { taskid } = params;
  const res = await this.run(FileStationApi.Delete, {
    params: {
      method: "stop",
      taskid,
    },
  });
  return res;
}

export type DeleteFileStatusResponse = SynologyApiResponse<{
  finished: boolean;
  found_dir_num: number;
  found_file_num: number;
  found_file_size: number;
  has_dir: boolean;
  path: string;
  processed_num: number;
  processing_path: string;
  progress: number;
  total: number;
}>;
export async function getDeleteFileStatus(params: { taskid: string }): Promise<DeleteFileResponse> {
  const { taskid } = params;
  const res = await this.run(FileStationApi.Delete, {
    params: {
      method: "status",
      taskid,
    },
  });
  return res;
}
