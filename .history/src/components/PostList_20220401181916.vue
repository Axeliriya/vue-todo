<template>
  <ul class="posts">
    <li class="post" v-for="post in posts">
      <div class="post__name"><strong>Name: </strong>{{ post.title }}</div>
      <div class="post__description">
        <strong>Description: </strong>{{ post.body }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style></style>
