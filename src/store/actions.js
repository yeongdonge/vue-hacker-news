import { fetchUserInfo, fetchItemInfo, fetchList } from "../api/index.js";
export default {
  // FETCH_NEWS({ commit }) {
  //   fetchNewsList()
  //     .then(({ data }) => {
  //       commit("SET_NEWS", data);
  //       return data;
  //     })
  //     .catch((error) => console.log(error));
  // },
  // FETCH_JOBS({ commit }) {
  //   fetchJobsList()
  //     .then(({ data }) => {
  //       commit("SET_JOBS", data);
  //     })
  //     .catch((error) => console.log(error));
  // },
  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => {
  //       commit("SET_ASK", data);
  //     })
  //     .catch((error) => console.log(error));
  // },
  FETCH_USER( { commit }, userName) {
    return fetchUserInfo(userName)
    .then(({ data }) => {
      commit('SET_USER', data);
      return data;
    })
    .catch((error) => console.log(error));
  },
  FETCH_ITEM( { commit }, id) {
    return fetchItemInfo(id)
    .then(({ data }) => {
      commit('SET_ITEM', data);
      return data;
    })
    .catch((error) => console.log(error))
  },
  FETCH_LIST( {commit}, pageName) {
    return fetchList(pageName)
    .then(( {data}) => {
      commit('SET_LIST', data);
      return data;
    })
    .catch((error) => console.log(error))
  },
}
