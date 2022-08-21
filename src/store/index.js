import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import mutations from './mutations.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
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
  },
    mutations,
    actions,
});
