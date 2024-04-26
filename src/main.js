import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import App from './App.vue';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import "webrtc-streamer/html/webrtc-streamer-element";
import "webrtc-streamer/html/webrtc-streamer-footer-element";

const app = createApp(App);

const vuetify = createVuetify({ components, directives});

app
  .use(vuetify)
  .mount('#app')

