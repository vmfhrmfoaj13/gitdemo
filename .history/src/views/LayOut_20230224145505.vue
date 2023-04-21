
<template>
  <div>
      <el-container>
            <el-aside width="200px">
              <nav-left/>

          </el-aside>
                <el-container>
                      <el-header  class="head">
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

<style lang="less" scoped>
  .head{
    background-color: #fff;
    line-height: 60px;
    box-shadow: 0 2px 2px rgba(0, 21,41,0.3);

  }
</style>