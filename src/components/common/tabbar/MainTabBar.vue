<template>
  <div class="main-tab-bar">
    <tab-bar class="tab-bar">
      <tab-bar-item path="/profile">
        <img slot="picture" src="~assets/img/home/user.svg" alt="">
        <div slot="title">用户</div>
      </tab-bar-item>
      <tab-bar-item path="/home">
        <img slot="picture" src="~assets/img/home/backhome.svg" alt="">
        <div slot="title">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="picture" src="~assets/img/home/cart.svg" alt="">
        <div slot="title">购物车</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}


.main-tab-bar {
  position: fixed;
  height: 500px;
  width: 90px;
  right: 10px;
  top: 60px;
}
</style>