<template>
  <div>
     <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="card mt">
        <el-row>
            <el-col :span="12" class="info" style="text-align:left">
                <span>运单编号:YGC2017011000001</span>
                <span>创建时间:2023-03-02</span>
                <span>审核员：张三峰</span>
                <span></span>
            </el-col>
            <el-col :span="12" style="text-align:right">
                <el-button type="primary" @click="back">返回</el-button>
            </el-col>
        </el-row>
    </el-card>
    <el-card clas="mt">
        <el-steps>

        </el-steps>
    </el-card>
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb";
import {mapMutations} from "vuex"
export default {
    mixins: [breadCrumb],
      beforeRouteLeave(to,from,next){
    if(to.path=="/waybill/list"){
        //做个标记在vuex里
        this. changeIsFromDetail(true)
    }else{
         this. changeIsFromDetail(false)
    }
    next()
      },
        

    methods:{
        ...mapMutations(["changeIsFromDetail"]),
        back(){
        this.$router.push("/waybill/list")
    }
    }
}
</script>

<style>
.info span{
    line-height: 40px;
    text-align: left;
    margin: 0 8px;
}
</style>