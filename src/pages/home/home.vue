<template>
  <div style="height: 40px; width: 100%; background-color: antiquewhite">
    <button @click="topath">跳转</button>
  </div>
  <div class="secFloor">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const topath = () => {
  router.push({
    path: '/routeTest'
  })
}
</script>

<style lang="less" scoped>
.secFloor {
  width: 100%;
  height: calc(100vh - 40px);
  background-color: rgb(255, 255, 255);
}
</style>

<!-- 
    搭建页面的整体思路
    1 分析这个页面的结构，如何划分1级 2级 3级组件
    2 新建一级组件  和  一级路由 ，将一级组件的布局布局完毕之后写入router-view
    3 然后依次按照步骤写入即可
    4 只要记住，上一级组件需要将出口的大小控制好之后再写入出口


 -->
