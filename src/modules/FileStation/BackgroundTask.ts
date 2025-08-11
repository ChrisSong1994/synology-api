import { FileStationApi, SynologyApiResponse } from "@/types";

export type BackgroundTaskListParams = {
  is_list_sharemove?: boolean;
  is_vfs?: boolean;
  bkg_info?: boolean;
};

export type BackgroundTaskListResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  tasks: Array<any>;  // TODO
}>;

/**
 * get background task list
*/
export async function getBackgroundTaskList(
  params?: BackgroundTaskListParams
): Promise<BackgroundTaskListResponse> {
  const { is_list_sharemove = true, is_vfs = true, bkg_info = true } = params || {};
  const res = await this.run(FileStationApi.BackgroundTask, {
    params: {
      method: "list",
      is_list_sharemove,
      is_vfs,
      bkg_info,
    },
  });

  return res;
}

/**
 * Delete all finished background tasks.
*/

export type ClearBackgroundTaskParams = {
  /**
   * Unique IDs of finished copy, move, delete,
* compress or extract tasks. Specify multiple task
* IDs by "," and around brackets. If it's not given, all
* finished tasks are deleted.
   */
  taskid?: string; 
}
export async function clearFinishedBackgroundTasks(params?: ClearBackgroundTaskParams): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.BackgroundTask, {
    params: {
      method: "clear_finished",
      ...params,
    },
  });

  return res;
}
