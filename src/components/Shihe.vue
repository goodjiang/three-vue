<template>
    <div>
        <span  @click="btn1()" class="iconfont icon-zuojiantou"></span>
        <div class="shihe1">
            <p>1.什么人适合参加？</p>
            <p>有强烈减脂需求的人，无健身经验但用于常识，且能坚持的人；有健身经验常识运动课程的人。</p>
        </div>
        <div class="shihe2">
            <p>2.有地域限制限制吗？</p>
            <p>有强烈减脂需求的人，无健身经验但用于常识，且能坚持的人；有健身经验常识运动课程的人。</p>
        </div>
        <div class="shihe2">
            <p>3.曾有过运动疾病/损伤，可以参加吗？？</p>
            <p>有强烈减脂需求的人，无健身经验但用于常识，且能坚持的人；有健身经验常识运动课程的人。</p>
        </div>
        <div class="shihe2">
            <p>4.没有健身经验可以参加吗？</p>
            <p>有强烈减脂需求的人，无健身经验但用于常识，且能坚持的人；有健身经验常识运动课程的人。</p>
        </div>
        <div class="shihe2">
            <p>5.是否需要去健身房？</p>
            <p>有强烈减脂需求的人，无健身经验但用于常识，且能坚持的人；有健身经验常识运动课程的人。</p>
        </div>
        <i class="iconfont icon-Group-" @click="btn2()"></i>
    </div>
</template>
<script>
export default {
    name:"Shihe",
    data() {
        return {
            
        }
    },methods: {
        btn1(){
            this.$router.go(-1)
        },
        btn2(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped="">
    .icon-zuojiantou{
        width: 30px;
        height: 30px;
        border: 1px solid #bbb;
        border-radius: 50%;
        position: fixed;
        top: 15px;
        left: 15px;
        text-align: center;
        line-height: 30px;
        font-size: 15px
    }
    .shihe1{
        width: 90vw; 
        margin: 0 auto;
        margin-top: 80px;
    }
    .shihe1 p:nth-of-type(1),.shihe2 p:nth-of-type(1){
        font-weight: 800;
        font-size: 14px;
    }
    .shihe1 p:nth-of-type(2), .shihe2 p:nth-of-type(2){
        font-size: 12px;
        margin: 5px 0 0 15px
    }
    .shihe2{
        width: 90vw;  
        margin: 0 auto;
        margin-top: 40px;
    }
    i{
        width: 30px;
        height: 30px;
        margin-top: 50px;
        display: block;
        margin: 70px auto;
        font-size: 30px;
        text-align: center;
    }
</style>
