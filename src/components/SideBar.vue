<script>
export default {
  name: "SideBar",
  props: {
    id: {
      type: String,
      required: false,
    },
  },
};
</script>
<template>
  <aside class="sidebarWrapper">
    <h1>Clients</h1>
    <router-link to="/profile/add"> Add Client </router-link>
    <router-link
      class="client"
      v-for="(client, index) in $store.state.clientList"
      :to="{ name: 'profile', params: { id: client.id } }"
      :key="index"
    >
      <span class="link"> {{ client.name }} {{ client.lastName }}</span>
    </router-link>
  </aside>
</template>
<style scoped>
.sidebarWrapper {
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  max-width: 500px;
  max-height: 800px;
  background: rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.37);
  overflow: auto;
}
.client {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.client :hover {
  background: rgba(54, 54, 54, 0.82);
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffff;
  height: 50px;
  background: rgba(61, 61, 61, 0.62);
  width: 80%;
  cursor: pointer;
  font-weight: 700;
  font-size: 1em;
  margin-bottom: 5px;
  padding: 5px;

  border-radius: 15px;
  transition: all 0.3s ease-in-out;
}
.link a {
  text-decoration: none;
}
</style>
