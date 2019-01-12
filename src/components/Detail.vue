<template>
    <div style="background:#eee">
        <span class="jiantou iconfont icon-zuojiantou" @click="btn1()"></span>
        <header>
            <img :src="img" alt="">
            <p>{{pname}}</p>
            <p>￥:{{pprice}}</p>
            <img src="../assets/detail1.png" alt="">
        </header>
        <section>
            <div class="detail1">
                <span>请选择：尺码</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
            <img src="../assets/detail2.png" alt="">
        </section>
        <footer>
            <p class="iconfont icon-gouwucheman" @click="btn2()"></p>
            <p class="iconfont icon-kefu" @click="btn3()"></p>
            <p @click="btn4()" >加入购物车</p>
            <router-link :to="{name:'goumai',query:{img1:img,name1:pname,price1:pprice}}" tag="p">立即购买</router-link>
        </footer>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name:"Detail",
   
    methods: {
        btn1(){
            this.$router.go(-1)
        },
        btn2(){
            this.$router.push("/cart")
        },
        btn3(){
            this.$router.push("/kefu")
        },
        btn4(){
            // if(this.$store.state.token==""){
            //     this.$router.push("/login")
            // }else{
                var _this = this;
            
                axios({
                    method:"get",
                    url:"http://10.8.155.35:8080/cartadd.do",
                    params:{gId:_this.$route.query.id,gImg:_this.img,gName:_this.pname,gNum:1,gPrice:_this.pprice,sSize:0,uId:this.$store.state.token}
                }).then(function (data) {
                    console.log(data.data)
                    
                })
            // }
        }
    },
    data() {
        return {
            img:"",
            pname:"",
            pprice:"",
            num:0
        }
    },
    mounted() {
        console.log(this.$store.state.token)
       
        var _this=this;
        //图片接口
        axios({
            method:"post",
            url:"http://10.8.155.35:8080/goodsImg.do",
            params:{goodsId:_this.$route.query.id}
        }).then(function (data) {
            _this.img=data.data.data[0].imgurl
          

        })
   
          axios({
            method:"post",
            url:"http://10.8.155.35:8080/goodsDetail.do",
            params:{goodsId:_this.$route.query.gid}
        }).then(function (data) {
            console.log(data.data)
           _this.pname=data.data.data[0].gName;
            _this.pprice=data.data.data[0].gPrice;
           
        })
    },
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
        background: #fff
    }
    header img{
        width: 100vw;
        height: 277px;
    }
    header p:nth-of-type(1){
        line-height: 50px;
        margin-left: 10px;
        font-size: 18px;
        color: #8e8e8e;
    }
    header p:nth-of-type(2){
        line-height: 20px;
        margin-left: 10px;
        font-size: 16px;
        color: #101010;
    }
    header img:nth-of-type(2){
        height:30px ;

    }
    section{
        overflow: hidden;
    }
    .detail1{
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        margin: 10px 0 10px ;
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background: #fff;
    }
    section img{
        display: block;
        margin-bottom: 70px;
    }
    footer{
        position: fixed;
        bottom: 0;
    }
    footer p{
        height: 15vw;
        float: left;
    }
    footer p:nth-of-type(1),footer p:nth-of-type(2){
        width: 15vw;
        border-right: 0.5vw solid #ccc;
        background: #fff;
        text-align: center;
        line-height: 15vw;
        font-size: 24px;
    }
    footer p:nth-of-type(3){
        width: 34.5vw;
        text-align: center;
        line-height: 15vw;
        font-size: 16px;
        background: #fff
    }
    footer p:nth-of-type(4){
        width: 34.5vw;
        text-align: center;
        line-height: 15vw;
        font-size: 16px;
        background: #bbb
    }
</style>