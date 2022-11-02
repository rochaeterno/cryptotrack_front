import Maska from "maska";
import { createApp } from "vue";
import "./app.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).directive("maska", Maska).mount("#app");
