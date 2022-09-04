// 路由
import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
    {
        path:'/',
        redirect:'/geoMapTask'
    },
    {
        path:'/geoMapTask',
        component:()=>import ('@/pages/geoMapTask/index.vue')
    },
    {
        path:'/echartFei',
        component:()=>import ('@/pages/echartFei/index.vue')
    }
]

export default createRouter({
    history:createWebHashHistory(),
    routes,
})