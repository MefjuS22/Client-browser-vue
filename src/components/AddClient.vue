<template>
  <div class="container">
    <form class="form" @submit.prevent="">
      <h2>Add new client</h2>
      <input type="text" placeholder="Name" class="formInput" />
      <input type="text" placeholder="Last Name" class="formInput" />
      <input type="email" placeholder="E-mail adress" class="formInput" />
      <div class="formButtons">
        <button class="button" type="saveBtn">Add</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddClient",
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
}
.button:hover {
  background: rgba(1, 48, 255, 0.7);
}
</style>
