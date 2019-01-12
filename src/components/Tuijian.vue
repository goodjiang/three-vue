<template>
    <div style="margin-top:50px">
         <div class="top">
            <img src="../assets/banner.jpg">
        </div>
        <ul class="nav">
            <li @click="btn1()">视频训练</li>
            <li @click="btn2()">训练计划</li>
            <li @click="btn3()">自由训练</li>
            <li @click="btn4()">训练营</li>
        </ul>
        <div class="middle">
            <p>跟着计划练</p>
            <p>训练计划</p>
            <div class="ban">
               <div>
                    <span><img src="../assets/tuijian1.jpg" alt=""></span>
                     <span> <img src="../assets/tuijian2.jpg" alt=""></span>
               </div>
            </div>
        </div>
        <div class="xm">
            <p>跟着视频练</p>
            <p>为你推荐</p>
             <div class="ban1">
                 <div>
                     <span><img src="../assets/tuijian3.jpg" alt=""></span>
                     <span> <img src="../assets/tuijian4.jpg" alt=""></span>
                     <span> <img src="../assets/tuijian5.jpg" alt=""></span>
                 </div>            
            </div>
            <div class="m1">
                <p>减肥燃脂</p>
                <div class="ban1">
                    <div>
                         <span><img src="../assets/tuijian3.jpg" alt=""></span>
                         <span> <img src="../assets/tuijian4.jpg" alt=""></span>
                     <span> <img src="../assets/tuijian5.jpg" alt=""></span>

                    </div>   
                </div>
            </div>
            <div class="m1">
                <p>腹肌塑造</p>
                <div class="ban1">
                    <div>
                          <span><img src="../assets/tuijian3.jpg" alt=""></span>
                          <span> <img src="../assets/tuijian4.jpg" alt=""></span>
                     <span> <img src="../assets/tuijian5.jpg" alt=""></span>

                    </div>        
                </div>
            </div>
            <div class="mm" v-if="isshow">
                <div class="m1">
                    <p>瑜伽专区</p>
                    <div class="ban1">
                        <div>
                            <span><img src="../assets/tuijian3.jpg" alt=""></span>
                            <span> <img src="../assets/tuijian4.jpg" alt=""></span>
                        <span> <img src="../assets/tuijian5.jpg" alt=""></span>

                        </div>        
                    </div>
                </div>
                <div class="m1">
                    <p>二头肌专区</p>
                    <div class="ban1">
                        <div>
                            <span><img src="../assets/tuijian3.jpg" alt=""></span>
                            <span> <img src="../assets/tuijian4.jpg" alt=""></span>
                            <span> <img src="../assets/tuijian5.jpg" alt=""></span>

                        </div>        
                    </div>
                </div>
            </div>
            <div class="m1">
                <p>教练专区</p>
                <div class="ban2">
                    <div>
                        <span><img src="../assets/tuijian6.jpg" alt=""></span>
                         <span> <img src="../assets/tuijian7.jpg" alt=""></span>
                     <span> <img src="../assets/tuijian8.jpg" alt=""></span>
                         <span><img src="../assets/tuijian6.jpg" alt=""></span>
                         <span> <img src="../assets/tuijian7.jpg" alt=""></span>
                     <span> <img src="../assets/tuijian8.jpg" alt=""></span>
                     <span><img src="../assets/tuijian6.jpg" alt=""></span>
                         <span> <img src="../assets/tuijian7.jpg" alt=""></span>
                     <span> <img src="../assets/tuijian8.jpg" alt=""></span>
                    </div>                 
                </div>
            </div>
            <div class="btn" @click="btn()">
                <span>全部视频训练</span>
                <span>&gt;</span>
            </div>
        </div>
        <!-- 自有训练 -->
        <div class="shijian">
            <p class="fon">自有训练</p>
            <div class="shijian1">
                <span>工具</span>
                <ul>
                    <li>
                        <i class="icofont icon-wode"></i>
                        <p>动作库</p>
                    </li>
                     <li>
                        <i class="icofont icon-wode"></i>
                        <p>动作库</p>
                    </li>
                     <li>
                        <i class="icofont icon-wode"></i>
                        <p>动作库</p>
                    </li>
                </ul>
            </div>
            <div class="shijian2">
                <span>部位</span>
                <ul>
                    <li>胸部</li>
                    <li>背部</li>
                    <li>肩部</li>
                    <li>手臂</li>
                    <li>腿部</li>
                    <li>臀部</li>
                    <li>腹部</li>
                    <li>全身</li>
                    <li>拉伸</li>
                </ul>
            </div>
            <div class="shijian3">
                <span>时长</span>
                <ul>
                    <li>&lt;10分钟</li>
                    <li>10-20分钟</li>
                    <li>20-30分钟</li>
                    <li>&gt;30分钟</li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name:"Vip",
    data(){
        return{
            isshow:false
        }
    },
    methods: {
        btn(){
            this.isshow=true
        },
        btn1(){
            this.$router.push("/videotrain")
        },
        btn2(){
            this.$router.push("/trainproject")
        },
        btn3(){
            this.$router.push("/freetrain")
        },
        btn4(){
            this.$router.push("/traincamp")
        }
    },
}
</script>
<style scoped="">
    .top{
        height: 80px;
        width: 100%;
        margin-top: 50px;
    }
    .top img{
        height: 80px;
        width: 100%
    }
    .nav{
        padding: 6px;
        height: 72px;
        display: flex;
        background: #fff;
        justify-content: space-around;
        margin-bottom: 10px;
    }
    .nav li{
        height: 70px;
        width: 70px;
        border:1px solid #ccc;
        text-align: center;
        line-height: 70px;
    }
    .middle{
        overflow: hidden;
        height: 235px;
        background: #fff;
    }
    .middle p:nth-of-type(1){
        font-size: 15px;
        color: #101010;
        margin-left: 12px;
        margin-top: 15px
    }
    .middle p:nth-of-type(2){
        font-size: 13px;
        color: #101010;
        margin-left: 12px;
        margin-top: 15px
    }
    .ban{
        height: 124px;
        margin-top:10px;
        overflow-x:  auto;
        overflow-y: hidden;
    }
    .ban div{
        width:648px;
       background: #eee;
    }
    .ban span,.ban img{
        width:321px;
        height: 124px;  
    }
    .xm{
        background: #fff;
        margin-top: 10px;
        overflow: hidden;
    }
    .ban1{
        height: 124px;
        margin-top:10px;
        overflow-x:  auto;
        overflow-y: hidden;
        margin-left: 14px;
    }
    .ban2{
        height: 72px;
        margin-top:10px;
        overflow-x:  auto;
        overflow-y: hidden;
        margin-left: 14px;
    }
    .ban1 div{
        width: 610px;
        background: #eee;
    }
    .ban2 div{
        width: 670px;
        background: #eee;
    }
    .ban1 span,.ban1 img{
        width: 200px;
        height: 124px;
    }
    .xm p{
        margin-left: 14px;
    }
    .xm p:nth-of-type(1){
        font-size: 18px;
        font-weight: 800;
        line-height: 30px;
    }
    .xm p:nth-of-type(2){
        font-size: 12px;
        margin-top: 10px;
    }
    .xm .m1 p{
        margin-top: 20px;
        line-height: 20px;
        font-size: 14px;
    }
   .ban2 span,.ban2 img{
        width:70px;
        height:70px;
    }
    .btn{
        height: 34px;
        width: 161px;
        border: 1px solid #ccc;
        border-radius: 17px;
        margin: 20px auto;
        text-align: center;
        line-height: 34px;
        font-size: 14px;
        color: #101010;
    }
    .btn :nth-of-type(2){
        font-size: 20px;
            display: inline-block;
            line-height: 34px;
            vertical-align: middle;
            padding-bottom: 4px;
    }
    .shijian{
        margin-top: 5px;
        background: #fff;
    }
   .fon{
       font-size: 18px;
       font-weight: 800;
       color: #101010;
       margin-left:14px;
       line-height: 50px; 
   }
   .shijian1{
       margin-left:14px; 
   }
   .shijian1 span,.shijian2 span,.shijian3 span{
       font-size: 14px;
       font-weight: 800;
   }
   .shijian1 ul{
        width: 93vw;
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        justify-content: space-between
   }
    .shijian1 ul li{
        font-size: 12px;
        width: 105px;
        height: 50px;
        background: #f5f5f6;
        border-radius: 5px;
        text-align: center;
    }
    .shijian2,.shijian3{     
         margin-top: 20px;
         margin-left: 14px;
         overflow: hidden;
    }
    .shijian2 ul,.shijian3 ul{
       width: 93vw;
       margin-top: 5px;
    }
    .shijian2 ul li,.shijian3 ul li{
        width: 105px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        border-radius: 5px;
        background: #f5f5f6;
        margin-left:5px;
        float: left;
        font-size: 12px;
        margin-top: 10px;
    }
    .icon-wode{
        font-size: 25px
    }
    .shijian3{
        padding-bottom: 20px;
    }
</style>
