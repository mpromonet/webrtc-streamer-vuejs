<script type="module" src="webrtc-streamer-element.js"></script>
<template>
  <div>
    <webrtc-streamer url="rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov" webrtcurl="http://webrtc-streamer.herokuapp.com/" muted></webrtc-streamer>
  </div>
</template>
<script>
export default {
  name: 'WebRtcStreamer',
  props: {
    webrtcstream: String
    webrtcurl: String
  }
}

