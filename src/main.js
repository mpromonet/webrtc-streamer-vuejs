import Vue from 'vue'
import App from './App.vue'
import "vuetify/dist/vuetify.css";
import vuetify from './plugins/vuetify';
import "webrtc-streamer/html/webrtc-streamer-element";
import "webrtc-streamer/html/webrtc-streamer-footer-element";

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'webrtc-streamer',
  'webrtc-streamer-footer'
]

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
