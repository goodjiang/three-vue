<template>
    <div class="vipmes">
        <mt-header fixed :title="tit">
            <mt-button class="iconfont icon-fanhui" slot="left" @click="back()">

            </mt-button>
        </mt-header>
        <div class="section">
            <h2>
                <span>|</span>
                <span>全部评论({{count}})</span>
            </h2>
            <ul class="mes-list">
                <li v-for="(item,i) in arr">
                    <h3>
                        <img :src="item.img" alt="">
                    </h3>
                    <div>
                        <h4>
                            <span>{{item.name}}</span>
                            <time>{{item.date}}</time>
                            <span>{{item.con}}</span>
                        </h4>
                        <a href="javascript:void(0)" @click="zan(i,isColor)" class="iconfont icon-zan"></a>
                    </div>
                </li>
            </ul>
        </div>
    <footer>
        <div>
            <input type="text" placeholder="发表评论"/>
        </div>
    </footer>
    </div>
</template>

<script>
import axios from "axios"
import Mock from "mockjs"
Mock.mock("http://www.mes.com",{
    data:{
        "count":"@integer(99,999)",
          "data|30" :[{
                "name":"@name()",
                "img":"@image(250x250)",
                "date":"@date('MM-dd')",
                "con":"@cword(4, 6)",
                
            }] 
    }
})
export default {
    name:"Vipmes",
    data(){
        return{
            tit:'',
            count:'',
            arr:[],
            num:"",
            isColor:1
         
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        zan(i,a){
            var aZan=document.getElementsByClassName("icon-zan")
            
            if(a){
                aZan[i].style.color="red"
               
            }
            a=2;
            
            if(a==2){
                aZan[i].style.color="block"
            }
           
            
        }
    },
    watch:{
        "isColor":function(a,b){
            console.log(a,b)
        }
    },
    mounted(){
        this.tit=this.$route.query.tit;
        var _this=this;
        axios({
            method:"get",
            url:"http://www.mes.com"
        }).then(function(data){
            _this.count=data.data.data.count
            _this.arr=data.data.data.data
            
        }).then(axios({method:"get",
            url:"http://www.mes.com"}).then(function(data){
                console.log(data.data);
            }
            ))
    }
}
</script>

<style scoped="">
.vipmes{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.iconfont{
    font-size: 24px;

}
.color1{
    color: "";
}
.color2{
    color: red;
}
.section{
    flex: 1;
    margin-top: 41px;
    overflow: auto;
}
.section>h2{
    margin-left: 20px;
    margin-top: 14px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;

}
footer{
    height: 37px;
}
footer>div{
    height: 37px;
    margin-left: 22px;
    margin-right: 22px;
    line-height: 37px;
}
footer>div>input{
    height: 24px;
    width: 100%;
    line-height: 24px;
    outline: none;
    border: 1px solid #000;
}
.mes-list>li{
    margin-top: 24px;
    display: flex;
    height: 54px;

}
.mes-list>li>h3{
    margin-left: 20px;
    width: 54px;
    height: 54px;
    border: 1px solid rgba(187, 187, 187, 1);
    border-radius: 50%;

}
.mes-list>li>h3>img{
    height: 100%;
    width: 100%;
    border-radius: 50%
}
.mes-list>li>div{
    margin-left: 11px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.mes-list>li>div>a{
    margin-right: 20px;
}
.mes-list>li>div>h4{
    display: flex;
    flex-direction: column;
    font-size: 14px;
    justify-content: space-between;

}
.mes-list>li>div>h4>span{
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
}
.mes-list>li>div>h4>time{
    color: rgba(183, 183, 183, 1);
    font-size: 12px;
    text-align: left;
    font-family: PingFangSC-regular;

}
</style>
