<template>
  <div
    class="menu-item"
    :class="active ? 'menu-item-active' : ''"
    @click="selectMenu"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'menu-item',
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  created() {},
  methods: {
    selectMenu() {
      this.$emit('selectMenu', this.name)
    },
  },
  watch: {},
  components: {},
}
</script>
<style lang="scss" scoped>
.menu-item {
  display: flex;
  align-items: center;
  padding: 13px 20px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: #023960;
    color: #fff;
  }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 0.2s ease;
  }
  &.menu-item-active {
    @include background_color('background_color_transparent_545c64');
    color: #fff;
  }
}
</style>
