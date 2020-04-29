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
     width="100%" height="700" frameborder="0"  @load="load" ref="xc" id="xc"></iframe>
  </div>
</template>

<script>

export default {
  name: 'Grafana',
  data() {
    return {
      panelList: []
    };
  },
  methods: {
    display(e) {
      console.log(e.querySelector('.sidemenu'));
    },
    esc(e) {
      // 此处填写你的业务逻辑即可
      if (e.keyCode === 27) {
        console.log(123);
        // self.closeScreenFull();
      }
    },
    load() {
      this.$refs.xc.addEventListener('keyup', this.esc);
      // document.getElementById('xc').contentWindow.addEventListener('keyup', this.esc);
      // document.getElementById('xc').contentWindow.addEventListener('keydown', this.esc);
      // document.getElementById('xc').contentWindow.onkeyup = this.esc;
      document.getElementById('xc').contentWindow.onkeydown = this.esc;
      // document.getElementById('xc').addEventListener('click', this.esc);
      window.addEventListener('keydown', this.esc);
    }
  },
  mounted() {
    // this.$refs.xc.onload = (e)=>{
    //   let a = document.querySelector('.sidemenu');
    //   console.log(e.target.querySelector('sidemenu'));
    // }
    // // console.log(this.$refs.xc.onload);
    console.log(document.getElementById('xc'));

    // .onload(() => {
    //   this.$refs.xc.addEventListener('keyup', this.esc);
    // });
    // console.log(this.$refs.xc);
  },
  destroyed() {
    document.removeEventListener('keyup', this.esc);
  }
};
</script>
<style>

  #xc .sidemenu {
  display: none;
  }


</style>
