<template>
    <div>
        <header>
            <router-link to="/register" tag="span">注册</router-link>
            <router-link to="/login" tag="span">登录</router-link>
        </header>
        
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"Yonghu1"
}
</script>
<style scoped="">
header{
    width: 60vw;
    height: 40px;
    margin: 50px auto;
    display: flex;
    justify-content: space-around
}
    span{
        width: 20vw;
        font-size: 26px;
        text-align: center;
        display: inline-block;
    }
    .router-link-active{
        border-bottom: 3px solid #000;
        
    }
</style>
