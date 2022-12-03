<template>
  <div>单元格合并</div>
  <el-table
    :data="tableData"
    :span-method="objectSpanMethod"
    border
    style="width: 100%; margin-top: 20px"
  >
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="nodeLabel" label="Name" />
    <el-table-column prop="des" label="描述" />
    <el-table-column label="动因预警">
      <el-table-column label="State" width="120">
        <template #default="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="ev" label="City" width="120">
        <template #default="scope">
          <span>{{ scope.row.ev }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="level" label="Address">
        <template #default="scope">
          <span>{{ scope.row.level }}</span>
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script setup>
const tableData = [
  {
    id: '12142134',
    nodeLabel: '雷达站01',
    des: '这是一段描述',
    name: '节点1',
    ev: '事件1',
    level: '1',
    count: 1
  },
  {
    id: '24214321',
    nodeLabel: '雷达站02',
    des: '这是一段描述',
    name: '节点1',
    ev: '事件1',
    level: '1',
    count: 2
  },
  {
    id: '223412',
    nodeLabel: '雷达站02',
    des: '这是一段描述',
    name: '节点1',
    ev: '事件1',
    level: '1'
  },
  {
    id: '342342',
    nodeLabel: '雷达站03',
    des: '这是一段描述',
    name: '节点1',
    ev: '事件1',
    level: '1',
    count: 2
  },
  {
    id: '323423',
    nodeLabel: '雷达站03',
    des: '这是一段描述',
    name: '节点1',
    ev: '事件1',
    level: '1'
  }
]

let newObj = {}
newObj['1'] = 1
console.log(newObj)

const obj = tableData.reduce((pre, curr) => {
  if (pre[curr.id]) {
    pre[curr.id]++
  } else {
    pre[curr.id] = 1
  }
  return pre
}, {})
console.log('obj', obj)

const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  //   if (columnIndex === 0) {
  //     if (rowIndex % 2 === 0) {
  //       return {
  //         rowspan: 2,
  //         colspan: 1
  //       }
  //     } else {
  //       return {
  //         rowspan: 0,
  //         colspan: 0
  //       }
  //     }
  //   }
  console.log('row', row)
  console.log('column', column)
  console.log('rowIndex', rowIndex)
  console.log('columnIndex', columnIndex)
  if (columnIndex <= 2) {
    console.log('@@@', 21)
    return {
      rowspan: row.count,
      colspan: 1
    }
  } else {
    return {
      rowspan: 1,
      colspan: 1
    }
  }
}
</script>

<style lang="less" scoped></style>
