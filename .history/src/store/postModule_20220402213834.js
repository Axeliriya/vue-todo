export default postModule = {
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
        state.totalPages = Math.ceil(
          res.headers['x-total-count'] / state.limit,
        );
        state.posts = res.data;
      } catch (e) {
        console.log(e?.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadMorePosts() {
      commit('isLoadingPage', true);
      this.page += 1;
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          },
        );
        this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...res.data];
      } catch (e) {
        console.log(e?.message);
      } finally {
        commit('isLoadingPage', false);
      }
    },
  },
};
