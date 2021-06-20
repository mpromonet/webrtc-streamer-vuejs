import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css";

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'webrtc-streamer'
]

new Vue({
  render: h => h(App),
}).$mount('#app')
