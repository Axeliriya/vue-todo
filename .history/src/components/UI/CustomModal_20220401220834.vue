<template>
  <div class="overlay" v-if="show">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: end;
}

.modal {
  padding: 15px;
  background-color: #fff;
}
</style>
