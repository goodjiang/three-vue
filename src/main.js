// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
<<<<<<< HEAD
import VideoPlayer from 'vue-video-player'
//require('video.js/dist/video-js.css')
//require('vue-video-player/src/custom-theme.css')
//require('videojs-contrib-hls/dist/videojs-contrib-hls')
Vue.use(VideoPlayer)
=======
import "./assets/font/iconfont.css"
import store from './store'


>>>>>>> 8f1a0d43a2380725b0ea54156a23d140a21098a0
Vue.use(MintUI)
Vue.config.productionTip = false

var vm1 = new Vue({})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
