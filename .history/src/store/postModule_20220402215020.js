export const postModule = {
  state: () => ({
    posts: [],
    show: false,
    isLoading: false,
    isLoadingPage: false,
    page: 1,
    limit: 5,
    totalPages: 1,
    searchQuery: '',
    selectedSort: '',
    sortOptions: [
      { value: 'title', name: 'Name' },
      { value: 'body', name: 'Description' },
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((a, b) =>
        a[state.selectedSort]?.localeCompare(b[state.selectedSort]),
      );
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter(({ title }) =>
        title.toLowerCase().includes(state.searchQuery.toLowerCase()),
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setShow(state, show) {
      state.show = show;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setLoadingPage(state, isLoadingPage) {
      state.isLoadingPage = isLoadingPage;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      commit('setLoading', true);
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          },
        );
        commit(
          'setTotalPages',
          Math.ceil(res.headers['x-total-count'] / state.limit),
        );
        commit('setPosts', res.data);
      } catch (e) {
        console.log(e?.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadMorePosts({ state, commit }) {
      commit('isLoadingPage', true);
      commit('setPage', state.page + 1);
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          },
        );
        commit(
          'setTotalPages',
          Math.ceil(res.headers['x-total-count'] / state.limit),
        );
        commit('setPosts', [...this.posts, ...res.data]);
      } catch (e) {
        console.log(e?.message);
      } finally {
        commit('isLoadingPage', false);
      }
    },
  },
};
