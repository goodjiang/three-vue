<template>
    <div class="myrun">
        <mt-header fixed :title="tit">
            <mt-button class="iconfont icon-fanhui"  slot="left" @click="back()"></mt-button>
            <mt-button class="iconfont icon-daohang"  slot="right"></mt-button>
        </mt-header>
        <div class="section">
            <!-- ziyou -->
            <div v-if="isShow1" id="1" class="freeRun">
                <h2>
                    自由跑
                </h2>
                
            </div>
            <!-- kaluli -->
             <div v-if="isShow2" id="2" class="freeRun">
               
                    <p>卡路里跑</p>
                <div>
                    <span>-</span>
                    <h5>100</h5>
                    <span>+</span> 
                </div>
               
            </div>
            <!-- 公里跑 -->
              <div v-if="isShow3" id="3" class="freeRun">
               
                    <p>公里跑</p>
                <div>
                    <span>-</span>
                    <h5>100</h5>
                    <span>+</span> 
                </div>
                
            </div>
            <ul class="num">
                    <li @click="first()"></li>
                    <li @click="second()"></li>
                    <li @click="third()"></li>
            </ul>
            <!-- shijian -->
            <div class="timer">
                <dl>
                    <dt>— —</dt>
                    <dd>Min/Km</dd>
                </dl>
                <dl>
                    <dt>00:00:00</dt>
                    <dd>Time</dd>
                </dl>
                <dl>
                    <dt>0</dt>
                    <dd>Kacal</dd>
                </dl>
            </div>

            <div class="posBtn">
                <div>
                    <span class="iconfont icon-htmal5icon14"></span>
                </div>   
            </div>
            <div class="stratBtn">
                <div>
                    <h3>GO</h3>
                    <p>开始</p>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"Myrun",
    data(){
        return{
            tit:"户外跑步",
            isShow1:true,
            isShow2:false,
            isShow3:false,
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        first(){
            this.isShow1=true;
            this.isShow2=false;
            this.isShow3=false;
        },
        second(){
            this.isShow1=false;
            this.isShow2=true;
            this.isShow3=false;
        },
        third(){
            this.isShow1=false;
            this.isShow2=false;
            this.isShow3=true;
        }

    }
    
}
</script>
<style scopde="">
.myrun{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
 .mint-header{
     height: 50px;
     background: #eee;
     color: rgba(16, 16, 16, 1);
     font-size: 18px;
 }
 .iconfont{
     font-size: 24px;
 }
 .section{
     margin-top: 50px;
     flex: 1;
     background: #ccc;
 }
 .freeRun{
     height: 230px;
     
     display: flex;
     flex-direction: column;
     align-items: center;
 }
 .freeRun h2{    
    width: 144px;
    height: 55px;
    margin-top: 99px;
    color: rgba(16, 16, 16, 1);
    font-size: 48px;
    text-align: left;
    font-family: Arial-regular;
 }
 .num{
     display: flex;
     justify-content: center;
 }
 .num li{
    margin: 0 5px;
    width: 10px;
    height: 10px;
    line-height: 20px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);
    background: #000

 }
 .freeRun>p{
     margin-top: 80px;
     
 }
 .freeRun >div{
     margin-top: 14px;
  
     display: flex;
     align-items: center;
     justify-content: center;
 }
.freeRun>div>h5{
    padding: 0 55px;
    font-size: 55px;
}
.freeRun>div>span{
    display: block;
    width: 24px;
    height: 24px;
    background-color: rgba(16, 16, 16, 1);
    color: #fff;
    text-align: center;
    border-radius: 50%

}
.timer{
    margin-top: 37px;
    text-align: center;
    display: flex;
    justify-content: space-around;
}
 .timer dl dt{
    width: 47px;
    height: 21px;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
    text-align: center;
    font-family: Arial-bold;
 }
 .timer dl dd{
    margin-top: 9px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: center;
    font-family: Arial-regular; 
 }
 .posBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
 }
  .posBtn div{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .stratBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  .stratBtn>div{
     
    width: 100px;
    height: 100px;
    border-radius: 50%;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Arial;
    background: #fff;
    border: 1px solid rgba(255, 255, 255, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  .stratBtn>div>h3{
    color: rgba(16, 16, 16, 1);
    font-size: 28px;
    text-align: left;
    font-family: Arial-bold;
  }
</style>

