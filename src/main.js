/*
 * @Descripttion: 
 * @version: 
 * @Author: chenxch
 * @Date: 2019-08-22 22:34:50
 * @LastEditors: chenxch
 * @LastEditTime: 2019-08-24 01:07:37
 */
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
 router,
 store,
 i18n,
 render: h => h(App)
}).$mount('#app')
