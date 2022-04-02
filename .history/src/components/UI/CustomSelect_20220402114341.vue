<template>
  <select v-model="modelValue">
    <option disabled value="">---</option>
  </select>
</template>

<script>
export default {
  name: 'custom-select',
  props: {
    modelValue: {
      type: String,
    },
    opt,
  },
};
</script>

<style scoped></style>
