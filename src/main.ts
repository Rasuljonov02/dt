import "./assets/main.css";
import "@coreui/coreui/dist/css/coreui.min.css";

import { createApp } from "vue";

import App from "./App.vue";

import Router from "./router/intex";

const app = createApp(App);

app.use(Router);

app.mount("#app");
