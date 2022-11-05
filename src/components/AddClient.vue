<template>
  <div class="container">
    <form class="form" @submit.prevent="addClient(client)">
      <h2>Add Client</h2>
      <label class="label">
        Name
        <input
          type="text"
          pattern=".*\S.*"
          placeholder="Name"
          ref="name"
          class="formInput"
          required
        />
      </label>
      <label class="label">
        Last Name
        <input
          type="text"
          pattern=".*\S.*"
          placeholder="Last Name"
          ref="lastName"
          class="formInput"
          required
        />
      </label>
      <label class="label">
        E-mail
        <input
          type="email"
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          placeholder="E-mail adress"
          ref="email"
          class="formInput"
          required
        />
      </label>
      <div class="formButtons">
        <button class="button" type="submit">Add</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddClient",
  methods: {
    async addClient() {
      const ids = this.$store.state.clientList.map((cl) => cl.id);
      let newClient = {
        id: Math.max(...ids) + 1,
        name: this.$refs.name.value,
        lastName: this.$refs.lastName.value,
        email: this.$refs.email.value,
      };
      this.$store.dispatch("addClient", newClient);
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  max-width: 1200px;
  min-height: 600px;
  padding: 10px;
  margin: 10px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.37);
}
.formInput {
  width: 80%;
  max-width: 400px;
  height: 30px;
  margin: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.31);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.formInput:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.47);
}
.label {
  width: 80%;
  max-width: 400px;
}
.formButtons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin: 10px;
}
.button {
  width: 100px;
  height: 50px;
  margin: 10px;
  font-size: 1em;
  font-weight: 700;
  color: rgb(0, 44, 241);
  background: rgba(1, 48, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(1, 48, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover {
  background: rgba(1, 48, 255, 0.7);
}
</style>
