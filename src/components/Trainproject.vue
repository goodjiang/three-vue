<template>
    <div>
        <header >
            <mt-header title="选择训练计划">
                <span slot="left" @click="btn1()" style="font-size:25px">
                   &lt;
                </span>
            </mt-header>
        </header>
        <footer>
            <div>
                <ul>
                    <li><p>7天男士精装健体计划</p></li>
                    <li><p>28天塑形减脂计划</p></li>
                    <li><p>28天蜜桃臀养计划</p></li>
                    <li><p>28天瘦腿塑形计划</p></li>
                    <li>
                        <p class="huiyuan">即刻开通会员&gt;</p>
                        <p class="jiesuo">解锁全部训练计划及精品训练！</p>
                    </li>
                </ul>
            </div>
           
        </footer>
    </div>
</template>
<script>
export default {
    name:"Videotrain",
    methods:{
        btn1(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped="">
    footer{   
        width: 96vw;
        margin-left: 2vw;
        margin-top: 2vw;
        overflow: hidden;
    }
    footer div{
        height: 92vh;
        overflow-y: auto;
    }
    footer div::-webkit-scrollbar {display:none}
    footer ul li{
        width: 100%;
        margin-bottom: 2vh;
        height: 125px;
        overflow: hidden;
    }
    footer ul li:nth-of-type(1){
         background: url(../assets/Videotrain1.jpg) ;
         background-size: 100% 125px;
    }
    footer ul li:nth-of-type(2){
         background: url(../assets/Videotrain2.jpg) ;
         background-size: 100% 125px;
    }
    footer ul li:nth-of-type(3){
         background: url(../assets/Videotrain3.jpg) ;
         background-size: 100% 125px;
    }
    footer ul li:nth-of-type(4){
         background: url(../assets/Videotrain4.jpg) ;
         background-size: 100% 125px;
    }
     footer ul li:nth-of-type(5){
         background: url(../assets/Videotrain4.jpg) ;
         background-size: 100% 125px;
    }
    footer ul li p{
        margin-top:10vh;
        margin-left: 25vw;
        font-size: 14px;
        color: #101010;
        font-weight: 700
    }
    .jiesuo{
        margin-top: 2vw;
        margin-left: 25vw;
        font-size: 12px;
        color: #101010;
        font-weight: 700
    }
</style>
