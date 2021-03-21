import { createStore } from 'vuex';
import * as getters from './getters';
import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
