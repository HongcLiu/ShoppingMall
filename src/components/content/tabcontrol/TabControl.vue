<template>
  <div class="tab-control">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TabControl"
}
</script>

<style scoped>
  .tab-control {
    width: 168px;
  }
</style>