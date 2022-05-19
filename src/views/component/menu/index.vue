<template>
  <div>
    <page-content :title="title" :content-list="contentList">
      <demo-content v-for="(item, index) in contentList" :key="index" :demo-data="item">
        <template #content>
          <casual-menu class="casual-menu" :active="activeRouter" mode="horizontal">
            <menu-item name="home" @selectMenu="selectNav">
              <i class="el-icon-menu"></i>
              <span class="inline vt-middle ml-sm">{{ $t('component.Menu.Home') }}</span>
            </menu-item>
            <menu-item name="test1" @selectMenu="selectNav">
              <i class="el-icon-menu"></i>
              <span class="inline vt-middle ml-sm">{{ $t('component.Menu.ModuleOne') }}</span>
            </menu-item>
          </casual-menu>
        </template>
        <template #description>
          <p v-html="item.description"></p>
        </template>
        <template #meta>
          <pre v-highlight>
            <code class="html" v-html="htmlEncode(item.code)"></code>
          </pre>
        </template>
      </demo-content>
    </page-content>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      title: {
        id: 'navmenu-dao-hang-cai-dan',
        label: 'NavMenu',
        describe: 'NavMenuDes',
      },
      contentList: [
        {
          id: 'ding-lan',
          label: 'Topbar',
          describe: 'TopbarDes',
          description: `导航菜单默认为垂直模式，通过
            <code>mode</code>
            属性可以使导航菜单变更为水平模式。`,
          code: `<div>4444</div>`,
        },
        {
          id: 'bian-lan',
          label: 'Sidebar',
          describe: 'SidebarDes',
        },
      ],
      activeRouter: 'home',
    }
  },
  created() {},
  methods: {
    selectNav(name) {
      this.activeRouter = name
      this.$message(this.$t('component.Menu.SelectedTip') + name)
    },
    htmlEncode(str) {
      let s = ''
      str = str || ''
      if (str.length === 0) return ''
      s = str.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      return s
    },
  },
  watch: {},
  components: {
    pageContent: () => import('@/components/page-content/index.vue'),
    demoContent: () => import('@/components/page-content/demo-content.vue'),
    casualMenu: () => import('@/components/casual-menu/src/casual-menu.vue'),
    menuItem: () => import('@/components/casual-menu/src/menu-item.vue'),
    subMenu: () => import('@/components/casual-menu/src/sub-menu.vue'),
  },
}
</script>
<style lang="scss" scoped>
.casual-menu {
  padding-left: 55px;
  border-bottom: 1px solid #e6e6e6;
}
</style>
