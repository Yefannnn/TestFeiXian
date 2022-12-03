<template>
  <el-button @click="showDiolog">添加监控属性</el-button>
  <!-- 弹窗 -->
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="45%"
    :before-close="handleClose"
  >
    <div class="zuzhiBox">
      <div class="zuzhiLeft">
        <el-tree
          :data="resourceData"
          :props="defaultProps"
          @node-click="handleNodeClick"
          default-expand-all
        />
      </div>
      <div class="zuzhiRight">
        <el-checkbox-group v-model="checkList" v-if="propsData.length">
          <p v-for="item in propsData">
            <el-checkbox :key="item" :label="item.label" />
          </p>
        </el-checkbox-group>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirmBtn">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'

const dialogVisible = ref(false)

const showDiolog = () => {
  dialogVisible.value = true
}

const handleClose = () => {
  dialogVisible.value = false
}

// 资源分类数据
const resourceTreeData = {
  1: [
    {
      id: '01',
      name: '雷达站01'
    },
    {
      id: '02',
      name: '雷达站02'
    },
    {
      id: '03',
      name: '雷达站03'
    },
    {
      id: '04',
      name: '雷达站04'
    }
  ],
  2: [
    {
      id: '05',
      name: '雷达站01'
    },
    {
      id: '06',
      name: '雷达站02'
    },
    {
      id: '07',
      name: '雷达站03'
    },
    {
      id: '08',
      name: '雷达站04'
    }
  ],
  3: [
    {
      id: '09',
      name: '雷达站01'
    },
    {
      id: '10',
      name: '雷达站02'
    },
    {
      id: '11',
      name: '雷达站03'
    },
    {
      id: '12',
      name: '雷达站04'
    }
  ],
  4: [
    {
      id: '13',
      name: '雷达站01'
    },
    {
      id: '14',
      name: '雷达站02'
    },
    {
      id: '15',
      name: '雷达站03'
    },
    {
      id: '16',
      name: '雷达站04'
    }
  ]
}

// Tree数据
const resourceData = ref([
  {
    name: 'O',
    children: resourceTreeData['1']
  },
  {
    name: 'P',
    children: resourceTreeData['2']
  },
  {
    name: 'D',
    children: resourceTreeData['3']
  },
  {
    name: 'A',
    children: resourceTreeData['4']
  }
])

const defaultProps = {
  children: 'children',
  label: 'name'
}

// 点击的资源变量
const clickToVar = ref('')
const handleNodeClick = (obj, node, TreeNode, e) => {
  clickToVar.value = obj.id
}

// 点击的监听属性
const checkList = ref([])
// 属性数据
const propsData = ref([])

// 监听资源是否被点击
watch(clickToVar, (newValue) => {
  console.log(newValue, '正在获取属性中')
  propsData.value.splice(0)
  propsData.value.push(
    ...[
      {
        label: '传输速率',
        id: '01'
      },
      {
        label: '传输速度',
        id: '02'
      },
      {
        label: '延迟',
        id: '03'
      },
      {
        label: '上行速度',
        id: '04'
      }
    ]
  )
})

const confirmBtn = () => {
  // 将选择的数据传给后台
  console.log(
    '选择的资源是',
    clickToVar.value,
    '需要监听的属性是',
    checkList.value
  )

  propsData.value.splice(0)
  checkList.value.splice(0)
  dialogVisible.value = false
}
</script>

<style lang="less" scoped>
.zuzhiBox {
  display: flex;
  width: 100%;
  height: 400px;
  background-color: #cdcdcd;
  .zuzhiLeft {
    flex: 1;
    background-color: rgb(222, 222, 222);
    overflow: auto;
  }
  .zuzhiRight {
    flex: 1;
    background-color: pink;
    padding-left: 15px;
  }
}
</style>
