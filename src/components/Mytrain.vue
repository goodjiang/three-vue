<template>
<div class="mytrain">
        <div class="vide">
           
                <i class="iconfont icon-fanhui" @click="back()"></i>
                <span class="iconfont icon-daohang"></span>
            
            <img src="./../assets/banner.jpg"/>
        </div>
        <div>
            <ul class="list-mes">
                <li>
                    <span class="iconfont icon-liaotianchat52">
                        <b>5250</b>
                    </span>
                    <div>
                        <i class="iconfont icon-star"></i>
                        <em class="iconfont icon-xiazai"></em>
                        <b class="iconfont icon-daohang1"></b>
                        <strong class="iconfont icon-shangchuan"></strong>
                    </div>
                </li>
                <li>
                    <h4>腹肌激活</h4>
                    <p>无器械  13分钟</p>
                </li>
                <li>
                    <p>7次训练</p>
                    <div>
                        <i class="iconfont icon-daohang1"></i>
                        <span>全部</span>
                    </div>
                    
                </li>
                <li>

                </li>
                <li>
                    <p>5803756人训练</p>
                    <div>
                        <i class="iconfont icon-wode"></i>
                        <i class="iconfont icon-wode"></i>
                        <i class="iconfont icon-wode"></i>
                        <i class="iconfont icon-wode"></i>
                        <i class="iconfont icon-wode"></i>
                        <span class="iconfont icon-qianjinxiayige"></span>
                    </div>
                </li>
                <li>
                    <p>装备：瑜伽套装</p>
                    <span class="iconfont icon-qianjinxiayige"></span>
                </li>
            </ul>
        </div>
</div>
    
</template>
<script>
export default {
    name:"Mytrain",
    data(){
        return{
            id:""
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scopde="">
.mytrain{
    height: 100vh;
    overflow:auto;
    display: flex;
    flex-direction: column;
}
.iconfont{
    font-size: 24px;
}
.vide{
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

}
.vide i{
    position: absolute;
    top:0;
    left: 11px;
}
.vide span{
    position: absolute;
    top: 0;
    right: 11px;
}
.vide img{
   
    width: 100%;
    height: auto;
    
}
.list-mes {
    background: #eee;
}
.list-mes li{
    height: 38px;
    border-bottom: 2px solid rgba(187, 187, 187, 1);
    padding-left: 11px;
    padding-right: 11px;
    background: #fff;
}
.list-mes li:nth-of-type(1){
    display: flex;
    justify-content: space-between;
    align-items: center;
   


}
.list-mes li .iconfont{
    font-size: 16px;
}
.list-mes li:nth-of-type(1) span{
    font-size: 16px;
   
    
}
.list-mes li:nth-of-type(1) span b{
    font-size: 16px;
    font-weight: normal;
    margin-left: 3px;
    color: rgb(16, 16, 16);
    
}
.list-mes li:nth-of-type(1) div{
  
   padding: 0 3px;
    
}
.list-mes li:nth-of-type(2){
    height: 70px;


    
}
.list-mes li:nth-of-type(2) h4{
    line-height: 46px;
    font-weight: normal;
    
}
.list-mes li:nth-of-type(2) p{
    font-size: 12px;
    color: rgba(189, 187, 187, 0.86);
    
}
.list-mes li:nth-of-type(3){
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
}
.list-mes li:nth-of-type(4){
    height: 220px;
}
.list-mes li:nth-of-type(5){
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    margin-top: 10px;
    border: 0;
    height: 50px;
}
.list-mes li:nth-of-type(6){
    height: 50px;
    margin-top: 10px;
    border: 0;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

