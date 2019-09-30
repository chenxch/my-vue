<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenxch
 * @Date: 2019-08-22 23:02:53
 * @LastEditors: chenxch
 * @LastEditTime: 2019-09-30 15:20:19
 -->
<template>
  <div>
    <iframe src='http://121.196.204.61:3000/d/EgbXS25Zk/xc-dashboard?orgId=1&from=1569806402035&to=1569828002035&kiosk'
     width="100%" height="700" frameborder="0"></iframe>
  </div>
</template>

<script>

export default {
  name: 'Grafana',
  data(){
    return {
      panelList: []
    }
  },
  methods: {
    display(e) {
      console.log(e.querySelector('.sidemenu'));
    }
  },
  mounted(){
    // this.$refs.xc.onload = (e)=>{
    //   let a = document.querySelector('.sidemenu');
    //   console.log(e.target.querySelector('sidemenu'));
    // }
    // // console.log(this.$refs.xc.onload);
  }
}
</script>
<style>

  #xc .sidemenu {
  display: none;
  }


</style>