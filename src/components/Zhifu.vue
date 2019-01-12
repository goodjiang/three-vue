<template>
    <div>
         <mt-header title="支付页面" style="background:#fff;border-bottom:1px solid #bbb;height:6vh;color:#101010;height:7vh">
            <mt-button icon="back" slot="left" @click="btn1()"></mt-button> 
        </mt-header>
        <img src="../assets/zhifu1.png" alt="">
    </div>
</template>
<script>
export default {
    name:"Zhifu",
    methods: {
        btn1(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped="">
img{
    width: 100vw;
    height: 91vh;
}
</style>
