<template>
    <div class="wrap">
        <mt-header title="确认订单" style="background:#fff;border-bottom:1px solid #bbb;height:6vh;color:#101010">
            <mt-button icon="back" slot="left" @click="btn1()"></mt-button> 
        </mt-header>
        <div class="adress" @click="btn2()">
            <i class="iconfont icon-map"></i>
            <div class="adress1">
                <p>
                    <span >{{str1.email1}}</span>
                    <span>{{str1.email2}}</span>
                </p>
                <p>地址:{{str1.email3}}{{str1.email4}}</p>
            </div>
           
        </div>
        <div class="shangpin">
            <img :src="img" alt="">
            <div>
                <p>{{pname}}</p>
                <p>尺码</p>
                <p><span>￥{{pprice}}</span><span>x1</span></p>
                
            </div>
        </div>
        <ul>
            <li><span>商品金额</span><span>￥{{pprice}}</span></li>
            <li><span>运费</span><span>免邮</span></li>
            <li><span>备注</span><input type="text" placeholder="可输入留言或其他内容"></li>
        </ul>
        <mt-radio
  align="right"
  v-model="value"
  :options="['支付宝支付', '微信支付',]" style="margin-top:20px">
</mt-radio>
    <footer>
        <span>实付款:￥{{pprice}}</span>
        <span @click="btn3()">提交订单</span>
    </footer>
    </div>
</template>
<script>
import axios from "axios";
import Mock from 'mockjs';
var Random = Mock.Random;
Random.extend({
    tuijian:function (data) {
        var list = [{"itemId":564481173805,"itemName":"椅子","promotionPrice":69.8,"url":"//www.taobao.com/market/lu/findgoods_router.php?id=564481173805&scm=1007.15423.84311.100200300000001&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c&appid=2883","detailUrl":"//item.taobao.com/item.htm?scm=1007.15423.84311.100200300000001&id=564481173805&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c","pic":"//img.alicdn.com/bao/uploaded/i1/2259553545/TB2ld8emuuSBuNjy1XcXXcYjFXa_!!2259553545-0-item_pic.jpg","saleCnt":92,"matchType":"ONLINE_I2I","triggerId":571942583178,"position":1,"i2iScore":0.0429,"extMap":{"marks":"","dacuIcon":""}},{"itemId":535914366780,"itemName":"鞋柜","promotionPrice":36.0,"url":"//www.taobao.com/market/lu/findgoods_router.php?id=535914366780&scm=1007.15423.84311.100200300000001&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c&appid=2883","detailUrl":"//item.taobao.com/item.htm?scm=1007.15423.84311.100200300000001&id=535914366780&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c","pic":"//img.alicdn.com/bao/uploaded/i2/2025509436/TB1uEUxXWLN8KJjSZFKXXb7NVXa_!!0-item_pic.jpg","saleCnt":54,"matchType":"ONLINE_I2I","triggerId":574434447095,"position":2,"i2iScore":0.055,"extMap":{"marks":"","dacuIcon":""}},{"itemId":564166552434,"itemName":"清仓特价羽绒服","promotionPrice":229.0,"url":"//www.taobao.com/market/lu/findgoods_router.php?id=564166552434&scm=1007.15423.84311.100200300000004&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c&appid=2883","detailUrl":"//item.taobao.com/item.htm?scm=1007.15423.84311.100200300000004&id=564166552434&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c","pic":"//img.alicdn.com/bao/uploaded/i2/2733293073/TB2UmK4nwfH8KJjy1zcXXcTzpXa_!!2733293073.jpg","saleCnt":0,"matchType":"ONLINE_C2I","triggerId":0,"position":3,"i2iScore":0.0,"extMap":{"marks":"","dacuIcon":""}},{"itemId":544258767275,"itemName":"针织衫","promotionPrice":49.0,"url":"//www.taobao.com/market/lu/findgoods_router.php?id=544258767275&scm=1007.15423.84311.100200300000004&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c&appid=2883","detailUrl":"//item.taobao.com/item.htm?scm=1007.15423.84311.100200300000004&id=544258767275&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c","pic":"//img.alicdn.com/bao/uploaded/i4/274807574/TB2LkU.cbFkpuFjy1XcXXclapXa_!!274807574.jpg","saleCnt":0,"matchType":"ONLINE_C2I","triggerId":0,"position":4,"i2iScore":0.0,"extMap":{"marks":"","dacuIcon":""}},{"itemId":22343948007,"itemName":"短款外套","promotionPrice":99.0,"url":"//www.taobao.com/market/lu/findgoods_router.php?id=22343948007&scm=1007.15423.84311.100200300000004&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c&appid=2883","detailUrl":"//item.taobao.com/item.htm?scm=1007.15423.84311.100200300000004&id=22343948007&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c","pic":"//img.alicdn.com/bao/uploaded/i4/12944019462205037/T1blAsXfBcXXXXXXXX_!!0-item_pic.jpg","saleCnt":4,"matchType":"ONLINE_C2I","triggerId":0,"position":5,"i2iScore":0.0,"extMap":{"marks":"","dacuIcon":""}},{"itemId":546852330849,"itemName":"衬衣爸爸装","promotionPrice":358.0,"url":"//www.taobao.com/market/lu/findgoods_router.php?id=546852330849&scm=1007.15423.84311.100200300000004&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c&appid=2883","detailUrl":"//item.taobao.com/item.htm?scm=1007.15423.84311.100200300000004&id=546852330849&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c","pic":"//img.alicdn.com/bao/uploaded/i2/265876399/TB2nA1JjrBmpuFjSZFAXXaQ0pXa_!!265876399.jpg","saleCnt":0,"matchType":"ONLINE_C2I","triggerId":0,"position":6,"i2iScore":0.0,"extMap":{"marks":"","dacuIcon":""}},{"itemId":560707789980,"itemName":"冬季女装T","promotionPrice":499.0,"url":"//www.taobao.com/market/lu/findgoods_router.php?id=560707789980&scm=1007.15423.84311.100200300000004&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c&appid=2883","detailUrl":"//item.taobao.com/item.htm?scm=1007.15423.84311.100200300000004&id=560707789980&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c","pic":"//img.alicdn.com/bao/uploaded/i4/460994100/TB20KHyXBfM8KJjSZFrXXXSdXXa_!!460994100.jpg","saleCnt":2,"matchType":"ONLINE_C2I","triggerId":0,"position":7,"i2iScore":0.0,"extMap":{"marks":"","dacuIcon":""}},{"itemId":566935231667,"itemName":"两件套休闲时尚气质","promotionPrice":43.0,"url":"//www.taobao.com/market/lu/findgoods_router.php?id=566935231667&scm=1007.15423.84311.100200300000004&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c&appid=2883","detailUrl":"//item.taobao.com/item.htm?scm=1007.15423.84311.100200300000004&id=566935231667&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c","pic":"//img.alicdn.com/bao/uploaded/i1/1684925387/TB2p_68heuSBuNjSsziXXbq8pXa_!!1684925387.jpg","saleCnt":6,"matchType":"ONLINE_C2I","triggerId":0,"position":8,"i2iScore":0.0,"extMap":{"marks":"","dacuIcon":""}},{"itemId":541588157943,"itemName":"小客厅沙发","promotionPrice":465.5,"url":"//www.taobao.com/market/lu/findgoods_router.php?id=541588157943&scm=1007.15423.84311.100200300000004&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c&appid=2883","detailUrl":"//item.taobao.com/item.htm?scm=1007.15423.84311.100200300000004&id=541588157943&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c","pic":"//img.alicdn.com/bao/uploaded/i1/1990666227/TB2Ez0LcV5N.eBjSZFKXXX_QVXa_!!1990666227.jpg","saleCnt":0,"matchType":"ONLINE_C2I","triggerId":0,"position":9,"i2iScore":0.0,"extMap":{"marks":"","dacuIcon":""}},{"itemId":542401670944,"itemName":"实木门","promotionPrice":45.0,"url":"//www.taobao.com/market/lu/findgoods_router.php?id=542401670944&scm=1007.15423.84311.100200300000001&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c&appid=2883","detailUrl":"//item.taobao.com/item.htm?scm=1007.15423.84311.100200300000001&id=542401670944&pvid=f8ba7b0a-917e-4b69-bae8-3de797c33f0c","pic":"//img.alicdn.com/bao/uploaded/i1/TB1y8StOpXXXXcqXVXXYXGcGpXX_M2.SS2","saleCnt":433,"matchType":"ONLINE_I2I","triggerId":574434447095,"position":10,"i2iScore":0.1133,"extMap":{"marks":"","dacuIcon":""}}]
        
        return this.pick(list)
   }
});
Mock.mock("http://www.baidu.com",{
    "users|4":[
        {
            "list":"@tuijian()"
        }
    ]
})
export default {
    name:"Goumai",
    data() {
        return {
            img:"",
            pname:"",
            pprice:"",
            value:"",
            options:"",
            stra:"",
            str1:"",
        }
    },
    methods: {
        btn1(){
          this.$router.go(-1)
        },
        btn2(){
            this.$router.push("/adress")
        },
        btn3(){
            this.$router.push("/zhifu")
        }
   },
   mounted() {
      // console.log(this.$store.state.status.status);
       if(this.$store.state.status.status){
        this.str1=this.$store.state.users[this.$store.state.status.status-1+""];
       }else{
           this.str1={email1:"姜长坤",email2:"13253422387",email3:"河南省郑州市二七区",email4:"千锋教育"}
       }
       var _this = this;
       axios({
           method:"get",
           url:"http://www.baidu.com"

       }).then(function(data){
            _this.img = _this.$route.query.img1
            _this.pname = _this.$route.query.name1
            _this.pprice = _this.$route.query.price1
            
       })
        this.options = [
            {
                label: 'disabled option',
                value: 'valueF',
                disabled: true
            },
            {
                label: 'optionA',
                value: 'valueA'
            },
            {
                label: 'optionB',
                value: 'valueB'
            }
        ];
       
    
   }
}
</script>
<style scoped="">
    .wrap{
        background: #eee;
    }
    .adress{
        height: 50px;
        background: #fff;
        line-height: 50px
    }
    .adress i{
        margin: 0 0 0 20px;
        display: inline-block;
        float: left;
    }
    .shangpin{
        height: 140px;
        background: #fff;
        margin-top: 20px;
    }
    .shangpin img{
        width: 100px;
        height: 100px;
        margin: 20px 10px;
        float: left;
    }
    .shangpin div{
        float: left;
        margin-top: 20px;
        margin-left: 15px;
        height: 100px;
    }
    .shangpin div p:nth-of-type(1){
        line-height: 20px;
        font-size: 18px;
    }
    .shangpin div p:nth-of-type(2){
        line-height: 20px;
        font-size: 14px;
    }
    .shangpin div p:nth-of-type(3){
        margin-top: 40px;
        line-height: 20px;
    }
    .shangpin div p:nth-of-type(3) span:nth-of-type(1){
        font-size: 18px;
    }
    .shangpin div p:nth-of-type(3) span:nth-of-type(2){
        font-size: 12px;
        margin-left: 100px
    }
    ul{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    ul li{
        height:45px ;
        background: #fff;
        border-bottom: 1px solid #bbb;
        line-height: 45px;
        display: flex;
        justify-content: space-between;
    }

    ul li span{
        padding: 0 20px;
    }
    ul li input{
        border: none;
        outline:none;
    }
    footer{
        height: 50px;
        position: fixed;
        bottom: 0;
        border-top: 1px solid #bbb;
       
    }
    footer span:nth-of-type(1){
        width: 60vw;
        float: left;
       text-indent: 30px;
        background: #fff;
        line-height: 50px;
    }
    footer span:nth-of-type(2){
        width: 40vw;
        text-align: center;
        background: #ccc;
        line-height: 50px;
        font-size: 18px;
        float: left;
    }
    .adress1{
        float: left;
    }
    .adress1 p{
        margin-left: 30px;
        height: 20px;
        line-height: 20px;
        font-size: 12px
    }
    .adress1 p:nth-of-type(1){
        margin-top: 5px;
    }
</style>
