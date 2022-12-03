<template>
  <div id="main" style="width: 600px; height: 500px"></div>
</template>

<script setup>
import * as Echarts from 'echarts'
import { onMounted, ref } from 'vue'

let chart = ref()

// 获取数据
const getGraphNodeAndRelativeData = () => {
  let nodeData = [
    {
      id: '01',
      name: '雷达1',
      x: 20,
      y: 20
    },
    {
      id: '02',
      name: '雷达2',
      x: 80,
      y: 40
    },
    {
      id: '03',
      name: '雷达3',
      x: 160,
      y: 180
    },
    {
      id: '04',
      name: '雷达4',
      x: 290,
      y: 245
    },
    {
      id: '05',
      name: '雷达5',
      x: 350,
      y: 300
    }
  ]
  let RelativeLineData = [
    {
      pre: '01',
      next: '02'
    },
    {
      pre: '02',
      next: '03'
    },
    {
      pre: '03',
      next: '04'
    }
  ]

  //   整理节点数据
  let packageNodeData = []
  nodeData.forEach((item) => {
    let obj = {
      name: item.id,
      x: item.x,
      y: item.y,
      value: [item.x, item.y],
      symbol: 'circle',
      symbolSize: 50
    }
    packageNodeData.push(obj)
  })

  // 整理节点关系数据
  let packageNodeRelativeData = []
  RelativeLineData.forEach((item) => {
    let obj = {
      source: item.pre,
      target: item.next
    }
    packageNodeRelativeData.push(obj)
  })

  console.log(packageNodeData, packageNodeRelativeData)

  // 获取飞线坐标数据
  let flowOriginData = [
    {
      pre: '01',
      next: '02'
    },
    {
      pre: '02',
      next: '03'
    },
    {
      pre: '03',
      next: '04'
    },
    {
      pre: '04',
      next: '05'
    }
  ]

  //   过滤最终的飞线数据
  let flowPackageData = []
  flowOriginData.forEach((itemObj) => {
    packageNodeRelativeData.forEach((item) => {
      if (itemObj.pre === item.source && itemObj.next === item.target) {
        flowPackageData.push(itemObj)
      }
    })
  })

  console.log('@@@@', flowPackageData)

  //   整理飞线数据
  let packageFlowData = []
  flowPackageData.forEach((item) => {
    let obj = {
      coords: []
    }
    packageNodeData.forEach((itemObj) => {
      if (itemObj.name === item.pre) {
        obj.coords[0] = itemObj.value
      } else if (itemObj.name === item.next) {
        obj.coords[1] = itemObj.value
      }
    })
    packageFlowData.push(obj)
  })

  return {
    packageNodeData,
    packageNodeRelativeData,
    packageFlowData
  }
}

const createGraph = () => {
  chart.value = Echarts.init(document.querySelector('#main'))
  let { packageNodeData, packageNodeRelativeData, packageFlowData } =
    getGraphNodeAndRelativeData()
  let opt = {
    tooltip: {},
    xAxis: {
      type: 'value',
      min: 0,
      max: 600,
      interval: 599
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 500,
      interval: 499
    },
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    },
    series: [
      {
        type: 'graph',
        coordinateSystem: 'cartesian2d',
        label: {
          show: true
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        data: packageNodeData,
        links: packageNodeRelativeData,
        lineStyle: {
          color: '#2f4554'
        }
      },
      {
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        effect: {
          show: true,
          symbolSize: 10,
          color: 'yellow'
        },
        data: packageFlowData
      }
    ]
  }

  chart.value.setOption(opt)
}

onMounted(() => {
  createGraph()
})
</script>

<style lang="less" scoped></style>
