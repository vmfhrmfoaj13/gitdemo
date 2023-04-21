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
export default {
    mixins: [breadCrumb],
    beforeRouteLeave(to,from,next){
    if(to.path=="/waybill/list"){
        from.meta.keepAlive=true
    }else{4 
        //如果去的不是详情页，就要清缓存。
        let vnode = this.$vnode;
        let parentVnode = vnode && vnode.parent;
        if (
        parentVnode &&
        parentVnode.componentInstance &&
        parentVnode.componentInstance.cache
        ) {
        var key =
        vnode.key == null
        ? vnode.componentOptions.Ctor.cid +
        (vnode.componentOptions.tag
        ? `::${vnode.componentOptions.tag}`
        : "")
        : vnode.key;
        var cache = parentVnode.componentInstance.cache;
        var keys = parentVnode.componentInstance.keys;
        if (cache[key]) {
        this.$destroy();
        // remove key
        if (keys.length) {
        var index = keys.indexOf(key);
        if (index > -1) {
        keys.splice(index, 1);
             }
        }
        cache[key] = null;
        }
        }
    }
    next();
  },

    methods:{
        back(){
        this.$router.push("/waybill/list")
    }
    }
}
</script>

<style>

</style>