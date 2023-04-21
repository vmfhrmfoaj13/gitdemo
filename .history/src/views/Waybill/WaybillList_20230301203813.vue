<template>
    <div>
         <el-breadcrumb separator="/">   
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row :gutter="16" class="mt">
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
                    >
                    </el-date-picker>
                                        
                </el-col>
                <el-col :span="6">
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary">重置</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb"
export default {
    mixins:[breadCrumb],
}
</script>

<style>

</style>