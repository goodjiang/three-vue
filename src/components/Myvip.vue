<template>
<div class="myvip">
    <mt-header fixed title="">
        <mt-button class="iconfont icon-fanhui" slot="left" @click="back()"></mt-button>
    </mt-header>
    <div class="section">
        <div class="d-img">
            <img src="./../assets/Videotrain1.jpg" >
        </div>
        <div class="plan">
            <h2></h2>
            <h3>会员专享训练计划</h3>
            <p>基于日程的训练安排</p>
            <p>每日安排好的热身，训练，拉伸</p>
            <p>健身知识，干货</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"Myvip",
    data(){
        return{
            tit:"",
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }

}
</script>

<style scoped="">
.myvip{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.mint-header{
    height: 50px;
    background: #fff;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
}
.iconfont{
    font-size: 24px;
}
.section{
    flex: 1;
    margin-top: 50px;   
}
.d-img{
    display: flex;
    align-items: center;
    justify-content: center;
}
.d-img>img{
    height: 100%;
    width: 100%;
    
}
.plan{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.plan>h2{
    width: 40px;
    height: 3px;
    background-color: rgba(68, 68, 68, 1);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);

}
.plan>h3{
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Arial-regular;
    line-height: 36px;
}
.plan>p{
    
    line-height: 24px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: center;
    font-family: Arial-regular;

}
</style>
