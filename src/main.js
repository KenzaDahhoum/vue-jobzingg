import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'

import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

// import style primevue
import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                //core css
import 'primeicons/primeicons.css'
// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
// PrimeVue
Vue.use(PrimeVue)
Vue.component('Dialog', Dialog)
// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
