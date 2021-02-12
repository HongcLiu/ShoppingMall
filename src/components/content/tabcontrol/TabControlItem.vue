<template>
  <div class="tab-control-item" @click="itemClick" :class="{active: this.isActive}">
    <div class="title"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabControlItem",
  props: {
    path: {
      type: String
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
      // console.log(this.path);
    }
  }
}
</script>

<style scoped>
 .tab-control-item {
   margin-bottom: 1px;
   height: 47px;
   width: 168px;
   background-color: gray;
 }

 .title {
   text-align: center;
   line-height: 47px;
   color: black;
 }

 .active {
   background-color: #ff5d23;
   color: #ffffff;
 }
</style>