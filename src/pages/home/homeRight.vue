<template>
  <div style="width: 100%; height: 100%">
    <div style="background-color: #cdcdcd; width: 100%; height: 100%">
      <!-- <yButton color="#409eff" :size="70" :round="10" @click="confirmBtn">
        <span class="btnText">确定按钮</span>
      </yButton> -->
      <div id="container"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
window._AMapSecurityConfig = {
  securityJsCode: '0e969f300524fe75e533c47f9ca2937a'
}

let mapIns = null

const initGeoInstance = () => {
  // var map = new AMap.Map('container')
  mapIns = new AMap.Map('container', {
    zoom: 11, //级别
    center: [116.397428, 39.90923], //中心点坐标
    viewMode: '3D' //使用3D视图
    // plugins: ['AMap.ToolBar']
  })
  AMap.plugin(
    [
      'AMap.ToolBar',
      'AMap.Scale',
      'AMap.OverView',
      'AMap.MapType',
      'AMap.Geolocation'
    ],
    function () {
      // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
      mapIns.addControl(new AMap.ToolBar())

      // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
      mapIns.addControl(new AMap.Scale())

      // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
      mapIns.addControl(new AMap.OverView({ isOpen: true }))

      // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
      mapIns.addControl(new AMap.MapType())

      // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
      mapIns.addControl(new AMap.Geolocation())
    }
  )
}

onMounted(() => {
  initGeoInstance()
})
</script>

<style lang="less" scoped>
.btnText {
  font-size: 16px;
  font-weight: 500;
  font-family: 'Microsoft YaHei';
}

#container {
  width: 100%;
  height: 100%;
}
</style>
