import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state = {
  value: 0
}
export default new Vuex.Store({
  state,
  mutations: {
    SET (state, value) {
      state.value = value
    }
  },
  actions: {
    SET ({ commit }) {
      commit('SET', 1)
    }
  }
})
