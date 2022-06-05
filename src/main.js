import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/routers/index.js";
import App from "@/App.vue";
import "./assets/scss/style.scss";
import stores from "./stores";
import { createStore } from "vuex";
import { 
  ElIcon, 
  ElInput, 
  ElEmpty, 
  ElPagination, 
  ElCard, 
  ElButton, 
  ElFormItem, 
  ElForm, 
  ElSelect, 
  ElOption,
} from "element-plus";

const app = createApp(App);
app.use(createRouter({ routes, history: createWebHashHistory() }));
app.use(createStore(stores));
app.component("ElIcon", ElIcon);
app.component("ElInput", ElInput);
app.component("ElEmpty", ElEmpty);
app.component("ElPagination", ElPagination);
app.component("ElCard", ElCard);
app.component("ElButton", ElButton);
app.component("ElFormItem", ElFormItem);
app.component("ElForm", ElForm);
app.component("ElSelect", ElSelect);
app.component("ElOption", ElOption);

app.mount("#app");
