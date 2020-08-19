<!--
 * @Descripttion:
 * @version:
 * @Author: chenxch
 * @Date: 2019-08-22 23:02:53
 * @LastEditors: chenxch
 * @LastEditTime: 2019-11-13 00:46:47
 -->
<template>
  <div class="home">
    当前语言：{{$i18n.locale === 'zh' ? '中文' : '英文'}}<br>
    {{$t('message')}}
    <img alt="Vue logo" src="../../assets/logo.png">
    <!-- <el-carousel height="200px" direction="vertical" ref="xx">
    <el-carousel-item v-for="item in items" :key="item.name">
      <h3 class="medium">{{ item.name }}</h3>
    </el-carousel-item>
  </el-carousel> -->
  <!-- <div style="overflow:hidden;position: relative;">
    <div style="width:100%;height:200px;position: relative;">
      <div v-for="(item,index) in items" :key="item.name" :style="{transform: `translateY(${(index - curIndex) *200}px) scale(1)`}" style="height:200px" :class="['el-carousel__item',index - curIndex ===0 ?'is-active is-animating':'']">
        <h3 class="medium">{{ item.name }}</h3>
      </div>
    </div>
  </div> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="xx">xxxx</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';


export default {
  name: 'home',
  data() {
    return {
      items: [
        {
          name: 'xx'
        },
        {
          name: 'xxx'
        }
      ],
      curIndex: 0,
      timer: null,
      xx: 1
    };
  },
  components: {
    HelloWorld
  },
  methods: {

  },
  created() {
    this.timer = setInterval(() => {
      this.xx > 0 ? this.items.push({ name: `xxxx${this.items.length}` }) : '';
      this.curIndex += this.xx;
      this.curIndex === 5 ? this.xx = -1 : '';
      this.curIndex === 0 ? this.xx = 1 : '';
    }, 2000);
    setTimeout(() => {
      this.items.splice(0, 1);
    }, 5000);
  }
};
</script>
