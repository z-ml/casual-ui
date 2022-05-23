import i18n from '@/i18n'
const contentCode = {
  Topbar: {
    demoRender: function(h){
      console.log(this, 'this')
      return (
        <casual-menu active={this.activeRouter} mode="horizontal">
          <menu-item
            name="home"
            {...{
              on: {
                selectMenu: this.selectNav,
              },
            }}
          >
            <i class="el-icon-menu"></i>

            <span class="inline vt-middle ml-sm">
              {this.$t('component.Menu.Home')}
            </span>
          </menu-item>

          <menu-item
            name="test1"
            {...{
              on: {
                selectMenu: this.selectNav,
              },
            }}
          >
            <i class="el-icon-menu"></i>

            <span class="inline vt-middle ml-sm">
              {this.$t('component.Menu.ModuleOne')}
            </span>
          </menu-item>
        </casual-menu>
      )
    },
    description: `导航菜单默认为垂直模式，通过<code>mode</code>属性可以使导航菜单变更为水平模式。`,
    htmlcode: `<casual-menu :active="activeRouter" mode="horizontal">

  <menu-item name="home" @selectMenu="selectNav">

    <i class="el-icon-menu"></i>

    <span class="inline vt-middle ml-sm"> ${i18n.t(
      'component.Menu.Home'
    )} </span>

  </menu-item>

  <menu-item name="test1" @selectMenu="selectNav">

    <i class="el-icon-menu"></i>

    <span class="inline vt-middle ml-sm"> ${i18n.t(
      'component.Menu.ModuleOne'
    )} </span>

  </menu-item>

</casual-menu>`,
          jscode: ` export default {

    data() {

      return {

        activeRouter: 'Home',

      };

    },

    methods: {

      selectNav(name) {

        console.log(name);

      }

    }

  }`,
  }
}
export default contentCode