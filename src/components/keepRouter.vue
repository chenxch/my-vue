<template>
  <router-view v-if="show"></router-view>
</template>
<script>
export default {
  name: 'keepRouter',
  components: {},
  props: {},
  data() {
    return {
      show: true
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  activated() {
    if (this.$store.state.refresh) {
      this.show = false;
      this.$nextTick(() => this.show = true);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
