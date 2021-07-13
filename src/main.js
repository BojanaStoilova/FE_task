import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import { BNavbar, BNavbarBrand, BCollapse, BNavbarNav, BNavItem, BNavForm, BFormInput, BButton, BImg, BInputGroupAppend, BCard, BCardText, BContainer, BRow, BCol } from 'bootstrap-vue'
Vue.component('b-navbar', BNavbar)
Vue.component('b-navbar-brand', BNavbarBrand)
Vue.component('b-collapse', BCollapse)
Vue.component('b-navbar-nav', BNavbarNav)
Vue.component('b-nav-item', BNavItem)
Vue.component('b-nav-form', BNavForm)
Vue.component('b-form-input', BFormInput)
Vue.component('b-button', BButton) 
Vue.component('b-img', BImg )
Vue.component('b-input-group-append', BInputGroupAppend) 
Vue.component('b-card', BCard) 
Vue.component('b-card-text', BCardText)
Vue.component('b-container', BContainer)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
