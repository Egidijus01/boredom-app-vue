// store/index.js
import { createStore } from 'vuex';
import activitiesModule from './modules/activities';

const store = createStore({
  modules: {
    activities: activitiesModule,
  },
});

export default store;
