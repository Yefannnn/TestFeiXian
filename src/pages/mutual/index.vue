<template>
  <div style="padding: 20px" v-for="item in ceshi111" :key="item">
    <span @click.stop="showButton(item.name)">#########</span>
    <span v-if="!item.buttonShow">功能1:{{ taskData.fun1.join(',') }}</span>
    <el-button @click.stop="showUlData(item.name)" v-else>+</el-button>
    <ul v-if="item.ulShow" id="UlBox">
      <li v-for="Item in item.ulData" :key="Item">{{ Item.name }}</li>
    </ul>
    <TaskDom></TaskDom>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'

const TaskDom = defineAsyncComponent(() => import('../nodeState/nodeState.vue'))

const taskData = {
  fun1: ['11', '22'],
  fun2: ['33', '22'],
  fun3: ['44', '22'],
  fun4: ['55', '22']
}

const ceshi111 = ref([
  {
    name: 'fun1',
    buttonShow: false,
    ulShow: false,
    ulData: [
      {
        id: '01',
        name: '10',
        value: '10'
      },
      {
        id: '02',
        name: '20',
        value: '20'
      },
      {
        id: '03',
        name: '30',
        value: '30'
      },
      {
        id: '04',
        name: '40',
        value: '40'
      }
    ]
  },
  {
    name: 'fun2',
    buttonShow: false,
    ulShow: false,
    ulData: [
      {
        id: '01',
        name: '10',
        value: '10'
      },
      {
        id: '02',
        name: '20',
        value: '20'
      },
      {
        id: '03',
        name: '30',
        value: '30'
      },
      {
        id: '04',
        name: '40',
        value: '40'
      }
    ]
  },
  {
    name: 'fun3',
    buttonShow: false,
    ulShow: false,
    ulData: [
      {
        id: '01',
        name: '10',
        value: '10'
      },
      {
        id: '02',
        name: '20',
        value: '20'
      },
      {
        id: '03',
        name: '30',
        value: '30'
      },
      {
        id: '04',
        name: '40',
        value: '40'
      }
    ]
  },
  {
    name: 'fun4',
    buttonShow: false,
    ulShow: false,
    ulData: [
      {
        id: '01',
        name: '10',
        value: '10'
      },
      {
        id: '02',
        name: '20',
        value: '20'
      },
      {
        id: '03',
        name: '30',
        value: '30'
      },
      {
        id: '04',
        name: '40',
        value: '40'
      }
    ]
  }
])

const showUlData = (name) => {
  ceshi111.value.find((item) => item.name === name).ulShow =
    !ceshi111.value.find((item) => item.name === name).ulShow
}

const showButton = (name) => {
  ceshi111.value.find((item) => item.name === name).buttonShow =
    !ceshi111.value.find((item) => item.name === name).buttonShow

  if (ceshi111.value.find((item) => item.name === name).ulShow) {
    ceshi111.value.find((item) => item.name === name).ulShow = false
  }
}

const reset = () => {
  ceshi111.value.forEach((item) => {
    item.buttonShow = false
    item.ulShow = false
  })
}

onMounted(() => {
  const closeUlBox = (e) => {
    const boxs = document.querySelectorAll('#UlBox')
    let flag = true
    console.log('box', boxs)
    for (let index = 0; index < boxs.length; index++) {
      flag = boxs[index].contains(e.target)
    }
    if (!flag) {
      reset()
    }
  }
  document.addEventListener('click', closeUlBox)
})
</script>

<style lang="less" scoped>
#UlBox {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
>
