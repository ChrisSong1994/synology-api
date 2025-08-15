import { FileStationApi, SynologyApiResponse } from "@/types";

export type BackgroundTaskListParams = {
  limit?: number;
  offset?: number;
  sort_by?: string;
  sort_direction?: "ASC" | "DESC";
  api_filter?: string[];
};

export type BackgroundTask = {
  api: string;
  crtime: number;
  finished: boolean;
  method: string;
  params: {
    accurate_progress: boolean;
    dest_folder_path: string;
    overwrite: boolean;
    path: Array<string>;
    remove_src: boolean;
  };
  path: string;
  processed_size: number;
  processing_path: string;
  progress: number;
  taskid: string;
  total: number;
  version: number;
};

export type BackgroundTaskListResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  tasks: Array<BackgroundTask>;
}>;

/**
 * get background task list
 */
export async function getBackgroundTaskList(
  params?: BackgroundTaskListParams
): Promise<BackgroundTaskListResponse> {
  const res = await this.run(FileStationApi.BackgroundTask, {
    params: {
      method: "list",
      ...(params ?? {}),
    },
  });

  return res;
}

/**
 * Delete all finished background tasks.
 */

export type ClearFinishedBackgroundTaskParams = {
  /**
   * Unique IDs of finished copy, move, delete,
   * compress or extract tasks. Specify multiple task
   * IDs by "," and around brackets. If it's not given, all
   * finished tasks are deleted.
   */
  taskid?: string;
};
export async function clearFinishedBackgroundTasks(
  params?: ClearFinishedBackgroundTaskParams
): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.BackgroundTask, {
    params: {
      method: "clear_finished",
      ...params,
    },
  });

  return res;
}
