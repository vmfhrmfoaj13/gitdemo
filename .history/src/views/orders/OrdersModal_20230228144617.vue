<template>
  <div>
        <el-dialog
            title="提示"
            :visible="true"
            width="30%"
            >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button>取 消</el-button>
                <el-button type="primary">确 定</el-button>
                </span>
        </el-dialog>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>