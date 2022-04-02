<template>
  <form class="form" @submit.prevent>
    <custom-btn @click="$emit()">Back</custom-btn>
    <custom-input v-model="post.title" placeholder="Name" />
    <custom-input v-model="post.body" placeholder="Description" />
    <div class="button__wrapper">
      <custom-btn class="form__btn--create" @click="createPost"
        >Create Post</custom-btn
      >
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

.button__wrapper {
  padding: 32px;
}

.form__btn--create {
  width: 100%;
}
</style>
