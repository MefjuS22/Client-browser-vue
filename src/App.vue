<script>
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<template>
  <div class="wrapper">
    <SideBar />
    <router-view />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}
</style>
