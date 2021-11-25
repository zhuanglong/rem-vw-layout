// 全局样式
import './design/normalize.css'
import './design/global.scss'

import './design/flexible/flexible';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 挂载全局变量
app.config.globalProperties.$px2rem = window.flexible.px2rem

app.mount('#app')