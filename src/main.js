import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layouts/index.scss'
// import _Header from './components/Header.vue'

// createApp(App).use(router).mount('#app')

const app = createApp(App);
app.use(router);
// app.component('Header', _Header);
app.mount('#app');