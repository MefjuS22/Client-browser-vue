import { createApp } from "vue";
import { store } from "./stores/index.js";
import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
