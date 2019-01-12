<template>
    <div>
       <section>
           <div id="map" style="height:30vh"></div>
            <div class="name">
                    <div class="name-top">
                        <div class="name-top-left">
                            <span><img src="../assets/tuijian8.jpg" alt=""></span>
                            <span>
                                <p>我在海南遇见你</p>
                                <p>一个小时前</p>
                            </span>
                        </div>
                        <div class="name-top-right">
                            +关注
                        </div>
                    </div>
                    <p>循环系统功能、燃烧脂肪、加大肺活量、降低血糖</p>
                    <p>
                        <img src="../assets/tuijian6.jpg" alt="">
                        <img src="../assets/tuijian7.jpg" alt="">
                        <img src="../assets/tuijian8.jpg" alt="">
                    </p>
                    <p>刷个存在感!!!!!!</p>
                    <div class="ico">
                        <i class="iconfont icon-xinxi"></i>
                        <i class="iconfont icon-dianzan"></i>
                        <i class="iconfont icon-zhuanfa"></i>    
                    </div>
                </div>

                <div class="name">
                    <div class="name-top">
                        <div class="name-top-left">
                            <span><img src="../assets/tuijian8.jpg" alt=""></span>
                            <span>
                                <p>我在海南遇见你</p>
                                <p>一个小时前</p>
                            </span>
                        </div>
                        <div class="name-top-right">
                            +关注
                        </div>
                    </div>
                    <p>循环系统功能、燃烧脂肪、加大肺活量、降低血糖</p>
                    <p>
                        <img src="../assets/tuijian6.jpg" alt="">
                        <img src="../assets/tuijian7.jpg" alt="">
                        <img src="../assets/tuijian8.jpg" alt="">
                    </p>
                    <p>刷个存在感!!!!!!</p>
                    <div class="ico">
                        <i class="iconfont icon-xinxi"></i>
                        <i class="iconfont icon-dianzan"></i>
                        <i class="iconfont icon-zhuanfa"></i>    
                    </div>
                </div>


               <div class="name">
                    <div class="name-top">
                        <div class="name-top-left">
                            <span><img src="../assets/tuijian8.jpg" alt=""></span>
                            <span>
                                <p>我在海南遇见你</p>
                                <p>一个小时前</p>
                            </span>
                        </div>
                        <div class="name-top-right">
                            +关注
                        </div>
                    </div>
                    <p>循环系统功能、燃烧脂肪、加大肺活量、降低血糖</p>
                    <p>
                        <img src="../assets/tuijian6.jpg" alt="">
                        <img src="../assets/tuijian7.jpg" alt="">
                        <img src="../assets/tuijian8.jpg" alt="">
                    </p>
                    <p>刷个存在感!!!!!!</p>
                    <div class="ico">
                        <i class="iconfont icon-xinxi"></i>
                        <i class="iconfont icon-dianzan"></i>
                        <i class="iconfont icon-zhuanfa"></i>    
                    </div>
                </div>

                <div class="name">
                    <div class="name-top">
                        <div class="name-top-left">
                            <span><img src="../assets/tuijian8.jpg" alt=""></span>
                            <span>
                                <p>我在海南遇见你</p>
                                <p>一个小时前</p>
                            </span>
                        </div>
                        <div class="name-top-right">
                            +关注
                        </div>
                    </div>
                    <p>循环系统功能、燃烧脂肪、加大肺活量、降低血糖</p>
                    <p>
                        <img src="../assets/tuijian6.jpg" alt="">
                        <img src="../assets/tuijian7.jpg" alt="">
                        <img src="../assets/tuijian8.jpg" alt="">
                    </p>
                    <p>刷个存在感!!!!!!</p>
                    <div class="ico">
                        <i class="iconfont icon-xinxi"></i>
                        <i class="iconfont icon-dianzan"></i>
                        <i class="iconfont icon-zhuanfa"></i>    
                    </div>
                </div>
       </section>
    </div>
</template>
<script>
export default {
    name:"Fujin",
   methods: {
        
    //''''''''地。。。图。。。代。。。码''''''''''''''''''''''''''''''''''''
 
             BaiduMap(){
                    this.map_init();
                    this.map_load()
 
                },            
                map_init() { 
                     var markerArr = [  
                        { title: "名称：广州火车站", point: "113.264531,23.157003", address: "广东省广州市广州火车站", tel: "12306" },  
                        { title: "名称：广州塔（赤岗塔）", point: "113.330934,23.113401", address: "广东省广州市广州塔（赤岗塔） ", tel: "18500000000" },  
                        { title: "名称：广州动物园", point: "113.312213,23.147267", address: "广东省广州市广州动物园", tel: "18500000000" },  
                        { title: "名称：天河公园", point: "113.372867,23.134274", address: "广东省广州市天河公园", tel: "18500000000" }  
    
                    ];   
                    var map = new BMap.Map("map"); // 创建Map实例  
                    var point = new BMap.Point(113.312213, 23.147267); //地图中心点，广州市  
                    map.centerAndZoom(point, 13); // 初始化地图,设置中心点坐标和地图级别。  
                    map.enableScrollWheelZoom(true); //启用滚轮放大缩小  
                    //向地图中添加缩放控件  
                    var ctrlNav = new window.BMap.NavigationControl({  
                        anchor: BMAP_ANCHOR_TOP_LEFT,  
                        type: BMAP_NAVIGATION_CONTROL_LARGE  
                    });  
                    map.addControl(ctrlNav);  
  
                    //向地图中添加缩略图控件  
                    var ctrlOve = new window.BMap.OverviewMapControl({  
                        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,  
                        isOpen: 1  
                    });  
                    map.addControl(ctrlOve);  
  
                    //向地图中添加比例尺控件  
                    var ctrlSca = new window.BMap.ScaleControl({  
                        anchor: BMAP_ANCHOR_BOTTOM_LEFT  
                    });  
                    map.addControl(ctrlSca);  
  
                    var point = new Array(); //存放标注点经纬信息的数组  
                    var marker = new Array(); //存放标注点对象的数组  
                    var info = new Array(); //存放提示信息窗口对象的数组  
                    for (var i = 0; i < markerArr.length; i++) {  
                        var p0 = markerArr[i].point.split(",")[0]; //  
                        var p1 = markerArr[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来  
                        point[i] = new window.BMap.Point(p0, p1); //循环生成新的地图点  
                        marker[i] = new window.BMap.Marker(point[i]); //按照地图点坐标生成标记  
                        map.addOverlay(marker[i]);  
                        marker[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画  
                        var label = new window.BMap.Label(markerArr[i].title, { offset: new window.BMap.Size(20, -10) });  
                        marker[i].setLabel(label);  
                        info[i] = new window.BMap.InfoWindow("<p style=’font-size:12px;lineheight:1.8em;’>" + markerArr[i].title + "</br>地址：" + markerArr[i].address + "</br> 电话：" + markerArr[i].tel + "</br></p>"); // 创建信息窗口对象  
                    }  
                    marker[0].addEventListener("mouseover", function () {  
                        this.openInfoWindow(info[0]);  
                    });  
                    marker[1].addEventListener("mouseover", function () {  
                        this.openInfoWindow(info[1]);  
                    });  
                    marker[2].addEventListener("mouseover", function () {  
                        this.openInfoWindow(info[2]);  
                    });  
                },  
                //异步调用百度js  
               map_load() {  
                    var load = document.createElement("script");  
                    load.src = "http://api.map.baidu.com/api?v=1.4&callback=map_init";  
                    document.body.appendChild(load);  
                }  
                // window.onload = map_load;  
 
 
  },
  mounted(){
      this.BaiduMap()
      
  }
}
</script>
<style scoped="">
section{
        background: #eee;
        flex: 1;
        margin-top: 50px;
    }
  .name{
        width: 100vw;
        background: #fff;
         
        overflow: hidden;
        margin-bottom: 20px;
    }
    .name-top{
        height: 70px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        width: 94vw;
        margin: 10px auto;
    }
    .name-top-left{
        width: 60vw;
    }
    .name-top-right{
        width: 20vw
    }
    .name-top-left img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-block;
        float: left;
    }
    .name-top-left span:nth-of-type(2){
        float: left;
         margin-left: 15px;
    }
    .name-top-left span:nth-of-type(2) p:nth-of-type(1){
        font-size: 14px;
        color: #101010;
        margin-top: 10px;
       
    }
    .name-top-left span:nth-of-type(2) p:nth-of-type(2){
        font-size: 12px;
        color: #9b9b9b;
        margin-left: 5px;

    }
    .name-top-right{
        width: 58px;
        height: 22px;
        border: 1px solid #bbb;
        font-size: 12px;
        text-align: center;
        line-height: 22px;
        margin-top: 15px;
    }
    .name>p:nth-of-type(1){
        padding-left: 20px;
        font-size: 12px;
        color: #101010
    }
    .name>p:nth-of-type(2){
        display: flex;
        justify-content: space-around;
        width: 90vw;
        margin: 0 auto
    }
    .name>p:nth-of-type(2) img{
        width: 25vw;
        height: 25vw;
    }
    .name>p:nth-of-type(3){
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #bbb;
        font-size: 14px;
        padding-left: 20px;
    }
    .ico{
        height: 30px;
        display: flex;
        justify-content: space-between;
        width: 100vw;
        margin-top: 10px;
    }
    .ico i{
        margin:0 3vw
    }
</style>
