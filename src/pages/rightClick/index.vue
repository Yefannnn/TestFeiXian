<template>
  <el-tree
    :data="data"
    :props="defaultProps"
    @node-click="handleNodeClick"
    @node-contextmenu="rightClickFun"
    style="width: 200px"
  />
  <ul class="nodeRightClickMeum" v-show="rightClickVar">
    <li @click.prevent="nodeClickFun">查看节点详情</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
const handleNodeClick = (data) => {
  console.log(data)
  rightClickVar.value = false
}

const data = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        nodeType: '2',
        children: [
          {
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        nodeType: '2',

        children: [
          {
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        label: 'Level two 2-2',
        nodeType: '2',

        children: [
          {
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        nodeType: '2',

        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        nodeType: '2',
        children: [
          {
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
]

// 节点右键
const rightClickVar = ref(false)
const rightClickData = ref({})
const clickFun = () => {
  rightClickVar.value = false
}
// 右键事件
const rightClickFun = (event, object, node, item) => {
  console.log(event, object, node, item)
  if (object.nodeType === '2') {
    rightClickData.value = {}
    rightClickData.value = object
    rightClickVar.value = false
    rightClickVar.value = true
    const nodeDom = document.querySelector('.nodeRightClickMeum')
    console.log(nodeDom)
    nodeDom.style.position = 'absolute'
    nodeDom.style.left = event.clientX + 'px'
    nodeDom.style.top = event.clientY + 'px'
    const bodyDom = document.querySelector('body')
    bodyDom.addEventListener('click', clickFun)
  }
}
// 左键点击
const nodeClickFun = () => {
  rightClickVar.value = false
  const bodyDom = document.querySelector('body')
  bodyDom.removeEventListener('click', clickFun)
  //   alert(rightClickData.value.label)
  //   拿到节点id之后可以将id传入
}

const defaultProps = {
  children: 'children',
  label: 'label'
}
</script>

<style lang="less" scoped>
.nodeRightClickMeum {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background-color: rgb(244, 244, 244);
  cursor: pointer;
}
</style>
