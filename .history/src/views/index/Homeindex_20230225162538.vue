<template>
   <div>
     <el-row :gutter="24" style="margin-buttom 20px">
        <el-col :span="6">
          <el-card shadow="alawys" class="in">
            <div style="float: left">
                <p>本月进件</p>
                <p style="font-weight :bold">6588</p>
                <p>
                  +20.12%
                  <span style="font-size:12px">与上月同比</span>
                </p>
            </div>
            <i class="el-icon-tickets ico"></i>
            <div style="clear:both"></div>
            </el-card>
        </el-col>
          <el-col :span="6">
          <el-card shadow="alawys" class="in">
            <div style="float: left">
                <p>本月放款</p>
                <p style="font-weight :bold">1210000000</p>
                <p>
                  +1.25%
                  <span style="font-size:12px">与上月同比</span>
                </p>
            </div>
            <i class="el-icon-tickets ico"></i>
            <div style="clear:both"></div>
            </el-card>
        </el-col>
          <el-col :span="6">
          <el-card shadow="alawys" class="allin">
            <div style="float: left">
                <p>累计进件</p>
                <p style="font-weight :bold">128700</p>
                <p>
                  +11.48%
                  <span style="font-size:12px">与去年同比</span>
                </p>
            </div>
            <i class="el-icon-tickets ico"></i>
            <div style="clear:both"></div>
            </el-card>
        </el-col>
          <el-col :span="6">
          <el-card shadow="alawys" class="allout">
            <div style="float: left">
                <p>累计放款</p>
                <p style="font-weight :bold">923380079</p>
                <p>
                  -2.06%
                  <span style="font-size:12px">与去年同比</span>
                </p>
            </div>
            <i class="el-icon-tickets ico"></i>
            <div style="clear:both"></div>
            </el-card>
        </el-col>
     </el-row>
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
               <div style="height:240px" ref="percent">内容</div>
          </el-card>
        </el-col>
     </el-row>
   </div>
   
</template>

<script>
import * as echarts from "echarts"
import {get} from '@/utils/http'
export default {
  //4.调用方法。
  mounted(){
    this.drawLine();
    this.drawPie()
  },
   methods:{
   async  drawLine(){
      //1.echarts使用第一步
      var myChart = echarts.init(this.$refs.analysis);
      const {data} =await  get("/line");
      let keys=[];
      let values=[]
      for(let key in data){
        keys.push(key);
        values.push(data[key])
      }
      
      //2.echarts使用第二步,复制来的
     const  option = {
  xAxis: {
    type: 'category',
     boundaryGap:false,
    data: keys,
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: values,
      type: 'line',
     smooth: true,
     areaStyle:{
      color:{
          type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'red' // 0% 处的颜色
            }, {
                offset: 1, color: 'blue' // 100% 处的颜色
            }],
            global: false // 缺省为 false
              }
                }    
            

    }
  ]
};
//2.echarts使用第三步
  myChart.setOption(option)
    },
    drawPie(){
      //1.echarts使用第一步
      var myChart = echarts.init(this.$refs.percent);
      const option={ 
            tooltip: {
          trigger: 'item'
        },
       
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {

              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
          };
        
        myChart.setOption(option);
     },
   },   
}
      
      
</script>

<style lang="less" scoped>
.ico{
   float: right;
   font-size: 90px;
   color: rgba(255, 255, 255, 0.3);
}
.in{background-color: #4f88ff;}
</style>