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
    
  }
}
</script>
