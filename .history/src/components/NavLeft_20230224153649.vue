<template>
   <div>
    <el-menu>
    
    </el-menu>
   </div>
</template>

<script>
import {get} from '@/utils/http'
export default {
  data(){
    return{
      menuData:[]
    }
  },
    create(){
      this.getMenu
    },
    methods:{
      //获取菜单项
      async getMenu(){
       let {data}=await get('/menu')
       this.menuData=data
      }
    }
}
</script>

<style lang="Less" scoped>

</style>