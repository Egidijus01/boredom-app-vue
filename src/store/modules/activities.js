import axios from 'axios';
const url = "https://www.boredapi.com/api/activity/"
const state = {
  activity: null,
  error: null,
};

const mutations = {
  SET_ACTIVITY(state, activity) {
    state.activity = activity;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

const actions = {
  async fetchActivity({ commit }) {
    try {
      const response = await axios.get(url);
      commit('SET_ACTIVITY', response.data);
    } catch (error) {
      commit('SET_ERROR', error);
    }
  },
  async fetchActivityParticipants({ commit }, count) {
    try {
      const response = await axios.get(url.concat("?participants=".concat(count)));
      commit('SET_ACTIVITY', response.data);
    } catch (error) {
      commit('SET_ERROR', error);
    }
  },
};


export default {
  namespaced: true,  // Add this line
  state,
  mutations,
  actions,
};
