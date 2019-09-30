<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenxch
 * @Date: 2019-08-22 23:02:53
 * @LastEditors: chenxch
 * @LastEditTime: 2019-09-30 16:46:14
 -->
<template>
  <div class="grafana">
<!-- <iframe src="http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568173441141&to=1568195041141&panelId=2" width="650" height="310" frameborder="0"></iframe>
    <div class="grafana-row">
      <iframe src="http://121.196.204.61:3000/d-solo/EgbXS25Zk/xc-dashboard?orgId=1&from=1568061779565&to=1568083379567&kiosk&panelId=2" height="310" frameborder="0" class="grafana-iframe" @load="xx"></iframe>  
      <iframe src="http://121.196.204.61:3000/d-solo/EgbXS25Zk/xc-dashboard?orgId=1&from=1568061779565&to=1568083379567&kiosk&panelId=4" height="310" frameborder="0" class="grafana-iframe"></iframe>
    </div>
    <div class="grafana-row">
      <iframe src="http://121.196.204.61:3000/d-solo/EgbXS25Zk/xc-dashboard?orgId=1&from=1568061779565&to=1568083379567&kiosk&panelId=6" height="310" frameborder="0" class="grafana-iframe"></iframe>
    </div> -->
    <div class="grafana-row" v-for="(grafana, index) in grafanaList" :key="index">
      <iframe  v-for="item in grafana" :key="item" :src="item" height="310" frameborder="0" class="grafana-iframe" @load="xx"></iframe>  
    </div>
  </div>
</template>

<script>

export default {
  name: 'Grafana2',
  data(){
    return {
      grafanaList:[
        // [
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568182855857&to=1568204455857&panelId=6',
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568182871276&to=1568204471276&panelId=8',
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568182887542&to=1568204487543&panelId=10'
        // ],
        // [
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568182902588&to=1568204502588&panelId=18',
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568182917797&to=1568204517797&panelId=12'
        // ],
        // [
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568182935785&to=1568204535785&panelId=14',
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568195844101&to=1568197429944&panelId=16'
        // ],
        // [
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568195844101&to=1568197429944&panelId=20',
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568195844101&to=1568197429944&panelId=4'
        // ],
        // [
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568195844101&to=1568197429944&panelId=2',
        //   'http://192.168.7.136:4000/d-solo/l4Qpab5Zz/mysql?orgId=1&from=1568195844101&to=1568197429944&panelId=22'
        // ]
        [
          'http://121.196.204.61:3000/d-solo/EgbXS25Zk/xc-dashboard?orgId=1&from=1569792034378&to=1569813634378&panelId=2',
          'http://121.196.204.61:3000/d-solo/EgbXS25Zk/xc-dashboard?orgId=1&from=1569792064570&to=1569813664571&panelId=4'
        ],
        [
          'http://121.196.204.61:3000/d-solo/EgbXS25Zk/xc-dashboard?orgId=1&from=1569792083922&to=1569813683923&panelId=6'
        ]
      ]
    }
  },
  methods:{
    xx(){
      console.log('我好了');
    }
  }
}
</script>
<style lang="scss">
.grafana {
  background: #161719;
  width: 100%;
  height: 800px;
  padding: 16px 16px 0;
  box-sizing: border-box;
  &-row {
    width: 100%;
    display: flex;
    >iframe:last-child{
      margin-right: 0;
    }
  }
  &-iframe {
    margin-bottom: 12px; 
    margin-right: 12px;
    flex: 1;
  }
}

</style>