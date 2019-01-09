<template>
    <div class="vip"> 
        <mt-header fixed title="VIP会员专区">
            <mt-button class="iconfont icon-wode" slot="left" @click="wode()"></mt-button>
        </mt-header>
        <div class="section">
            <div class="img-vip">
                <img src="./../assets/banner.jpg" />
                <p @click="vippay()">开通VIP</p>
            </div>
            <div class="plan">
                <h2>丰富计划</h2>
                <p>助你达到目的，养成运动好习惯</p>
                <div>
                    <img src="./../assets/tuijian1.jpg" />
                </div>
            </div>
            <!-- 课程 -->
            <div class="vip-class">
                <h2>专享课程</h2>
                <p>每月更新，惊喜不断</p>
                <ul class="list-class">
                    <li v-for="item in arr">
                        <h3>
                            <img src="./../assets/Videotrain2.jpg" />
                        </h3>                      
                        <h4>
                            <h6>普拉提直径系...</h6>
                            <span>895665人训练过</span>
                        </h4>
                    </li>
                </ul>
                <div> 
                    <p>
                        <span>全部专享课程</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </p>
                    
                </div>
            </div>
            <!-- 特权 -->
            <div class="vip-special">
                <h2>更多会员特权</h2>
                <p>事项特权，尽享尊贵</p>
                <ul class="list-special">
                    <li v-for="item in arr1">
                           <div></div>
                           <p>专项课程每月</p>
                    </li>
                </ul>
                <!-- kaitongvip -->
                <div class="vip-pay">
                    <h3>
                        <h6>尊贵VIP会员特权</h6>
                        <p>立即开通</p>
                    </h3>
                </div>
            </div>
            
        </div>
        
    </div>
</template>
<script>
export default {
    name:"Vip",
    data(){
        return{
            arr:[1,2,3,4,5,6,7,8,9],
            arr1:[1,2,3,4,5,6,7,8]
        }
    },
    methods:{
        wode(){
            this.$router.push("/mydetail")
        },
        vippay(){
            this.$router.push("/vippay")
        }
    }
}
</script>
<style scoped="">
.vip{
    height: 100vh;
    display:flex;
    flex-direction: column;
    background: #eee;
}
.mint-header{
    height: 50px;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
    background: #eee;
}
.iconfont{ 
  font-size: 24px;
}
.section{
    margin-top: 50px;
    flex: 1;
    
}
.img-vip{
    height: 185px;
    position: relative;
}
.img-vip img{
    height: 100%;
    width: 100%;
}
.img-vip p{
    width: 81px;
    height: 33px;
    border-radius: 22px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    line-height: 33px;
    font-family: PingFangSC-regular;
    background: #fff;
    position: absolute;
    top: 120px;
    right: 40px;
}
.plan{
    background: #fff;
    margin-top: 20px;
    height: 330px;
}
.plan>h2{
    margin-top: 22px;
    font-size: 24px;
    line-height: 68px;
    margin-left: 20px;
    font-weight: normal;
}
.plan>p{
    height: 25px;
    line-height: 25px;
    color: rgba(117, 117, 117, 1);
    font-size: 18px;
    text-align: left;
    font-family: PingFangSC-regular;
    margin-left: 20px;
}
.plan>div{
    margin-top: 44px;
    margin-left: 13px;
    margin-right: 13px;
    margin-bottom: 40px;
    height: 118px;

}
.plan>div>img{
    height: 100%;
    width: 100%;
}
.vip-class{
    margin-top: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.vip-class>h2{
    margin-top: 25px;
    font-size: 24px;
    line-height: 74px;
    margin-left: 20px;
    width: 100%;
    font-weight: normal;
}
.vip-class>p{
    margin-left: 20px;
    height: 75px;
    color: rgba(117, 117, 117, 1);
    font-size: 18px;
    text-align: left;
    font-family: PingFangSC-regular;
    width: 100%;

}
.list-class{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
    
}
.list-class li{
  
    height: 127px;
    box-sizing: border-box;
}
.list-class>li>h3{
    width: 106px;
    height: 70px;
    

}
.list-class>li>h3>img{
    width: 100%;
    height: 100%;
    border: 0;
}
.list-class>li>h4>h6{
    height: 22px;
    color: rgba(51, 51, 51, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
    line-height: 22px;
    font-weight: normal;
}
.list-class>li>h4>span{
    width: 92px;
    height: 17px;
    color: rgba(121, 121, 121, 1);
    font-size: 12px;
    text-align: left;
    font-family: PingFangSC-regular;
    line-height: 17px;
}
.vip-class>div{
    margin-top: 35px;
    height: 98px;
}
.vip-class>div>p{
    width: 175px;
    height: 52px;
    line-height: 52px;
    border-radius: 46px;
    font-size: 14px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(132, 132, 132, 1);

}
.vip-class>div>p>.iconfont{
    font-size: 16px;
}
.vip-special {
    margin-top: 10px;
    background: #fff;

}
.vip-special>h2{
    margin-top: 22px;
    font-size: 24px;
    line-height: 68px;
    margin-left: 20px;
    font-weight: normal;
}
.vip-special>p{
    height: 25px;
    line-height: 25px;
    color: rgba(117, 117, 117, 1);
    font-size: 18px;
    text-align: left;
    font-family: PingFangSC-regular;
    margin-left: 20px;
}
.list-special{
    margin-top: 40px;
    margin-left: 60px;
    margin-right: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.list-special >li{
    width: 100px;
    height: 140px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.list-special >li>div{
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
}
.list-special >li>p{
    width: 84px;
    height: 20px;
    margin-top: 20px;
    line-height: 20px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
    text-align: center;

}
.vip-pay{
    margin-top: 30px;
   
    height: 198px;
    display: flex;
    justify-content: center;
}
.vip-pay>h3{
    width: 294px;
    height: 158px;
    line-height: 20px;
    border-radius: 20px;
    background-color: rgba(193, 193, 193, 1);
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.vip-pay>h3>h6{
    height: 20px;
    line-height: 20px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
}
.vip-pay>h3>p{
    
    width: 92px;
    height: 24px;
    line-height: 24px;
    border-radius: 26px;
    font-size: 14px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    background: rgba(255, 255, 255, 1);

}
</style>
