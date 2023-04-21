<template>
   <div>
     我是首页
     <router-view/>
     <el-row :gutter="24">
        <el-col :span="18">
            <el-card>
               <div slot="header">进件统计分析</div>
               <div>内容</div>
            </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
               <div slot="header">进件统计分析</div>
               <div>内容</div>
          </el-card>
        </el-col>
     </el-row>
   </div>
   
</template>

<script>
 //import * as echarts from "echarts"
export default {
   
}
</script>

<style lang="less" scoped>

</style>