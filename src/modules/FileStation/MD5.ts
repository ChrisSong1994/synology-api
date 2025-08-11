import { FileStationApi, SynologyApiResponse } from "@/types";

export async function startMD5Calc(params: { file_path: string }): Promise<
  SynologyApiResponse<{
    taskid: string;
  }>
> {
  const res = await this.run(FileStationApi.MD5, {
    params: {
      method: "start",
      file_path: params.file_path,
    },
  });
  return res;
}

export async function stopMD5Calc(params: { taskid: string }): Promise<SynologyApiResponse<any>> {
  const { taskid } = params;
  const res = await this.run(FileStationApi.MD5, {
    params: {
      method: "stop",
      taskid,
    },
  });
  return res;
}
export async function getMD5CalcStatus(params: { taskid: string }): Promise<
  SynologyApiResponse<{
    finished: boolean;
    md5: string;
  }>
> {
  const res = await this.run(FileStationApi.MD5, {
    params: {
      method: "status",
      taskid: params.taskid,
    },
  });
  return res;
}
