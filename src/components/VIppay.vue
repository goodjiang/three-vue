<template>
    <div class="vippay">
        <mt-header fixed :title="tit">
            <mt-button class="iconfont icon-fanhui" slot="left" @click="back()"></mt-button>
            <mt-button  slot="right" >服务协议</mt-button>
        </mt-header>
        <div class="section">
            <!-- 用户名 -->
            <div class="user">
                <i class="iconfont icon-wode"></i>
                <span>用户名</span>
            </div>
            <!-- 价格 -->
            
            <ul class="price-list">
                <li id="first">
                    <h6>一次开通，享去那边精品</h6>
                    <h3>
                        <span></span>
                        <h5>联系客服</h5>
                    </h3>
                    
                </li>
                <li v-for="(item,i) in arr"> 
                    <h4>{{item.month}}个月</h4>
                    <div>
                        <p>月均{{item.price}}元</p> 
                        <div>
                            <h3 class="pirce">{{item.price*item.month}}元</h3>
                            <h6 class="circle" @click="priceBtn(i,item.month,item.price)"></h6>
                        </div>
                    </div>
                    
                </li>
            </ul>
            <!-- 支付 -->
            <div class="pay">
                <p>支付总金额：￥{{totalPrice}}</p>
                <span>一天只有一块钱，精品课程任你选</span>
                <mt-button type="primary">立即支付</mt-button>
            </div>
            <!-- class-vip -->
             <div class="vip-special">
                <h2>更多会员特权</h2>
                <p>事项特权，尽享尊贵</p>
                <ul class="list-special">
                    <li v-for="item in arr1">
                           <div></div>
                           <p>专项课程每月</p>
                    </li>
                </ul>
               
            </div>
        </div>
       

    </div>
</template>

<script>
import axios from "axios"
import Mock from "mockjs"
Mock.mock("http://www.vippay.com",{
    data:[{
        "price|25-35":25,
        "month":12
        },
        {
            "price|35-45":35,
            "month":6
        },
        {
            "price|80-150":80,
            "month":1
        }
        ],
})
export default {
    name:"Vippay",
    data(){
        return{
            tit:"开通会员",
            arr:[
              
            ],
            arr1:[1,2,3,4,5,6],
            totalPrice:''
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        priceBtn(i,a,b){
            var aBtn=document.getElementsByClassName("circle")
            for(let j=0;j<aBtn.length;j++){
                aBtn[j].style.background="";
            }
            aBtn[i].style.background="blue";
            this.totalPrice=a*b;
        }
    },
    mounted(){
        var _this=this;
        axios({
            method:"get",
            url:"http://www.vippay.com"
        }).then(function(data){
            _this.arr=data.data.data;           
        })
    }
}
</script>

<style>
.vippay{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #eee;
}
.iconfont{
    font-size: 24px;
}
.section{
    flex: 1;
    margin-top: 42px;

}
.user{
    height: 60px;
    background: #fff;
    display: flex;
    align-items: center;
    font-size: 12px;
}
.user>i{
    margin-left: 20px;
    margin-right: 12px;
}
.price-list{
    margin-top: 20px;
    background: #fff;
}
.price-list >li{
    height: 73px;
    border-bottom: 1px solid rgba(187, 187, 187, 1);
    display:flex;
    align-items: center;
    justify-content: space-between;
    
}
.price-list>li>h4{
    margin-left: 20px;
    width: 50px;
    height: 20px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
}
.price-list>li>div{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
    
}
.price-list>li>div>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.price-list>li>div>p{ 
    height: 17px;
    line-height: 17px;
    color: rgba(179, 179, 179, 1);
    font-size: 12px;
    text-align: left;
    font-family: PingFangSC-regular;
} 
.circle{
    
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #000;
    margin-left: 10px;

}
.circleBg{
    background:red;
}
#first{
    height: 50px;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
#first>h6{
    margin-left: 20px;
    width: 154px;
    height: 20px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;

}
#first>h3{
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    

}
#first>h3>span{
    display:block;
    width: 19px;
    height: 19px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgba(187, 187, 187, 1);

}
#first>h3>h5{
    width: 56px;
    height: 20px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
    font-weight: normal;
}
.pay{
    height: 196px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
}
.pay>p{
    height: 22px;
    color: rgba(16, 16, 16, 1);
    font-size: 16px;
    text-align: center;
    font-family: PingFangSC-regular;
    line-height: 22px;
}
.pay>span{
    height: 20px;
    line-height: 20px;
    color: rgba(159, 159, 159, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
}
.vip-special {
    margin-top: 20px;
    background: #fff;

}
.vip-special>h2{
    margin-top: 22px;
    font-size: 24px;
    line-height: 68px;
  
    font-weight: normal;
    text-align: center
}
.vip-special>p{
    height: 25px;
    line-height: 25px;
    color: rgba(117, 117, 117, 1);
    font-size: 18px;
    text-align: center;
    font-family: PingFangSC-regular;
   
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
    border: 1px solid #000;
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
</style>
