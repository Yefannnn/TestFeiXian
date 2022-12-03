<!--  适用于Vue3框架 yButton  -->
<template>
  <button
    :class="{ normalClass: true, disabledClass: props.disabled }"
    @mousemove="mouseOver"
    @mouseleave="mouseLeave"
    @mouseup="mouseUp"
    @mousedown="mouseDown"
    :disabled="props.disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  color: {
    type: String,
    default: '#409eff'
  },
  size: {
    type: Number,
    default: 60
  },
  round: {
    type: Number,
    default: 4
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

let counts = 0

// 亮度因子
const ColorLuminance = (hex, lum) => {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // convert to decimal and change luminosity
  var rgb = '#',
    c,
    i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += ('00' + c).substring(c.length)
  }

  return rgb
}
/* 
    初始化按钮
*/
const initButtonCss = () => {
  // 颜色
  document
    .querySelector('body')
    .style.setProperty('--selectedColor', props.color)
  if (props.disabled) {
    document
      .querySelector('body')
      .style.setProperty('--selectedColor', props.color + 'a0')
  }

  // 尺寸
  let widthPadding = (props.size / 100) * 17 + 'px'
  let heightPadding = (props.size / 100) * 30 + 'px'
  document
    .querySelector('body')
    .style.setProperty('--bottonSize', `${widthPadding} ${heightPadding}`)
  // 圆角尺寸
  document
    .querySelector('body')
    .style.setProperty('--buttonRound', props.round + 'px')
}

// hover颜色
const mouseOver = () => {
  if (!counts) {
    document
      .querySelector('body')
      .style.setProperty('--selectedColor', ColorLuminance(props.color, 0.07))
  }
}

// 离开恢复
const mouseLeave = () => {
  document
    .querySelector('body')
    .style.setProperty('--selectedColor', props.color)
  counts = 0
}

// 鼠标抬起
const mouseUp = () => {
  document
    .querySelector('body')
    .style.setProperty('--selectedColor', ColorLuminance(props.color, 0.1))
  counts = 0
}

// 鼠标按下
const mouseDown = () => {
  counts += 1
  document
    .querySelector('body')
    .style.setProperty('--selectedColor', ColorLuminance(props.color, -0.05))
}

onMounted(() => {
  initButtonCss()
})
</script>

<style lang="less" scoped>
@button-color: var(--selectedColor);
@button-size: var(--bottonSize);
@button-round: var(--buttonRound);
.normalClass {
  padding: @button-size;
  background-color: @button-color;
  user-select: none;
  border: 0px;
  border-radius: @button-round;
  cursor: pointer;
  color: #fff;
}

.disabledClass {
  cursor: not-allowed;
}
</style>

<!-- 
    常用属性
    color="#409eff" :size="70" :round="10"  disabled
 -->
