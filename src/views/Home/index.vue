<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenxch
 * @Date: 2019-08-22 23:02:53
 * @LastEditors: chenxch
 * @LastEditTime: 2019-08-24 15:54:38
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="xx">xxxx</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    xx() {
      debugger;
      console.log(123);
    }
  },
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
