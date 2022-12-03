// 路由
import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
    {
        path:'/',
        redirect:'/envVarAndURL'
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
    },{
        path:'/flexGroup',
        component:()=>import('@/pages/flexGroup/indexParentCom.vue')
    },{
        path:'/lineGroup',
        component:()=>import('@/pages/lineGroup/index.vue')
    },{
        path:'/BaiduMapInit',
        component:()=>import('@/pages/BaiduMap/index.vue')
    },{
        path:'/collapseTest',
        component:()=>import('@/pages/collapseTest/index.vue')
    },{
        path:'/rightClickMuem',
        component:()=>import('@/pages/rightClick/index.vue')
    },{
          path:'/vuexToActive',
          component:()=>import('@/pages/VuexToActive/index.vue')
    },{
        path:'/x6linkPort',
        component:()=>import('@/pages/X6LinkPort/index.vue')
    },{
        path:'/propsOfNode',
        component:()=>import('@/pages/propsOfNode/index.vue')
    },{
    path:'/margeCol',
    component:()=> import('@/pages/mergeCol/index.vue')
    },{
        path:'/mergeColPro',
        component:()=>import('@/pages/mergeColPro/index.vue')
    },{
        path:'/Graphflow',
        component:()=>import('@/pages/GraphFlow/index.vue')
    },{
        path:'/home',
        name:'home',
        component:()=>import('@/pages/home/home.vue'),
        redirect:'/homeRight',
        children:[
            {
                path:'/homeLeft',
                name:'homeLeft',
                component:()=>import('@/pages/home/homeLeft.vue'),
                children:[
                    {
                        path:'/homeRight',
                        name:'homeRight',
                        component:()=>import('@/pages/home/homeRight.vue')
                    }
                ]
            }
        ]
    },{
        path:'/routeTest',
        component:()=>import('@/pages/routeTest/index.vue')
    },
    {
        path:'/dhtmlxGanttTask',
        component:()=>import('@/pages/Gantt/index.vue')
    },{
        path:'/mutualTask',
        component:()=>import('@/pages/mutual/index.vue')
    },{
        path:'/yangyangTask',
        component:()=>import('@/pages/yangYask/index.vue')
    },
    {
        path:'/selectAndTreeTask',
        component:()=>import('@/pages/selectAndTreeTask/index.vue')
    },{
        path:'/cards',
        component:()=>import('@/pages/cards/index.vue')
    },
    {
        path:'/asyncComTask',
        component:()=>import('@/pages/asyncComTask/index.vue')
    },
    {
        path:'/iframeWork',
        component:()=>import('@/pages/iframeWork/index.vue')
    },{
        path:'/envVarAndURL',
        component:()=>import('@/pages/envVarAndURL/index.vue')
    }
]

export default createRouter({
    history:createWebHashHistory(),
    routes,
})