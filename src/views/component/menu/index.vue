<template>
  <div>
    <page-content :title="title" :content-list="contentList">
      <demo-content
        v-for="(item, index) in contentList"
        :key="index"
        :demo-data="item"
      >
        <template #content>
          <renderDemo :render-fun="item.demoRender"></renderDemo>
        </template>
        <template #description>
          <p v-html="item.description"></p>
        </template>
        <template #meta>
          <pre v-highlight>
            <code class="html" v-html="htmlEncode(item.htmlcode)"></code><code>&lt;script&gt;</code><code class="javascript">{{item.jscode}}</code><code>&lt;/script&gt;</code>
          </pre>
        </template>
      </demo-content>
    </page-content>
  </div>
</template>
<script lang="jsx">
import contentCode from './content-code'
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
          demoRender: (h) => {
            return contentCode['Topbar']['demoRender'].call(this, h)
          },
          description: contentCode['Topbar']['description'],
          htmlcode: contentCode['Topbar']['htmlcode'],
          jscode: contentCode['Topbar']['jscode'],
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
  created() {
    console.log(this, 'this')
  },
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
    renderDemo: () => import('../components/render-demo.vue'),
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
