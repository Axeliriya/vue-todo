<template>
  <div class="app">
    <header class="header">
      <h1 class="title">Posts</h1>
      <div class="head">
        <custom-input v-model="searchQuery" placeholder="Search..." />
        <custom-select v-model="selectedSort" :options="sortOptions" />
        <custom-btn @click="showModal">Create Post</custom-btn>
      </div>
    </header>
    <main class="main">
      <div class="loader" v-if="isLoading"><span>Loading...</span></div>
      <post-list v-else :posts="sortedAndSearchedPosts" @remove="removePost" />
      <div class="pages">
        <custom-btn
          class="pages__btn"
          :class="{
            'pages__btn--current': page === pageNum,
          }"
          v-for="pageNum in totalPages"
          :key="pageNum"
          @click="changePage(pageNum)"
          >{{ pageNum }}</custom-btn
        >
      </div>
      <custom-modal v-model:show="show"
        ><post-form v-model:show="show" @create="createPost"
      /></custom-modal>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import axios from 'axios';
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      show: false,
      isLoading: false,
      page: 1,
      limit: 10,
      totalPages: 0,
      searchQuery: '',
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'Name' },
        { value: 'body', name: 'Description' },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.show = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(({ id }) => id !== post.id);
    },
    showModal() {
      this.show = true;
    },
    changePage(pageNum) {
      this.page = pageNum;
      this.fetchPosts();
    },
    async fetchPosts() {
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
        this.posts = [...this.posts, ...res.data];
      } catch (e) {
        console.log(e?.message);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
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
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

ul {
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.app {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  padding: 15px;
  min-height: 100vh;
  background-color: #e7f5f1;
}

.header {
  grid-template-columns: 1fr;
  grid-column: 2/ -2;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main {
  display: grid;
  grid-auto-rows: min-content;
  gap: 10px;
  grid-column: 2/ -2;
}

.pages {
  display: flex;
  justify-content: center;
  gap: 10px;
  grid-column: 2/ -2;
}

.pages__btn {
  width: 50px;
}

.pages__btn--current {
  background: rgb(3, 2, 53, 0.7) !important;
}

.loader {
  text-align: center;
}

.footer {
  padding: 15px;
  grid-column: 2/ -2;
}
</style>
