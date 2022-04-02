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
});
