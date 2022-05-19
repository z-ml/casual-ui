import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.scss'
import i18n from './i18n'
import Highlight from '@/plugin/highlight.js'
Vue.use(Highlight)

Vue.use(ElementUI);
Vue.config.productionTip = false

// const directives = require.context('./directives')
// directives.keys().forEach((key) => {
//   const directive = directives(key)
//   directive.default(Vue)
// })

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')