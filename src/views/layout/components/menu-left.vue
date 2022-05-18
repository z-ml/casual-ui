<template>
  <div class="container-nav">
    <div class="side-nav">
      <ul>
        <li class="nav-item">
          <router-link :to="{ name: 'changelog' }">更新日志</router-link>
        </li>
        <li class="nav-item" v-for="(item, index) in navList" :key="index">
          <a>{{ item.label }}</a>
          <template v-if="!!item.groupName"> </template>
          <template v-else>
            <ul v-for="(item, index) in item.groupList" :key="index">
              <li class="nav-item">
                <router-link :to="{ name: item.value }">{{
                  item.label
                }}</router-link>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'menu-left',
  props: {},
  data() {
    return {
      navList: [
        {
          label: '开发指南',
          groupList: [
            {
              label: '安装',
              value: 'installation',
            },
          ],
        },
        {
          label: '组件',
          groupName: 'Basic',
          groupList: [
            {
              label: '菜单',
              value: 'menu',
            },
          ],
        },
      ],
    }
  },
  created() {},
  methods: {},
  watch: {},
  components: {},
}
</script>
<style lang="scss" scoped>
.container-nav {
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 80px;
  transition: padding-top 0.3s;
  .side-nav {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0;
    .nav-item {
      a {
        font-size: 16px;
        color: #333;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        transition: 0.15s ease-out;
        font-weight: 700;
        &.active {
          color: #409eff;
        }
      }
      .nav-item {
        a {
          display: block;
          height: 40px;
          color: #444;
          line-height: 40px;
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
