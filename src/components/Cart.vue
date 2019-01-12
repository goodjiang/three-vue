<template>
    <div class="wrap">
        <mt-header title="购物车" style="background:#fff;border-bottom:1px solid #bbb;height:6vh;color:#101010">
            <mt-button icon="back" slot="left" @click="btn1()"></mt-button> 
        </mt-header>
        <section>
            <ul id="cartList">
                 <li v-for="(item,i) in arr[0]" :key="i">
                      <div class="left">
                        <input type="checkbox">
                        <img :src="item.gImg" alt="">
                    </div>
                    <div class="right">
                        <p>{{item.gName}}</p>
                        <p><span>￥:{{item.gPrice}}</span><span>{{item.gNum}}</span></p>
                    </div>       
                         
                </li> 
            </ul>
        </section>
        <footer>
            <p><input type="checkbox" name="" id="quanxuan"><sapn>全选</sapn></p>
            <p>合计:￥0.00</p>
            <p @click="btn2()">结算</p>
        </footer>
    </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";

export default {
    name:"Cart",
    data() {
        return {
            arr:[]
        }
    },
    methods: {
        btn1(){
            this.$router.go(-1)
        },
        btn2(){

        }    
    },
    mounted() {
        var _this = this;
        axios({
            method:"get",
            url:"http://10.8.155.35:8080/cartall.do",
            params:{uId:this.$store.state.token}
        }).then((data)=>{
            _this.arr.push(data.data.data)
            console.log(_this.arr)
            //console.log(data.data.data)
        })
       
       
       //全选---------------------
        $("#quanxuan").click(function(){
		$("#cartList li").find("input").prop("checked",$("#quanxuan").prop("checked"))
        
         //单选------------------
            $("#cartList li").each(function(){
				$(this).find("input").click(function(){		
						var newArr=[];
						$("#cartList li").each(function(){
							if($(this).find("input").prop("checked")){
								
							}
						})
						
					})
                })
        $("#cartList li").find("input").click(function(){
			$("#cartList li input").each(function(){
			if($("#cartList li input:checked").length==$("#cartList li input").length){
				$("#quanxuan").prop("checked",true)
			}else{
				$("#quanxuan").prop("checked",false)
			}
		})
		
	})	

	})
    },
}
</script>

<style scoped="">
    .wrap{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    section{
        display: flex;
        flex: 1;
       
        overflow: auto
    }
    section li{
        height: 120px;
        width: 100vw;
        border-bottom: 1px solid #ccc;
    }
    .left{
        width: 49vw;
        float: left;
    }
    .right{
        width: 50vw;
        float: left;
        overflow: hidden;
    }
    section li input{
        float: left;
        display: inline-block;
        margin-top: 50px;
        width: 20px;
        height: 20px;
        
    }
    section li img{
        width: 100px;
        height: 100px;
        margin: 10px;
        display: inline-block;
        float: left;
    }
    section li p:nth-of-type(1){
        display: inline-block;
        margin: 10px;
        margin-top: 20px;
        margin-left: 0;
    }
    section li p:nth-of-type(2){
        display: inline-block;
        width: 50vw;
        margin-left: 0;
    }
    section li p:nth-of-type(2) span:nth-of-type(2){
       margin-left: 30px
    }
    footer{
        height: 60px;
        background: #fff;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        overflow: hidden;
        line-height: 50px;
        border-top: 1px solid #ccc;
    }
    footer input{
        width: 20px;
        height: 20px;
    }
    footer p {
        width: 33.33vw;
        height: 60px;
        text-align: left;
    }

    footer p:nth-of-type(3){
        width: 33.33vw;
        height: 60px;
        background: #ccc;
        text-align: center;
    }
</style>
