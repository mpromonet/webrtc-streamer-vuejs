<template>
  <div id="app">
    <input v-model="webrtcstream" size="64"><br>
    <input v-model="webrtcurl"   size="64">
    <webrtc-streamer :url="webrtcstream" :webrtcurl="webrtcurl" muted></webrtc-streamer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      webrtcstream: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
      webrtcurl: 'http://webrtc-streamer.herokuapp.com/'
    };
  }  
}
</script>

