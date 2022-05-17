<template>
  <div id="app">
    <div class="app-layout">
      <div class="app-main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: [
        { name: 'Table', tag: '/' },
        { name: 'Tag', tag: '/tag' },
        { name: 'loading', tag: '/loading' },
      ],
      idx: 0,
    }
  },
  methods: {},
}
</script>

<style lang="less">
@--menu-width: 230px;
html,
body,
.app-layout {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: hsl(210, 37%, 97%);
}

.app-layout {
  overflow-y: auto;

  .app-menu {
    width: @--menu-width;
  }

  .app-main {
    margin-left: @--menu-width;
    padding: 15px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity, transform;
  transition-duration: 0.2s, 0.3s;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
  transform: translateX(0);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
