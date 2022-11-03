<script>
export default {
  name: "SideBar",
};
</script>
<template>
  <aside class="sidebarWrapper">
    <h1>Sidebar</h1>
    <span v-for="client in $store.state.clientList" :key="client.id">
      {{ client.name }} {{ client.lastName }}
    </span>
  </aside>
</template>
<style scoped>
.sidebarWrapper {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 600px;
  background-color: aliceblue;
  padding: 20px;
  margin: 20px;
}
</style>
