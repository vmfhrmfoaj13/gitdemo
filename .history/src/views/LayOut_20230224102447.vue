
<template>
  <div>
      <el-container>
            <el-aside width="200px">
              <nav-left/>

          </el-aside>
                <el-container>
                      <el-header>
                          <top-head/>
                      </el-header>
                      <el-main>
                          <router-view/>
                      </el-main>
                      <el-footer>
                         京ICP备88888888888号 京公安网备123456号
                      </el-footer>
                </el-container>
    </el-container>
    </div>    
</template>

<script>
import NavLeft from '@/components/NavLeft.vue'
import TopHead from '@/components/TopHead.vue'

export default {
  components:{
    NavLeft,TopHead
  }
  
  
}
</script>

<style>

</style>