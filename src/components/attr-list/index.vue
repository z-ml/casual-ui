<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in tableColmuns" :key="index"></th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    tableColmuns: {
      type: Array,
      default: [{}],
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
  watch: {},
  components: {},
}
</script>
<style lang="scss" scoped></style>
