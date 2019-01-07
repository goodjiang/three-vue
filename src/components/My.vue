<template>
    <div>
    <header>{{tit}}</header>
        <h1>MY</h1>
    </div>
</template>
<script>
export default {
    name:"My",
    data(){
        return{
            tit:"我的训练"
        }
    }
}
</script>
<style scoped="">
header{
    height: 50px;
    background: gray;
    text-align: center;
    line-height: 50px;
    
}
h1{
    color: yellow
}
</style>
