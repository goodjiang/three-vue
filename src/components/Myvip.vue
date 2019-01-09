<template>
<div class="myvip">
    <mt-header fixed title="">
        <mt-button class="iconfont icon-fanhui" slot="left" @click="back()"></mt-button>
    </mt-header>
    <div class="section">
        <div class="d-img">
            <img src="./../assets/Videotrain1.jpg" >
        </div>
        <div class="plan">
             <p></p>
            <h2 class="line"></h2>
            <h3>会员专享训练计划</h3>
            <p>基于日程的训练安排</p>
            <p>每日安排好的热身，训练，拉伸</p>
            <p>健身知识，干货</p>
        </div>
        <ul class="plan-list">
            <li>
                <router-link to="">28天塑形减脂计划</router-link>
            </li>
            <li>
                <router-link to="">28天蜜桃臀养成计划</router-link>
            </li>
            <li>
                <router-link to="">28天瘦腿塑形计划</router-link>
            </li>
            <li>
                <router-link to="">28天塑形减脂计划</router-link>
            </li>
        </ul>
        <div class="plan">
            <p>更多训练计划定期更新</p>
            <h2 class="line"></h2>
            <h3>会员专享训练计划</h3>
            <p>基于日程的训练安排</p>
            <p>每日安排好的热身，训练，拉伸</p>
            <p>健身知识，干货</p>
        </div>
        <ul class="plan-list">
            <li>
                <router-link to="">瘦腿瑜伽系列</router-link>
            </li>
            <li>
                <router-link to="">马甲线进阶养成计划</router-link>
            </li>
            <li>
                <router-link to="">进阶体能训练系列</router-link>
            </li>
            <li>
                <router-link to="">瘦腿瑜伽系列</router-link>
            </li>
             <li>
                <router-link to="">马甲线进阶养成计划</router-link>
            </li>
             <li>
                <router-link to="">马甲线进阶养成计划</router-link>
            </li>
        </ul>
        <!-- more -->
        <div class="more">
            <h2 class="line"></h2>
            <h3>更多会员特权</h3>
            <!--  -->
            <div>
                <!-- list1 -->
                <ul class="list-vip">
                    <li>
                        <div>
                            <img src="./../assets/Videotrain3.jpg" >
                        </div>
                        <p>专享课程每日更新</p>
                    </li>
                     <li>
                        <div>
                            <img src="./../assets/Videotrain3.jpg" >
                        </div>
                        <p>专享课程每日更新</p>
                    </li>
                </ul>
                <!-- list2 -->
                    <ul class="list-vip">
                    <li>
                        <div>
                            <img src="./../assets/Videotrain3.jpg" >
                        </div>
                        <p>专享课程每日更新</p>
                    </li>
                     <li>
                        <div>
                            <img src="./../assets/Videotrain3.jpg" >
                        </div>
                        <p>专享课程每日更新</p>
                    </li>
                </ul>
            </div>
            <!--  -->
        </div>
    </div>
    <footer>
        <h2>立即开通</h2>
    </footer>
</div>
</template>

<script>
export default {
    name:"Myvip",
    data(){
        return{
            tit:"",
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
.myvip{
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
    flex: 1;
    margin-top: 50px; 
    overflow: auto;
    background: #fff;
}
.d-img{
    display: flex;
    align-items: center;
    justify-content: center;
}
.d-img>img{
    height: 100%;
    width: 100%;
    
}
.plan{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.line{
    margin-top: 5px;
    width: 40px;
    height: 3px;
    background-color: rgba(68, 68, 68, 1);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);

}
.plan>h3{
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Arial-regular;
    line-height: 36px;
}
.plan>p{
    
    line-height: 24px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: center;
    font-family: Arial-regular;

}
.plan-list{
    background: #fff;
}
.plan-list li{
    height: 120px;
    background: #ccc;
    margin-top: 10px;
    text-align: center;
    line-height: 120px;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: center;
    font-family: Arial-bold;
    font-weight: 600;

}
.more{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.more h2{
    margin-top: 66px;
}
.more h3{
    margin-top: 11px;
    font-size: 20px;
}
.more>div{
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.list-vip>li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.list-vip>li>div{
    
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);

}
.list-vip>li>div>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.list-vip>li>p{
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: center;
    font-family: Arial-regular;

}
footer{
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    background: #444;
}
</style>
