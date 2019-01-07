<template>
  <div class="hello">
    
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <router-link tag="span" to="/my" class="iconfont icon-weibiaoti-_huabanfuben"> 
        <em>我的</em>
      </router-link>
      <router-link tag="span" to="/train" class="iconfont icon-huojian"> 
        <em>训练</em>
      </router-link>
      <router-link tag="span" to="/vip" class="iconfont icon-xingxing">
        <em>VIP会员</em>
      </router-link>
      <router-link tag="span" to="/find" class="iconfont icon-yanjing"> 
        <em>发现</em>
      </router-link>
      <router-link tag="span" to="state" class="iconfont icon-faxian">
        <em>动态</em>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
html,body,h1,h2,h3,h4,p,ul,li{
  margin: 0;
  padding: 0;
}
.hello{
  height: 100vh;
  display:flex;
  flex-direction: column;

}
section{
  flex: 1;
  overflow: auto;
}
footer{
  height: 50px;
  display: flex;
  justify-content: space-around;
  background: rgba(247, 247, 247, .8);
  
}
footer span{
  margin-top: 5px;
  display: flex;
  height: 40px;
  color: #BDBBBB;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
  text-align: center;
}
footer span .iconfont{
 
  color: #BDBBBB ;

}
footer span em{
  font-style: normal;
  font-size: 12px;
}
.router-link-active{
  color: #101010 ;
}
.iconfont .router-link-active{
  color: #101010 ;
  font-size: 24px;
}

</style>
