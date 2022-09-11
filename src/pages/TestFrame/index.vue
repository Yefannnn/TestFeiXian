<template>
  <div class="test" style="width: 100vw; height: 100vh; position: relative">
    <div class="testFrame"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const createFrame = () => {
  const frame = document.querySelector('.testFrame')
  frame.addEventListener('mouseover', (e3) => {
    frame.style.cursor = 'move'
  })
  frame.addEventListener('mousedown', (e) => {
    const x = e.pageX - frame.offsetLeft
    const y = e.pageY - frame.offsetTop
    const mouseMoveFun = (e1) => {
      frame.style.left = e1.pageX - x + 'px'
      frame.style.top = e1.pageY - y + 'px'
    }
    document.querySelector('.test').addEventListener('mousemove', mouseMoveFun)

    frame.addEventListener('mouseup', (e) => {
      document
        .querySelector('.test')
        .removeEventListener('mousemove', mouseMoveFun)
    })
  })
}

onMounted(() => {
  createFrame()
})
</script>

<style scoped>
.testFrame {
  position: absolute;
  left: 100px;
  top: 100px;
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
