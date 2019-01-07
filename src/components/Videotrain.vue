<template>
    <div>
        <header>
            <mt-header title="视频训练">
                <span slot="left" @click="btn1()" style="font-size:25px">
                   &lt;
                </span>
            </mt-header>
        </header>
        <nav>
            <div>
                <ul>
                    <li style="padding-left:0px">全部</li>
                    <li>减肥燃脂</li>
                    <li>家庭健身</li>
                    <li>瑜伽系列</li>
                    <li>女生塑形</li>
                    <li>男生塑形</li>
                    <li>腹肌塑形</li>
                    <li>普拉提</li>
                    <li>流行舞</li>
                    <li>健身入门</li>
                    <li>热身拉伸</li>
                    <li>增肌塑形</li>
                    <li>办公室健身</li>
                    <li>生理期</li>
                    <li>小器械训练</li>
                </ul>
            </div>
            <p></p>
        </nav>
        <footer>
            <ul>
                <li>
                    <div>
                        <p>菩提啦核心课程</p>
                        <p>5次/难度
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing" style="color:#fff"></i>/143618人训练过</p>
                    </div>
                </li>
                <li>
                 
                    <div>
                        <p>普拉提肩颈</p>
                        <p>3次/难度
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing" style="color:#fff"></i>
                            <i class="iconfont icon-xingxing" style="color:#fff"></i>/254534人训练过</p>
                    </div>
                </li>
                <li>            
                    <div>
                        <p>蜜桃臀进阶训练</p>
                        <p>8次/难度
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing" ></i>/43618人训练过</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>减脂入门训练</p>
                        <p>5次/难度
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing" style="color:#fff"></i>/25457人训练过</p>
                    </div>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script>
export default {
    name:"Videotrain",
    methods:{
        btn1(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped="">
    nav{
        width: 100vw;
        height: 30px;
        border-bottom: 1px solid #bbb;
        overflow: hidden;
    }
    nav div{ 
        width: 96vw;
        height: 20px; 
        margin-top: 5px;
        margin-left: 2vw;
        background: #fff;
        overflow-x: scroll;
        overflow-y: hidden;
    }
   nav div::-webkit-scrollbar {display:none}
  nav ul{
      width: 309vw
  }
  nav p{
      width: 40px;
      height: 2px;
      margin-top: 3px;
      background: #000;
      margin-left: 2vw;
  }
    nav ul li{
        float: left;
        padding: 0 10px;
        font-size: 14px;
        color: #000;
    }
    footer{
        width: 96vw;
        margin-left: 2vw;
        margin-top: 2vw;
        overflow: hidden;
    }
    footer ul li{
        width: 100%;
        margin-bottom: 2vh;
        height: 125px;
        overflow: hidden;
    }
    footer ul li:nth-of-type(1){
         background: url(../assets/Videotrain1.jpg) ;
         background-size: 100% 125px;
    }
    footer ul li:nth-of-type(2){
         background: url(../assets/Videotrain2.jpg) ;
         background-size: 100% 125px;
    }
    footer ul li:nth-of-type(3){
         background: url(../assets/Videotrain3.jpg) ;
         background-size: 100% 125px;
    }
    footer ul li:nth-of-type(4){
         background: url(../assets/Videotrain4.jpg) ;
         background-size: 100% 125px;
    }
    footer ul li div{
        margin-top:10vh;
        margin-left: 13vw;
        font-size: 14px;
        color: #101010;
    }
</style>
