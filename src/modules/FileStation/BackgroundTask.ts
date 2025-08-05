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
  const res = await this.run(FileStationApi.List, {
    params: {
      method: "list",
      is_list_sharemove,
      is_vfs,
      bkg_info,
    },
  });

  return res;
}
