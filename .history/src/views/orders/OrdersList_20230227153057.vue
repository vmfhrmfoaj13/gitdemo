<template>
   <div>
   <el-breadcrumb separator="/">
   <el-breadcrumb-item>
  <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
   </el-breadcrumb-item>
</el-breadcrumb>
   <el-card class="mt">
         <el-cow>
            <el-col :span="6" class="mt">
                  <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
                     <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
            </el-col>
            <el-col :span="6" :offset="12">
               <el-button>新建订单</el-button>
               <el-button>审核</el-button>
               <el-button>修改</el-button>
               <el-button>作废</el-button>
            </el-col>
         </el-cow>
   </el-card>
   </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb"
export default { 
      mixins:[breadCrumb],
      data(){
         return{
            searchValue:""
         }
      }
};

</script>

<style>

</style>