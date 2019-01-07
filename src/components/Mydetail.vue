<template>
    <div class="mydetail">
        <!-- 头部 -->
        <div class="header">
            <i @click="back()" class="iconfont icon-chahao"></i>
            <div class="user">
                <img src='./../assets/Videotrain1.jpg'/>
                <span class="iconfont icon-qianjinxiayige"></span>
            </div>
            <p>用户名</p>
            <div class="state">
                <span>0关注</span>
                <span>0粉丝</span>
            </div>
        </div>
         <!-- 详情 -->
        <div>
            <ul class="list-detail">
                <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>                       
                        <span>会员享10享特权</span>
                        <i>即刻加入</i>
                    </div>  
                </li>
                <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>我的消息</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
                  <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>我的优惠券</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
                  <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>使用兑换码</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
                  <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>邀请好友</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
                <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>身体数据</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
                <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>我的积分</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
                <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>我的动态</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
                <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>我的收藏</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
                <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>我的下载</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
                 <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>关注我们</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
                 <li>
                    <img src="./../assets/Videotrain1.jpg" />
                    <div>
                        <span>设置</span>
                        <i class="iconfont icon-qianjinxiayige"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"Mydetail",
    methods:{
        back(){
            this.$router.go(-1);
        }
    }

}
</script>
<style scoped="">
 .mydetail{
        background: #eee;
        height: 100vh;
    }
    .header{
        height: 210px;
        padding-left: 18px;
        display: flex;
        flex-direction: column;
        background: #fff;
        position: relative;
        
    }
   
    .user{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .user img{
        width: 70px;
        height: 60px;
        border: 1px solid #000;
        border-radius: 50%;
        
    }
    .user span{
       position: absolute;
       right: 23px;
        
    }
   
    .header i{
        margin-top: 10px;
    }
    .iconfont{
        font-size: 26px;
    }
     .header p{
        margin-top: 9px;
        text-align: center;
    }
    .state{
        display: flex;
        justify-content: space-around
    }
    
    .list-detail{ 
        margin-top: 9px;
        text-align: left;  
    }
    .list-detail li{
        background: #fff;
        height: 60px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Arial;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
       
    
    }
    .list-detail li img{
        width: 34px;
        height: 32px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Arial;
        border: 1px solid rgba(187, 187, 187, 1);
        border-radius: 50%;
        margin-left: 18px;
    }
    .list-detail li div{
        margin-left: 14px;
        display: flex;
        flex: 1;
        justify-content: space-between;
       
    }
    .list-detail li:nth-of-type(1) div i{
        font-style: normal;
        width: 79px;
        height: 24px;
        line-height: 24px;
        border-radius: 11px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Microsoft Yahei;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(187, 187, 187, 1);
        margin-right: 22px;

    }
     .list-detail li:nth-of-type(2){
         margin-top: 9px;
     }
    .list-detail li div i{
        margin-right: 13px;
    }
    .list-detail li:nth-of-type(6){
         margin-top: 9px;
     }
     .list-detail li:nth-of-type(12){
         margin-top: 9px;
     }
 
</style>

