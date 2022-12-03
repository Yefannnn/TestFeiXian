<template>
  <div class="itemBox">
    <div class="imgBox">
      <img src="" alt="" />
    </div>
    <div class="contextBox">
      <h3>危险作业</h3>
      <p>
        分类：<span>{{ itemData.classify }}</span>
      </p>
      <p>
        发布人：<span>{{ itemData.publisher }}</span>
      </p>
      <p>
        时间：<span>{{ itemData.publishTime }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    required: true
  }
})
</script>

<style lang="less" scoped>
.itemBox {
  width: 320px;
  height: 250px;
  background-color: pink;
  border-radius: 5px;
  overflow: hidden;
  .imgBox {
    height: 140px;
    width: 100%;
    background-color: lightblue;
  }
  .contextBox {
    padding: 10px;
    height: calc(250px - 140px);
    width: 100%;
    background-color: rgb(192, 192, 192);
    p {
      font-size: 14px;
      color: #636363;
    }
    h3 {
      margin-bottom: 5px;
    }
  }
}
</style>
