<template>
    <section>
        <mt-swipe :auto="4000" class="jingxuan">
            <mt-swipe-item><img src="../assets/Videotrain1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/Videotrain2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/Videotrain3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/Videotrain4.jpg" alt=""></mt-swipe-item> 
        </mt-swipe>
        <mt-header style="background:#fff;position:static">
                <span slot="left" style="font-size=16px;color:#8e8e8e;">热门话题</span>
                <mt-button  slot="right" style="color:#8e8e8e;margin-right:5px;">查看更多<i class="iconfont icon-youjiantou"></i></mt-button>
            </mt-header>
            <div class="nav">  
                <div class="nav1">
                    <span></span>
                    <span></span>
                 </div>
            </div>  
        <mt-header style="background:#fff;position:static;margin-top:10px">
                <span slot="left" style="font-size=16px;color:#8e8e8e;">精彩活动</span>
                <mt-button  slot="right" style="color:#8e8e8e;margin-right:5px;">查看更多<i class="iconfont icon-youjiantou"></i></mt-button>
            </mt-header>
            <div class="nav2">
                <img src="../assets/tuijian1.jpg" alt="">
            </div>

             <mt-header style="background:#fff;position:static;margin-top:10px">
                <span slot="left" style="font-size=16px;color:#8e8e8e;">每日视频</span>
                <mt-button  slot="right" style="color:#8e8e8e;margin-right:5px;">查看更多<i class="iconfont icon-youjiantou"></i></mt-button>
            </mt-header>
            <div class="nav2">
                <img src="../assets/tuijian2.jpg" alt="">
            </div>
    </section>
</template>
<script>
export default {
    name:"Jingxuan"
}
</script>
<style scoped="">
     section{
         height:95vh ;
        flex: 1;
        margin-top: 50px;
        background: #eee;
        overflow-y: auto
    }
    .jingxuan{
        height: 200px;
    }
    .jingxuan img{
        height: 200px;
        width: 100vw;
    }
     nav{
        height: 80px;
        background: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        overflow: hidden;
    }
    nav p{
        display: flex;
        flex-direction: column;
        text-align: center
    }
    nav p i{
        font-size: 25px;
        line-height: 30px;
        margin-top: 20px;
    }
    nav p span{
        font-size: 14px
    }
    .nav{
        height: 104px;
        overflow: auto;
        width: 100vw;
    
    }
    .nav1{
        overflow-x: scroll;
        width: 142vw;
    }
    .nav span{
        height:100px;
        width: 70vw;
        display: inline-block;
    }
    .nav span:nth-of-type(1){
        background: url(../assets/shangcheng1.jpg);
        background-size:cover; 
    }
    .nav span:nth-of-type(2){
        background: url(../assets/shangcheng2.jpg);
        background-size:cover; 
    }
   .nav2 img{
       height: 130px;
       width: 100vw
   }
</style>
