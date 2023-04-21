<template>
   <div class="fr">
          <el-dropdown @command="handCommand">
      <span class="el-dropdown-link">
        欢迎您，{{info}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">个人中心</el-dropdown-item>
        <el-dropdown-item command="b">修改密码</el-dropdown-item>
        <el-dropdown-item command="c">退出登录</el-dropdown-item>
       
      </el-dropdown-menu>
</el-dropdown>
   </div>
</template>

<script>
import { removeToken } from '@/utils/auth'
export default {
    data(){
      return{
        info:sessionStorage.getItem("nickname")
      }
    },
    methods:{
        handleCommand(item){
          if(item=="c"){
            removeToken()
          }

        }
      }
}
</script>

<style scpoed>

</style>