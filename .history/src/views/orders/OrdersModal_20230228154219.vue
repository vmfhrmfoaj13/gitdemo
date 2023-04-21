<template>
  <div>
        <el-dialog
            title="提示"
            :visible="visible"
            width="30%"
            >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary">保存</el-button>
                </span>
        </el-dialog>

  </div>
</template>

<script>
export default {
    props:["visible","hide"],
    methods:{
        close(){
            this.$emit("hide")
        }
    }
}
</script>

<style>

</style>