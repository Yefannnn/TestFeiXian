// 创建store 
import {createStore} from 'vuex'

export default createStore({
    // 状态
    state(){
        return {
            count:false,
            DetaillIndex:1
        }
    },
    mutations:{
        updateState(state){
            state.count  === false ? (state.count=true) : (state.count=false)
        },
        updateIndex(state,data){
            state.DetaillIndex = data
        }
    },
    actions:{

    }
})