<template>
  <div class="feishou2">
    <el-row class="box_wrap">
      <balance></balance>
    </el-row>
    <tab></tab>
  </div>
</template>

<script>
import Balance from '../../components/Balance'
import Tab from '../../components/TabFeishou9'

export default {
  name: 'feishou9',
  components: {
    Balance,
    Tab
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../../assets/css/main.less';

body {
  background-color: @base-grey!important;
}
</style>
