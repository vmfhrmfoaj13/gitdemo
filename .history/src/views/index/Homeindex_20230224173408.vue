<template>
   <div>
     我是首页
     <router-view/>
   </div>
   
</template>

<script>
import HomeIndex from './HomeIndex.vue'

export default {
    components:{
        HomeIndex
    }
}
</script>

<style>

</style>