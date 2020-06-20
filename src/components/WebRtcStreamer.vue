<template>
  <div>
    <webrtc-streamer :url="webrtcstream" :webrtcurl="webrtcurl" muted></webrtc-streamer>
  </div>
</template>
<script>
export default {
  name: 'WebRtcStreamer',
  props: {
    webrtcstream: String,
    webrtcurl: String
  }
}
</script>
