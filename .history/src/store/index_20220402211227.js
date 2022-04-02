import { createStore } from 'vuex';

export default createStore({
  state: {
    likes: 0,
  },
  getters: {
    dubleLikes(state) {
      return likes * 2;
    },
  },
});
