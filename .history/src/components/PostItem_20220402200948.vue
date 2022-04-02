<template>
  <li class="post">
    <div class="post__title">
      <div><strong>Name: </strong>{{ post.title }}</div>
      <div class="buttons">
        <custom-btn @click="aboutPost">Open</custom-btn>
        <custom-btn @click="$emit('remove', post)">[x]</custom-btn>
      </div>
    </div>
    <div class="post__description">
      <strong>Description: </strong>{{ post.body }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    aboutPost() {
      console.log(this.$router);
      //  return $router.push(`/post/${this.post.id}`)
    },
  },
};
</script>

<style scoped>
.post {
  border-radius: 15px;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
}

.post__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 16px 16px;
  border-radius: 15px 15px 0 0;
  background-color: #a5ddb8;
}

.post__description {
  padding: 12px 16px 16px 16px;
  border-radius: 0 0 15px 15px;
  background-color: #ffffff;
}

.buttons {
  display: flex;
  gap: 10px;
}
</style>
