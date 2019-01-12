<template>
    <div>
        <section>
            <input type="text" placeholder="手机号/邮箱" v-model="username">
            <div class="register">
                <input type="text" placeholder="验证码" v-model="yzm"/>
                <input type="button" value="获取验证码" @click="btn2()"/>
            </div>
            <input type="text" placeholder="密码(6位或以上)"  v-model="password">
            <input type="button" value="注册" @click="btn1()">

        </section>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Register",
    data() {
        return {
            username:"",
            password:"",
            yzm:""
        }
    },
    methods: {
        btn1(){
            var _this=this;
            axios({
                method:"post",
                url:"http://10.8.155.35:8080/register.do",
                params:{username:_this.username,password:_this.password,code:_this.yzm}
            }).then((data)=>{
                console.log(data.data)
                if(data.data.code==0){
                    alert("注册成功")
                     this.$router.push("/login")
                }else{
                    alert("你的账号已被注册")
                }
               
            })
        },
        btn2(){
            var _this=this;
            axios({
                method:"get",
                url:"http://10.8.155.35:8080/code.do",
                params:{username:_this.username}
            }).then((data)=>{
                //console.log(data.data)
            })
        }
    },
    mounted() {
        
    },
}
</script>
<style scoped="">
section{
    margin: 0 auto;
    width: 80vw;
}
    input{
        height: 50px;
        border: none;
        outline:none;
       
        display: block;
        border-bottom: 1px solid #bbb;
    }
    input:nth-of-type(1),p,input:nth-of-type(2){
        width: 80vw;
        
        display: inline-block;
    }
     .register{
        height: 52px;
        display: flex;
    }
    .register input:nth-of-type(1){
        width: 50vw;
        height: 100%;
        height: 49px;
    }
   
    .register input:nth-of-type(2){
        width: 30vw;
        display: inline-block;
        margin: 0;
        border: 0;
        height: 52px;
        font-size: 14px;
        color: #ccc;
        background: #fff;
        border-bottom: 1px solid #bbb;
    }
    input:nth-of-type(3){
         width: 80vw;
         margin-top: 30px;
         border:none;
         background: #bbb
    }
</style>
