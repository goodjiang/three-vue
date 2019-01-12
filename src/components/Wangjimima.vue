<template>
    <div>
        <i class="iconfont icon-zuojiantou" @click="btn1()"></i>
        <p>忘记密码</p>
        <section>
            <input type="text" placeholder="手机号/邮箱">
            <div class="register">
                <input type="text" placeholder="验证码"/>
                <input type="button" value="获取验证码"/>
            </div>
            <input type="text" placeholder="设置新密码(6位或以上)" >
            <input type="button" value="确定">

        </section>
    </div>
</template>
<script>
export default {
    name:"Register",
    methods: {
        btn1(){
            this.$router.go(-1)
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
    i{
        font-size:15px;
        margin: 20px;
        display: block;
    }
    p{
        text-align: center;
        font-size: 18px;
        margin: 10px;
        margin-bottom: 50px;
    }
</style>
