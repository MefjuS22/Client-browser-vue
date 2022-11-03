<script>
import MainContent from "./components/MainContent.vue";
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    MainContent,
    SideBar,
  },
};
</script>

<template>
  <div class="wrapper">
    <SideBar />
    <MainContent />
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
  width: 100vw;
  justify-content: space-around;
}
</style>
