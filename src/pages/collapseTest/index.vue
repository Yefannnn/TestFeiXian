<template>
  <div class="collapseBox">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="一致性 Consistency" name="1">
        <el-table :data="tableData"></el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
const tableData = []
</script>

<style lang="less" scoped>
.collapseBox {
  width: 400px;
  height: 400px;
}
</style>
