/*
 * @Descripttion:
 * @version:
 * @Author: chenxch
 * @Date: 2019-08-22 22:34:50
 * @LastEditors: chenxch
 * @LastEditTime: 2019-08-24 01:07:37
 */
import './set-public-path';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/common.scss';
import '@/assets/styles/reset.scss';
import './plugins/axios';
import App from '@/App.vue';
import singleSpaVue from 'single-spa-vue';
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.use(ElementUI);
Vue.config.productionTip = false;
const inToPath = (toPath, path) => (Array.isArray(toPath) ? toPath.includes(path) : false);
router.beforeEach((to, from, next) => {
  const refresh = !(inToPath(from.meta.toPath, to.path) || inToPath(to.meta.toPath, from.path));
  console.log(refresh);
  // 设置导航
  const breadcrumbs = store.state.breadcrumbs;
  const index = breadcrumbs.findIndex((o) => o.path === to.path);
  if (index !== -1 && index < breadcrumbs.length) {
    breadcrumbs.splice(index + 1, breadcrumbs.length - index);
    store.commit('setBreadcrumbs', breadcrumbs);
  }
  store.commit('setRefresh', refresh);
  next();
});
const vueOptions = {
  router,
  store,
  i18n,
  render: (h) => h(App)
};
new Vue(vueOptions).$mount('#app');
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
