<template>
  <div class="lineBox" style="width: 1000px; height: 800px"></div>
  <div class="barCharts" style="width: 1000px; height: 800px"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as Echarts from 'echarts'
let lineCharts = ref(null)
// 配置项
const lineOptions = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: []
}
// line数据
const lineData = () => {
  lineOptions.series = [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
  lineOptions.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  lineCharts.value.setOption(lineOptions)
}

// 初始化echarts
const initLineEcharts = () => {
  lineCharts.value = Echarts.init(document.querySelector('.lineBox'))
  lineData()
  lineCharts.value.setOption(lineOptions)
}

//  柱状图
const initBarChart = () => {
  const mycharts = Echarts.init(document.querySelector('.barCharts'))
  mycharts.on('click', function (e) {
    console.log(e)
  })
  const options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      triggerEvent: true
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }
  mycharts.setOption(options)
}

onMounted(() => {
  initLineEcharts()
  setTimeout(() => {
    lineData()
  }, 10000)
  initBarChart()
})
</script>

<style lang="less" scoped></style>
