// 路由
import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
    {
        path:'/',
        redirect:'/testTreeAndTableTask'
    },
    {
        path:'/geoMapTask',
        component:()=>import ('@/pages/geoMapTask/index.vue')
    },
    {
        path:'/echartFei',
        component:()=>import ('@/pages/echartFei/index.vue'),
        children:[
            {
                path:'/YF2',
                component:import ('@/pages/echartFei/YF2/index.vue'),
                children:[
                    {
                        path:'/YF3',
                        component:import ('@/pages/echartFei/YF2/YF3/index.vue')
                    }
                ]
            }
        ]
    },
    {
        path:'/graph',
        component:()=>import('@/pages/graphPage/graphPage.vue')
    },{
        path:'/nodeState',
        component:()=>import ('@/pages/nodeState/index.vue')
    },
    {
        path:'/tableMerge',
        component:()=>import ('@/pages/tableMerge/index.vue')
    },{
        path:'/testframe',
        component:()=>import ('@/pages/TestFrame/index.vue')
    },{
        path:'/testVuex',
        component:()=>import('@/pages/TestVuexTask/index.vue'),
        children:[
            {
                path:'childComponent',
                component:()=>import('@/pages/TestVuexTask/component/child1.vue'),
                children:[
                    {
                        path:'sonComponent',
                        component:()=>import ('@/pages/TestVuexTask/component/sonCom/index.vue')
                    }
                ]
            }
        ]
    },{
        path:'/testTreeAndTableTask',
        component:()=>import('@/pages/TreeAndTable/index.vue')
    }
]

export default createRouter({
    history:createWebHashHistory(),
    routes,
})