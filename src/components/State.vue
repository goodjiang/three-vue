<template>
    <div id="find">
       <header>
           <span class="touxiang">头像</span>
           <router-link to="/tuijian1" tag="span">推荐</router-link>
           <router-link to="/guanzhu" tag="span" >关注</router-link>
           <router-link to="/fujin" tag="span" >附近</router-link>
           <span class="iconfont icon-tianjiahaoyou" style="font-size:35px" @click="btn1()"></span>
        </header>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>
<script>
export default {
    name:"State",
    methods: {
        btn1(){
            this.$router.push("/haoyou")
        }
    },
}
</script>
<style scoped="">
    #find{
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
         position: fixed;
        width: 100vw;
        z-index: 99;
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
    }
</style>
