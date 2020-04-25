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
    <button @click="changeLocale('zh')">中文</button>
    <button @click="changeLocale('en')">英文</button>
    {{$t('message')}}
    {{$t('xc')}}
  </div>
</template>

<script>

export default {
  name: 'Xc',
  methods: {
    changeLocale(val) {
      this.$root.$i18n.locale = val;
    }
  },
  created() {
    const runScript = async (url) => new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    });
    runScript('https://dss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/jquery/jquery-1.10.2.min_65682a2.js');
    runScript('https://dss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/js/all_async_search_7e87e4c.js');
  }
};

</script>

<i18n>
{
  "zh":{
    "xc": "乔巴兄"
  }
}
</i18n>
