<template>
  <div>
    <h2>{{item}}</h2>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    item: {
      type: String
    }
  }
}
</script>

<style scoped>
</style>

<!--该组件为商品分类的子组件-->