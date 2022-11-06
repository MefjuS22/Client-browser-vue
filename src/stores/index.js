import { createStore } from "vuex";

export const store = createStore({
  state: {
    clientList: [
      {
        id: 1,

        name: "John",
        lastName: "Doe",
        email: "dummy@abc.com",
        quote: "I am a dummy",
      },
      {
        id: 2,

        name: "Adam",
        lastName: "Smith",
        email: "dummy@cbd.com",
        quote: "I am a second dummy",
      },
      {
        id: 3,

        name: "Eve",
        lastName: "Adams",
        email: "dummy@efg.com",
        quote: "I am a third dummy",
      },
      {
        id: 4,
        name: "Miles",
        lastName: "Cummerata",
        email: "yraigatt3@nature.com",
        quote: "I am a fourth dummy",
      },
      {
        id: 5,
        name: "Mavis",
        lastName: "Schultz",
        email: "kmeus4@upenn.edu",
        quote: "I am a fifth dummy",
      },
      {
        id: 6,
        name: "Alison",
        lastName: "Reichert",
        email: "jtreleven5@nhs.uk",
        quote: "I am a sixth dummy",
      },
      {
        id: 7,
        name: "Oleta",
        lastName: "Abbott",
        email: "dpettegre6@columbia.edu",
        quote: "I am a seventh dummy",
      },
      {
        id: 8,
        name: "Ewell",
        lastName: "Mueller",
        email: "ggude7@chron.com",
        quote: "I am an eighth dummy",
      },
      {
        id: 9,
        name: "Demetrius",
        lastName: "Corkery",
        email: "nloiterton8@aol.com",
        quote: "I am a ninth dummy",
      },
      {
        id: 10,
        name: "Eleanora",
        lastName: "Price",
        email: "umcgourty9@jalbum.net",
        quote: "I am a tenth dummy",
      },
      {
        id: 11,
        name: "Marcel",
        lastName: "Jones",
        email: "acharlota@liveinternet.ru",
        quote: "I am an eleventh dummy",
      },
      {
        id: 12,
        name: "Assunta",
        lastName: "Rath",
        email: "rhallawellb@dropbox.com",
        quote: "I am a twelfth dummy",
      },
      {
        id: 2137,
        name: "Trace",
        lastName: "Douglas",
        email: "lgribbinc@posterous.com",
        quote: "I am a thirteenth dummy",
      },
    ],
  },
  mutations: {
    deleteClient(state, clientId) {
      state.clientList = state.clientList.filter((cl) => cl.id != clientId);
    },
    editClient(state, client) {
      state.clientList.forEach((cl) => {
        if (cl.id == client.id) {
          cl.name = client.name;
          cl.lastName = client.lastName;
          cl.email = client.email;
        }
      });
    },
    addClient(state, client) {
      state.clientList.push(client);
    },
  },
  actions: {
    async deleteClient({ commit }, client) {
      commit("deleteClient", client.id);
    },
    async editClient({ commit }, client) {
      commit("editClient", client);
    },
    async addClient({ commit }, client) {
      commit("addClient", client);
    },
  },
  modules: {},
});
