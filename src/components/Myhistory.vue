<template>
    <div class="myhistory">
        <header>
            <div class="nav">
                <i class="iconfont icon-fanhui" @click="back()"></i>
                <span>
                    {{tit}}
                    <em class="iconfont icon-xiangxia"></em>
                </span>
                <i class="iconfont icon-shangchuan"></i>
            </div>
            <!-- 时间 -->
            <div class="time">
                <ul class="time-list">
                    <li class="active">总</li>
                    <li>月</li>
                    <li>周</li>
                    <li>日</li>
                </ul>
            </div>
        </header>
        <!-- history -->
        <div class="history">
            <p>累计训练</p>
            <h4><span>0</span><em>分钟</em></h4>
            <div>
                <dl>
                    <dt>参与/天</dt>
                    <dd>0</dd>
                </dl>
                <dl>
                    <dt>次数</dt>
                    <dd>0</dd>
                </dl>
                <dl>
                    <dt>消耗/大卡</dt>
                    <dd>0</dd>
                </dl>                               
            </div>
        </div>
        <!-- 列表 -->
        <ul class="list-history">
            <li>
                <p>好友排名</p>
                <div>
                    <span class="iconfont icon-wode"></span>
                    <em class="iconfont icon-jianhao"></em>
                    <i class="iconfont icon-qianjinxiayige"></i>
                </div>
            </li>
            <li>
                <p>训练等级</p>
                <div>
                    <span>lv{{time}}</span>                   
                    <i class="iconfont icon-qianjinxiayige"></i>
                </div>
            </li>
            <li>
                <p>我的勋章</p>
                <div>
                    <span>0</span>
                    <i class="iconfont icon-qianjinxiayige"></i>
                </div>
            </li>
            <li>
                <p>训练记录</p>
                <div>
                    <i class="iconfont icon-qianjinxiayige"></i>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Myhistory",
    data(){
        return{
            tit:"本周历史记录",
            time:""
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    },
    mounted(){
        this.time=this.$route.query.time
        console.log(this.$route.query.time)
    }
}
</script>
<style scoped="">
.myhistory{
    display: flex;
    height: 100vh;
    flex-direction: column;
    background: #eee;
}
header{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff
}

.iconfont{
    font-size: 24px;
}
.nav{
    display: flex;
    justify-content: space-between;
    padding: 0 6px 0 12px;
}
.time{
    display: flex;
    justify-content: center;
}
.time-list{
    display: flex;
}
.time-list li{
    width: 80px;
    height: 20px;
    border-radius: 4px; 
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(187, 187, 187, 1);

}
.active{
     background-color: rgba(68, 68, 68, 1);
    color: rgba(255, 255, 255, 1);
}
.history{
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 28px;
    padding-right: 18px;
    padding-top: 20px;
    padding-bottom: 24px;
    background: #fff;
}
.history>p{
    height: 14px;
    line-height: 14px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: left;
    font-family: Arial-regular;
}
.history>h4{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.history>h4>span{
   
    height: 55px;
    
    color: rgba(16, 16, 16, 1);
    font-size: 48px;
    text-align: left;
    font-family: Arial-bold;
}
.history>h4>em{
    font-style: normal;
    height: 14px;
    line-height: 14px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: left;
    font-family: Arial-regular;

}
.history>div{
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.history>div>dl>dt{
    
   
    height: 14px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: left;
    font-family: Arial-regular;

}
.history>div>dl>dd{
    
    
    height: 32px;
    color: rgba(16, 16, 16, 1);
    font-size: 28px;
    text-align: center;
    font-family: Arial-bold;

}

.list-history .iconfont{
    font-size: 24px;
}
.list-history li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    font-size: 14px;
     background: #fff;
     padding-left: 8px;
    padding-right: 10px;
}
.list-history li:nth-of-type(1){
    border-top: 2px solid #eee;
}
.list-history li:nth-of-type(2){
    margin-top: 10px;
}
.list-history li:nth-of-type(3){
    margin: 10px 0;
}
</style>


