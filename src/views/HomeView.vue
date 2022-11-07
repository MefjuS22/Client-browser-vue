<script></script>

<template>
  <main class="container">
    <h1>Clients List</h1>
    <div class="content">
      <p
        v-for="client in $store.state.clientList"
        :key="client.id"
        class="clientInfo"
      >
        {{ client.name }} {{ client.lastName }} {{ client.email }}
      </p>
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
  height: 100%;
  max-height: 600px;
  background: rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.37);
  color: #fff;
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

@media (max-width: 768px) {
  .container {
    width: 100%;
    max-width: 500px;
    height: 700px;
    flex-direction: column;
  }
}
</style>
