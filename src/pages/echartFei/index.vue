<template>
  <h3 style="text-align: center">基于坐标轴的飞线实验</h3>
  <div id="main" style="width: 1200px; height: 800px"></div>
  <div id="container"></div>
  <router-view></router-view>
</template>
<script setup>
// 将echarts 导入
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import NodeDetailData from './js/NodeData'
import { Graph } from '@antv/x6'

// 初始化Graph ， Graph 和 echarts 图层叠加显示，顶层背景置为透明
// 准备数据  data  []{}   { id , x , y , width , height , fill }
// 循环所有的X6节点
// 将节点数据中的 x , y 组成新的数据对象供echarts 气泡图使用
// 观察节点和气泡点位置是否一致

// 组织飞线的坐标点
const FeiXianCoords = () => {
  let FeiXianArr = []
  NodeDetailData.forEach((item) => {
    FeiXianArr.push({
      coords: [
        [item.x, item.y], // 起点
        [item.x + 100, item.y + 100] // 终点
      ],
      // 统一的样式设置
      lineStyle: {
        color: 'lightblue',
        width: 1, //尾迹线条宽度
        opacity: 1, //尾迹线条透明度
        curveness: 0.4 //尾迹线条曲直度
      }
    })
  })
  return FeiXianArr
}
// 组织气泡坐标点
const PaoDetailData = () => {
  let PaoArr = []
  NodeDetailData.forEach((item) => {
    PaoArr.push([item.x, item.y, 6])
  })
  return PaoArr
}

// 初始化echarts
const InitEcharts = () => {
  let myChart = echarts.init(document.getElementById('main'))
  // 建立笛卡尔坐标的配置项
  const options = {
    // 轴线颜色
    color: ['#3398DB'],
    // 网格边距
    grid: {
      left: 0,
      bottom: 0,
      top: 0,
      right: 0
    },
    xAxis: [
      {
        show: false,
        type: 'value',
        min: 0,
        max: elementSize.width,
        interval: elementSize.width - 1
      }
    ],
    yAxis: [
      {
        show: false,
        type: 'value',
        min: 0,
        max: elementSize.height,
        interval: elementSize.width - 1
      }
    ],
    series: [
      // 飞线
      {
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        data: [...FeiXianCoords()],
        effect: {
          show: true,
          period: 2, //箭头指向速度，值越小速度越快
          delay: 0,
          trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'circle', //箭头图标
          symbolSize: 7, //图标大小
          color: 'blue'
        }
      },
      //   带涟漪特效的气泡图
      {
        type: 'effectScatter',
        // coordinateSystem: "cartesian2d",
        zlevel: 2,
        // label: {
        //   normal: {
        //     show: true,
        //     position: "right", //显示位置
        //     offset: [5, 0], //偏移设置
        //     formatter: function (params) {
        //       //圆环显示文字
        //       return params.data.name;
        //     },
        //     fontSize: 13,
        //   },
        //   emphasis: {
        //     show: true,
        //   },
        // },
        symbol: 'circle',
        // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        symbolSize: function (val) {
          // data 中的配置项
          console.log(val)
          return 8 + val[2] * 5 //圆环大小
        },
        // 气泡样式设置
        itemStyle: {
          color: 'rgba(85, 132, 220, 0.2)'
          //   borderColor  图形描边
          //   borderWidth  描边线宽
          //   borderType   描边类型  solid dashed dotted
          //    shadowColor  阴影颜色
          //    opacity  图形透明度
        },
        data: [...PaoDetailData()],
        // 绘制完毕显示特效
        showEffectOn: 'render',
        // 涟漪特效
        rippleEffect: {
          color: 'rgba(85, 132, 220, 1)',
          number: 4, //涟漪数量
          period: 3, // 动画运动周期
          scale: 4 // 最大缩放比例
        }
      }
    ]
  }
  myChart.setOption(options)
  return myChart
}

// 获取元素的宽高
let elementSize = ref({})
const getElementSize = () => {
  // 先获取main容器的宽高
  const height = document.getElementById('main').offsetHeight
  const width = document.getElementById('main').offsetWidth
  return {
    width,
    height
  }
}
// 监听视口宽高
window.addEventListener('resize', (e) => {
  InitEcharts().resize()
})

// 初始化所有节点
const CreateGraphAndNode = () => {
  // 初始化画布
  const graph = new Graph({
    container: document.querySelector('#container'),
    width: 1200,
    height: 800,
    background: {
      color: '#cdcdcd'
    }
  })

  // 准备数据循环节点
  CreateNode(graph)
}

// 循环节点
const CreateNode = (graph) => {
  NodeDetailData.forEach((item) => {
    console.log(item)
    graph.addNode({
      id: item.id,
      x: item.x - item.width / 2,
      y:
        document.querySelector('#container').offsetHeight -
        item.y -
        item.height / 2,
      width: item.width,
      height: item.height,
      attrs: {
        body: {
          fill: item.fill
        }
      }
    })
  })
}

onMounted(() => {
  elementSize = getElementSize()
  InitEcharts()
  CreateGraphAndNode()
})
</script>
<style>
body {
  position: relative;
}
#main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
#container {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -2;
}
</style>
