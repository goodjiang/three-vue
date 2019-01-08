<template>
    <div>
       <div class="month">
       <ul>
           <li v-for="item in username">
               <span class="iconfont icon-wode"></span>
               <p>{{item.name}}</p>
           </li>
       </ul>
    </div> 
    </div>
</template>

<script>
import axios from "axios"
import Mock from "mockjs"
Mock.mock("http://www.myfriendmonth.com",{
    "username|15-100":[
        {
            "name":"@name()",
            
        }
    ]
})
export default {
    name:"Myfriendmonth",
    data(){
        return{
            username:[]
        }
    },
    mounted(){
        var _this=this;
        axios({
            method:"get",
            url:"http://www.myfriendmonth.com"
        }).then(function(data){
            _this.username=data.data.username;
        })
    }
}
</script>

<style scoped="">
.month{
    height: 100vh;  
}
.iconfont {
    font-size: 24px;
}
.month>ul li{
    height: 50px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);
    border-bottom: 2px solid #ddd;
    font-size: 12px;
    display: flex;
    align-items: center;
    padding-left: 9px;

}
.month>ul li p{
    margin-left: 9px;
}

</style>
