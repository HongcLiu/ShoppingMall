<template>
  <div class="show-goods">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "ShowGoods",
}
</script>

<style scoped>
  .show-goods {
    margin-left: 10px;
    float: left;
  }
</style>