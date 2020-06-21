<template>
  <div id="app">
    <input v-model="webrtcstream" size="64"><br>
    <input v-model="webrtcurl"   size="64">
    <WebRtcStreamer 
        :webrtcstream="webrtcstream"
        :webrtcurl="webrtcurl" />
  </div>
</template>

<script>
import WebRtcStreamer from './components/WebRtcStreamer.vue'

export default {
  name: 'App',
  components: {
    WebRtcStreamer
  },
  data() {
    return {
      webrtcstream: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
      webrtcurl: 'http://webrtc-streamer.herokuapp.com/'
    };
  }  
}
</script>

