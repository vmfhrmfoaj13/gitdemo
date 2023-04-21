<template>
   <div>
    <el-menu>
          <menus-vue></menus-vue>
    </el-menu>
   </div>
</template>

<script>
import {get} from '@/utils/http'
import  MenusVue from './MenusVue.vue'
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
       console.log(data)
       this.menuData=data
      }
    },
    components:{
      MenusVue
    }
}
</script>

<style lang="Less" scoped>

</style>