import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework';
import App from './App.vue'
import "vuetify/dist/vuetify.css";
import "webrtc-streamer/html/webrtc-streamer-element";
import "webrtc-streamer/html/webrtc-streamer-footer-element";

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'webrtc-streamer',
  'webrtc-streamer-footer'
]

Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify({}),
  render: h => h(App)
}).$mount('#app')
