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
  getters: {},
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setLoadingPage(state, isLoadingPage) {
      state.isLoadingPage = isLoadingPage;
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
    setSortOptions(state, sortOptions) {
      state.sortOptions = sortOptions;
    },
  },
  actions: {},
};
