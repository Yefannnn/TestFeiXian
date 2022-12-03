<template>
  <div class="container">
    <div class="cardsBox">
      <el-card shadow="hover" @click="toPath(cardContent[0].toPath)">
        <div class="subTitle">
          <div class="imgBox"></div>
        </div>
        <div class="subContent">{{ cardContent[0].content }}</div></el-card
      >
      <div class="line"></div>
      <el-card shadow="hover" @click="toPath(cardContent[1].toPath)">
        <div class="subTitle">
          <div class="imgBox"></div>
        </div>
        <div class="subContent">{{ cardContent[1].content }}</div>
      </el-card>
      <div class="line"></div>
      <el-card shadow="hover" @click="toPath(cardContent[2].toPath)">
        <div class="subTitle">
          <div class="imgBox"></div>
        </div>
        <div class="subContent">{{ cardContent[2].content }}</div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
//  内容
const cardContent = ref([
  {
    id: '01',
    img: '',
    content: '1111111',
    toPath: '@111'
  },
  {
    id: '02',
    img: '',
    content: '2222222222',
    toPath: '@222'
  },
  {
    id: '03',
    img: '',
    content: '33333333333',
    toPath: '@333'
  }
])

const toPath = (path) => {
  console.log('path', path)
}
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.cardsBox {
  margin-top: 250px;
  height: 300px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .cards {
    width: 20%;
    height: 100%;
  }
}
:deep(.el-card) {
  width: 250px;
  height: 280px;
}
.top {
  height: 130px;
  width: 100%;
  //   background-color: pink;
}
.bottom {
}

.line {
  width: 50px;
  height: 60px;
  background-color: rgb(94, 164, 187);
}
.subTitle {
  width: 100%;
  height: 130px;
  background-color: pink;
  display: flex;
  justify-content: center;
  .imgBox {
    width: 50px;
    height: 50px;
    margin: 40px;
    background: #008080;
  }
}

.el-card:hover .imgBox {
  margin: 30px;
}
</style>
