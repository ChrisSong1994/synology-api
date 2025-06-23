import { SynologyApiResponse } from "@/types";

export type AudioStationSongListRequest = {
  limit?: number;
  offset?: number;
  method?: string;
  library?: string;
  additional?: string;
  version?: number;
  sort_by?: string;
  sort_direction?: string;
};

export type AudioStationSongListResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  songs: {
    [key: string]: any;
  };
}>;
