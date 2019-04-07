<template>
    <div id="wrap">
        <h1>welcome to kaola</h1>
    </div>
    <user-list></user-list>
</template>

<script>
    // console.log(111);
//导入模块
import User from 'components/user.vue'
export default {
    data() {
        return {
            name:"tom"
        }
    },
    components:{
        'user-list':User
    }
    
}
</script>

// 表示当前样式只对当前文件的代码生效  
<style scoped>  
    body{
        background-color: #ccc;
    }
</style>
