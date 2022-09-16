<template>
  <div class="treeAndTableBox">
    <div class="treeBox">
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :render-content="RenderFun"
      />
    </div>
    <!-- <div class="tableBox">
      <el-table :data="tableData" style="width: 100%" v-if="tableData">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div> -->
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const handleCurrentNodeData = ref(null)
const handleNodeClick = (data) => {
  //   拿到点击的节点数据
  handleCurrentNodeData.value = data
}
// treeData
const data = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
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
        children: [
          {
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        label: 'Level two 2-2',
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
        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1'
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

// 表格自定义类名
// const RenderFun = (h, { node, data, store }) => {
//   return (
//     <span>
//       <span>{data.label}</span>
//     </span>
//   )
// }

// 表格数据
// const tableData = ref(null)

// 表格假数据，
// const virtualData = [
//   [
//     {
//       date: '2222-222-22',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '222-222-222',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '222-22-22',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '222-222-2222',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     }
//   ],
//   [
//     {
//       date: '3333-3333-3333',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '3333-3333-3333',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '3333-3333-3333',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '3333-3333-3333',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     }
//   ],
//   [
//     {
//       date: '44444-44444-4444',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '44444-44444-4444',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '44444-44444-4444',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '44444-44444-4444',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     }
//   ],
//   [
//     {
//       date: '55555-5',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '55555-5',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '55555-5',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '55555-5',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     }
//   ]
// ]
// const currentResquest = ref(0)
// // 监听当前节点数据的变化
// const watchCurrentData = watch(handleCurrentNodeData, (newValue, oldValue) => {
//   if (newValue?.children) return
//   //   此时拿到newValue 中的最新值应该需要在这里发起请求,将服务器返回的最新的数据保存在tableData中供表格的数据展示
//   //   下面都是假赋值
//   if (currentResquest.value <= 3) {
//     tableData.value = virtualData[currentResquest.value]
//     currentResquest.value++
//   } else {
//     currentResquest.value = 0
//     tableData.value = virtualData[currentResquest.value]
//   }
// })
</script>

<style lang="less" scoped>
.treeAndTableBox {
  display: flex;
  width: 100vw;
  height: 100vh;
  .treeBox {
    width: 200px;
    height: 100%;
    background-color: #fff;
  }
  .tableBox {
    height: 100%;
    width: 100%;
    background-color: lightblue;
  }
}
</style>
