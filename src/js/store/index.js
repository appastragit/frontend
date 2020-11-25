import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {

  },
  actions: {

  },
  mutations: {

  },
  getters: {

  },
  modules: { },
  plugins: [new VuexPersistence({ storage: window.localStorage }).plugin],
});
export default store;
