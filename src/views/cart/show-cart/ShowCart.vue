<template>
  <div class="show-cart">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "ShowCart"
}
</script>

<style scoped>
  .show-cart {
    width: 500px;
    height: 500px;
  }
</style>