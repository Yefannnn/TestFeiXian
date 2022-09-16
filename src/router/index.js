// 路由
import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
    {
        path:'/',
        redirect:'/GraphOfTime'
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
    },{
        path:'/testTableSlotAndX6',
        component:()=>import('@/pages/TableAndX6/index.vue')
    },{
        path:'/testTreeCustom',
        component:()=>import ('@/pages/TreeCustom/index.vue')
    },{
        path:'/testGraphChart',
        component:()=>import('@/pages/GraphChart/index.vue')
    },{
        path:'/GraphOfTime',
        component:()=>import ('@/pages/GraphToTime/index.vue')
    }
]

export default createRouter({
    history:createWebHashHistory(),
    routes,
})