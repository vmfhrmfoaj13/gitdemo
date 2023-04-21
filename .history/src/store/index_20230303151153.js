import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    row:{},
    isFromDetail:false,
  },
  getters: {
  },
  mutations: {
    setRow(state,payload){
      state.row=payload
    },
    clearRow(state){
      state.row={}
    },
    changeIsFromDetail(state,payload){
      state.isFromDrtail=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
