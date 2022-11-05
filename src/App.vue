<script>
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
    NavBar,
  },
};
</script>

<template>
  <NavBar></NavBar>
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
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
