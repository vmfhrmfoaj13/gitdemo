<template>
    <div>
        <el-submenu v-if="menu.children">
            <template slot="title">
                <i :class="menu.icon"></i>
                <span slot="title">{{menu.name}}</span>
            </template>
                <nav-menu v-for="(item,index) in menu.children" :menu="item" :key="index"></nav-menu>
        </el-submenu>

        <el-menu-item v-else>
            <i :class="menu.icon"></i>
            <span slot="title">{{menu.name}}</span>
        </el-menu-item>
    </div>
</template>

<script>
import NavLeft from '@/components/NavLeft.vue'
export default {
    name:"NavMenu",
    props:{
        menu:{
            type:Object,
            required:true
        }
       
    },
    components:{
        NavLeft
    }
}
</script>

<style lang="less" scoped>

</style>