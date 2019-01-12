<template>
    <div>
        <mt-header style="height:6vh;background:#fff;border-bottom:1px solid #bbb;">
            <span slot="left" class="iconfont icon-zuojiantou" style="color:#101010" @click="btn1()"></span>
        </mt-header>
        <section>
            <p>手机号</p>
            <mt-field label="手机号" placeholder="请输入手机号"></mt-field>
            <p>订单信息</p>
            <p><span>订单金额:</span><span>￥1099</span></p>
           <mt-radio
                        align="right"
                        v-model="value"
                        :options="options">
            </mt-radio>
            <p><input type="checkbox" ><span>我已经阅读并同意 用户协议、退款协议和病患须知</span></p>
            <span class="baoming">确认报名</span>
        </section>
    </div>
</template>
<script>
export default {
    name:"Baoming",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    data() {
        return {
            value:"",
            options:[]
          
        }
    },
    methods: {
        btn1(){
            this.$router.go(-1)
        }
    },
    mounted() {
        var label=document.getElementsByTagName("label")[0];
        label.style.display="none"; 
        var _this = this;
        _this.options = [
        {
            label: '微信',
            value: 'valueA'
        },
        {
            label: '支付宝',
            value: 'valueB'
        }
        ];    
    },
}
</script>
<style scoped="">
section{
    height: 94vh;
    flex: 1;
    background: #eee;
}
section p{
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #827d7d;
}
section p:nth-of-type(3){
    background: #fff;
    border-bottom: 1px solid #ccc;
}
section p:nth-of-type(3) span:nth-of-type(1){
    float: left;
    margin-left:20px; 
    color: #101010;
    font-size: 14px;
}
section p:nth-of-type(4){
    background: #fff;
    font-size: 12px;
    color: #827D7D ;
}
.baoming{
    width: 331px;
    height: 40px;
    background: #009688;
    color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    display: block;
    margin: 50px auto
}
</style>
