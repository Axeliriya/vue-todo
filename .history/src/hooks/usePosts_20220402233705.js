export function async fetchPosts() {
    this.isLoading = true;
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
      this.posts = res.data;
    } catch (e) {
      console.log(e?.message);
    } finally {
      this.isLoading = false;
    }
  }