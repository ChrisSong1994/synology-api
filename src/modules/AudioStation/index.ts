import { getSongList ,setSongRating} from "./Song";
import { getAlbumList } from "./Album";
import { getArtistList } from "./Artist";
import { getPlaylist, createPlaylist, deletePlaylist } from "./Playlist";
import { getFolderList } from "./Folder";
import { getLyrics, searchLyrics } from "./Lyrics";
import { getInfo } from "./Info";

export const METHODS = {
  getSongList,
  setSongRating,
  getAlbumList,
  getArtistList,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  getFolderList,
  getLyrics,
  searchLyrics,
  getInfo,
};

// name space
export const SPELLING_KEY = "AudioStation";
export const SIMPLIFY_KEY = "as";

// type
export type TMethods = typeof METHODS;
