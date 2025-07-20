/**
 * api info
 * */
export enum SynologyApiInfo {
  Auth = "SYNO.API.Auth",
  Info = "SYNO.API.Info",
  OTP = "SYNO.API.OTP",
  AuthKey = "SYNO.API.Auth.Key",
}

/**
 * AudioStation
 * */
export enum AudioStationApi {
  Song = "SYNO.AudioStation.Song",
  Album = "SYNO.AudioStation.Album",
  Artist = "SYNO.AudioStation.Artist",
  Genre = "SYNO.AudioStation.Genre",
  Playlist = "SYNO.AudioStation.Playlist",
  Folder = "SYNO.AudioStation.Folder",
  Cover = "SYNO.AudioStation.Cover",
  Download = "SYNO.AudioStation.Download",
  Info = "SYNO.AudioStation.Info",
  Lyrics = "SYNO.AudioStation.Lyrics",
  LyricsSearch = "SYNO.AudioStation.LyricsSearch",
  Radio = "SYNO.AudioStation.Radio",
  Stream = "SYNO.AudioStation.Stream",
  Tag = "SYNO.AudioStation.Tag",
}

/**
 * FileStation API
 */
export enum FileStationApi {
  File = "SYNO.FileStation.File",
  Info = "SYNO.FileStation.Info",
  List = "SYNO.FileStation.List",
  Quota = "SYNO.FileStation.Quota",
  Share = "SYNO.FileStation.Share",
  Thumb = "SYNO.FileStation.Thumb",
  Upload = "SYNO.FileStation.Upload",
}

/**
 * VideoStation API
 */
export enum VideoStationApi {
  Info = "SYNO.VideoStation2.Info",
  Library = "SYNO.VideoStation2.Library",
  AcrossLibrary = "SYNO.VideoStation2.AcrossLibrary",
  HomeVideo = "SYNO.VideoStation2.HomeVideo",
  File = "SYNO.VideoStation2.File",
  Streaming = "SYNO.VideoStation2.Streaming",
  Movie = "SYNO.VideoStation2.Movie",
}
