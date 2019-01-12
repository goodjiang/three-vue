<template>
    <div>
        <section>
            <input type="text" placeholder="手机号/邮箱" v-model="username">
           
            <input type="text" placeholder="密码(6位或以上)"  v-model="password">
            <input type="button" value="登录" @click="btn2()">
            <p @click="btn1()">忘记密码</p>
        </section>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"Login",
    data() {
        return {
            username:"",
            password:"",
            token:""
            
        }
    },
    methods: {
        
        btn1(){
            this.$router.push("/wangjimima")
        },
        btn2(){
            var _this = this;
            axios({
                method:"post",
                url:"http://10.8.155.35:8080/login.do",
                params:{username:_this.username,password:_this.password}
            }).then((data)=>{
                console.log(data)
                if(data.data.code==1){
                    alert("用户名或者密码错误")
                }else{
                    console.log("登陆成功，进入首页")
                    _this.token=data.data.data.token.id
                    this.$store.commit('cun',_this.token)
                    this.$router.push("/tuijian")
                }
            })
            
        }

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
    input:nth-of-type(1),input:nth-of-type(2){
        width: 80vw;
        
        display: inline-block;
    }
 
    input:nth-of-type(3){
         width: 80vw;
         margin-top: 30px;
         border:none;
         background: #bbb
    }
    p{
        text-align: center;
        font-size: 14px;
        color: #101010;
        margin-top: 20px;
    }
</style>
