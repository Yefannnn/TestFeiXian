<template>
  <baidu-map :center="center" :zoom="zoom" @ready="handler"></baidu-map>
</template>

<script setup>
const center = { lng: 0, lat: 0 }
const zoom = 3
const handler = ({ BMap, map }) => {
  console.log(BMap, map)
  this.center.lng = 116.404
  this.center.lat = 39.915
  this.zoom = 15
}
</script>

<style lang="less" scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
