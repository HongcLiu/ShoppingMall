<template>
  <div class="show-goods-item">
    <div class="img"><slot name="img"></slot></div>
    <div class="title"><slot name="title"></slot></div>
    <div class="price"><slot name="price"></slot></div>
  </div>
</template>

<script>
export default {
name: "ShowGoodsItem"
}
</script>

<style scoped>
.show-goods-item {
  width: 230px;
  height: 275px;
  padding: 20px 35px;
}


.img {
  width: 160px;
  height: 160px;
}

img {
  width: 100%;
  height: 100%;
}

.title {
  font-size: 14px;
  margin-top: 10px;
}

.price {
  font-family: 'JDZH-Regular', sans-serif;
  display: inline-block;
  color: #f02b2b;
  margin-top: 10px;
  margin-right: 5px;
  font-size: 16px;
}
</style>