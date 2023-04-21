
<template>
  <div>
      <el-container>
            <el-aside 
            width="200px"
            class="aside"
            
            >
              <nav-left/>

          </el-aside>
                <el-container>
                      <el-header  class="head">
                          <top-head/>
                      </el-header>
                      <el-main class="main">
                          <router-view></router-view>
                      </el-main>
                      <el-footer class="foot">
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
    NavLeft,
    TopHead,
  }
}
</script>

<style lang="less" scoped>
  .head{
    background-color: #fff;
    line-height: 60px;
    box-shadow: 0 2px 2px rgba(0, 21,41,0.3);

  }
  .aside{
    background: #001529;
    height: 100vh
  }
  .main{
    height: 70vh;
  }
  .foot{
    text-align: center;
    color: #999;
    font-size:12px;
    line-height: 72px;
    background-color: #e9eef3;

  }
  .main{
    height: 70vh;
    background-color: #e9eef3;

  }
</style>