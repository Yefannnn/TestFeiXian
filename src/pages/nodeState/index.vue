<template>
  <div style="width: 200px">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
      <template v-slot="{ node, data }">
        <span style="color: #cdcdcd">{{ data.label }}</span>
        <nodeState :data="data"></nodeState>
      </template>
    </el-tree>
  </div>
</template>

<script setup>
import nodeState from './nodeState.vue'
const handleNodeClick = (data) => {
  console.log(data)
}

// 主任务
// 子任务
// 节点
//  nodeType 'mainTask' 'childTask'  'source'
// 'mainTask'  '0'  '1'  '2'  '3'
// 'childTask' '0' '1' '2'  '3' '4' '5'
// 'source'   '0' '1' '2' '3'

// 如果nodeState是 '0'  就隐藏
// 如果'childTask'是 '3' '4' '5' 的时候 变成
const data = [
  {
    label: 'Level one 1',
    nodeType: 'mainTask',
    nodeState: '0',
    children: [
      {
        label: 'Level two 1-1',
        nodeType: 'childTask',
        nodeState: '2',
        children: [
          {
            label: 'Level three 1-1-1',
            nodeType: 'source',
            nodeState: '2'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 2',
    nodeType: 'mainTask',
    nodeState: '1',
    children: [
      {
        label: 'Level two 2-1',
        nodeType: 'childTask',
        nodeState: '3',
        children: [
          {
            label: 'Level three 2-1-1',
            nodeType: 'source',
            nodeState: '1'
          }
        ]
      },
      {
        label: 'Level two 2-2',
        nodeType: 'childTask',
        nodeState: '4',
        children: [
          {
            label: 'Level three 2-2-1',
            nodeType: 'source',
            nodeState: '2'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    nodeType: 'mainTask',
    nodeState: '2',
    children: [
      {
        label: 'Level two 3-1',
        nodeType: 'childTask',
        nodeState: '5',
        children: [
          {
            label: 'Level three 3-1-1',
            nodeType: 'source',
            nodeState: '1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        nodeType: 'childTask',
        nodeState: '1',
        children: [
          {
            label: 'Level three 3-2-1',
            nodeType: 'source',
            nodeState: '2'
          }
        ]
      }
    ]
  }
]

const defaultProps = {
  children: 'children',
  label: 'label'
}
</script>

<style lang="less" scoped></style>
