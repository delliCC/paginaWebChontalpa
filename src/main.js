import { createApp } from "vue";
import axios from './axios'
import App from "./App.vue";
import router from "./router";

import "./assets/custom.scss";

let app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router).mount('#app')
