<!--
 * @Descripttion:
 * @version:
 * @Author: chenxch
 * @Date: 2019-08-22 22:34:50
 * @LastEditors: chenxch
 * @LastEditTime: 2019-09-10 16:07:10
 -->
<template>
  <div id="app" class="fill">
    <el-container class="fill">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#ffd04b" router>
      <el-menu-item :index="menu.path" v-for="(menu, index) in $router.options.routes" :key="index">
        <i class="el-icon-menu"></i>
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
    </el-menu>
    <el-scrollbar style="height:calc(100% - 58px);" :wrapStyle="[{'overflow-x':'hidden'}]" :tag="'span'">
      <router-link to="/">Home</router-link> |
      <router-link to="/About">About</router-link> |
      <router-link to="/Xc">xc</router-link> |
      <router-link to="/Grafana">Grafana(page)</router-link><br>
      <router-link to="/Grafana2">Grafana(item)</router-link><br>
      <router-link to="/KeepAlive">KeepAlive</router-link>
    </el-scrollbar>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: item.path }" v-for="item in $store.state.breadcrumbs" :key="item.path">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <keep-alive>
          <keep-router v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
      </el-main>
    </el-container>
  </el-container>
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
}
</style>
<script>
import axios from 'axios';
import keepRouter from '@/components/keepRouter';0

export default {
  components: {keepRouter},
  created() {
    axios.get('/mock/routerList.json').then((res) => {
      const routerList = [];
      res.data.forEach((element) => {
        const obj = {
          path: element.path,
          name: element.name,
          // component: map[element.name]
          component: () => import(/* webpackChunkName: "xc" */ `@/views/${element.name}/${element.file||'index'}.vue`)
        };
        routerList.push(obj);
      });
      console.log(routerList);
      this.$router.addRoutes(routerList);
      console.log(this.$router);
    });
  }
};
</script>
<style lang="scss" scoped>
.fill{
  width: 100%;
  height: 100%;
}
</style>