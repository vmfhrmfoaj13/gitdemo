<template>
   <div class="fr">
          <el-dropdown>
      <span class="el-dropdown-link">
        欢迎您，{{info}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
       
      </el-dropdown-menu>
</el-dropdown>
   </div>
</template>

<script>
export default {
    data(){
      return{
        info:sessionStorage.getItem("nickname")
      }
    }
}
</script>

<style scpoed>

</style>