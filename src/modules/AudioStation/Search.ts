import { AudioStationApi, SynologyApiResponse } from "@/types";

export type AudioStationSearchListParams = {
  limit?: number;
  library?: "all" | "personal";
  additional?: Array<"song_tag" | "song_audio" | "song_rating">;
  keyword?: string;
  sort_by?: "title";
  sort_direction?: "ASC" | "DESC";
};

export type AudioStationSearchListResponse = SynologyApiResponse<{
  albumTotal: number;
  albums: Array<{
    album_artist: string;
    artist: string;
    display_artist: string;
    name: string;
    year: number;
  }>;
  artistTotal: number;
  artists: Array<{
    name: string;
  }>;
  songTotal: number;
  songs: Array<{
    additional: {
      song_audio: {
        bitrate: number;
        channel: number;
        codec: string;
        container: string;
        duration: number;
        filesize: number;
        frequency: number;
      };
      song_tag: {
        album: string;
        album_artist: string;
        artist: string;
        comment: string;
        composer: string;
        disc: number;
        genre: string;
        track: number;
        year: number;
      };
    };
    id: string;
    path: string;
    title: string;
    type: string;
  }>;
}>;

export async function getArtistList(
  params: AudioStationSearchListParams
): Promise<AudioStationSearchListResponse> {
  const {
    additional = ["song_tag", "song_audio", "song_rating"],
    library = "all",
    limit = 10,
    sort_by = "title",
    sort_direction = "ASC",
    keyword = "",
    ...extraParams
  } = params;
  const res = await this.run(AudioStationApi.Search, {
    params: {
      method: "list",
      limit: limit,
      keyword: keyword,
      library: library,
      sort_by: sort_by,
      sort_direction: sort_direction,
      additional: additional.join(","),
      ...extraParams,
    },
  });
  return res;
}
