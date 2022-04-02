<template>
  <div class="overlay">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: end;
}

.modal {
  padding: 15px;
  background-color: #fff;
}
</style>
