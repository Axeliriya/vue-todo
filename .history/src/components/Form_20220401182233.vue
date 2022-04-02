<template>
  <form class="form" @submit.prevent>
    <input
      v-bind:value="title"
      @input="title = $event.target.value"
      class="input"
      type="text"
      placeholder="Name"
    />
    <input
      v-bind:value="body"
      @input="body = $event.target.value"
      class="input"
      type="text"
      placeholder="Description"
    />
    <div class="button__wrapper">
      <button class="button" @click="createPost">Create Post</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
