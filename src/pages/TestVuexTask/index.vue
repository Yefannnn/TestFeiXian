<template>
  <div class="fatherComponent">
    <div
      style="
        text-align: center;
        background-color: aquamarine;
        height: 40px;
        line-height: 40px;
      "
    >
      <span>测试Vuex响应式原理</span>
      <button
        style="
          margin-left: 20px;
          border: none;
          padding: 5px;
          box-shadow: 2px 2px 1px 1px rgba(235, 211, 85, 0.5);
          cursor: pointer;
        "
        @click="clickBtn"
      >
        点击改变store中state中的值
      </button>
    </div>

    <!-- 二级路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()

const clickBtn = () => {
  store.commit('updateState')
}
</script>

<style lang="less" scoped>
.fatherComponent {
  width: 100vw;
  height: 100vh;
  border: 2px solid red;
}
</style>
