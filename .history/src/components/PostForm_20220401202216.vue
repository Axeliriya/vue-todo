<template>
  <form class="form" @submit.prevent>
    <input v-model="post.title" class="input" type="text" placeholder="Name" />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Description"
    />
    <div @click="createPost" class="button__wrapper">
      <button class="button" @click="createPost">Create Post</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
  },
};
</script>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 1fr;
}

.input {
  background-color: transparent;
  border: none;
  padding: 32px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
}

.button__wrapper {
  padding: 32px;
}

.button {
  width: 100%;
  border: none;
  background: rgb(3, 2, 53, 0.4);
  border-radius: 10px;
  padding: 16px;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  cursor: pointer;
}

.button:hover {
  background: rgb(3, 2, 53, 0.5);
}
</style>
