<template>
  <div id="app">
    <input v-model="webrtcurl"   size="64" v-on:change="getMediaList" >
    <v-select v-model="webrtcstream" :options="medialist" >  
    </v-select><br>  
    <webrtc-streamer :url="webrtcstream" :webrtcurl="webrtcurl" muted></webrtc-streamer>
    <webrtc-streamer-footer :webrtcurl="webrtcurl"></webrtc-streamer-footer>
  </div>
</template>

<script>
export default {
  name: 'App', 
  data() {
    return {
      webrtcstream: '',
      webrtcurl: '//webrtc-streamer.herokuapp.com',
      medialist: []
    };
  },
  mounted() {
    this.getMediaList()
  },
  methods: {
    getMediaList: function() {
      const medialisturl = this.webrtcurl + "/api/getMediaList"
      fetch(medialisturl)
        .then(response => response.json())
        .then(data => {
          this.medialist = data.map( media => media.video )
          this.webrtcstream = this.medialist[0] 
        }) 
        .catch(err => console.log(err))     
    }
  }  
}
</script>

