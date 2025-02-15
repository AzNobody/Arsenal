import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import config so we can set a default style
import { config } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faCartShopping, faX } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCartShopping, faX)

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');