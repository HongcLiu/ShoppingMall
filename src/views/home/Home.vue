<template>
  <div id="home">
    <category></category>
    <show-goods></show-goods>
  </div>
</template>

<script>
import Category from "components/common/category/Category";
import ShowGoods from "components/content/goods/ShowGoods";

export default {
  name: "Home",
  components: {
    Category,
    ShowGoods
  }
}
</script>

<style scoped>

</style>