<template>
  <div class="overlay" v-if="show" @click="showModal">
    <transition name="fade">
      <div class="modal" @click.stop>
        <slot></slot>
      </div>
    </transition>
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
  methods: {
    showModal() {
      this.$emit('update:show', false);
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(500px);
}
</style>
