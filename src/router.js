/*
 * @Descripttion:
 * @version:
 * @Author: chenxch
 * @Date: 2019-08-22 23:02:53
 * @LastEditors: chenxch
 * @LastEditTime: 2019-08-24 15:33:11
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/index';


Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/KeepAlive',
    name: 'A',
    component: () => import(/* webpackChunkName: "xc" */ `@/views/KeepAlive/index.vue`),
    meta: {
      keepAlive: true,
      toPath: '/KeepAlive2'
    }
  },
  {
    path: '/KeepAlive2',
    name: 'B',
    component: () => import(/* webpackChunkName: "xc" */ `@/views/KeepAlive/index2.vue`)
  },
  {
    path: '/KeepAlive3',
    name: 'C',
    component: () => import(/* webpackChunkName: "xc" */ `@/views/KeepAlive/index3.vue`)
  },
  {
    path: '/KeepAlive4',
    name: 'D',
    component: () => import(/* webpackChunkName: "xc" */ `@/views/KeepAlive/index4.vue`)
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  // }
];

export default new Router({ routes });
