// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player'
//require('video.js/dist/video-js.css')
//require('vue-video-player/src/custom-theme.css')
//require('videojs-contrib-hls/dist/videojs-contrib-hls')
Vue.use(VideoPlayer)
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
