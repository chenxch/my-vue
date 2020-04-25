<template>
  <div>
    <el-input v-model="value"></el-input>
    <el-button @click="$router.push({path:'/KeepAlive2'})">到B</el-button>
  </div>
</template>
<script>
export default {
  name: 'index',
  components: {},
  props: {},
  data() {
    return {
      value: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    init() {
      this.$store.commit('setBreadcrumbs', [{ name: 'A', path: '/KeepAlive' }]);
    }
  },
  created() {
    this.init();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>
