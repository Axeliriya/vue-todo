<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: 'custom-btn',
};
</script>

<style scoped>
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
