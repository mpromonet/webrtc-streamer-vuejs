<template>
  <div id="app">
    <WebRtcStreamer 
        webrtcstream="rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov"
        webrtcurl="http://webrtc-streamer.herokuapp.com/" />
  </div>
</template>

<script>
import WebRtcStreamer from './components/WebRtcStreamer.vue'

export default {
  name: 'App',
  components: {
    WebRtcStreamer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
