<template>
  <div class="main" style="width: 1300px; height: 900px"></div>
</template>

<script setup>
import * as Echarts from 'echarts'
import { onMounted, ref } from 'vue'
const nodeAllData = ref({}) // 节点数据
// 数据分解
const nodeList = ref([])
const LineList = ref([])
const CoordsList = ref([])
// 组装数据
const assembleDataForCharts = () => {
  // 请求数据
  nodeAllData.value = {
    msg: '获取成功',
    status: 200,
    data: {
      // 节点数据
      nodeArrayList: [
        {
          name: '防空雷达 \n \n\n1',
          type: '1',
          id: '1'
        },
        {
          name: '防空雷达\n\n\n2',
          type: '2',
          id: '2'
        },
        {
          name: '防空雷达\n\n\n3',
          type: '1',
          id: '3'
        },
        {
          id: '4',
          name: '防空雷达\n\n\n4',
          type: '3'
        },
        {
          name: '防空雷达\n\n\n5',
          type: '1',
          id: '5'
        },
        {
          name: '防空雷达\n\n\n6',
          type: '4',
          id: '6'
        },
        {
          name: '防空雷达\n\n\n7',
          type: '1',
          id: '7'
        }
      ],
      nodeLinkList: [
        {
          startId: '1',
          stopId: '3'
        }
      ]
    }
  }
  // 确定初始值
  const NodePosition = [
    {
      type: '1',
      x: 200,
      y: 200,
      current: 1,
      count: 0
    },
    {
      type: '2',
      x: 400,
      y: 200,
      current: 1,
      count: 0
    },
    {
      type: '3',
      x: 600,
      y: 200,
      current: 1,
      count: 0
    },
    {
      type: '4',
      x: 800,
      y: 200,
      current: 1,
      count: 0
    }
  ]
  // 设置布局heightMax
  const heightMax = 800
  nodeAllData.value.data.nodeArrayList.forEach((item) => {
    // 获取每个分类数量
    NodePosition.forEach((obj) => {
      if (obj.type === item.type) {
        obj.count++
      }
    })
  })
  console.log(NodePosition)
  // 整理节点数据
  nodeAllData.value.data.nodeArrayList.forEach((item) => {
    const opt = {
      ...item,
      symbolSize: 80,
      label: {
        show: true
      },
      value: []
    }
    if (item.type === '1') {
      opt.symbol = 'image://src/assets/vue.svg'
    } else if (item.type === '2') {
      opt.symbol = 'circle'
    } else if (item.type === '3') {
      opt.symbol = 'rect'
    } else if (item.type === '4') {
      opt.symbol = 'diamond'
    }
    // 找到对应节点类型进行操作
    const targetObj = NodePosition.find((obj) => obj.type === item.type)
    opt.value.push(targetObj.x)
    opt.value.push(
      targetObj.y + (heightMax / (targetObj.count + 1)) * targetObj.current
    )
    targetObj.current++
    nodeList.value.push(opt)
    console.log(nodeList.value)
  })
  // 整理关联线数据
  nodeAllData.value.data.nodeLinkList.forEach((item) => {
    let opt = {
      source: findName(item.startId),
      target: findName(item.stopId)
    }
    // 关联线 => 飞线坐标对应
    let coordsX = findCoord(item.startId)
    let coordsY = findCoord(item.stopId)
    console.log(coordsX, coordsY)
    let coordsObj = {
      coords: [coordsX, coordsY]
    }
    CoordsList.value.push(coordsObj)
    LineList.value.push(opt)
  })
}

// 查找节点名称
const findName = (id) => {
  return nodeAllData.value.data.nodeArrayList.find((item) => item.id === id).id
}
// 查坐标
const findCoord = (id) => {
  const obj = nodeList.value.find((item) => item.id === id)
  return [obj.value[0], obj.value[1]]
}
// 初始化charts
const createGraphCharts = () => {
  const mycharts = Echarts.init(document.querySelector('.main'))
  // 准备配置项
  const options = {
    tooltip: {},
    roam: true,
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    xAxis: {
      show: true,
      position: 'bottom',
      type: 'value',
      min: 0,
      max: 1300,
      interval: 999
    },
    yAxis: {
      show: true,
      position: 'left',
      type: 'value',
      min: 0,
      max: 900,
      interval: 899
    },
    series: [
      {
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        // 定制节点

        // 定制边
        edgeSymbol: ['circle', 'circle'],
        edgeSymbolSize: [0, 0],
        edgeLabel: {
          fontSize: 20
        },
        // 节点数据
        data: nodeList.value,
        // 节点关联
        links: LineList.value,
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      },
      {
        // lines
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        effect: {
          show: true,
          period: 4,
          delay: 10,
          symbol: 'circle',
          symbolSize: 5
        },
        data: CoordsList.value
      }
    ]
  }
  // 准备数据
  mycharts.setOption(options)
}

onMounted(() => {
  assembleDataForCharts() // 组装关系图数据
  createGraphCharts() // 初始化关系图
})
</script>

<style lang="less" scoped></style>
