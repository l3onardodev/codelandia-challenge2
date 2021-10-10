import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ZoomOnHover from "vue-zoom-on-hover";

createApp(App)
    .use(router)
    .use(store)
    .use(ZoomOnHover)
    .mount("#app");
