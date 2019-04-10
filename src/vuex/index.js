import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count:1
  },
  getters:{
    getStateCount(state){
      return state.count+1
    }
  },
  mutations:{
    add(state){
      state.count+=1;
    },
    reducetion(state){
      state.count-=1;
    }
  },
  actions:{
    addFun(context){
      context.commit('add')
    },
    reducetionFun(context){
      context.commit('reducetion')
    }
  }


})

// const store = new Vuex.Store({
//   state:{
//     count:0
//   },
//   mutations:{
//     increment (state){
//       state.count++
//     },
//     decrement (state){
//       state.count--
//     }
//   },
//   actions:{
//     increment(context){
//       context.commit('increment')
//     }
//   }
// })
// // store.commit('decrement');
// console.log( store.state.count )
export default store;
