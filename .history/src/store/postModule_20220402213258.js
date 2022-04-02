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
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort]),
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(({ title }) =>
        title.toLowerCase().includes(this.searchQuery.toLowerCase()),
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
  actions: {},
};
