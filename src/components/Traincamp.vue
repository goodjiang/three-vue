<template>
    <div>
        <header>
            <mt-header title="训练营" style="font-size:18px">
                <span slot="left" @click="btn2()" style="font-size:28px"> &lt;</span>
                <span slot="left" @click="btn2()" style="font-size:28px;margin-left:10px">×</span>
            </mt-header>
        </header>
        <div class="work">

        
            <mt-swipe :auto=4000 style="height:20vh;width:100vw">
                <mt-swipe-item><img src="../assets/camp1.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/camp2.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/camp3.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
          <div class="camp">
              <p @click="btn1()">翘臀马甲线></p>
          </div>
          <div class="camp">
              <p @click="btn1()">专家服务班></p>
          </div>
          <div class="camp">
              <p @click="btn1()">专家定制班></p>
          </div>
          <div class="camp">
              <p @click="btn1()">自学辅导班></p>
          </div>
          <div class="camp">
              <p @click="btn1()">产后恢复班></p>
          </div>
          <div class="camp">
              <p @click="btn1()">翘臀马甲线></p>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Traincamp",
    methods: {
        btn1(){
            this.$router.push("/xly")
        },
        btn2(){
            this.$router.push("/train")
        }
    },
}
</script>
<style scoped="">
    header{
        height: 5vh;
    }
    .work{
        height: 95vh;
        overflow-y: auto;
    }
    .mint-swipe img{
        width: 100vw;
        height: 20vh;
    }
    .camp{
        height: 195px;
        width: 100vw;
        margin-top: 10px;
        background: url(../assets/Videotrain4.jpg) no-repeat;
        background-size: 100vw 195px;
        overflow: hidden;
    }
    .camp p{
        font-size: 14px;
        color: #101010;
        margin: 20px 17px;
    }
</style>
