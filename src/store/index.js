import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import mutations from './mutations.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    list: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedNews(state) {
      return state.news;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations,
  actions,
});
