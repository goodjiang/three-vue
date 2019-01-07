<template>
    <div class="mymethod">
        <!-- 头部 -->
       <header>
           <span class="iconfont icon-fanhui" @click="back()"></span>
           <span class="iconfont icon-daohang"></span>
       </header>
       <!-- 内容 -->
        <section>
            <h2>
                含胸驼背改善练习
            </h2>
            <h3>
                训练概述
            </h3>
            <div class="train-gs">
                <dl>
                    <dt>背部</dt>
                    <dd>
                        <p class="jindu"></p>
                    </dd>
                </dl>
                 <dl>
                    <dt>背部</dt>
                    <dd>
                        <p class="jindu"></p>
                    </dd>
                </dl>
                 <dl>
                    <dt>背部</dt>
                    <dd>
                        <p class="jindu"></p>
                    </dd>
                </dl>
            </div>
            <p>6个动作，循环2次，12分钟</p>
            <h4>动作列表</h4>
            <ul class="method-list">
                <li>
                    <img src="./../assets/jianfeican.jpg"/>
                    <div>
                        <h5>自重超人</h5>
                        <p>X12</p>
                        <span>休息00:15</span>
                    </div>
                </li>
                    <li>
                    <img src="./../assets/tuijian4.jpg"/>
                    <div>
                        <h5>自重超人</h5>
                        <p>X12</p>
                        <span>休息00:15</span>
                    </div>
                </li>
                    <li>
                    <img src="./../assets/tuijian5.jpg"/>
                    <div>
                        <h5>自重超人</h5>
                        <p>X12</p>
                        <span>休息00:15</span>
                    </div>
                </li>
                    <li>
                    <img src="./../assets/huiyuan1.jpg"/>
                    <div>
                        <h5>自重超人</h5>
                        <p>X12</p>
                        <span>休息00:15</span>
                    </div>
                </li>
                    <li>
                    <img src="./../assets/camp3.jpg"/>
                    <div>
                        <h5>自重超人</h5>
                        <p>X12</p>
                        <span>休息00:15</span>
                    </div>
                </li>
                
            </ul>
            <div>
                    <h6>需要器械</h6>
                    <p>徒手，弹力带</p>                
            </div>
        </section>
        <!-- 底部 -->
        <footer>
            开始训练
        </footer>
    </div>
</template>
<script>
export default {
    name:"Mymethod",
    data(){
        return{
            tit:"",
            wArr:[43,29,10]
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    },
    mounted(){
        var oDiv=document.getElementsByClassName("train-gs");
        
    }
}
</script>
<style scoped="">
.mymethod{
    display: flex;
    flex-direction: column;
    height: 100vh;
    color:#101010;
}
header{
    padding: 0 7px 0 11px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    font-size: 18px;
    background: #ddd;
    color: rgba(16, 16, 16, 1);
}
.iconfont{
    font-size: 24px;
}
section{
    flex: 1;
    overflow: auto;
    padding-left: 17px;
    padding-right: 22px;
}
section h2{
    margin-top: 50px;
    height: 23px;
    line-height: 23px;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: left;
    font-family: Arial-bold;
    font-weight: normal;

}
section h3{
    margin-top: 23px;
    height: 16px;
    line-height: 16px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: Arial-bold;
    font-weight: normal;

}
.train-gs{
    display: flex;
    justify-content: space-between;
}
.train-gs dl{
    margin-top: 17px;
}
.train-gs dl dt{
    height: 14px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    line-height: 14px;
    text-align: left;
    font-family: Arial-regular;

}
.train-gs dl dd{
    margin-top: 6px;
    width: 93px;
    height: 10px;
    line-height: 20px;
    background-color: rgba(238, 238, 238, 1);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);

}
section .train-gs dl dd p{
    
    width: 43px;
    height: 10px;
    margin-top: 0;
    background-color: rgba(102, 102, 102, 1);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);

}
section>p{
    margin-top: 14px;
    height: 14px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: left;
    font-family: Arial-regular;

}
section>h4{
    margin-top: 26px;
    height: 16px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: Arial-bold;
    font-weight: normal;

}
.method-list{
    margin-top: 7px;
}
.method-list li{
    height: 98px;
    border-bottom: 1px solid rgba(187, 187, 187, 1);
    display: flex;
    align-items: center;

}
.method-list li div{
    margin-left: 10px;
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.method-list li img{
    width: 80px;
    height: 70px;
    border: 1px solid rgba(187, 187, 187, 1);
}
.method-list li h5{
    height: 16px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: Arial-bold;

}
.method-list li p{
   
    height: 14px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: left;
    font-family: Arial-regular;

}
.method-list li span{
   
    
    height: 14px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: left;
    font-family: Arial-regular;

}
section div{
   height: 90px;;
}
section div h6{
    padding-top: 30px;
    height: 16px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    font-family: Arial-bold;
    font-weight: normal;

}
section div p{
    margin-top: 8px;
    height: 14px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: left;
    font-family: Arial-regular;
}
footer{
  
    height: 50px;
    line-height: 50px;
    background-color: rgba(221, 221, 221, 1);
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(255, 255, 255, 0);

}
</style>


