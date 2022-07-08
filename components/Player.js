import { useRef, useEffect } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default function Player() {

    const videoRef = useRef(null)
    let streamUrl = "https://magicstream.ddns.net:443/magicstream/stream.m3u8"
    const streamType = "application/x-mpegURL"

    useEffect(() => {
      if (videoRef.current) {
        videojs(videoRef.current, {
          sources: [
            {
              src: streamUrl,
              type: streamType
            }
          ]
        });
      }
    });

    return <video controls ref={videoRef} className="video-js mk_video" poster="../img/magickidsbg.png" title='Ver Stream de Magic Kids'/>
}