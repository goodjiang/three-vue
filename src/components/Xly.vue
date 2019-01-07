<template>
    <div>
        <span class="jiantou iconfont icon-zuojiantou" @click="btn1()"></span>
        <header>
            <p>减脂营</p>
            <p>专家服务班</p>
            <p>吃的健康 练得科学 28天有效减脂</p>
        </header>
        <div class="x1">
            <i></i>
            <p>减脂营 为你而来</p>
        </div>
        <div class="banner"><img src="../assets/jianfeican.jpg" alt=""></div>
        <div class="x2">
            <p>餐前热量规划，只需要一张照片</p>
            <p>-----量身规划全天摄入量，不必忍饥挨饿</p>
        </div>
        <div class="banner"><img src="../assets/jianfeican.jpg" alt=""></div>
        <div class="x2">
            <p>外卖琳琅满目，处处减脂克星</p>
            <p>-----营养师帮你把关，放心吃！</p>
        </div>
        <div class="banner"><img src="../assets/jianfeican.jpg" alt=""></div>
        <div class="x2">
            <p>食堂生存指南，搭配才是关键</p>
            <p>----别纠结了，呼叫营养师帮你选！</p>
        </div>
        <div class="banner"><img src="../assets/jianfeican.jpg" alt=""></div>
        <div class="x2">
            <p>专属训练计划，难度循序渐进</p>
            <p>--专属教练实时为你解答疑惑</p>
        </div>
        <div class="banner"><img src="../assets/jianfeican.jpg" alt=""></div>
        <div class="x3">
            <i></i>
            <p>减脂训练营</p>
            <p>由资深教练团队匠心设计</p>
            <p>更专业，更易执行的运动方案</p>
            <p>出家拥有营养师一对一服务</p>
            <p>为你精确知道每一餐</p>
            <p>每天一次专业课程，我们帮你梳理</p>
            <p>你需要做的，只是坚持！</p>
            <p @click="btn2()">我适合参加吗？</p>
            <i></i>
            <p>课程安排</p>
        </div>
        <div class="banner"><img src="../assets/jianfeican.jpg" alt=""></div>
        <div class="x2">
            <p>第一周：核心激活与饮食原则梳理</p>
            <p>入营前营养师一对一沟通</p>
            <p>生活习惯调查，建立健康饮食理念</p>
            <p>激活核心肌群，恢复关节灵活度</p>
        </div>
        <div class="banner"><img src="../assets/jianfeican.jpg" alt=""></div>
        <div class="x2">
            <p>第二周：核心激活与饮食原则梳理</p>
            <p>入营前营养师一对一沟通</p>
            <p>生活习惯调查，建立健康饮食理念</p>
            <p>激活核心肌群，恢复关节灵活度</p>
        </div>
        <div class="banner"><img src="../assets/jianfeican.jpg" alt=""></div>
        <div class="x2">
            <p>第三周：核心激活与饮食原则梳理</p>
            <p>入营前营养师一对一沟通</p>
            <p>生活习惯调查，建立健康饮食理念</p>
            <p>激活核心肌群，恢复关节灵活度</p>
        </div>
        <div class="banner"><img src="../assets/jianfeican.jpg" alt=""></div>
        <div class="x2">
            <p>第四周：核心激活与饮食原则梳理</p>
            <p>入营前营养师一对一沟通</p>
            <p>生活习惯调查，建立健康饮食理念</p>
            <p>激活核心肌群，恢复关节灵活度</p>
        </div>
        <div class="jiaolian" @click="btn3()">
            资深教练团队
        </div>
        <div class="x4">
            <i></i>
            <p>减脂营课表范例</p>
            <img src="../assets/kecheng1.jpg" alt="">
        </div>
        <div class="x5">
            <img src="../assets/Videotrain4.jpg" alt="">
        </div>
        <div class="x6">
            <img src="../assets/xly1.png" alt="">
        </div>
        <div class="x7">
            <img src="../assets/xly3.png" alt="">
        </div>
        <div class="x8">
            <img src="../assets/xly2.jpg" alt="">
            <i></i>
            <p>分享给好友</p>
            <ul>
                <li class="iconfont icon-weixin"></li>
                <li class="iconfont icon-pengyouquan"></li>
                <li class="iconfont icon-qq"></li>
                <li class="iconfont icon-xingxing"></li>
                <li class="iconfont icon-weibo"></li>
            </ul>
        </div>
        <footer>
            <ul>
                <li><div><span>￥1099</span><span>1499</span></div></li>
                <li>免费咨询</li>
                <li>立即报名</li>
            </ul>
        </footer>
    </div>
</template>
<script>
export default {
    name:"Xly",
    methods:{
        btn1(){
            this.$router.go(-1)
        },
        btn2(){
            this.$router.push("/shihe")
        },
        btn3(){
            this.$router.push("/jiaolian")
        }
    }
}
</script>
<style scoped="">

    .jiantou{
   
        position: fixed;
        top: 15px;
        left: 15px;
        border: 1px solid #ccc;
        background: #fff;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
    }
    header{
        width: 100vw;
        height: 647px;
        background: #ccc;
        overflow: hidden;
         text-align: center;
    }
    header p:nth-of-type(1){
        font-size: 48px;
        margin-top: 220px;
    }
    header p:nth-of-type(2){
        font-size: 24px;
        margin-top: 20px;
    }
    header p:nth-of-type(3){
        font-size: 14px;
        margin-top: 170px;
    }
    header p:nth-of-type(4){
        font-size: 14px;
        margin-top: 10px;
    }
    .x1,.x2{
        height: 200px;
        text-align: center;
        overflow: hidden;
    }
    .x1 i{
        width: 58px;
        height: 4px;
        background: #000;
        display: block;
        margin: 40px auto;
        margin-top: 80px
    }
    .x1 p{
        font-size: 18px
    }
    .banner img{
        height: 250px;
        width: 100vw
    }
    .x2 p:nth-of-type(1){
        font-size: 18px;
        margin-top: 80px
    }
    .x2 p:nth-of-type(2){
        font-size: 14px;
        margin-top: 10px
    }
    .x3{
        text-align: center;
    }
    .x3 i{
        width: 58px;
        height: 4px;
        background: #000;
        display: block;
        margin: 30px auto;
        margin-top: 80px;
    }
    .x3 p:nth-of-type(1){
        font-size: 18px;
        margin-bottom: 20px;
    }
    .x3 p:nth-of-type(2),.x3 p:nth-of-type(3),.x3 p:nth-of-type(4),.x3 p:nth-of-type(5){
        font-size: 14px;
        margin-top: 5px;
    }
    .x3 p:nth-of-type(6){
        font-size: 14px;
        margin-top: 55px;
    }
    .x3 p:nth-of-type(7){
        font-size: 14px;
        margin-top: 10px;
    }
    .x3 p:nth-of-type(8){
        font-size: 14px;
        color: #fff;
        width: 200px;
        height: 30px;
        line-height: 30px;
        background: rgba(0,150,136,1);
        margin: 30px auto
    }
    .x3 p:nth-of-type(9){
        margin: 30px auto 40px
    }
    .x2{
        height: 200px;
    }
    .x2 p:nth-of-type(1),{
        margin:30px auto; 
    }
    .x2 p:nth-of-type(2),.x2 p:nth-of-type(3),.x2 p:nth-of-type(4){
        line-height: 20px;
        font-size: 12px;
    }
    .x4 {
        text-align: center
    }
    .x4 i{
        width: 58px;
        height: 4px;
        background: #000;
        display: block;
        margin: 30px auto;
        margin-top: 50px;
    }
    .x4 p{
        margin-bottom: 70px;
        font-size: 18px;
    }
    .x5{
        margin-top: 50px;
    }
    .x5 img{
        width: 100vw;
        height: 244px;
    }
    .x6 img{
        margin-top: 50px;
        width: 100vw;
        height: 700px;
    }
    .x6{
        width: 100vw;
        
    }
    .x7 img{
        display: block;
        text-align: center;
        margin: 30px auto;
    }
    .x8 img{
        width: 100vw;
        height: 100vw;
    }
    .x8 i{
         width: 58px;
        height: 4px;
        background: #000;
        display: block;
        margin: 30px auto;
        margin-top: 50px;
    }
    .x8 p{
        margin-top: 30px;
        font-size: 18px;
        text-align: center;
        font-weight: 800
    }
    .x8 ul{
        width: 94vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 30px auto;
        margin-bottom: 80px
    }
    .x8 ul li{
        width: 48px;
        height: 48px;
        border: 1px solid #bbb;
        font-size: 30px;
        text-align: center;
        line-height: 48px;
        border-radius: 3px;
        
    }
    footer{
        height: 37px;
        width: 100vw;
        position: fixed;
        bottom: 0
    }
    footer ul li{
        width: 33.33vw;
        float: left;
    }
    footer ul li:nth-of-type(1),footer ul li:nth-of-type(2){
        background-color: #282A2E ;
    }
    footer ul li:nth-of-type(1) div{
         width: 70%;
         height: 37px;
         margin: 0 auto;
         text-align: center;
         line-height: 37px;
    }
    footer ul li:nth-of-type(1) div span:nth-of-type(1){
        color: #fff;
        font-size: 14px;
    }
    footer ul li:nth-of-type(1) div span:nth-of-type(1){
        color: #fff;
        font-size: 14px;
    }
    footer ul li:nth-of-type(1) div span:nth-of-type(2){
        color: #BDBBBB;
        font-size: 10px;
        text-decoration: line-through;
        margin-left: 5px
    }
    footer ul li:nth-of-type(2){
        text-align: center;
        line-height: 37px;
        color: #fff;
    }
    footer ul li:nth-of-type(3){
        background-color: #009688;
         text-align: center;
        line-height: 37px;
        color: #fff;
    }
    .jiaolian{
        margin: auto;
        width: 150px;
        height: 30px;
        color: #fff;
        background: rgba(0,150,136,1);
        line-height: 30px;
        font-size: 14px;
        text-align: center;
    }
</style>
