import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import BaiduMap from 'vue-baidu-map'

// 导入路由
import store from '@/store/index'
const app = createApp(App) 
app.use(router)
app.use(ElementPlus)
app.use(store)
// app.use(BaiduMap,{ak:'ROuam4Q5WDOHQLxVZ40tKzoXG7XxHl5v'})

app.mount('#app')
