<template>
   <div>
   <el-breadcrumb separator="/">
   <el-breadcrumb-item>
  <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
   </el-breadcrumb-item>
</el-breadcrumb>
   <el-card>
         <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
         <el-button slot="append" icon="el-icon-search"></el-button>
         </el-input>
   </el-card>
   </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb"
export default { 
      mixins:[breadCrumb]
};

</script>

<style>

</style>