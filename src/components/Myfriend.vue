<template>
    <div class="myfriend">
        <mt-header fixed title="好友排名">
            <mt-button class="iconfont icon-fanhui" slot="left" @click="back()"></mt-button>
             <mt-button class="iconfont icon-shangchuan" slot="right"></mt-button>
        </mt-header>
        <div class="section">
            <div class="tabBar">
                <router-link to="/myfriendweek" tag="p">本周</router-link>
                 <router-link to="/myfriendmonth" tag="p"  @click="month()">本月</router-link>
            </div>
            <router-view></router-view>
        </div>
    
    <router-link to="myaddfriend" tag="footer">
        <i class="iconfont icon-haoyou"></i>
        <div>
            <span>好友太少没有PK快感？现在就添加</span>
            <em class="iconfont icon-qianjinxiayige"></em>
        </div>
    </router-link>  
    </div>
</template>
<script>
export default {
    name:"Myfriend",
    methods:{
        back(){
            this.$router.push("/my")
        },
        week(){
            console.log("aa")
        },
        month(){
            console.log("bb")
        }
    },
    mounted(){
        
        
    }
}
</script>
<style scoped>
.router-link-active{
    border-bottom: 2px solid #000;
}
.myfriend{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.mint-header{
    height: 50px;
    background: #eee;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
 }
 .iconfont{
    font-size: 24px;
 }
.section{
    flex: 1;
    overflow: auto;
    margin-top: 50px;
    background: #fff;
}
.tabBar{
    height: 54px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid #ddd;
}
.tabBar p{
    line-height: 54px;
    padding: 0 10px;
}
footer{
    height: 50px;
    background: #BDBBBB ;
    display:flex;
    align-items: center;
}
footer>i{
    margin-left: 9px;
}
footer div{
    margin-left: 10px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    align-items: center;
}
</style>
