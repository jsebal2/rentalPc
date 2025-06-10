import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'


const app = createApp(App)
app.use(router)
app.mount('#app')
axios.defaults.baseURL = 'http://211.239.114.71:3000';
