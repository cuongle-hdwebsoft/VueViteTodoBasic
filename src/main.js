import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/routers/index.js";
import App from "@/App.vue";
import "./assets/scss/style.scss";

const app = createApp(App);
app.use(createRouter({ routes, history: createWebHashHistory() }));
app.mount("#app");
