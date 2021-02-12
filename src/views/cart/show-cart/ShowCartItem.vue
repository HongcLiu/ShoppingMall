<template>
  <div class="show-cart-item">
    <div class="good-name"><slot name="name"></slot></div>
    <div class="good-price"><slot name="price"></slot></div>
    <div class="good-num">
      <button>+</button>
      <slot name="num"></slot>
      <button>-</button>
    </div>
  </div>
</template>

<script>
export default {
name: "ShowCartItem"
}
</script>

<style scoped>
  .show-cart-item {
    display: flex;
  }

  .good-name, .good-num, .good-price {
    flex: 1;
    text-align: center;
    border: 1px solid black;
  }
</style>