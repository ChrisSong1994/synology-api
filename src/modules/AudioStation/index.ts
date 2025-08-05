import { getSongList, setSongRating } from "./Song";
import { getAlbumList } from "./Album";
import { getArtistList } from "./Artist";
import { getPlaylist, createPlaylist, deletePlaylist } from "./Playlist";
import { getFolderList } from "./Folder";
import { getLyrics, searchLyrics } from "./Lyrics";
import { getInfo } from "./Info";

// methods
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
export const KEY = "AudioStation";
export const ALIAS_KEY = "as";

export enum EnumKeys {
  AudioStation = "AudioStation",
  as = "as",
}

// type
export type TMethods = typeof METHODS;
