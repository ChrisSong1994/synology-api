# AudioStation APIs

## getInfo

获取AudioStation信息

**返回值**

:::details
```json
{
  "data": {
    "ame_status": {
      "ame_major_version": 3,
      "has_aac": false,
      "has_license": true,
      "is_aac_activated": false,
      "is_ame_broken": false,
      "is_ame_install": true,
      "need_aac_transcoding": false
    },
    "browse_personal_library": "all",
    "dsd_decode_capability": true,
    "enable_equalizer": false,
    "enable_personal_library": true,
    "enable_user_home": true,
    "has_music_share": true,
    "is_manager": true,
    "playing_queue_max": 8192,
    "privilege": {
      "playlist_edit": true,
      "remote_player": true,
      "sharing": true,
      "tag_edit": true,
      "upnp_browse": true
    },
    "remote_controller": false,
    "same_subnet": false,
    "serial_number": "18A0PEN312004",
    "settings": {
      "audio_show_virtual_library": true,
      "disable_upnp": false,
      "enable_download": false,
      "prefer_using_html5": true,
      "transcode_to_mp3": true
    },
    "sid": "zvsbB6G4dSzxaqHzkHpq-sP0et0GBPPtXxCcu2s_zEwm9KlNwnb3BKyAQawBS349svGXrdq59Hn3ueh1_DHROU",
    "support_bluetooth": false,
    "support_usb": false,
    "support_virtual_library": true,
    "transcode_capability": ["wav", "mp3"],
    "version": 5401,
    "version_string": "7.0.3-5401"
  },
  "success": true
}
```

:::

## getAlbumList

获取专辑列表

**参数**

| 名称           | 类型     | 描述                                                                                                      |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| limit          | number   | 返回结果的最大数量，默认为1000                                                            |
| offset         | number   | 跳过的结果数量，默认为0                                                              |
| library        | string   | 指定库类型，可以是'all'或'personal'，默认为'all'                                              |
| additional     | string[] | 要获取的附加信息数组，默认为['avg_rating']                                          |
| version        | number   | API版本                                                                                                      |
| filter         | string   | 过滤条件                                                                                                 |
| artist         | string   | 按艺术家名称过滤                                                                                            |
| genre          | string   | 按流派过滤                                                                                                  |
| sort_by        | string   | 排序字段，可以是'time'、'random'、'year'、'name'、'display_artist'或'avg_rating'，默认为'name' |
| sort_direction | string   | 排序方向，可以是'ASC'或'DESC'，默认为'ASC'                                                        |

**返回值**

:::details

```json
{
  "data": {
    "albums": [
      {
        "additional": {
          "avg_rating": {
            "rating": 0
          }
        },
        "album_artist": "",
        "artist": "",
        "display_artist": "",
        "name": "Eminem",
        "year": 0
      },

      {
        "additional": {
          "avg_rating": {
            "rating": 2
          }
        },
        "album_artist": "陈奕迅",
        "artist": "",
        "display_artist": "陈奕迅",
        "name": "",
        "year": 520
      },
      {
        "additional": {
          "avg_rating": {
            "rating": 0
          }
        },
        "album_artist": "",
        "artist": "",
        "display_artist": "",
        "name": "八度空间",
        "year": 0
      },

      {
        "additional": {
          "avg_rating": {
            "rating": 1
          }
        },
        "album_artist": "",
        "artist": "",
        "display_artist": "",
        "name": "跨时代",
        "year": 0
      },
      {
        "additional": {
          "avg_rating": {
            "rating": 0
          }
        },
        "album_artist": "周杰伦",
        "artist": "",
        "display_artist": "周杰伦",
        "name": "魔杰座",
        "year": 2008
      },

      {
        "additional": {
          "avg_rating": {
            "rating": 3.5
          }
        },
        "album_artist": "",
        "artist": "",
        "display_artist": "",
        "name": "叶惠美",
        "year": 0
      },
      {
        "additional": {
          "avg_rating": {
            "rating": 4
          }
        },
        "album_artist": "",
        "artist": "",
        "display_artist": "",
        "name": "周杰伦",
        "year": 0
      }
    ],
    "offset": 0,
    "total": 14
  },
  "success": true
}
```

:::

## getArtistList

获取艺术家列表

**参数**

| 名称           | 类型                | 描述     |
| -------------- | ------------------- | --------------- |
| limit          | number              | 限制数量           |
| offset         | number              | 偏移量          |
| library        | "all" \| "personal" | 库类型    |
| artist         | string              | 艺术家名称     |
| additional     | string[]            | 附加信息 |
| filter         | string              | 过滤器          |
| genre          | string              | 流派           |
| sort_by        | "name" \| "year"    | 排序字段         |
| sort_direction | "ASC" \| "DESC"     | 排序方向  |

**返回值**

:::details

```json
{
  "data": {
    "artists": [
      {
        "additional": {
          "avg_rating": {
            "rating": 2
          }
        },
        "name": "陈奕迅"
      },
      {
        "additional": {
          "avg_rating": {
            "rating": 1
          }
        },
        "name": "周杰伦"
      }
    ],
    "offset": 0,
    "total": 2
  },
  "success": true
}
```

:::

## getPlaylist

获取播放列表

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| limit | number | 限制数量 |
| offset | number | 偏移量 |
| library | "all" \| "personal" | 库类型 |

**返回值**

:::details

```json
{
  "data": {
    "offset": 0,
    "playlists": [
      {
        "id": "playlist_personal_normal/__SYNO_AUDIO_SHARED_SONGS__",
        "library": "personal",
        "name": "__SYNO_AUDIO_SHARED_SONGS__",
        "sharing_status": "none",
        "type": "normal"
      },
      {
        "id": "playlist_personal_normal/112",
        "library": "personal",
        "name": "playlist_0ib71x",
        "path": "/homes/songjun/music/playlists",
        "sharing_status": "none",
        "type": "normal"
      }
    ],
    "total": 2
  },
  "success": true
}
```

:::

## createPlaylist

创建新的播放列表

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| name | string | 播放列表名称 |
| library | "all" \| "personal" | 库类型 |

**返回值**

:::details

```json
{
  "data": {
    "id": "playlist_personal_normal/113"
  },
  "success": true
}
```

:::

## deletePlaylist

删除播放列表

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| id | string | 播放列表ID |

**返回值**

:::details

```json
{
  "data": null,
  "success": true
}
```

:::

## getSongList

获取歌曲列表

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| limit | number | 返回的歌曲数量，默认为100 |
| offset | number | 跳过的歌曲数量，默认为0 |
| additional | Array<"song_tag" \| "song_audio" \| "song_rating"> | 要返回的附加字段数组，默认为空数组 |
| rating_filter | number | 返回歌曲的最低评分，默认为0 |
| album_artist | string | 按专辑艺术家过滤，默认为空字符串 |
| album | string | 按专辑过滤，默认为空字符串 |
| artist | string | 按艺术家过滤，默认为空字符串 |
| genre | string | 按流派过滤，默认为空字符串 |
| sort_by | "title" \| "artist" \| "random" \| "name" | 排序字段，默认为"title" |
| sort_direction | "ASC" \| "DESC" | 排序方向，默认为"ASC" |

**返回值**

:::details
```json
{
  "data": {
    "offset": 0,
    "songs": [
      {
        "additional": {
          "song_audio": {
            "bitrate": 975000,
            "channel": 2,
            "codec": "flac",
            "container": "flac",
            "duration": 251,
            "filesize": 30642443,
            "frequency": 44100
          },
          "song_rating": {
            "rating": 5
          },
          "song_tag": {
            "album": "周杰伦",
            "album_artist": "",
            "artist": "",
            "comment": "",
            "composer": "",
            "disc": 0,
            "genre": "",
            "track": 0,
            "year": 0
          }
        },
        "id": "music_508",
        "path": "/music/周杰伦/最后的战役 .flac",
        "title": "最后的战役",
        "type": "file"
      },
      {
        "additional": {
          "song_audio": {
            "bitrate": 975000,
            "channel": 2,
            "codec": "flac",
            "container": "flac",
            "duration": 251,
            "filesize": 30642443,
            "frequency": 44100
          },
          "song_rating": {
            "rating": 0
          },
          "song_tag": {
            "album": "八度空间",
            "album_artist": "",
            "artist": "",
            "comment": "",
            "composer": "",
            "disc": 0,
            "genre": "",
            "track": 0,
            "year": 0
          }
        },
        "id": "music_323",
        "path": "/music/周杰伦/八度空间/周杰伦 - 最后 的 战 役 .flac",
        "title": "周杰伦 - 最后 的 战 役",
        "type": "file"
      }
    ],
    "total": 148
  },
  "success": true
}
```
:::