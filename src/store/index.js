import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'web-authen',
  // modules: ['user']
})

export default new Vuex.Store({
  state: {
    auth: {
      accessToken: ''
    }
  },
  getters: {
    auth: (state) => state.auth
  },
  mutations: {
    SET_AUTH (state, payload) {
      state.auth.accessToken = payload
    }
  },
  actions: {
    setAuth ({ commit }, payload) {
      commit('SET_AUTH', payload)
    }
  },
  plugins: [vuexLocal.plugin]
})
