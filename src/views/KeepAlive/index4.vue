<template>
  <div>
    <!-- <el-input v-model="value"></el-input> -->
    <el-button @click="$router.push({path:'/KeepAlive'})">到A</el-button>
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
    this.$store.commit('setBreadcrumbs', [{ name: 'D', path: '/KeepAlive4' }]);
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>
