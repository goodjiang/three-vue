<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import "./assets/font/iconfont.css"

export default {
  
  name: 'App'
}
</script>

<style >
html,body,h1,h2,h3,h4,h5,h6,p,ul,li,ol,dl,dt,dd{
  margin: 0;
  padding: 0;
  
}
li{
    list-style: none;
}
img{
    display: block;
    border: none
}
a{
  text-decoration: none;
  color:#000;
}
</style>
