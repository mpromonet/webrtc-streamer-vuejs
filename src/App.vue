<template>
  <div id="app">
    <v-app>
      <v-combobox v-model="webrtcurl" :items="webrtcurllist" v-on:change="getMediaList" size="64">  
      </v-combobox>
      <v-combobox v-model="webrtcstream" :items="medialist" >  
      </v-combobox>  
      <webrtc-streamer :url="webrtcstream" :webrtcurl="webrtcurl" muted></webrtc-streamer>
      <webrtc-streamer-footer :webrtcurl="webrtcurl"></webrtc-streamer-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App', 
  data() {
    return {
      webrtcstream: '',
      webrtcurl: 'https://webrtc-streamer.herokuapp.com',
      webrtcurllist: ['https://webrtc-streamer.herokuapp.com', 'https://beechmont.cameras.puppywood.com'],
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

