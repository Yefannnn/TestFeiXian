<template>
  <div class="childStyle">
    <div style="display: flex; height: 100%">
      <div class="childText">
        <span>子组件</span>
      </div>
      <router-view></router-view>

      <!-- 动画 -->
      <transition-group
        name="animate__animated animate__bounce"
        enter-active-class="animate__fadeInRight"
        leave-active-class="animate__fadeOutRight"
      >
        <!-- 小组件 -->
        <div
          style="
            width: 150px;
            height: 150px;
            background-color: #cdcdcd;
            position: absolute;
            right: 50px;
            top: 100px;
            user-select: none;
          "
          v-if="showDetailTask"
        >
          <span>详情弹窗</span>
          <button
            style="position: absolute; right: 10px; top: 10px"
            @click="btnClose"
          >
            关闭
          </button>
        </div>
        <div
          style="
            width: 30px;
            height: 140px;
            background: lightblue;
            position: absolute;
            right: 0px;
            top: 100px;
          "
          v-if="!showDetailTask"
        >
          <span>详情查看</span>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import 'animate.css'
const store = useStore()

// const showDetailTask = ref(false)

// // 监听
// watch(
//   () => store.state.count,
//   (newValue) => {
//     showDetailTask.value = newValue
//   }
// )
const showDetailTask = computed(() => {
  return store.state.count
})

const btnClose = () => {
  store.commit('updateState')
}
</script>

<style lang="less" scoped>
.childStyle {
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  .childText {
    width: 200px;
    height: 100%;
    background-color: rgb(200, 245, 230);
  }
}

.YF-enter-active,
.YF-leave-active {
  transition: all 2s;
}
@keyframes showAndHidden {
  from {
  }
  to {
  }
}
</style>
