<template>
    <div>
        <header>
            <mt-header title="自由训练">
                <span slot="left" @click="btn1()" style="font-size:25px">
                   &lt;
                </span>
            </mt-header>
        </header>
        <nav>
            <ul>
                <li>{{tit1}}</li>
                <li>{{tit2}}</li>
                <li>{{tit3}}</li>
            </ul>
        </nav>
        <footer>
            <div>
            <ul>
                <li>
                    <div><img src="../assets/tuijian6.jpg" alt=""></div>
                    <div>
                        <p>入门全身循环训练</p>
                        <p>8个动作，循环3次，20分钟</p>
                        <p>初级</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/tuijian6.jpg" alt=""></div>
                    <div>
                        <p>零基础全身训练</p>
                        <p>6个动作，循环3次，12分钟</p>
                        <p>中级</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/tuijian6.jpg" alt=""></div>
                    <div>
                        <p>8分钟全身进阶训练</p>
                        <p>6个动作，循环2次，8分钟</p>
                        <p>高级</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/tuijian6.jpg" alt=""></div>
                    <div>
                        <p>入门全身循环训练</p>
                        <p>8个动作，循环3次，20分钟</p>
                        <p>初级</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/tuijian6.jpg" alt=""></div>
                    <div>
                        <p>零基础全身训练</p>
                        <p>6个动作，循环3次，12分钟</p>
                        <p>中级</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/tuijian6.jpg" alt=""></div>
                    <div>
                        <p>8分钟全身进阶训练</p>
                        <p>6个动作，循环2次，8分钟</p>
                        <p>高级</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/tuijian6.jpg" alt=""></div>
                    <div>
                        <p>入门全身循环训练</p>
                        <p>8个动作，循环3次，20分钟</p>
                        <p>初级</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/tuijian6.jpg" alt=""></div>
                    <div>
                        <p>入门全身循环训练</p>
                        <p>8个动作，循环3次，20分钟</p>
                        <p>初级</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/tuijian6.jpg" alt=""></div>
                    <div>
                        <p>入门全身循环训练</p>
                        <p>8个动作，循环3次，20分钟</p>
                        <p>初级</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/tuijian6.jpg" alt=""></div>
                    <div>
                        <p>入门全身循环训练</p>
                        <p>8个动作，循环3次，20分钟</p>
                        <p>初级</p>
                    </div>
                </li>
            </ul>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name:"Videotrain",
    data(){
        return{
             tit1:"部位不限",
             tit2:"时间不限",
             tit3:"难度不限"
        }   
    },
    methods:{
        btn1(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped="">
header{
    height: 6vh;
}
   nav{
       width: 100vw;
       height:5vh;
       border-bottom: 1px solid #bbb;
   }
   nav ul{
       
       display: flex;
       justify-content: space-around;
       flex-direction: row;
   }
   nav ul li{
       font-size: 14px;
       line-height: 5vh;
   }
   footer li{
       height:66px;
       width: 100vw;
       border-bottom: 1px solid #bbb;
       overflow: hidden;
   }
   footer li div:nth-of-type(1){
       width: 55px;
       height: 55px;
       margin: 5px;
       float: left;
   }
   footer li div:nth-of-type(1) img{
        width: 55px;
        height: 55px;
    }
   footer li div:nth-of-type(2){
       float: left;
       margin-left: 10px;
   }
   footer li div:nth-of-type(2) p:nth-of-type(1){
       font-size: 14px;
       line-height: 25px;
       margin-top: 5px
   }
    footer li div:nth-of-type(2) p:nth-of-type(2),footer li div:nth-of-type(2) p:nth-of-type(3){
       font-size: 12px;
       line-height: 15px;
   }
 
</style>
