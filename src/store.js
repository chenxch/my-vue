import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breadcrumbs: [],
    refresh: true
  },
  mutations: {
    setBreadcrumbs(state, breadcrumbs) {
      state.breadcrumbs = breadcrumbs;
    },
    setRefresh(state, refresh) {
      state.refresh = refresh;
    }
  },
  actions: {
    setBreadcrumbs({ commit }, breadcrumbs) {
      commit('setBreadcrumbs', breadcrumbs);
    },
    setRefresh({ commit }, refresh) {
      commit('setRefresh', refresh);
    }
  }
});
