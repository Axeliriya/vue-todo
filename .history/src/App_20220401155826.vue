<template>
  <div>
    <div>likes: {{ likes }}</div>
    <button>Like</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
  },
};
</script>

<style></style>
