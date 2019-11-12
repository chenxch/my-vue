<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenxch
 * @Date: 2019-08-22 23:02:53
 * @LastEditors: chenxch
 * @LastEditTime: 2019-11-13 01:56:47
 -->
<template>
  <div>
    这是动态路由<br>
    当前语言：{{$i18n.locale === 'zh' ? '中文' : '英文'}}<br>
    <button @click="$root.$i18n.locale = 'zh'">中文</button>
    <button @click="$root.$i18n.locale = 'en'">英文</button>
    {{$t('message')}}
    {{$t('xc')}}
  </div>
</template>

<script>
export default {
  name: 'Xc'
}
</script>

<i18n>
{
  "zh":{
    "xc": "乔巴兄"
  }
}
</i18n>