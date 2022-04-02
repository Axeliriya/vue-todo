<template>
  <select v-model="modelValue">
    <option disabled value="">---</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.valuee"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'custom-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
