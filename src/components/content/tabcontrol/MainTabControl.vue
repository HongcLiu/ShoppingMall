<template>
  <div class="big">
    <tab-control>
      <tab-control-item path="/profile/loginmessage">
        <span slot="title">登录信息</span>
      </tab-control-item>
      <tab-control-item path="/profile/address">
        <span slot="title">收货地址</span>
      </tab-control-item>
      <tab-control-item path="/profile/showorders">
        <span slot="title">订单信息</span>
      </tab-control-item>
    </tab-control>
  </div>
</template>

<script>
import TabControl from "components/content/tabcontrol/TabControl";
import TabControlItem from "components/content/tabcontrol/TabControlItem";

export default {
  name: "MainTabControl",
  components: {
    TabControl,
    TabControlItem
  }
}
</script>

<style scoped>
  .big {
    margin-top: 35vh;
  }
</style>