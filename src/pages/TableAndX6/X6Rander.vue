<template>
  <div :id="`container${counts}`"></div>
</template>

<script setup>
import { onMounted, ref, nextTick, computed } from 'vue'
import { Graph } from '@antv/x6'
// 接受作用域插槽中的数据
const props = defineProps({
  row: {
    type: Object,
    required: true
  }
})
const counts = ref(1)
// 创建节点和边
const createNodeAndEdge = () => {
  const graph = new Graph({
    container: document.querySelector(`#container${counts.value}`),
    width: 500,
    height: 200,
    background: {
      color: '#cdcdcd'
    }
  })
  //   画节点
  props.row.nodes.forEach((item) => {
    graph.addNode({
      id: item.id,
      x: item.x,
      y: item.y,
      width: item.width,
      height: item.height,
      attrs: {
        label: {
          text: item.label
        }
      }
    })
  })
  //   画边
  props.row.edges.forEach((edge) => {
    graph.addEdge({
      source: edge.source,
      target: edge.target
    })
  })
  nextTick(() => {
    counts.value++
  })
}
onMounted(() => {
  createNodeAndEdge()
})
</script>

<style lang="less" scoped></style>
