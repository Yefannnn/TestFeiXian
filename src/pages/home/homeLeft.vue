<template>
  <div style="width: 100%; height: 100%; display: flex">
    <div class="left"></div>
    <div class="right">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.left {
  width: 260px;
  height: 100%;
  background-color: pink;
}
.right {
  flex: 1;
  height: 100%;
  background-color: aquamarine;
}
</style>
