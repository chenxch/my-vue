<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenxch
 * @Date: 2019-08-22 22:34:50
 * @LastEditors: chenxch
 * @LastEditTime: 2019-09-10 16:07:10
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/About">About</router-link> |
      <router-link to="/Xc">xc</router-link> |
      <router-link to="/Grafana">Grafana(page)</router-link>|
      <router-link to="/Grafana2">Grafana(item)</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>
import axios from 'axios';

export default {
  created(){
    axios.get('/mock/routerList.json').then(res =>{
      let routerList = []
      res.data.forEach(element => {
          let obj = {
            path: element.path,
            name: element.name,
            // component: map[element.name]
            component: () => import(/* webpackChunkName: "xc" */ `@/views/${element.name}/index.vue`)
          }
          routerList.push(obj);
          
      });
      console.log(routerList);
      this.$router.addRoutes(routerList);

    })
  }
}
</script>
