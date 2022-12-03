<template>
  <div id="main" style="width: 400px; height: 240px"></div>
</template>

<script setup>
import * as Echarts from 'echarts'
import { onMounted } from 'vue'

const initEcharts = () => {
  var chartDom = document.getElementById('main')
  var myChart = Echarts.init(chartDom)
  var option

  //   function randomData() {
  //     now = new Date(+now + oneDay)
  //     value = value + Math.random() * 21 - 10
  //     return {
  //       name: now.toString(),
  //       value: [
  //         [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
  //         Math.round(value)
  //       ]
  //     }
  //   }
  //   节点各个时间点的事件

  let data = [
    {
      name: 1,
      value: ['2022-9-16 8:00', '情报中心'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 2,
      value: ['2022-9-16 10:00', '情报中心'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 3,
      value: ['2022-9-16 12:00', '情报中心'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 4,
      value: ['2022-9-16 14:00', '情报中心'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 5,
      value: ['2022-9-16 15:00', '情报中心'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 6,
      value: ['2022-9-16 22:00', '情报中心'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 7,
      value: ['2022-9-16 23:00', '情报中心'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 8,
      value: ['2022-9-17 1:00', '情报中心'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 9,
      value: ['2022-9-17 1:00', 'SU27-001(1)'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 10,
      value: ['2022-9-17 4:00', 'SU27-001(2)'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 11,
      value: ['2022-9-17 5:00', 'SU27-001(3)'],
      symbolSize: 20,
      symbol: 'pin'
    },
    {
      name: 12,
      value: ['2022-9-17 12:00', 'SU27-001(4)'],
      symbolSize: 20,
      symbol: 'pin'
    }
  ]
  let links = [
    {
      source: 0,
      target: 1,
      lineStyle: {
        width: 7,
        color: '#607fda'
      }
    },
    {
      source: 1,
      target: 2,
      lineStyle: {
        width: 7,
        color: '#607fda'
      }
    },
    {
      source: 2,
      target: 3,
      lineStyle: {
        width: 7,
        color: '#607fda'
      }
    },
    {
      source: 3,
      target: 4,
      lineStyle: {
        width: 7,
        color: '#607fda'
      }
    },
    {
      source: 4,
      target: 5,
      lineStyle: {
        width: 7,
        color: '#607fda'
      }
    },
    {
      source: 5,
      target: 6,
      lineStyle: {
        width: 7,
        color: '#607fda'
      }
    },
    {
      source: 6,
      target: 7,
      lineStyle: {
        width: 7,
        color: '#607fda'
      }
    }
  ]
  let now = new Date(1997, 9, 3)
  let oneDay = 24 * 3600 * 1000
  let value = Math.random() * 1000
  //   for (var i = 0; i < 1000; i++) {
  //     data.push(randomData())
  //   }
  option = {
    // title: {
    //   text: 'Dynamic Data & Time Axis'
    // },
    // tooltip: {
    //   trigger: 'axis',
    //   formatter: function (params) {
    //     params = params[0]
    //     var date = new Date(params.name)
    //     return (
    //       date.getDate() +
    //       '/' +
    //       (date.getMonth() + 1) +
    //       '/' +
    //       date.getFullYear() +
    //       ' : ' +
    //       params.value[1]
    //     )
    //   },
    //   axisPointer: {
    //     animation: false
    //   }
    // },
    xAxis: {
      position: 'top',
      type: 'time',
      splitLine: {
        show: false
      },
      show: true
    },
    yAxis: {
      position: 'left',
      type: 'category',
      data: [
        '情报中心',
        'SU27-001(1)',
        'SU27-001(2)',
        'SU27-001(3)',
        'SU27-001(4)'
      ],
      splitLine: {
        show: false
      },
      inverse: true
    },
    series: [
      {
        type: 'graph',
        showSymbol: false,
        coordinateSystem: 'cartesian2d',
        data: data,
        links: links
      }
    ]
  }

  option && myChart.setOption(option)
}

onMounted(() => {
  initEcharts()
})
</script>

<style lang="less" scoped></style>
