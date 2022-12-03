<template>
  <el-table :data="tableData" :border="parentBorder" style="width: 100%">
    <el-table-column type="expand">
      <!-- <template #default="props">
        <div m="4">
          <el-table :data="props.row.family" :border="childBorder">
            <el-table-column label="Name" prop="name" />
            <el-table-column label="State" prop="state" />
            <el-table-column label="City" prop="city" />
            <el-table-column label="Address" prop="address" />
            <el-table-column label="Zip" prop="zip" />
          </el-table>
        </div>
      </template> -->
      <template #default="{ row }">
        <el-table :data="row.chilren" :span-method="objectSpanMethod">
          <el-table-column prop="nodeId"></el-table-column>
          <el-table-column prop="nodeName"></el-table-column>
          <el-table-column prop="cribe"></el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column label="节点编号">
      <template #default="{ row }">
        <span>{{ row.taskName }}</span>
      </template>
    </el-table-column>
    <el-table-column label="节点名称" />
    <el-table-column label="节点描述" />
  </el-table>
</template>

<script setup>
import { ref } from 'vue'

const parentBorder = ref(false)
const childBorder = ref(false)
const tableData = [
  {
    taskName: '任务001：对su-27进行拦截',
    chilren: [
      {
        nodeId: '001',
        nodeName: 'su-27',
        cribe: '这是一段描述',
        counts: 4
      },
      {
        nodeId: '002',
        nodeName: 'su-27',
        cribe: '这是一段描述'
      },
      {
        nodeId: '003',
        nodeName: 'su-27',
        cribe: '这是一段描述'
      },
      {
        nodeId: '004',
        nodeName: 'su-27',
        cribe: '这是一段描述'
      }
    ]
  },
  {
    taskName: '任务002：对su-27进行拦截',
    chilren: [
      {
        nodeId: '001',
        nodeName: 'su-27',
        cribe: '这是一段描述',
        counts: 4
      },
      {
        nodeId: '002',
        nodeName: 'su-27',
        cribe: '这是一段描述'
      },
      {
        nodeId: '003',
        nodeName: 'su-27',
        cribe: '这是一段描述'
      },
      {
        nodeId: '004',
        nodeName: 'su-27',
        cribe: '这是一段描述'
      }
    ]
  },
  {
    taskName: '任务003：对su-27进行拦截',
    chilren: [
      {
        nodeId: '001',
        nodeName: 'su-27',
        cribe: '这是一段描述',
        counts: 4
      },
      {
        nodeId: '002',
        nodeName: 'su-27',
        cribe: '这是一段描述'
      },
      {
        nodeId: '003',
        nodeName: 'su-27',
        cribe: '这是一段描述'
      },
      {
        nodeId: '004',
        nodeName: 'su-27',
        cribe: '这是一段描述'
      }
    ]
  }
]

const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  if (columnIndex === 2) {
    if (row.counts) {
      return {
        rowspan: row.counts,
        colspan: 1
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.thead) {
  height: 0;
}
</style>
