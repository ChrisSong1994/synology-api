import { FileStationApi, SynologyApiResponse } from "@/types";

export type DeleteFileParams = {
  /**
   * One or more copied/moved
file/folder path(s) starting with a
shared folder, separated by
commas "," and around brackets.
  */
  path: string | string[];
  /**
 *  true : calculate the
progress by each moved/copied file
within sub-folder. false : calculate
the progress by files which you give
in path parameters. This calculates
the progr
*/
  accurate_progress?: boolean;
  /**
 *  true : delete
recursively. false : delete
non-empty folder.
 */
  recursive?: boolean;
  /**
   * A unique ID for the search
task which is obtained from start
method. It's used to delete the file in
the search result
  */
  search_taskid?: string;
};

export type DeleteFileResponse = SynologyApiResponse<{
  taskid: string;
}>;
export async function startDeleteFile(params: DeleteFileParams): Promise<DeleteFileResponse> {
  const { accurate_progress = true, recursive = true, path } = params;
  const paths = Array.isArray(path) ? path : [path];

  const res = await this.run(FileStationApi.Delete, {
    params: {
      method: "start",
      path: JSON.stringify(paths),
      accurate_progress,
      recursive,
      search_taskid: params?.search_taskid,
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
