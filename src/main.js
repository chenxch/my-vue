/*
 * @Descripttion:
 * @version:
 * @Author: chenxch
 * @Date: 2019-08-22 22:34:50
 * @LastEditors: chenxch
 * @LastEditTime: 2019-08-24 01:07:37
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/common.scss';
import '@/assets/styles/reset.scss';
import './plugins/axios';
import App from '@/App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.use(ElementUI);
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  const refresh = !(to.path === from.meta.toPath || from.path === to.meta.toPath);
  store.commit('setRefresh', refresh);
  // 设置导航
  const breadcrumbs = store.state.breadcrumbs;
  const index = breadcrumbs.findIndex((o) => o.path === to.path);
  if (index !== -1 && index < breadcrumbs.length) {
    breadcrumbs.splice(index + 1, breadcrumbs.length - index);
    store.commit('setBreadcrumbs', breadcrumbs);
  }
  next();
});
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
