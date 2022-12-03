<template>
  <p>监听路由</p>
</template>

<script setup>
import {
  useRoute,
  useRouter,
  onBeforeRouteUpdate,
  onBeforeRouteLeave
} from 'vue-router'
import { watch } from 'vue'
const route = useRoute()
const router = useRouter()

watch(
  route,
  (newValue, oldValue) => {
    console.log('@@@@@', newValue, oldValue)
  },
  {
    immediate: true
  }
)

// 一维数组变成二位数组
let filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let defineArr = []
let counts = Math.ceil(filterArr.length / 4)
for (let index = 0; index < counts; index++) {
  if (index <= counts - 1) {
    defineArr.push(filterArr.slice(index * 4, index * 4 + 4))
  } else {
    defineArr.push(filterArr.slice(index * 4, filterArr.length - 1))
  }
}

console.log(defineArr)
</script>

<style></style>
