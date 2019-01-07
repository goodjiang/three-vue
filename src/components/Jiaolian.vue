<template>
    <div>
        <span  @click="btn1()" class="iconfont icon-zuojiantou"></span>
        
    </div>
</template>
<script>
export default {
    
    name:"Jiaolian",
    methods: {
        btn1(){
            this.$router.go(-1)
        }
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
</style>
