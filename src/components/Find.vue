<template>
    <div id="find">
       <header>
           <span class="touxiang">头像</span>
           <router-link to="/jingxuan" tag="span">精选</router-link>
           <router-link to="/video" tag="span" >视频</router-link>
           <router-link to="/shangcheng" tag="span" >商城</router-link>
           <span class="iconfont icon-sousuo"></span>
        </header>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>
<script>
export default {
    name:"Find"
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
