<template>
  <li class="post">
    <div><button>Delete</button></div>
    <div class="post__name"><strong>Name: </strong>{{ post.title }}</div>
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
};
</script>

<style scoped>
.post {
  border-radius: 15px;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
}

.post__name {
  padding: 24px 16px 16px 16px;
  border-radius: 15px 15px 0 0;
  background-color: #a5ddb8;
}

.post__description {
  padding: 12px 16px 16px 16px;
  border-radius: 0 0 15px 15px;
  background-color: #ffffff;
}
</style>
