import { useEffect, useRef} from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import spanish from '../pages/api/spanish.json'
require("@silvermine/videojs-chromecast")(videojs);
require("@silvermine/videojs-airplay")(videojs);

export default function Player() {

    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const src = "https://magicstream.ddns.net:443/magicstream/stream.m3u8"

    useEffect(() => {
      
      if (videoRef.current) {
        const video = videoRef.current;

      playerRef.current  = videojs(video, {
        controls: true,
        controlBar: {
          subsCapsButton: false
        },
        aspectRatio: '16:9',
        languages: {
          es: spanish
        },
        language: 'es',
        fluid: true,
        sources: [{ src, type: "application/x-mpegURL" }],
        techOrder: ["chromecast", "html5"],
        chromecast: {
          requestTitleFn: function() { // Not required
            return "Magic Stream";
          },
          requestSubtitleFn: function() { // Not required
            return "En Vivo";
          },
          requestCustomDataFn: function() {
            playerRef.current.volume(0.2)
          },
        },
        plugins: {
          chromecast: {
            buttonPositionIndex: 2,
            addButtonToControlBar: true
          },
          airPlay: {
            buttonPositionIndex: 2,
            addButtonToControlBar: true
          }
        }
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
    }, [videoRef])


    return (
      <video playsInline ref={videoRef} className={"video-js mk_video"} poster="../img/magickidsbg.png"/>
    )
}