<template>
    
<div class="my">
    <!-- 头部 -->
     
    <mt-header fixed :title="tit"> 
        <mt-button class="iconfont icon-wode" slot="left" @click="wode()"></mt-button>
        <mt-button class="iconfont icon-paobu" slot="right"></mt-button>
    </mt-header>
    <div class="middle">
    <!-- 训练时间 -->
    <div class="timer">
        <router-link to="/myplan">
        <p>训练时长</p>
            <div class="m-grade">
                <h2>{{hour}}</h2>
                <div class="grade">
                    <span>lv{{hour}}</span>
                    <i class="iconfont icon-qianjinxiayige"></i>
                </div>
            </div>
        </router-link>
    </div>
    <!-- 每周排名 -->
    <div class="ranking">
        <p>本周好友排名</p>
        <div>
            <span class="iconfont icon-wode"></span>
            <span class="iconfont icon-qianjinxiayige"></span>
        </div>
    </div>
    <!-- 我的训练 -->
    <div class="my-train">
        <h3>我的训练</h3>
        <ul class="list1-train">
            <li v-for="item in list1"><router-link :to="'/mytrain/'+item.trainId" >{{item.train}}</router-link></li>
        </ul>
        <ul class="list2-train">
            <li v-for="item in list2">
                <router-link :to="'/mymethod/'+item.tId">
                    <h4>{{item.tit}}</h4>
                    <p>{{item.con}}</p>
                </router-link>
            </li>
         
        </ul>
        <div class="vip">
            <p>想要训练更有效</p>
            <mt-button type="default">获取会员专享内容</mt-button>
        </div>
    </div>
    </div>
</div>
</template>
<script>
import axios from "axios"
import Mock from "mockjs"
Mock.mock("http://www.my.com",{
    data:{
        "hour":"@float(60, 100, 3, 5)",
        
        "train|3":[{
            "train":"@ctitle(4, 7)",
            "trainId|+1":0
            }],
        "trainData|5":[{
            "tit":"@ctitle(3, 5)",
            "con":"@csentence(7, 20)",
            "tId|+1":0
        }],
        "img":"@image(250x250)"
    },
})
export default {
    name:"My",
    data(){
        return{
            tit:"我的训练",
            hour:0,
           
            list1:[],
            list2:[],
            img:""
        }
    },
    methods:{
         wode(){
            this.$router.push("/mydetail")
        }
    },
    mounted(){
        var _this=this
        axios({
            method:"get",
            url:"http://www.my.com"
        }).then(function(data){
            var obj=data.data.data; 
            _this.img=obj.img;
            _this.hour= parseInt(obj.hour);
           _this.list1=obj.train;
           _this.list2=obj.trainData
          
          
        })
    }
}
</script>
<style scoped="">
.my{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
header{
    display: flex;
    height: 50px;
    font-size: 18px;
    background: #fff;
    color: rgba(16, 16, 16, 1);
}
.iconfont{
    font-size: 24px;
}
.timer{
    padding-left: 17px ;
    height: 117px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Arial;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 50px;
}
.timer p{
    
    width: 60px;
    height: 14px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: left;
    font-family: Arial-regular;
    margin-top: 20px;
}
.m-grade{
    display: flex;
    justify-content: space-between;
}
.timer h2{
   

    width: 41px;
    height: 82px;
    color: rgba(16, 16, 16, 1);
    font-size: 72px;
    text-align: left;
    font-family: Arial-bold;

}
.grade{
   
   margin-top: 38px;
  

}
.ranking{
    padding-left: 17px ;
    height: 60px;
    line-height: 20px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Arial;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.my-train h3{
    padding-left: 17px;
    line-height: 34px;
    font-size: 16px;
    font-weight: normal;
}
.list1-train li{
    margin-left: 6px;
    margin-right:9px;
    margin-top: 10px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    font-size: 28px;
    background: #cecece;

}
.list2-train li{
    padding-left: 7px;
    height: 89px;
    margin-right: 3px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.list2-train li h4{
    margin-top: 20px;
    font-size: 16px;
    font-weight: normal;
}
.list2-train p{
    margin-top: 7px;
    font-size: 12px;
    color: #101010;
}
.vip{
    
   background: #cecece;
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

}
.vip p{
    padding: 34px 0;
}
.vip button{
     width: 160px;
    font-size: 14px;
}
</style>
