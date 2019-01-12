<template>
    <div class="wrap">
        <mt-header title="地址管理" style="background:#fff;border-bottom:1px solid #bbb;height:6vh;color:#101010">
            <mt-button icon="back" slot="left" @click="btn1()"></mt-button> 
        </mt-header>
        <div v-for="(item,i) in arr" :key="i" class="adress">
            <p>
                <span >{{item.email1}}</span>
                <span>{{item.email2}}</span>
            </p>
            <p>地址:{{item.email3}}{{item.email4}}</p>
            <p>
                <span @click="btn3(i)">设为默认</span>

                <span @click="del(i)"><i class="iconfont icon-shanchu"></i><span>删除</span></span>
            </p>
        </div>
        <footer @click="btn2()">添加新地址</footer>

    </div>
</template>
<script>

import axios from 'axios';
export default {
    name:"Adress",
    data() {
        return {
           str:[],
           list:[],
           arr:[],
        }
    },
    methods: {
        btn1(){
            this.$router.go(-1)
        },
        btn2(){
            this.$router.push("/addadress")
        },
        del(i){
            this.$store.dispatch( 'delUser' , i )
        },
        btn3(i){
            var key =event.target.getAttribute("key");
            this.$store.commit('select',i*1+1);
            this.$router.go(-1);
        }
    },
    mounted(){
      this.str=this.$store.state.users;
    for(let i in this.$store.state.users){
        this.arr.push(this.$store.state.users[i]);
    }
    console.log(this.arr);
    }
}
</script>
<style scoped="">
footer{
    height:50px ;
    text-align: center;
    line-height: 50px;
    margin-top: 20px;
    background: #eee; 
}
.adress{
    background: #eee;
    height: 120px;
    color: #101010;
    margin-bottom: 10px;
}
.adress p:nth-of-type(1){
    width: 94vw;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    font-size: 14px;
    line-height: 40px;
}
.adress p:nth-of-type(2){
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
    margin-left: 3vw;
}
.adress p:nth-of-type(3){
    height: 19px;
    display: flex;
    border-top: 1px solid #bbb;
    justify-content: space-between;
    padding: 0 20px;
    height: 50px;
    align-items: center;
}
.adress p:nth-of-type(3) span:nth-of-type(2) span{
    margin-left: 10px;
}
</style>
