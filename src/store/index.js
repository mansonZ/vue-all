import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dayDate:'',
    dayData:null,
    defaultPhone:18611347662,
  },
  mutations: {
    changeDate(state,n){
      state.dayDate=n;
    },
    changeData(state,n){
      state.dayData=n;
    }
  },
  actions: {
    getDayData({commit},data){
      commit('changeData',data)
    }
  },
  modules: {
  }
})
