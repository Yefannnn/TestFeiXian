<template>
  <el-select
    filterable
    v-model="selectValue"
    ref="selectDom"
    placeholder="Select"
    @focus="onFocus"
    @blur.native.capture="onBlur"
  >
    <el-option
      v-for="item in formatListData(listData)"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      style="display: none"
    ></el-option>
    <el-tree
      :data="listData"
      :props="defaultProps"
      :node-key="id"
      @node-click="handleNodeClick"
    />
  </el-select>
  <!-- <div class="app-container">
    <el-select
      class="main-select-tree"
      ref="selectTree"
      v-model="value"
      style="width: 560px"
    >
      <el-option
        v-for="item in formatData(datas)"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        style="display: none"
      />
      <el-tree
        class="main-select-el-tree"
        ref="selecteltree"
        :data="datas"
        node-key="id"
        :props="defaultProps"
        @node-click="handleNodeClick"
      />
    </el-select>
  </div> -->
</template>

<script setup>
import { ref } from 'vue'

const selectValue = ref('')

const listData = ref([
  {
    id: '01',
    name: '01级',
    children: [
      {
        id: '001',
        name: '001'
      },
      {
        id: '002',
        name: '002'
      },
      {
        id: '003',
        name: '003'
      }
    ]
  },
  {
    id: '02',
    name: '02级',
    children: [
      {
        id: '004',
        name: '001'
      },
      {
        id: '005',
        name: '002'
      },
      {
        id: '006',
        name: '003'
      }
    ]
  },
  {
    id: '03',
    name: '03级',
    children: [
      {
        id: '007',
        name: '001'
      },
      {
        id: '008',
        name: '002'
      },
      {
        id: '009',
        name: '003'
      }
    ]
  }
])

const formatListData = (data) => {
  // 树形 => 扁平
  let option = []
  listData.value.forEach((item) => {
    option.push({ label: item.name, value: item.id })
    item.children.forEach((itemObj) => {
      option.push({ label: itemObj.name, value: itemObj.id })
    })
  })
  //   console.log('@@@', option)
  return option
}

// ref实例
const selectDom = ref(null)
// tree点击事件
const handleNodeClick = (node, a, b) => {
  console.log(a, b)
  selectValue.value = node.name
  selectDom.value.customInput.blur()
}
// 聚焦事件
const onFocus = (e) => {
  selectDom.value.customInput = {}
  selectDom.value.customInput.blur = () => {
    selectDom.value.blur()
  }
  //   console.log('@@@@', selectDom.value.customInput)
}
// 失焦事件
const onBlur = () => {
  console.log('失焦')
  //   selectDom.value.blur()
}

const defaultProps = {
  children: 'children',
  label: 'name'
}
// export default {
//   data() {
//     return {
//       value: null,
//       expandOnClickNode: true,
//       options: [],
//       datas: [
//         {
//           id: 1,
//           label: '云南',
//           children: [
//             {
//               id: 2,
//               label: '昆明',
//               children: [
//                 {
//                   id: 3,
//                   label: '五华区',
//                   children: [{ id: 8, label: '北辰小区' }]
//                 },
//                 { id: 4, label: '盘龙区' }
//               ]
//             }
//           ]
//         },
//         {
//           id: 5,
//           label: '湖南',
//           children: [
//             { id: 6, label: '长沙' },
//             { id: 7, label: '永州' }
//           ]
//         }
//       ],
//       defaultProps: {
//         children: 'children',
//         label: 'label'
//       }
//     }
//   },
//   methods: {
//     // 四级菜单
//     formatData(data) {
//       let options = []
//       data.forEach((item, key) => {
//         options.push({ label: item.label, value: item.id })
//         if (item.children) {
//           item.children.forEach((items, keys) => {
//             options.push({ label: items.label, value: items.id })
//             if (items.children) {
//               items.children.forEach((itemss, keyss) => {
//                 options.push({ label: itemss.label, value: itemss.id })
//                 if (itemss.children) {
//                   itemss.children.forEach((itemsss, keysss) => {
//                     options.push({ label: itemsss.label, value: itemsss.id })
//                   })
//                 }
//               })
//             }
//           })
//         }
//       })
//       console.log('@@@@', options)

//       return options
//     },
//     handleNodeClick(node) {
//       this.value = node.id
//       this.$refs.selectTree.blur()
//     }
//   }
// }
</script>

<style>
.main-select-el-tree .el-tree-node .is-current > .el-tree-node__content {
  font-weight: bold;
  color: #409eff;
}
.main-select-el-tree .el-tree-node.is-current > .el-tree-node__content {
  font-weight: bold;
  color: #409eff;
}
</style>
