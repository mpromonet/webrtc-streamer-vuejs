<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-combobox v-model="webrtcurl" :items="webrtcurllist" v-on:change="getMediaList" size="64" single-line small-chips>  
        </v-combobox>
        <v-combobox v-model="webrtcstream" :items="medialist" single-line small-chips center>  
        </v-combobox>  
      </v-container>
      <webrtc-streamer :url="webrtcstream" :webrtcurl="webrtcurl" muted width="50%" height="50%" options="rtptransport=tcp&timeout=60"></webrtc-streamer>
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
      webrtcurllist: ['https://webrtc-streamer-mpromonet.cloud.okteto.net', 'https://beechmont.cameras.puppywood.com', 'https://montgomery.cameras.puppywood.com', 'https://swimming-pool.ulstu.ru', 'https://webrtcstreamer.agreeabletree-365b9a90.canadacentral.azurecontainerapps.io', 'http://60.251.240.92:8554/' ],
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

