<template>
    <div id="shangcheng">
        <header>
           <span class="touxiang">头像</span>
           <router-link to="/jingxuan" tag="span">精选</router-link>
           <router-link to="/video" tag="span" >视频</router-link>
           <router-link to="/shangcheng" tag="span" >商城</router-link>
           <span class="iconfont icon-sousuo"></span>
        </header>
        <section>
           
                <mt-swipe :auto="4000" class="banner">
                    <mt-swipe-item><img src="../assets/Videotrain1.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/Videotrain2.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/Videotrain3.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/Videotrain4.jpg" alt=""></mt-swipe-item> 
                </mt-swipe>
        
            <nav>
                <p>
                    <i class="iconfont icon-fushi"></i>
                    <span>运动服饰</span>
                </p>
                <p>
                    <i class="iconfont icon-huwaizhuangbei"></i>
                    <span>运动装备</span>
                </p>
                <p>
                    <i class="iconfont icon-shipin"></i>
                    <span>健康食品</span>
                </p>
            </nav>

            <mt-header style="background:#fff;position:static">
                <span slot="left" style="font-size=16px;color:#8e8e8e;">精选好货</span>
                <mt-button icon="more" slot="right" style="color:#8e8e8e;margin-right:5px;"></mt-button>
            </mt-header>
            <div class="nav">  
                <div class="nav1">
                    <span></span>
                    <span></span>
                 </div>
            </div>  

            <mt-header style="background:#fff;position:static">
                <span slot="left" style="font-size=16px;color:#8e8e8e;">热门推荐</span>
            </mt-header>
             <div class="sp1">
                <div v-for="(itme,i) in arr" :key="i">
                    <span>
                        <router-link :to="{name:'detail',query:{id:arr[i].gId,gid:arr[i].gradeId}}"><img :src="arr[i].imgUrl" alt=""></router-link>
                        <p>{{arr[i].gName}}</p>
                        <p>￥：{{arr[i].gPrice}}</p>
                    </span>    
                </div>
            </div>
            <mt-header style="background:#fff;position:static">
                <span slot="left" style="font-size=16px;color:#8e8e8e;">运动服饰</span>
                <mt-button  slot="right" style="color:#8e8e8e;margin-right:5px;" @click="btn2()">更多</mt-button>
            </mt-header>
            <div class="sp1">
                <div v-for="(itme,i) in arr1" :key="i">
                    <span>
                        <router-link :to="{name:'detail',query:{id:arr1[i].gId,gid:arr1[i].gradeId}}"><img :src="arr1[i].imgUrl" alt=""></router-link>
                        <p>{{arr1[i].gName}}</p>
                        <p>￥：{{arr1[i].gPrice}}</p>
                    </span>    
                </div>
            </div>
            <mt-header style="background:#fff;position:static">
                <span slot="left" style="font-size=16px;color:#8e8e8e;">运动装备</span>
                <mt-button  slot="right" style="color:#8e8e8e;margin-right:5px;" @click="btn2()">更多</mt-button>
            </mt-header>
            <div class="sp1">
                <div v-for="(itme,i) in arr2" :key="i">
                    <span>
                        <router-link :to="{name:'detail',query:{id:arr2[i].gId,gid:arr2[i].gradeId}}"><img :src="arr2[i].imgUrl" alt=""></router-link>
                        <p>{{arr2[i].gName}}</p>
                        <p>￥：{{arr2[i].gPrice}}</p>
                    </span>    
                </div>
            </div>
            <mt-header style="background:#fff;position:static">
                <span slot="left" style="font-size=16px;color:#8e8e8e;">运动健康</span>
                <mt-button  slot="right" style="color:#8e8e8e;margin-right:5px;" @click="btn2()">更多</mt-button>
            </mt-header>
            <div class="sp1">
                <div v-for="(itme,i) in arr" :key="i">
                    <span>
                        <router-link :to="{name:'detail',query:{id:arr[i].gId,gid:arr[i].gradeId}}"><img :src="arr[i].imgUrl" alt=""></router-link>
                        <p>{{arr[i].gName}}</p>
                        <p>￥：{{arr[i].gPrice}}</p>
                    </span>    
                </div>
            </div> 
        </section>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"Shangcheng",
    data() {
        return {
            arr:[],
            arr1:[],
            arr2:[]
        }
    },
    methods: {
        btn1(){
            
        },
        btn2(){
            this.$router.push("/leixing")
        }
    },
    mounted() {
        var _this = this;
        axios({
            method:"get",
            url:"http://10.8.155.35:8080/healthyFood.do"
            
        }).then(function(data){
            _this.arr = data.data.data[0].goods
            console.log(_this.arr)
        })
        axios({
            method:"get",
            url:"http://10.8.155.35:8080/sportsWear.do"
        }).then(function(data){
            _this.arr1 = data.data.data[0].goods
        })
        axios({
            method:"get",
            url:"http://10.8.155.35:8080/equipment.do"
        }).then(function(data){
            _this.arr2 = data.data.data[0].goods
        })
       
    }
}
</script>
<style scoped="">
 #shangcheng{
        height: 100vh;
        display:flex;
        flex-direction: column;

    }
    header{
        height: 50px;
        background: pink;
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        color: #fff;
        width: 100vw;
        z-index: 555;
        position: absolute;
    }
    header span{
         width: 60px;
          text-align: center;
    }
    .icon-sousuo{
        font-size: 23px;
        margin-right: 10px;
        text-align: right;
    }
    .touxiang{
        margin-left: 10px;
        text-align: left
    }
    .router-link-active{
        border-bottom: 5px solid #000;
    }
    section{
        flex: 1;
        background: #eee;
        margin-top: 50px;
    }
    .banner{
        height: 200px;
    }
    .banner img{
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
        width: 143vw;
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
    .nav span:nth-of-type(1) p:nth-of-type(1),.nav span:nth-of-type(2) p:nth-of-type(1){
        margin: 20px 50px 0 ;
        font-size: 16px;
        text-align: center;
    }
    .nav span:nth-of-type(1) p:nth-of-type(2),.nav span:nth-of-type(2) p:nth-of-type(2){
        margin:5px 50px 0  ;
        font-size: 14px;
        text-align: center
    }
    .sp1 span{
        width: 45vw;
        height: 60vw;
        float: left;
        margin-left: 3vw;
    }
    .sp1 img{
        width: 45vw;
        height: 45vw;
    }
    .sp1 p:nth-of-type(1){
        font-size: 12px;
        color: #101010;
        line-height: 20px
    }
    .sp1 p:nth-of-type(2){
        font-size: 16px;
        color: #101010;
        line-height: 20px;
        margin-top: 5px
    }
    .nav2{
        background: #fff;
        margin-top: 20px;
    }
    .nav2-top{
        height: 40px;
        width: 96vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
    }
    .nav2-top sapn:nth-of-type(1){
        display: inline-block;
        font-size: 16px;
        color: #8e8e8e;
    }
    .nav2-top sapn:nth-of-type(2){
        font-size: 14px;
        color: #8e8e8e;
    }
</style>
