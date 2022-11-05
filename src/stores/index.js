import { createStore } from "vuex";

export const store = createStore({
  state: {
    selectedClient: 0,
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
      {
        id: 4,
        name: "Miles",
        lastName: "Cummerata",

        email: "yraigatt3@nature.com",
      },
      {
        id: 5,
        name: "Mavis",
        lastName: "Schultz",

        email: "kmeus4@upenn.edu",
      },
      {
        id: 6,
        name: "Alison",
        lastName: "Reichert",

        email: "jtreleven5@nhs.uk",
      },
      {
        id: 7,
        name: "Oleta",
        lastName: "Abbott",

        email: "dpettegre6@columbia.edu",
      },
      {
        id: 8,
        name: "Ewell",
        lastName: "Mueller",

        email: "ggude7@chron.com",
      },
      {
        id: 9,
        name: "Demetrius",
        lastName: "Corkery",

        email: "nloiterton8@aol.com",
      },
      {
        id: 10,
        name: "Eleanora",
        lastName: "Price",

        email: "umcgourty9@jalbum.net",
      },
      {
        id: 11,
        name: "Marcel",
        lastName: "Jones",

        email: "acharlota@liveinternet.ru",
      },
      {
        id: 12,
        name: "Assunta",
        lastName: "Rath",

        email: "rhallawellb@dropbox.com",
      },
      {
        id: 13,
        name: "Trace",
        lastName: "Douglas",
        email: "lgribbinc@posterous.com",
      },
    ],
  },
  mutations: {
    deleteClient(state, clientId) {
      state.clientList = state.clientList.filter((cl) => cl.id != clientId);
      console.log(state.clientList);
    },
    editClient(state, client) {
      state.clientList.forEach((cl) => {
        if (cl.id == client.id) {
          cl = client;
        }
      });
      console.log(state.clientList.filter((cl) => cl.id == client.id));
    },
    addClient(state, client) {
      state.clientList.push(client);
      console.log(state.clientList);
    },
  },
  actions: {
    async deleteClient({ commit }, client) {
      commit("deleteClient", client.id);
    },
    async editClient({ commit }, client) {
      commit("editClient", client);
    },
  },
  modules: {},
});
