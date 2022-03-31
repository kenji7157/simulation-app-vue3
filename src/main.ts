import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// NOTE: グローバルscssファイルの読み込み
import '@/assets/app.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
