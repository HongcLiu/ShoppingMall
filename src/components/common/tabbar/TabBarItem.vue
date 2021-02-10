<template>
  <div class="control" @click="itemClick" :class="{active: this.isActive}">
    <div class="picture">
      <slot name="picture"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
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
    }
  }
}
</script>

<style scoped>
  .control {
    width: 100%;
    margin: 50px 0 100px 0;
    text-align: center;
  }

  .picture {
    width: 50px;
    height: 50px;
    margin: auto;
  }


  .title {
    margin-top: 3px;
  }

  .active {
    background-color: #ff5777;
    border-radius: 30%;
  }
</style>