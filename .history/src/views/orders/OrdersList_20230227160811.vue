<template>
   <div>
   <el-breadcrumb separator="/">   
  <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
</el-breadcrumb>
      <el-card class="mt">
         <el-row> 
            <el-col :span="6">
                  <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
                     <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
            </el-col>
            <el-col :span="6" :offset="12" class="operate">
               <el-button type="primary">新建订单</el-button>
               <el-button disabled>审核</el-button>
               <el-button disabled>修改</el-button>
               <el-button disabled>作废</el-button>
            </el-col>
         </el-row>
   </el-card>

   <el-card class="mt">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
   </el-card>

   </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb"
export default { 
      mixins:[breadCrumb],
      data(){
         return{
            searchValue:"",
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
         }
      }
};

</script>

<style>
.operate{text-align: right;}

</style>