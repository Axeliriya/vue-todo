import { createStore } from 'vuex';

export default createStore({
  state: {
    likes: 4,
  },
  getters: {
    doubleLikes(state) {
      return state.likes * 2;
    },
  },
  mutations: {
    incr(state) {
      state.likes += 1;
    },
    decr(state) {
      state.likes -= 1;
    },
  },
});
