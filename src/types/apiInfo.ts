/**
 * api info
 * */
export enum SynoApi {
  Auth = "SYNO.API.Auth",
  Info = "SYNO.API.Info",
  OTP = "SYNO.API.OTP",
  AuthKey = "SYNO.API.Auth.Key",
  Encryption = "SYNO.API.Encryption",
}

/**
 * AudioStation
 * */
export enum AudioStationApi {
  Song = "SYNO.AudioStation.Song",
  Album = "SYNO.AudioStation.Album",
  Artist = "SYNO.AudioStation.Artist",
  Search = "SYNO.AudioStation.Search",
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
  Delete = "SYNO.FileStation.Delete",
  Info = "SYNO.FileStation.Info",
  Favorite = "SYNO.FileStation.Favorite",
  Search = "SYNO.FileStation.Search",
  List = "SYNO.FileStation.List",
  Share = "SYNO.FileStation.Share",
  Upload = "SYNO.FileStation.Upload",
  Download = "SYNO.FileStation.Download",
  VirtualFolder = "SYNO.FileStation.VirtualFolder",
  Thumb = "SYNO.FileStation.Thumb",
  DirSize = "SYNO.FileStation.DirSize",
  MD5 = "SYNO.FileStation.MD5",
  CheckPermission = "SYNO.FileStation.CheckPermission", 
  Sharing = "SYNO.FileStation.Sharing",
  CreateFolder = "SYNO.FileStation.CreateFolder",
  Rename = "SYNO.FileStation.Rename",
  CopyMove = "SYNO.FileStation.CopyMove",
  Extract = "SYNO.FileStation.Extract",
  Compress = "SYNO.FileStation.Compress",
  BackgroundTask = "SYNO.FileStation.BackgroundTask",
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

/**
 * core api
 */
export enum CoreApi {
  /**
   * package api
   */
  Package = "SYNO.Core.Package",
  PackageControl = "SYNO.Core.Package.Control",

  /**
   *  System api
   */
  System = "SYNO.Core.System",
  SystemProcess = "SYNO.Core.System.Process",
  SystemStatus = "SYNO.Core.System.Status",
  SystemUtilization = "SYNO.Core.System.Utilization",
  SystemHealth = "SYNO.Core.System.SystemHealth",

  /**
   * User api
   * */
  User = "SYNO.Core.User",
  Group = "SYNO.Core.User.Group",
  PasswordPolicy = "SYNO.Core.User.PasswordPolicy",
  PasswordExpiry = "SYNO.Core.User.PasswordExpiry",
  PasswordConfirm = "SYNO.Core.User.PasswordConfirm",
  UsernamePolicy = "SYNO.Core.User.UsernamePolicy",
}

/**
 * docker api
 */
export enum DockerApi {
  Container = "SYNO.Docker.Container",
  Image = "SYNO.Docker.Image",
  Network = "SYNO.Docker.Network",
  Migrate = "SYNO.Docker.Migrate",
}
