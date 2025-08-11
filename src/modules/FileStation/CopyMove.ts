import { FileStationApi, SynologyApiResponse } from "@/types";

/**
 * Copy/move file(s)/folder(s).
 *   This is a non-blocking API. You need to start to copy/move files with start method. Then, you should poll
 *   requests with status method to get the progress status, or make a request with stop method to cancel the
 *  operation
 *
 */

export type CopyMoveParams = {
  path: string;
  dest_folder_path: string;
  overwrite?: boolean;
  remove_src?: boolean; // true : move filess/folders. false : copy files/folders
  search_taskid?: string;
  accurate_progress?: boolean;
};

export async function startCopyMove(
  params: CopyMoveParams
): Promise<SynologyApiResponse<{ taskid: string }>> {
  const res = await this.run(FileStationApi.CopyMove, {
    params: {
      method: "start",
      ...params,
    },
  });

  return res;
}


export type CopyMoveStatusResponse = SynologyApiResponse<{
  finished: boolean;
  path: string;
  processed_size: number;
  progress: number;
  total: number;
  dest_folder_path: string;
}>;
export async function getCopyMoveStatus(params: {
  taskid: string;
}): Promise<CopyMoveStatusResponse> {
  const res = await this.run(FileStationApi.CopyMove, {
    params: {
      method: "status",
      taskid: params.taskid,
    }
  })

  return res;
}


export async function stopCopyMove(params: {
  taskid: string;
}): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.CopyMove, {
    params: {
      method: "stop",
      taskid: params.taskid,
    }
  })

  return res;
}