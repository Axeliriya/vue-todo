<template>
  <select class="select" v-model="modelValue" @change="changeOption">
    <option disabled value="">Sorted</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      By {{ option.name }}
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
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style scoped>
.select {
  padding: 15px;
  border: none;
  border-radius: 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
}
</style>
