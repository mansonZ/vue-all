import Vue from 'vue'
import Vuex from 'vuex'
import { getDay,preDay,nextDay } from "../api/api.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dayDate: '',
    dayData: null,
    defaultPhone: 18611347662,
  },
  mutations: {
    changeDate(state, n) {
      state.dayDate = n;
    },
    changeData(state, n) {
      state.dayData = n;
    }
  },
  actions: {
    getDayData({ commit, state }) {
      getDay(state.dayDate, state.defaultPhone).then(res => {
        commit('changeData', res.data.data);
      });
    },
    getPreDay({commit,state,dispatch}){
      preDay(state.dayDate).then(res=>{
        commit('changeDate',res.data);
        dispatch('getDayData');
      })
    },
    getNextDay({commit,state,dispatch}){
      nextDay(state.dayDate).then(res=>{
        commit('changeDate',res.data);
        dispatch('getDayData');
      })
    },
  },
  modules: {
  }
})
