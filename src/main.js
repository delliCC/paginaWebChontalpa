import { createApp } from "vue";
import axios from './axios'
import App from "./App.vue";
import router from "./router";

import "./assets/custom.scss";
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

let app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(BootstrapVue3)
app.use(router).mount('#app')
