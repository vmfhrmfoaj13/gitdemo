<template>
   <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
       <el-card class="mt">
          <el-row :gutter="24">
            <el-col :span="18">
                <el-row>
                   <el-col :span="8">
                      <el-input></el-input>
                   </el-col>
                   <el-col :span="8">
                       <el-input></el-input>
                   </el-col>
                   <el-col :span="8">
                       <el-input></el-input>
                   </el-col>
                </el-row>
                 <el-row>
                   <el-col :span="8">
                      <el-input></el-input>
                   </el-col>
                   <el-col :span="8">
                       <el-input></el-input>
                   </el-col>
                   <el-col :span="8">
                       <el-input></el-input>
                   </el-col>
                </el-row>
            </el-col>
            <el-col :span="6" class="tr">
                <el-button type="primary">查询</el-button>
                <el-button type="primary">重置</el-button>
            </el-col>
          </el-row>
       </el-card>
   </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb";
export default {
     mixins: [breadCrumb],
}
</script>

<style>

</style>