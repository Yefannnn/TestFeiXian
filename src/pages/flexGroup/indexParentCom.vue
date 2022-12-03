<template>
  <div class="contextBox">
    <cardItem
      class="cardItem"
      v-for="item in itemsAllData"
      :key="item"
      :itemData="item"
    ></cardItem>
  </div>
</template>

<script setup>
import cardItem from './index.vue'
const itemsAllData = [
  {
    classify: '安全',
    publisher: '张宇',
    publishTime: '2022-08-29 12:00:00'
  },
  {
    classify: '安全',
    publisher: '张宇',
    publishTime: '2022-08-29 12:00:00'
  },
  {
    classify: '安全',
    publisher: '张宇',
    publishTime: '2022-08-29 12:00:00'
  },
  {
    classify: '安全',
    publisher: '张宇',
    publishTime: '2022-08-29 12:00:00'
  },
  {
    classify: '安全',
    publisher: '张宇',
    publishTime: '2022-08-29 12:00:00'
  },
  {
    classify: '安全',
    publisher: '张宇',
    publishTime: '2022-08-29 12:00:00'
  },
  {
    classify: '安全',
    publisher: 'yy',
    publishTime: '2022-08-29 12:00:00'
  },
  {
    classify: '安全',
    publisher: 'xx',
    publishTime: '2022-08-29 12:00:00'
  }
]
</script>

<style lang="less" scoped>
.contextBox {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 1300px;
  height: 500px;
  background-color: rgb(196, 236, 227);
}
.cardItem {
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
