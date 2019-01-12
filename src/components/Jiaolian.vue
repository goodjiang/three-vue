<template>
    <div>
        <span  @click="btn1()" class="iconfont icon-zuojiantou"></span>
        <i></i>
        <p class="p">卓越的教练团队</p>
        <div class="jiao1">
            <img src="../assets/tuijian6.jpg" alt="">
            <p class="jiao1-name">{{tit1}}</p>
            <p>{{tit1}},健身运动创始人</p>
            <p>2001年毕业于复旦大学临床医学系。</p>
            <p>2006年获得美国常青藤名校大雪医学科学硕士学位。</p>
            <p>2013年创立健身俱乐部，NCCPT认证健身教练。</p>
            <p>中文原创健身视频创始人</p>
        </div>
        <div class="jiao2">
            <img src="../assets/tuijian7.jpg" alt="">
            <p class="jiao1-name">{{tit2}}</p>
            <p>{{tit2}},健身运动创始人</p>
            <p>2001年毕业于复旦大学临床医学系。</p>
            <p>2006年获得美国常青藤名校大雪医学科学硕士学位。</p>
            <p>2013年创立健身俱乐部，NCCPT认证健身教练。</p>
            <p>中文原创健身视频创始人</p>
        </div>
        <div class="jiao3">
            <img src="../assets/tuijian8.jpg" alt="">
            <p class="jiao1-name">{{tit3}}</p>
            <p>{{tit3}},健身运动创始人</p>
            <p>2001年毕业于复旦大学临床医学系。</p>
            <p>2006年获得美国常青藤名校大雪医学科学硕士学位。</p>
            <p>2013年创立健身俱乐部，NCCPT认证健身教练。</p>
            <p>中文原创健身视频创始人</p>
        </div>
        <span class="iconfont icon-Group-" @click="btn2()"></span>
    </div>
</template>
<script>
import Mock from 'mockjs';
import axios from "axios";
var Random = Mock.Random;
Mock.mock("http://www.baidu.com",{
    "users|3":[
        {"username":"@name()"}
    ]
})
export default {  
    name:"Jiaolian",
    data() {
        return {
            tit1:"",
            tit2:"",
            tit3:""
        }
    },
    methods: {
        btn1(){
            this.$router.go(-1)
        },
        btn2(){
            this.$router.go(-1)
        }
    },
    mounted() {
        var _this = this
        axios({
            method:"get",
            url:"http://www.baidu.com",
        }).then(function (data) {
            _this.tit1 = data.data.users[0].username
            _this.tit2 = data.data.users[1].username
            _this.tit3 = data.data.users[2].username
        })
    },
}
</script>
<style scoped="">
    .icon-zuojiantou{
        width: 30px;
        height: 30px;
        border: 1px solid #bbb;
        border-radius: 50%;
        position: fixed;
        top: 15px;
        left: 15px;
        text-align: center;
        line-height: 30px;
        font-size: 15px
    }
    i{
         width: 70px;
        height: 2px;
        background: #000;
        display: block;
        margin: 20px auto;
        margin-top:60px;
    }
    .p{
        font-size: 24px;
        text-align: center
    }
    .jiao1 img,.jiao2 img,.jiao3 img{
        width: 153px;
        height: 153px;
        border-radius:50%;
        margin: 50px auto;
        margin-bottom: 20px;
        display: block;
    }
    .jiao1,.jiao2,.jiao3{
        text-align: center
    }
    .jiao1-name,.jiao2-name,.jiao3-name{
        font-size: 14px;
        font-weight: 800;
        line-height: 30px; 
        margin-bottom: 10px;
    }
    .jiao1 p,.jiao2 p,.jiao3 p{
        font-size: 12px;
        line-height: 22px;
    }
    .icon-Group-{
        font-size: 30px;
        text-align: center;
        margin: 50px;
        margin-top: 100px;
        display:block;
    }
</style>
