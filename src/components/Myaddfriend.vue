<template>
    <div class="myaddfriend">
        <mt-header fixed title="添加好友">
            <mt-button class="iconfont icon-fanhui" slot="left" @click="back()"></mt-button>
        </mt-header>
        <div class="section">
            <!-- 搜索 -->
            <div class="search">
                <span class="iconfont icon-sousuo"></span>
                <input type="text"  placeholder="搜索FITtim" v-model="ipt"/>
            </div>
            <!-- 添加好友 -->
            <div class="add">
                <dl>
                    <dt>
                        <em class="iconfont icon-dianhua"></em>
                    </dt>
                    <dd>
                        <h6>连接通讯录</h6>
                        <p>发现通讯录好友</p>
                    </dd>
                </dl>
                 <dl>
                    <dt>
                        <em class="iconfont icon-weibo"></em>
                    </dt>
                    <dd>
                        <h6>连接通讯录</h6>
                        <p>发现通讯录好友</p>
                    </dd>
                </dl>
                 <dl>
                    <dt>
                        <em class="iconfont icon-weixin-copy"></em>
                    </dt>
                    <dd>
                        <h6>连接通讯录</h6>
                        <p>发现通讯录好友</p>
                    </dd>
                </dl>
                 <dl>
                    <dt>
                        <em class="iconfont icon-qq"></em>
                    </dt>
                    <dd>
                        <h6>连接通讯录</h6>
                        <p>发现通讯录好友</p>
                    </dd>
                </dl>
            </div>
            <!--推荐  -->
            <div class="know">
                <h3>你可能认识</h3>
                <ul>
                    <li v-for="item in arr" class="item-li">
                        <img class="head-img" src="./../assets/tuijian1.jpg"/>
                        <div class="d-item">
                            <span class="d-span">悠游</span>
                            <p class="d-p">
                                <span class="p-span">附近用户</span>
                                <a href="javascript:viod(0)" class="a-btn">+关注</a>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <!--FitTime推荐  -->
            <div class="fit">
                <h3>FitTime推荐</h3>
                <dl v-for="item in arr">
                    <dt class="item-li">
                        <img class="head-img" src="./../assets/tuijian1.jpg"/>

                         <div class="d-item">
                            <span class="d-span">悠游</span>
                            <p class="d-p">
                                <span class="p-span">附近用户</span>
                                <a href="javascript:viod(0)" class="a-btn">+关注</a>
                            </p>
                        </div>
                    </dt>
                    <dd>
                        <img src="./../assets/tuijian2.jpg" />
                        <img src="./../assets/tuijian3.jpg" />
                        <img src="./../assets/tuijian4.jpg" />
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Myaddfriend",
    data(){
        return{
            ipt:"",
            arr:[1,2,3]
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped="">
.myaddfriend{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.mint-header{
    height: 50px;
    background: #fff;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
 }
 .iconfont{
    font-size: 24px;
 }
 .section{
     margin-top: 50px;
     flex: 1;
 }
 .search{
    margin: 0 10px;
    height: 30px;
    border-radius: 4px;
    background-color: rgba(238, 238, 238, 1);
    color: rgba(136, 136, 136, 1);
    font-size: 14px;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;

 }
  .search>.iconfont{
      font-size: 18px;
  }
 .search>input{
     border: none;
     background: none;
     height: 30px;
     outline: none;
     font-size: 12px;
     line-height: 30px;
 }
 .add{
     margin:0 22px;
     display: flex;
     flex-wrap: wrap;
    justify-content: space-between;

 }
  .add dl{
      display: flex;
      margin-top: 32px;
      padding: 5px 3px;
  }
  .add dl:nth-of-type(1){
      border-bottom: 1px solid #eee;
      
  }
.add dl:nth-of-type(2){
    border-bottom: 1px solid #eee;
    
}
 .add .iconfont{
     font-size: 50px;
 }
  .add dl dt{
      margin-left: 8px;
     
  }
 .add>dl>dd{
    display: flex;
    flex-direction: column;
    justify-content: center;
 }
 .add>dl>dd>h6{
    height: 16px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: Arial-bold;

 }
 .add>dl>dd>p{
    height: 14px;
    color: rgba(106, 106, 106, 1);
    font-size: 12px;
    text-align: left;
    font-family: Arial-regular;

 }
 .know>h3{
    margin-left: 20px;
    color: rgba(16, 16, 16, 1);
    font-size: 16px;
    text-align: left;
    font-family: Arial-bold;
    line-height: 58px;

 }
  .item-li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 14px;
  }
 .head-img{
    margin-left: 21px;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    border: rgba(16, 16, 16, 1);

 }
 .d-item{
     flex: 1;
     display: flex;
     flex-direction: column;
     justify-content: center;
     margin-left: 10px;
 }
.d-span{
  
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: Arial-regular;

 }
 .d-p{
     display: flex;
     justify-content: space-between;
 }
 .p-span{
    color: rgba(189, 187, 187, 0.86);
    font-size: 12px;
    text-align: left;
    font-family: Arial-regular;
 }
 .a-btn{
    display: block;
    width: 44px;
    height: 20px;
    border-radius: 4px;
    background-color: rgba(189, 187, 187, 0.86);
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(255, 255, 255, 0);
    margin-right: 5px;

 }
 .fit>h3{
    margin-left: 21px;
    height: 18px;
    color: rgba(16, 16, 16, 1);
    font-size: 16px;
    text-align: left;
    font-family: Arial-bold;
    line-height: 18px;
 }
 .fit>dl{
    display: flex;
    flex-direction: column;
 }
 .fit>dl>dt{
     padding:15px 0;
 }
 .fit>dl>dd{
     display: flex;
     justify-content: space-between;

 }
 .fit>dl>dd>img{
     width: 110px;
     height: 110px;;
 }
</style>
