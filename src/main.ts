import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// NOTE: グローバルscssファイルの読み込み
import '@/assets/app.scss'
// NOTE: アイコンの読み込み
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";

const app = createApp(App)

app.use(router)

app.mount('#app')
