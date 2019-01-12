<template>
    <div class="classpay">
        <ul class="price-list">
            <li v-for="(item,i) in arr" :key="i"> 
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
        <div class="pay1">
            <p>支付总金额：￥{{totalPrice}}</p>
            <span>一天只有一块钱，精品课程任你选</span>
            <mt-button type="primary">立即购买</mt-button>
        </div>
        <!--  -->
       
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

<style scoped="">
.classpay{
    height: 100vh;
    display: flex;
    flex-direction: column;

}
.price-list{
    margin-top: 5px;
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
.pay1{
    height: 196px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
}
.pay1>p{
    height: 22px;
    color: rgba(16, 16, 16, 1);
    font-size: 16px;
    text-align: center;
    font-family: PingFangSC-regular;
    line-height: 22px;
}
.pay1>span{
    height: 20px;
    line-height: 20px;
    color: rgba(159, 159, 159, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
}

</style>
