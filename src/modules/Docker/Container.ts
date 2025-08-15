import { DockerApi, SynologyApiResponse } from "@/types";

export type DockerContainerListParams = {
  type: string;
  limit: number;
  offset: number;
};

export type DockerContainerListResponse = SynologyApiResponse<{
  containers: Array<{
    State: {
      Dead: boolean;
      Error: string;
      ExitCode: number;
      FinishedAt: string;
      FinishedTs: number;
      OOMKilled: boolean;
      Paused: boolean;
      Pid: number;
      Restarting: boolean;
      Running: boolean;
      StartedAt: string;
      StartedTs: number;
      Status: string;
    };
    cmd: string;
    created: number;
    enable_service_portal: boolean;
    exporting: boolean;
    finish_time: number;
    id: string;
    image: string;
    is_ddsm: boolean;
    is_package: boolean;
    name: string;
    services: any;
    status: string;
    up_status: string;
    up_time: number;
  }>;
  limit: number;
  offset: number;
  total: number;
}>;

export async function getContainerList(
  params?: DockerContainerListParams
): Promise<DockerContainerListResponse> {
  const { type = "all", limit = -1, offset = 0 } = params || {};
  const res = await this.run(DockerApi.Container, {
    params: {
      method: "list",
      type,
      limit,
      offset,
    },
  });
  return res;
}
