import { FileStationApi, SynologyApiResponse } from "@/types";
import { FileListItem } from "./List";

export type StartSearchParams = {
  folder_path: string;
  filetype?: "file" | "dir" | "all";
  recursive?: boolean;
  pattern: string; //  pattern to search.
  search_content: boolean;
  search_type: string; // simple | content
};

export type StartSearchResponse = SynologyApiResponse<{
  has_not_index_share: boolean;
  taskid: string;
}>;
export async function startSearch(params: StartSearchParams): Promise<StartSearchResponse> {
  const { recursive = true, search_content = false, search_type = "simple" } = params;

  return await this.run(FileStationApi.Search, {
    params: {
      method: "start",
      recursive: recursive,
      search_content: search_content,
      search_type: search_type,
      ...params,
    },
  });
}

export async function stopSearch(params: { taskid: string }): Promise<SynologyApiResponse<any>> {
  return await this.run(FileStationApi.Search, {
    params: {
      method: "stop",
      ...params,
    },
  });
}

export type SearchListParams = {
  taskid: string;
  filetype?: "file" | "dir" | "all";
  limit?: number;
  offset?: number;
  additional?: string[];
};

export type SearchListResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  finished: boolean;
  files: Array<FileListItem>;
}>;
export async function getSearchList(params: SearchListParams): Promise<SearchListResponse> {
  const {
    taskid,
    filetype,
    limit = 1000,
    offset = 0,
    additional = ["real_path", "size", "owner", "time", "perm", "type"],
  } = params;
  const res = await this.run(FileStationApi.Search, {
    params: {
      method: "list",
      taskid,
      filetype,
      limit,
      offset,
      ...params,
      additional: JSON.stringify(additional),
    },
  });

  return res;
}

/**
 * Delete search temporary database(s).
 * @param taskid - Unique ID(s) for the search task which are
obtained from start method.
*/
export async function cleanSearch(params: { taskid: string }): Promise<SynologyApiResponse<any>> {
  return await this.run(FileStationApi.Search, {
    params: {
      method: "clean",
      ...params,
    },
  });
}
