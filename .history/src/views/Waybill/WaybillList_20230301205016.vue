<template>
    <div>
         <el-breadcrumb separator="/">   
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="mt">
            <el-row :gutter="16" >
                <el-col :span="6">
                    <el-input placeholder="请输入运单号"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入客户名称"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-date-picker
                        
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        style=width:100%
                    >
                    </el-date-picker>
                                        
                </el-col>
                <el-col :span="6" class="tr">
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary">重置</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="mt">
              <el-radio-group v-model="status">
                <el-radio-button label="1">全部运单(300)</el-radio-button>
                <el-radio-button label="2">装货中(120)</el-radio-button>
                <el-radio-button label="3">运输中(70)</el-radio-button>
                <el-radio-button label="4">已完成(100)</el-radio-button>
                <el-radio-button label="5">运单异常(10)</el-radio-button>
            </el-radio-group>
        </el-card>
    </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb"
export default {
    mixins:[breadCrumb],
    data(){
        return{
            status:1
        }
    }
}
</script>

<style>

</style>