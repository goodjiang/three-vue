<template>
    <div class="vipclass">
        <div class="vido">
            <i class="iconfont icon-fanhui" @click="back()"></i>
            <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)"
            >
            </video-player>
        </div>
        <div class="more-video">
            <dl>
                <dt>
                    <img src="../assets/Videotrain2.jpg"/>
                </dt>
                <dd>
                    <span>day1</span>
                    <h4>{{tit}}</h4>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="../assets/Videotrain2.jpg"/>
                </dt>
                <dd>
                    <span>day1</span>
                    <h4>{{tit}}</h4>
                </dd>
            </dl>
        </div>
        <!-- dibu -->
        <footer>
            <h2>
                
            </h2>
            <div class="bottom">
                <router-link :to="{name:'vipmes',query:{tit:tit}}" class="bottom-1" tag="div">
                    <i class="iconfont icon-liaotianchat52"></i>
                    99
                </router-link>
                <div class="bottom-2" @click="pay()">立即购买</div>
            </div>
        </footer>

    </div>
</template>

<script>
import {videoPlayer} from 'vue-video-player'
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";  
import "videojs-contrib-hls"
import "videojs-flash";      

export default {
name:"Vipclass",
   data() {
    return {
        index:'',
        tit:"",
        url:["https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm","http://vjs.zencdn.net/v/oceans.mp4",],
        src:"",
      playerOptions: {
        //        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            type:"video/webm",
            // mp4
            src: ""
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }
        ],
        poster: "../assets/Videotrain2.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        //        controlBar: {
        //          timeDivider: true,
        //          durationDisplay: true,
        //          remainingTimeDisplay: false,
        //          fullscreenToggle: true  //全屏按钮
        //        }
      }
    };
  },
  components: {
    videoPlayer
  },
  methods: {
    onPlayerPlay(player) {
      //alert("play");
      console.log("1")
    },
    onPlayerPause(player) {
      //alert("pause");
      console.log("2")
    },
    back(){
        this.$router.go(-1)
    },
    mes(){
        this.$router.push("/vipmes")
    },
    pay(){
        this.$router.push("/vipclasspay")
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  mounted(){
      console.log(this.$route.query)
      this.tit=this.$route.query.tit;
      this.index=this.$route.query.index;
      if(this.index%2==0){
          this.index=0;
      }else{
          this.index=1;
      }
      this.src=this.url[this.index];
      this.playerOptions.sources[0].src=this.src;
       
  }


}
</script>


<style scoped="">
.vipclass{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #eee;
}
.vido{
    
    position: relative;
    border-bottom: 3px solid #eee;
}
.vido>i{
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 10;
}
.iconfont{
    color:#fff;
    font-size: 24px;
}
.more-video{
    
    display: flex;
    justify-content: space-around;
    background: #fff;
    flex: 1;
    overflow: auto;
}
.more-video>dl{
    margin-top: 20px;
}
.more-video>dl>dt{
    width: 141px;
    height: 100px;
    border: 1px solid #eee;
}
.more-video>dl>dt>img{
    height: 100%;
    width: 100%;
}
.more-video>dl>dd>span{
    margin-top: 10px;
    color: rgba(170, 170, 170, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;

}
.more-video>dl>dd>h4{
    margin-top: 3px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;

}
footer h2{
    margin-top: 10px;
    height: 108px;
    background: #fff;
}
.bottom{
    height: 70px;
    display: flex;
    text-align: center;
    line-height: 70px;
    color: #fff;
    
}
.bottom-1{
    background: #26a2ff;
    width: 37.5vw;
    
}
.bottom-1 .iconfont{
    font-size: 16px;
    color: #fff;
}
.bottom-2{
    background:#ef4f4f;
    flex: 1;
}
</style>
