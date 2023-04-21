<template>
    <div>
        <el-submenu v-if="menu.children">

        </el-submenu>

        <el-menu-item v-else>
            <i :class="menu.icon"></i>
            <span slot="title">{{menu.name}}</span>
        </el-menu-item>
    </div>
</template>

<script>
export default {
    name:"NavMenu",
    props:{
        menu:{
            type:Object,
            required:true
        }
       
    }
}
</script>

<style lang="less" scoped>

</style>