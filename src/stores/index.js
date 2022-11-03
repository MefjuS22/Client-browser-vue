import { createStore } from "vuex";

export const store = createStore({
  state: {
    selectedClient: 2,
    clientList: [
      {
        id: 1,

        name: "John",
        lastName: "Doe",
        email: "dummy@abc.com",
      },
      {
        id: 2,

        name: "Adam",
        lastName: "Smith",
        email: "dummy@cbd.com",
      },
      {
        id: 3,

        name: "Eve",
        lastName: "Adams",
        email: "dummy@efg.com",
      },
    ],
  },
  mutations: {
    deleteClient(state) {
      state.clientList = state.clientList.filter(
        (client) => client.id !== state.selectedClient + 1
      );
      console.log(state.clientList);
    },
    editClient(state) {
      state.clientList[state.selectedClient];
      console.log(state.clientList[state.selectedClient]);
    },
  },
  actions: {},
  modules: {},
});
