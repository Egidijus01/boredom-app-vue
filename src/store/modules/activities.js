// store/modules/activities.js
import axios from 'axios';

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
      const response = await axios.get('https://www.boredapi.com/api/activity/');
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
