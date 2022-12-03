<template>
  <div>
    <ul>
      <li
        @click="currentIndex(1)"
        :class="{ isActive: store.state.DetaillIndex === 1 ? true : false }"
      >
        详情
      </li>
      <li
        @click="currentIndex(2)"
        :class="{ isActive: store.state.DetaillIndex === 2 ? true : false }"
      >
        关键节点关键详情
      </li>
      <li
        @click="currentIndex(3)"
        :class="{ isActive: store.state.DetaillIndex === 3 ? true : false }"
      >
        能力关系
      </li>
    </ul>
    <div>当前需要高亮的索引是{{ store.state.DetaillIndex }}</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const currentIndex = (data) => {
  store.commit('updateIndex', data)
}
</script>

<style lang="less" scoped>
.isActive {
  background-color: pink;
  font-weight: 700;
}
</style>
