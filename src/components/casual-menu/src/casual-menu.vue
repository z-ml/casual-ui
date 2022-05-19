<template>
  <div class="menu" ref="menu" :class="computedClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'casual-menu',
  props: {
    openNames: {
      type: Array,
      default: () => {
        return []
      },
    },
    active: {
      type: String,
    },
    isCollapsed: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'vertical',
    },
  },
  data() {
    return {
      offsetHeight: null,
      menuItemSlot: [],
      subMenuSlot: [],
      uiMenuSlot: [],
      activeName: null,
    }
  },
  created() {},
  mounted() {
    this.offsetHeight = this.$refs.menu.offsetHeight
    this.getChildrenSlot(this.$children)
    this.activeName = this.active
    this.changeActive()
    this.changeCollapsed(this.$children)
    this.updateOpened()
  },
  methods: {
    getChildrenSlot(children) {
      children.forEach((row) => {
        switch (row.$options.name) {
          case 'menu-item':
            this.menuItemSlot.push(row)
            break
          case 'sub-menu':
            this.subMenuSlot.push(row)
            this.getChildrenSlot(row.$children)
            break
          case 'ui-menu':
            this.uiMenuSlot.push(row)
            this.getChildrenSlot(row.$children)
            break
        }
      })
    },
    // 获取路由来激活某个菜单的active属性
    changeActive() {
      if (!this.activeName) return
      this.menuItemSlot.forEach((row) => {
        if (row.name === this.activeName) {
          row.active = true
        } else {
          row.active = false
        }
      })
      this.subMenuSlot.forEach((row) => {
        let temp = {}
        row.$children.forEach((rw) => {
          rw.$children.forEach((r) => {
            temp[r.name] = r
          })
        })
        if (temp[this.activeName]) {
          row.active = true
          row.isOpen = true
          row.subMenuStyle = {}
        } else {
          row.active = false
        }
      })
      this.uiMenuSlot.forEach((row) => {
        row.activeName = this.activeName
      })
    },
    // 更改每个子菜单的展开效果
    changeOpen() {
      this.subMenuSlot.forEach((row) => {
        let index = this.openNames.findIndex((item) => item === row.name)
        if (index === -1) {
          row.isOpen = false
          row.subMenuStyle = {
            display: 'none',
          }
        } else {
          row.isOpen = true
          row.subMenuStyle = {}
        }
      })
    },
    updateOpened() {
      this.changeOpen()
    },
    // 更改每个子菜单折叠收起状态
    changeCollapsed() {
      this.subMenuSlot.forEach((row) => {
        row.isCollapsed = this.isCollapsed
      })
    },
  },
  watch: {
    $route() {
      this.menuItemSlot = []
      this.subMenuSlot = []
      this.uiMenuSlot = []
      this.$nextTick(() => {
        this.getChildrenSlot(this.$children)
        this.changeActive()
        this.changeCollapsed(this.$children)
        this.updateOpened()
      })
    },
    active: {
      handler(val) {
        this.$nextTick(() => {
          this.activeName = val
          this.changeActive()
        })
      },
    },
    openNames: {
      handler(val) {
        // if(!val || val.length === 0) return;
        this.$nextTick(() => {
          this.updateOpened()
        })
      },
    },
    isCollapsed: {
      handler(val) {
        this.$nextTick(() => {
          this.changeCollapsed(this.$children)
        })
      },
    },
  },
  computed: {
    computedClass() {
      return [
        this.isCollapsed ? 'collapsed-menu' : '',
        this.mode === 'horizontal' ? 'menu-horizontal' : '',
      ]
    },
  },
  components: {},
}
</script>
<style lang="scss" scoped>
.collapsed-menu {
  ::v-deep > .menu-item {
    span {
      max-width: 70px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  ::v-deep > .sub-menu {
    > .sub-menu-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // span {
      //     width: 0;
      //     opacity: 0;
      //     display: none;
      // }
      .sub-menu-title-icon {
        opacity: 0;
      }
      .vertical-icon {
        display: none;
      }
    }
  }
}
.menu {
  display: block;
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  font-size: 14px;
  position: relative;
  color: #99a4af;
  transition: all 0.2s;
}

.menu-horizontal {
  display: flex;
  ::v-deep > .menu-item {
    padding: 0 20px;
    height: 53px;
    line-height: 53px;
    @include font_color('font_color_909399_fff');
    &.menu-item-active {
      @include font_color('font_active_303133_ffd04b');
      position: relative;
      &:after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
        @include background_color('background_color_409eff_ffd04b');
      }
    }
    &:hover {
      @include font_color('font_hover_000_fff');
      @include background_color('background_color_transparent_545c64');
    }
  }
  ::v-deep > .sub-menu {
    > .sub-menu-title {
      padding: 0 20px;
      height: 53px;
      line-height: 53px;
      @include font_color('font_color_909399_fff');
      &:hover {
        @include font_color('font_hover_000_fff');
        @include background_color('background_color_transparent_545c64');
      }
      .sub-menu-title-icon {
        display: none;
      }
    }
    &.sub-menu-active {
      > .sub-menu-title {
        @include font_color('font_active_303133_ffd04b');
        border-bottom: 1px solid;
        position: relative;
        &:after {
          content: '';
          display: inline-block;
          width: 100%;
          height: 4px;
          position: absolute;
          bottom: 0;
          left: 0;
          @include background_color('background_color_409eff_ffd04b');
        }
      }
    }
  }
}
</style>
