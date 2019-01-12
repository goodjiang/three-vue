<template>
    <div >
       <div id="header">
        <mt-header fixed :title="tit">
            <mt-button class="iconfont icon-fanhui" slot="left" @click="back()"></mt-button>
            <mt-button  slot="right" >服务协议</mt-button>
        </mt-header>
            <!-- text -->
        <div class="text">
            <p>该协议是阿萨德识破倒数第实在困了就想着超级玛丽啊破机子了自己从偏大大撒到车站洒出。</p>
        </div>
    </div>
    <ul class="pay-list">
        <li @click="classpay()">
            开通会员
        </li>
        <li @click="planpay()">
            购买训练计划
        </li>
    </ul>
    <div class="section">
        <router-view></router-view>
    </div>
    
    </div>
  
</template>

<script>


export default {
name:"Vipclasspay",
data(){
    return{
        tit:"",
        data(){
            tableList:[{
                name:"classpay",
                path:"/classpay"
            },
            {
                name:"planpay",
                path:"/planpay"
            }]
        }
    }
},
methods:{
    back(){
        this.$router.go(-1)
    },
    planpay(){
        this.$router.push("/planpay")
    },
    classpay(){
        this.$router.push("/classpay")
    }
}
}
</script>

<style scoped>
.classpay{
    height: 100vh;
    display: flex;
    flex-direction: column;
}

#header{
    height: 160px;
  
}
.text{
    margin-top: 40px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text>p{
    width: 260px;
    height: 90px;
    line-height: 20px;
    color: rgba(136, 136, 136, 1);
    font-size: 14px;
    text-align: left;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(255, 255, 255, 0);
}
.pay-list{
    height: 50px;
    text-align: center;
    display: flex;
    line-height: 50px;

}
.pay-list li{
    width: 50%;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.pay-list li:nth-of-type(2){
    border-right: none;
    border-left: 1px solid #ccc;
}
.section{
    flex: 1;
    overflow: auto;
}
</style>
