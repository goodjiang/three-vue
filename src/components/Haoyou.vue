<template>
    <div>
        <mt-header title="添加好友" style="background:#fff;border-bottom:1px solid #bbb;height:6vh;color:#101010">
            <mt-button icon="back" slot="left" @click="btn1()"></mt-button> 
        </mt-header>

        <section>
        <div class="pic">
            <img src="../assets/haoyou1.png" alt="">
        </div>
        <div class="name">
            <div class="name-top">
                <div class="name-top-left">
                    <span><img src="../assets/tuijian8.jpg" alt=""></span>
                    <span>
                        <p>我在海南遇见你</p>
                        <p>一个小时前</p>
                    </span>
                </div>
                <div class="name-top-right">
                    +关注
                </div>
            </div>
            <p>
                <img src="../assets/tuijian6.jpg" alt="">
                <img src="../assets/tuijian7.jpg" alt="">
                <img src="../assets/tuijian8.jpg" alt="">
            </p>    
        </div>

        <div class="name">
            <div class="name-top">
                <div class="name-top-left">
                    <span><img src="../assets/tuijian8.jpg" alt=""></span>
                    <span>
                        <p>我在海南遇见你</p>
                        <p>一个小时前</p>
                    </span>
                </div>
                <div class="name-top-right">
                    +关注
                </div>
            </div>
            <p>
                <img src="../assets/tuijian6.jpg" alt="">
                <img src="../assets/tuijian7.jpg" alt="">
                <img src="../assets/tuijian8.jpg" alt="">
            </p>    
        </div>


        <div class="name">
            <div class="name-top">
                <div class="name-top-left">
                    <span><img src="../assets/tuijian8.jpg" alt=""></span>
                    <span>
                        <p>我在海南遇见你</p>
                        <p>一个小时前</p>
                    </span>
                </div>
                <div class="name-top-right">
                    +关注
                </div>
            </div>
            <p>
                <img src="../assets/tuijian6.jpg" alt="">
                <img src="../assets/tuijian7.jpg" alt="">
                <img src="../assets/tuijian8.jpg" alt="">
            </p>    
        </div>


        <div class="name">
            <div class="name-top">
                <div class="name-top-left">
                    <span><img src="../assets/tuijian8.jpg" alt=""></span>
                    <span>
                        <p>我在海南遇见你</p>
                        <p>一个小时前</p>
                    </span>
                </div>
                <div class="name-top-right">
                    +关注
                </div>
            </div>
            <p>
                <img src="../assets/tuijian6.jpg" alt="">
                <img src="../assets/tuijian7.jpg" alt="">
                <img src="../assets/tuijian8.jpg" alt="">
            </p>    
        </div>


        <div class="name">
            <div class="name-top">
                <div class="name-top-left">
                    <span><img src="../assets/tuijian8.jpg" alt=""></span>
                    <span>
                        <p>我在海南遇见你</p>
                        <p>一个小时前</p>
                    </span>
                </div>
                <div class="name-top-right">
                    +关注
                </div>
            </div>
            <p>
                <img src="../assets/tuijian6.jpg" alt="">
                <img src="../assets/tuijian7.jpg" alt="">
                <img src="../assets/tuijian8.jpg" alt="">
            </p>    
        </div>
        </section>
    </div>
</template>
<script>
export default {
    name:"Haoyou",
     methods: {
        btn1(){
            this.$router.go(-1)
        }    
    },
}
</script>
<style scoped="">
section{
    flex: 1;
    overflow-y: auto;
    height: 95vh;
}
    .pic img{
        height: 70vh;
        width: 100vw;
    }
    .name{
        width: 100vw;
        background: #fff;
        margin-top:20px; 
        overflow: hidden;
        margin-bottom: 20px;
    }
    .name-top{
        height: 70px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        width: 94vw;
        margin: 10px auto;
    }
    .name-top-left{
        width: 60vw;
    }
    .name-top-right{
        width: 20vw
    }
    .name-top-left img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-block;
        float: left;
    }
    .name-top-left span:nth-of-type(2){
        float: left;
         margin-left: 15px;
    }
    .name-top-left span:nth-of-type(2) p:nth-of-type(1){
        font-size: 14px;
        color: #101010;
        margin-top: 10px;
       
    }
    .name-top-left span:nth-of-type(2) p:nth-of-type(2){
        font-size: 12px;
        color: #9b9b9b;
        margin-left: 5px;

    }
    .name-top-right{
        width: 58px;
        height: 22px;
        border: 1px solid #bbb;
        font-size: 12px;
        text-align: center;
        line-height: 22px;
        margin-top: 15px;
    }
   
    .name>p{
        display: flex;
        justify-content: space-around;

        margin: 0 auto
    }
    .name>p img{
        width: 30vw;
        height: 30vw;
    }
   
</style>
