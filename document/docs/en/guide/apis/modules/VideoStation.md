# VideoStation APIs

## getInfo

Get VideoStation info

**Returns**

:::details

```json
{
  "data": {
    "ame_status": {
      "ame_major_version": 3,
      "has_aac": false,
      "has_hevc": true,
      "has_license": true,
      "is_aac_activated": false,
      "is_ame_broken": false,
      "is_ame_install": true,
      "is_ame_v2": false,
      "is_ame_v3": true
    },
    "is_dtv_enabled": false,
    "is_manager": true,
    "is_subtitle_search_enabled": true,
    "need_aac": false,
    "need_hevc": false,
    "privilege": {
      "dtv": true,
      "offline_conversion": true,
      "renderer": true,
      "sharing": true
    },
    "timezone": "Beijing",
    "timezone_offset": 28800,
    "transcoding_capability": {
      "dtv_transcode": true,
      "fhd_hardware_transcode": true,
      "hardware_transcode": true,
      "remux": true,
      "software_transcode": true,
      "transcode": true
    },
    "version": "2512",
    "version_string": "3.0.7-2512"
  },
  "success": true
}
```

:::

## getMoiveInfo

Get Movie info

**Parameters**
| Name | Type | Description |
| ---- | ---- | ----------- |
| id | number[] | Movie id list |
| additional | string[] | additional info |

**Returns**

:::details

```json
{
  "data": {
    "movie": [
      {
        "additional": {
          "file": [
            {
              "audio_bitrate": 256000,
              "audio_codec": "aac_he",
              "channel": 2,
              "container_type": "mp4",
              "display_x": 1920,
              "display_y": 1032,
              "duration": "1:49:25",
              "ff_video_profile": 100,
              "filesize": 3390057404,
              "frame_bitrate": 4130848,
              "frame_rate_den": 1,
              "frame_rate_num": 24,
              "frequency": 44100,
              "id": 4662,
              "path": "/volume1/video/电影/影片/棋王.1991.HD1080p.国粤双语中字.mp4",
              "position": 4165,
              "resolutionx": 1920,
              "resolutiony": 1032,
              "rotation": 0,
              "sharepath": "/video/电影/影片/棋王.1991.HD1080p.国粤双语中字.mp4",
              "video_bitrate": 3610754,
              "video_codec": "h264",
              "video_level": 40,
              "video_profile": 3,
              "watched_ratio": 0.6344249809596344
            }
          ],
          "watched_ratio": 0
        },
        "certificate": "",
        "create_time": 1685464372,
        "id": 790,
        "last_watched": 1753048657,
        "library_id": 0,
        "mapper_id": 8317,
        "original_available": "1991",
        "rating": -1,
        "sort_title": "棋王",
        "tagline": "",
        "title": "棋王"
      }
    ]
  },
  "success": true
}
```

:::

## getStreamUrl

get movie stream url

**Parameters**
| Name | Type | Description |
| ---- | ---- | ----------- |
| id | number | Movie id |

**Returns**

:::details

```json
{
  "data":  "http://192.168.1.100:5000/entry.cgi/1.mp4?api=SYNO.VideoStation2.Streaming&method=stream&format=raw&version=2&_sid=1234567890&stream_id=%221753048657%22&tid=%221234567890%22",
  "success": true
}
```

:::

## getAcrossLibrary

Get across library

**Parameters**
| Name | Type | Description |
| --- | --- | --- |
| policy | string | |
| limit | number | |
| additional | string[] | |

**Returns**

:::details

```json
{
  "data": {
    "movie": [
      {
        "additional": {
          "file": [
            {
              "audio_bitrate": 256000,
              "audio_codec": "aac_he",
              "channel": 2,
              "container_type": "mp4",
              "display_x": 1920,
              "display_y": 1080,
              "duration": "2:03:18",
              "ff_video_profile": 100,
              "filesize": 4959289164,
              "frame_bitrate": 5362600,
              "frame_rate_den": 1001,
              "frame_rate_num": 24000,
              "frequency": 48000,
              "id": 2069,
              "path": "/volume1/video/电影/影片/战场上的快乐圣诞.1983.BD1080p.中英双字.mp4",
              "position": 0,
              "resolutionx": 1920,
              "resolutiony": 1080,
              "rotation": 0,
              "sharepath": "/video/电影/影片/战场上的快乐圣诞.1983.BD1080p.中英双字.mp4",
              "video_bitrate": 5099597,
              "video_codec": "h264",
              "video_level": 40,
              "video_profile": 3,
              "watched_ratio": 0
            }
          ],
          "watched_ratio": 0
        },
        "certificate": "",
        "create_time": 1680907476,
        "id": 712,
        "last_watched": 0,
        "library_id": 0,
        "mapper_id": 3133,
        "original_available": "1983",
        "rating": -1,
        "sort_title": "战场上的快乐圣诞",
        "tagline": "",
        "title": "战场上的快乐圣诞"
      }
    ]
  },
  "success": true
}
```
:::
