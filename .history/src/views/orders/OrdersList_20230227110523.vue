<template>
   <div>
   <el-breadcrumb separator="/">
 
   <el-breadcrumb-item>
  <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
   </el-breadcrumb-item>
</el-breadcrumb>
   </div>
</template>

<script>
export default {
   
}
</script>

<style>

</style>