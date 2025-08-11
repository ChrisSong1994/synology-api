import { FileStationApi, SynologyApiResponse } from "@/types";

export type StartDirSizeCalcParams = {
  path: string;
};

export type StartDirSizeCalcResponse = SynologyApiResponse<{
  taskid: string;
}>;
export async function startDirSizeCalc(
  params: StartDirSizeCalcParams
): Promise<StartDirSizeCalcResponse> {
  const res = await this.run(FileStationApi.DirSize, {
    params: {
      method: "start",
      ...params,
    },
  });
  return res;
}

export async function stopDirSizeCalc(params: {
  taskid: string;
}): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.DirSize, {
    params: {
      method: "stop",
      ...params,
    },
  });
  return res;
}

export type DirSizeCalcStatusResponse = SynologyApiResponse<{
  finished: boolean;
  num_dir: number;
  num_file: number;
  total_size: number;
}>;

export async function getDirSizeCalcStatus(params: {
  taskid: string;
}): Promise<DirSizeCalcStatusResponse> {
  const res = await this.run(FileStationApi.DirSize, {
    params: {
      method: "status",
      ...params,
    },
  });
  return res;
}
