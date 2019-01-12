<template>
    <div>
        <mt-header title="视频介绍" style="background:#fff;border-bottom:1px solid #bbb;height:6vh;color:#101010">
            <mt-button icon="back" slot="left" @click="btn1()"></mt-button> 
        </mt-header>
        <img src="../assets/tuijian3.jpg" alt="">
        <p>锻炼肌肉</p>
        <img src="../assets/video1.png" alt="">
    </div>
</template>
<script>
export default {
    name:"Video1",
    methods: {
        btn1(){
            this.$router.go(-1)
        }    
    },
}
</script>
<style scoped="">

img:nth-of-type(1){
    width: 100vw;
    height: 30vh;
    margin-top: 10px
}
p{
    font-size: 5vw;
    line-height: 5vw;
    margin: 1vh 0 1vh 3vw;
}
img:nth-of-type(2){
    width: 100vw;
    height: 56vh;
}
</style>
