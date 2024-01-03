import { createApp } from 'vue'
import App from './App.vue'
// Import store entry file
import store from "./store";

const app = createApp(App);

// Tell created vue app to use our store with all it's modules
app.use(store);
app.mount("#app");
