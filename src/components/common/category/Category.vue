<template>
  <div class="category">
    <div class="category-item"
         v-for="(item, index) in data"
         @click="categoryItemClick(index)"
         :class="{active: index === currentIndex}">
      <span class="title">{{item}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "Category",
  data() {
    return {
      data: ['生活用品','床上用品','蔬菜水果','家用电器','服装穿戴','厨房用器'],
      currentIndex: 0
    }
  },
  methods: {
    categoryItemClick(index) {
      this.currentIndex = index
      this.$emit('categoryItemClick',index)
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

  .category-item {
    text-align: center;
    height: 49px;
    line-height: 49px;
  }

  .title {
    font-size: 18px;
    color: black;
  }

  .active {
    background-color: #ff5777;
  }
</style>


<!--该组件为商品分类的父组件-->