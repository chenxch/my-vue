<template>
  <div>
    <el-input v-model="value"></el-input>
    <!-- <el-button @click="$router.push({path:'/KeepAlive2'})">到三级</el-button> -->
  </div>
</template>
<script>
export default {
  name: 'index2',
  components: {},
  props: {},
  data() {
    return {
      value: 0
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    const data = this.$store.state.breadcrumbs;
    data.push({ name: 'B', path: '/KeepAlive2' });
    this.$store.commit('setBreadcrumbs', data);
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>
