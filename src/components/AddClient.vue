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
      <label class="label">
        Quote
        <textarea
          type="text"
          pattern=".*\S.*"
          placeholder="Enter favourite quote"
          ref="quote"
          class="formInput formTextarea"
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
        quote: this.$refs.quote.value,
      };
      this.$store.dispatch("addClient", newClient);
    },
  },
};
</script>
<style scoped>
.formTextarea {
  resize: none;
  font-family: "Lato", sans-serif;
}
</style>
