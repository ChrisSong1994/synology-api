# AudioStation APIs

## getInfo

Get AudioStation info

**Returns**

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

Get Album List

**Parameters**

| Name           | Type     | Description                                                                                                      |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| limit          | number   | Maximum number of results to return, defaults to 1000                                                            |
| offset         | number   | Offset of the first result to return, defaults to 0                                                              |
| library        | string   | Specify library type, can be 'all' or 'personal', defaults to 'all'                                              |
| additional     | string[] | Array of additional information to retrieve, defaults to ['avg_rating']                                          |
| version        | number   | API version                                                                                                      |
| filter         | string   | Filter condition                                                                                                 |
| artist         | string   | Filter by artist name                                                                                            |
| genre          | string   | Filter by genre                                                                                                  |
| sort_by        | string   | Field to sort by, can be 'time', 'random', 'year', 'name', 'display_artist', or 'avg_rating', defaults to 'name' |
| sort_direction | string   | Sort direction, can be 'ASC' or 'DESC', defaults to 'ASC'                                                        |

**Returns**

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

Get artist list

**Parameters**

| Name           | Type                | Description     |
| -------------- | ------------------- | --------------- |
| limit          | number              | limit           |
| offset         | number              | offset          |
| library        | "all" \| "personal" | library type    |
| artist         | string              | artist name     |
| additional     | string[]            | additional info |
| filter         | string              | filter          |
| genre          | string              | genre           |
| sort_by        | "name" \| "year"    | sort by         |
| sort_direction | "ASC" \| "DESC"     | sort direction  |

**Returns**

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

get playlist

**Parameters**
| Name | Type | Description |
| ---- | ---- | ----------- |
| limit | number | limit |
| offset | number | offset |
| library | "all" \| "personal" | library type |

**Returns**

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

create a new playlist

**Parameters**
| Name | Type | Description |
| ---- | ---- | ----------- |
| name | string | playlist name |
| library | "all" \| "personal" | library type |

**Returns**

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

delete a playlist

**Parameters**`
| Name | Type | Description |
| ---- | ---- | ----------- |
| id | string | playlist id |

**Returns**

:::details

```json
{
  "data": null,
  "success": true
}
```

:::



## getSongList
get song list

**Parameters**
| Name | Type | Description |
| ---- | ---- | ----------- |
| limit | number | The number of songs to return. Defaults to 100. |
| offset | number | The number of songs to skip. Defaults to 0. |
| additional | Array<"song_tag" | "song_audio" | "song_rating"> | An array of additional fields to return. Defaults to an empty array. |
| rating_filter | number | The minimum rating of songs to return. Defaults to 0. |
| album_artist | string | The album artist to filter by. Defaults to an empty string. |
| album | string | The album to filter by. Defaults to an empty string. |
| artist | string | The artist to filter by. Defaults to an empty string. |
| genre | string | The genre to filter by. Defaults to an empty string. |
| sort_by | "title" \| "artist" \| "random" \| "name" | The field to sort by. Defaults to "title". |
| sort_direction | "ASC" \| "DESC" | The direction to sort by. Defaults to "ASC". |

**Returns**

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