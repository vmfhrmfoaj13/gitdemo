<template>
   <div>
     我是首页
     <router-view/>
     <el-row :gutter="24">
        <el-col :span="18">
            <el-card>
               <div slot="header">进件统计分析</div>
               <div style="height:240px" ref="analysis">内容</div>
            </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
               <div slot="header">进件统计分析</div>
               <div style="height:240px">内容</div>
          </el-card>
        </el-col>
     </el-row>
   </div>
   
</template>

<script>
import * as echarts from "echarts"
export default {
  //4.调用方法。
  mounted(){
    this.drawLine()
  },
   methods:{
    drawLine(){
      //1.echarts使用第一步
      var myChart = echarts.init(this.$refs.analysis);
      //2.echarts使用第二步,复制来的
     const  option = {
  xAxis: {
    type: 'category',
     boundaryGap:false,
    data: ['22-01', '22-02', '22-03', '22-04', '22-05', '22-06', '22-07']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [30, 84, 56, 47, 84, 61, 90],
      type: 'line',
     smooth: true,
     areastyle:{

     }

    }
  ]
};
//2.echarts使用第三步
  myChart.setOption(option)
    }
   }
}
</script>

<style lang="less" scoped>

</style>