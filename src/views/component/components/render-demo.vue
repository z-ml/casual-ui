<script lang="jsx">
export default {
  props: {
    renderFun: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
  render(h) {
    return this.renderFun(h)
  },
  watch: {},
  components: {
    casualMenu: () => import('@/components/casual-menu/src/casual-menu.vue'),
    menuItem: () => import('@/components/casual-menu/src/menu-item.vue'),
    subMenu: () => import('@/components/casual-menu/src/sub-menu.vue'),
  },
}
</script>
<style lang="scss" scoped></style>
