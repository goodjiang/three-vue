<template>
    <div>
         <mt-header title="分类商品" style="background:#fff;border-bottom:1px solid #bbb;height:6vh;color:#101010;height:7vh">
            <mt-button icon="back" slot="left" @click="btn1()"></mt-button> 
             <mt-button class="iconfont icon-gouwucheman" slot="right" @click="btn2()" style="font-size:20px"></mt-button> 
        </mt-header>
        <section>
             <div class="sp1">
                <div v-for="(itme,i) in arr" :key="i">
                    <span>
                        <router-link :to="{name:'detail',query:{img:arr[i].list.pic,name:arr[i].list.itemName,price:arr[i].list.promotionPrice}}"><img :src="arr[i].list.pic" alt=""></router-link>
                        <p>{{arr[i].list.itemName}}</p>
                        <p>￥：{{arr[i].list.promotionPrice}}</p>
                    </span>    
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name:"Leixing",
    data() {
        return {
            arr:[]
        }
    },
    methods: {
        btn1(){
            this.$router.go(-1)
        },
        btn2(){
            this.$router.push("/cart")
        }
    },
     mounted() {
        var _this = this;
        axios({
            method:"get",
            url:"http://www.baidu.com"
        }).then(function(data){
            _this.arr = data.data.users
          
        })
    }
}
</script>
<style scoped="">
.sp1 span{
        width: 45vw;
        height: 60vw;
        float: left;
        margin-left: 3vw;
    }
    .sp1 img{
        width: 45vw;
        height: 45vw;
    }
    .sp1 p:nth-of-type(1){
        font-size: 12px;
        color: #101010;
        line-height: 20px
    }
    .sp1 p:nth-of-type(2){
        font-size: 16px;
        color: #101010;
        line-height: 20px;
        margin-top: 5px
    }
    section{
        height: 93vh;
        overflow-y: auto;
    }
</style>
