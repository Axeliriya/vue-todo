<template>
  <form class="form" @submit.prevent>
    <input v-model="post.title" class="input" type="text" placeholder="Name" />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Description"
    />
    <div class="button__wrapper">
      <custom-btn @click="createPost"></custom-btn>
    </div>
  </form>
</template>

<script>
import {} from '@/components/UI/CustomBtn';
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
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
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
</style>
