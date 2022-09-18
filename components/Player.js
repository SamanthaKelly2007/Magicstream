import { useCallback, useState, useEffect } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import spanish from '../pages/api/spanish.json'

export default function Player() {
    const [videoEl, setVideoEl] = useState(null);
    const videoRef = useCallback((el) => {
      setVideoEl(el);
    }, []);

    useEffect(() => {
      if (videoEl == null) return;

      const player = videojs(videoEl, {
        aspectRatio: '16:9',
        languages: {
          es: spanish
        },
        language: 'es',
        sources: [
          {
            src: "https://magicstream.ddns.net:443/magicstream/stream.m3u8",
            type: "application/x-mpegURL"
          }
        ],
        fluid: true
      });

      return () => {
        player.dispose();
      };
    }, [videoEl])


    return (
      <video preload='auto' controls playsInline ref={videoRef} className={"video-js mk_video"} poster="../img/magickidsbg.png"/>
    )
}