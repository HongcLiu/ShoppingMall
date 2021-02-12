<template>
  <div id="cart">
    <show-cart>
      <show-cart-item>
        <span slot="name">名字</span>
        <span slot="price">价格</span>
        <span slot="num">数量</span>
      </show-cart-item>
    </show-cart>
  </div>
</template>

<script>
import ShowCart from "./show-cart/ShowCart";
import ShowCartItem from "./show-cart/ShowCartItem";

export default {
  name: "Cart",
  components: {
    ShowCart,
    ShowCartItem
  }
}
</script>

<style scoped>

</style>