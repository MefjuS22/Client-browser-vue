<script>
export default {
  name: "SideBar",
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  computed: {
    clients: {
      get() {
        return this.$store.state.clientList;
      },
    },
  },
};
</script>
<template>
  <aside class="sidebarWrapper">
    <h1>Clients</h1>
    <div class="paddingBox">
      <router-link
        class="client"
        v-for="client in clients"
        :to="{ name: 'profile', params: { id: client.id } }"
        :key="client.id"
      >
        <span class="link"> {{ client.name }} {{ client.lastName }}</span>
      </router-link>
    </div>
  </aside>
</template>
<style scoped>
.sidebarWrapper {
  padding: 0px 10px 0px 10px;
  margin: 20px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  max-width: 500px;
  height: 100%;
  max-height: 800px;
  background: rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.37);
  color: #fff;
}
.paddingBox {
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.client {
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  text-overflow: ellipsis " [..]";
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
@media (max-width: 768px) {
  .sidebarWrapper {
    width: 100%;
    height: 400px;
  }
}
</style>
