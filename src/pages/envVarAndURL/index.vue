<template>
  <img :src="imgUrl" alt="" />
  <h2>当前域名和端口号：{{ url }}</h2>
</template>

<script setup>
// console.log(new URL('src/assets/vue.svg', 'http://localhost:8899/'))
// const imgUrl = new URL('src/assets/vue.svg', 'http://localhost:8899/')
// const imgUrl = 'http://localhost:8899/src/assets/vue.svg'
const imgUrl = 'src/assets/vue.svg'

const url = import.meta.env.VITE_BASE_URL
console.log('@@@', url)
console.log('!!!!!', import.meta.env.BASE_URL)
console.log('!!!!!', import.meta.env.MODE)

/* 
    对于相对路径和绝对路径的总结
    1 尽量在引入任何文件的时候需要相对引入，因为在部署之后项目的路径会发生改变
    2 如果需要拼接绝对路径的时候，一定要考虑一个问题，就是如何拼接一个基于线上环境的绝对路径，而不是基于本机的绝对路径
    3 src 的时候进行时候相对路径，因为只有这样才能被webpack作为一个模块依赖进行打包
    4 :src 的时候需要跟上绝对路径，如果写相对路径的话，不会作为一个依赖加载，到线上环境之后会找不到路径；如果写绝对路径的话，会进行特殊处理

*/
</script>

<style></style>
