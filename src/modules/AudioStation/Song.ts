import { AudioStationApi, SynologyApiResponse } from "@/types";

/**
 * fetch song list
 * */

export type AudioStationSongListParams = {
  limit?: number;
  offset?: number;
  library?: "all" | "personal";
  additional?: Array<"song_tag" | "song_audio" | "song_rating">;
  rating_filter?: number;
  album_artist?: string;
  album?: string;
  artist?: string;
  genre?: string;
  sort_by?: "title" | "artist" | "random" | "name";
  sort_direction?: "ASC" | "DESC";
};

export type AudioStationSongListResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  songs: {
    [key: string]: any;
  };
}>;

export async function getSongList(
  params: AudioStationSongListParams
): Promise<AudioStationSongListResponse> {
  const {
    additional = ["song_tag", "song_audio", "song_rating"],
    library = "all",
    limit = 1000,
    offset = 0,
    sort_by = "title",
    sort_direction = "DESC",
    ...extraParams
  } = params;

  const res = await this.run(AudioStationApi.Song, {
    params: {
      method: "list",
      limit: limit,
      offset: offset,
      library: library,
      sort_by: sort_by,
      sort_direction: sort_direction,
      additional: additional.join(","),
      ...extraParams,
    },
  });
  return res;
}

/**
 * set song rating
 */

export type AudioStationSetSongRatingParams = {
  id: string;
  rating: number;
};
export async function setSongRating(
  params: AudioStationSetSongRatingParams
): Promise<SynologyApiResponse<any>> {
  const res = await this.run(AudioStationApi.Song, {
    params: {
      method: "setrating",
      id: params.id,
      rating: params.rating,
    },
  });
  return res;
}
