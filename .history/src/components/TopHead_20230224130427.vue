<template>
   <div class="head">
          <el-dropdown>
      <span class="el-dropdown-link">
        欢迎您，{{info}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
</el-dropdown>
   </div>
</template>

<script>
export default {
    data(){
      return{
        info:sessionStorage.getItem("nickname")
      }
    }
}
</script>

<style>

</style>