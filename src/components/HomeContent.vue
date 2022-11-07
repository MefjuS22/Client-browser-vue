<script>
export default {
  name: "HomeContent",

  methods: {
    deleteClient(client) {
      this.$store.dispatch("deleteClient", client);
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <main class="container">
    <h1>Clients List</h1>
    <div class="content">
      <div
        v-for="client in $store.state.clientList"
        :key="client.id"
        class="gridTable clientInfo"
      >
        <div class="gridIem">
          {{ client.name }}
        </div>
        <div class="gridIem">
          {{ client.lastName }}
        </div>
        <div class="btnContainer">
          <button class="button" type="deleteBtn" @click="deleteClient(client)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.container {
  padding: 0px 10px 0px 10px;
  margin: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  max-width: 1200px;
  height: 600px;

  background: rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.37);
  color: #fff;
}
.btnContainer {
  display: flex;
  justify-content: flex-end;
}
.content {
  width: 100%;
  overflow: auto;
}
.clientInfo {
  font-weight: 700;
  margin: 10px;
  padding: 10px;
  border-bottom: solid 1px black;
}
.gridTable {
  display: grid;
  grid-template-columns: repeat(auto-fill, 33%);
}
.gridIem {
  display: flex;
  align-items: center;
}
.button {
  width: 100px;
  height: 50px;
  font-size: 1em;
  font-weight: 700;
  color: #fff;
  background: rgba(248, 52, 52, 0.7);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 97, 97, 0.06);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.button:hover {
  background: rgba(252, 25, 25, 0.7);
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    max-width: 500px;
    height: 700px;
    flex-direction: column;
  }
}
</style>
