<template>
  <input class="input" type="text" />
</template>
<script>
export default {
  name: 'custom-input',
  props: {
      modelValue:
  }
};
</script>
<style scoped>
.input {
  background-color: transparent;
  border: none;
  padding: 32px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
}
</style>
