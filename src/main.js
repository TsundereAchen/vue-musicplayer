import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadingDirective from './components/base/loading/directive'

import './assets/scss/index.scss'
// 全局下可以使用v-loading
createApp(App).use(store).use(router).directive('loading', loadingDirective).mount('#app')
