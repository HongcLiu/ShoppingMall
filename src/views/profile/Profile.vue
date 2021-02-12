<template>
  <div id="profile">
    <main-tab-control></main-tab-control>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabControl from "components/content/tabcontrol/MainTabControl";

export default {
  name: "Profile",
  components: {
    MainTabControl
  }
}
</script>

<style scoped>
  #profile {
    display: flex;
  }
</style>