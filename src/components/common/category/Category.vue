<template>
  <div class="category">
    <category-item class="category-item" v-for="(item, index) in data" :item="item" :key="index"></category-item>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem";

export default {
  name: "Category",
  components: {
    CategoryItem
  },
  data() {
    return {
      data: ['类别1','类别2','类别3']
    }
  }
}
</script>

<style scoped>
  .category {
    display: flex;
  }

  .category-item {
    flex: 1;
  }
</style>


<!--该组件为商品分类的父组件-->