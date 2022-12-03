<template>
  <div>
    <span>iframe框架</span>
    <ul>
      <li class="parentli">
        <span>
          <a href="###">11111</a>
        </span>
      </li>
      <li class="parentli">
        <span>
          <a href="###">22222</a>
        </span>
      </li>
      <li class="parentli">
        <span>
          <a href="###">33333</a>
        </span>
      </li>
      <li class="parentli">
        <span>
          <a href="###">44444</a>
        </span>
        <ul>
          <li class="list">
            <span>
              <a href="###">001</a>
            </span>
          </li>
          <li class="list">
            <span>
              <a href="###">002</a>
            </span>
          </li>
          <li class="list">
            <span>
              <a href="https://v2.cn.vuejs.org/">003</a>
            </span>
          </li>
        </ul>
      </li>
    </ul>
    <iframe
      width="1800"
      height="800"
      src="https://cn.vuejs.org/"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const simulationClick = (oneTask, twoTask) => {
  let aDom = document.querySelectorAll('.parentli')
  console.log('aDom', aDom)
  let targetLi = null // 一级DOM元素
  for (let index = 0; index < aDom.length; index++) {
    if (aDom[index].querySelector('a').innerText === oneTask) {
      targetLi = aDom[index]
    }
  }
  //   找到目标2级菜单
  let targetLis = targetLi.querySelectorAll('.list') // 二级DOM元素
  for (let index = 0; index < targetLis.length; index++) {
    if (targetLis[index].querySelector('a').innerText === twoTask) {
      targetLis[index].querySelector('a').click()
    }
  }
}

onMounted(() => {
  // simulationClick('44444', '003') // 1 一级目录
})
</script>

<style></style>
