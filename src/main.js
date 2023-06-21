import './assets/main.css'
import './http/axios';
import {createApp, markRaw} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ValidationError from "@/components/site/ValidationError.vue";

const pinia = createPinia();
pinia.use(({ store }) => {
    store.router = markRaw(router);
});


const app = createApp(App)

app.use(pinia);
app.use(router)
app.component("ValidationError", ValidationError);
app.mount('#app')
