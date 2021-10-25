import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHeart, faSearch, faCartPlus);

const app = createApp(App);

app.use(router).use(store).mount("#app");

app.component('font-awesome-icon', FontAwesomeIcon);