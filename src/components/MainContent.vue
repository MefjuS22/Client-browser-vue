<template>
  <div class="container">
    <form class="form" @submit.prevent="">
      <input
        type="text"
        placeholder="Name"
        class="formInput"
        v-model="$store.state.clientList[$store.state.selectedClient].name"
      />
      <input
        type="text"
        placeholder="Last Name"
        class="formInput"
        v-model="$store.state.clientList[$store.state.selectedClient].lastName"
      />
      <input
        type="email"
        placeholder="E-mail adress"
        class="formInput"
        v-model="$store.state.clientList[$store.state.selectedClient].email"
      />
      <div class="formButtons">
        <button
          class="button"
          type="saveBtn"
          @click="$store.commit('editClient')"
        >
          Save
        </button>
        <button
          class="button del-btn"
          type="deleteBtn"
          @click="$store.commit('deleteClient')"
        >
          Delete
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "MainContent",
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  height: 700px;
  padding: 10px;
  margin: 10px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  border: 1px solid rgb(131, 131, 131);
  border-radius: 10px;
  background-color: rgb(228, 228, 228);
}
.formInput {
  width: 80%;
  height: 30px;
  margin: 10px;
  padding: 10px;
  background-color: rgb(235, 235, 235);
  border: 1px solid rgb(179, 179, 179);
  border-radius: 10px;
}
.formInput:focus {
  outline: none;
  background-color: #fff;
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
  height: 30px;
  margin: 10px;
  background-color: rgb(86, 155, 245);
  border: 1px solid rgb(74, 122, 255);
  border-radius: 12px;
}
.del-btn {
  background-color: rgb(255, 0, 0);
  border: 1px solid rgb(255, 0, 0);
}
</style>
