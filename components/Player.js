import { useCallback, useState, useEffect } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default function Player() {

    const [videoEl, setVideoEl] = useState(null);
    const videoRef = useCallback((el) => {
      setVideoEl(el);
    }, []);

    let streamUrl = "https://magicstream.ddns.net:443/magicstream/stream.m3u8"
    const streamType = "application/x-mpegURL"

    useEffect(() => {
      if (videoEl == null) return;

      const player = videojs(videoEl, {
        sources: [
          {
            src: streamUrl,
            type: streamType
          }
        ],
        fluid: true
      });
      document.querySelector(".vjs-live-display").innerHTML = 'En Vivo'

      return () => {
        player.dispose();
      };
    }, [videoEl])

    return <video controls playsInline ref={videoRef} className="video-js mk_video" poster="../img/magickidsbg.png"/>
}