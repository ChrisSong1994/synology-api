export type AudioStationSongListRequest = {
  limit: number;
  offset: number;
  method: "list";
  library: "all";
  api: "SYNO.AudioStation.Song";
  additional: string;
  version: number;
  sort_by?: string;
  sort_direction?: string;
};

export type AudioStationSongListResponse = {
  offset: number;
  total: number;
  songs: {
    [key: string]: any;
  };
};
