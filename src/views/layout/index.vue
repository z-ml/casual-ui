<template>
  <div class="layout">
    <menu-header
      :nav-list="navList"
      :version-list="versionList"
      @selectVersion="selectVersion"
    ></menu-header>
    <section class="main">
      <div class="container">
        <menu-left></menu-left>
        <router-view class="content"></router-view>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      navList: [
        {
          name: 'component',
        },
      ],
      versionList: [
        {
          label: '0.0.1',
          value: '0.0.1',
        },
      ],
    }
  },
  created() {},
  methods: {
    selectVersion(version) {
      this.$message('选中了版本 ' + version)
    },
  },
  watch: {},
  computed: {},
  components: {
    menuHeader: () => import('./components/menu-header.vue'),
    menuLeft: () => import('./components/menu-left.vue'),
  },
}
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  .main {
    height: calc(100% - 80px);
    margin-top: 80px;
    .container {
      height: 100%;
      width: 1140px;
      margin: 0 auto;
      .content {
        padding-left: 270px;
        padding-bottom: 100px;
        padding-top: 50px;
      }
    }
  }
}
</style>
