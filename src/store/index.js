import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import actions from './actions.js'
// import mutations from './mutations.js'
export default new Vuex.Store({
  state:{
    header:true,
    loading:false,
    login:false
  },
  mutations:{
    showHeader(state){
      state.header=true;
    },
    hideHeader(state){
      state.header=false;
    },
    showLoading(state){
      state.loading=true;
    },
    hideLoading(state){
      state.loading=false;
    },
    logined(state){
      state.login=true;
    },
    logout(state){
      state.login=false;
    }
  },
  actions:{
    showHeader:({commit})=>{
      commit('showHeader')
    },
    hideHeader:({commit})=>{
      commit('hideHeader')
    },
    showLoading:({commit})=>{
      commit('showLoading')
    },
    hideLoading:({commit})=>{
      commit('hideLoading')
    },
    logined:({commit})=>{
      commit('logined')
    },
    logout:({commit})=>{
      commit('logout')
    }
  },
  getters:{
    headerShow:(state)=>{
      return state.header
    },
    loading:(state)=>{
      return state.loading
    },
    login:(state)=>{
      return state.login
    }
  }
});
