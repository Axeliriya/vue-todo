<template>
  <input class="input" :value="modelValue" @input="updateInput" type="text" />
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
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
  outline: none;
}
</style>
