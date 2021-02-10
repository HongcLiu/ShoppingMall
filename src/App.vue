<template>
  <div id="app">
    <router-view></router-view>
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
import router from "./router";
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: 'App',
  router,
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "assets/css/base.css";

  img {
    width: 100%;
    height: 100%;
  }


  .tab-bar {
    position: fixed;
    height: 500px;
    width: 90px;
    right: 10px;
    top: 60px;
  }
</style>
