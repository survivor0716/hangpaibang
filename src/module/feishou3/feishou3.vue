<template>
  <div>
    <feishou-info></feishou-info>
    <tab></tab>
  </div>
</template>

<script>
import FeishouInfo from '../../components/FeishouInfo'
import Tab from '../../components/Tab'

export default {
  name: 'feishou3',
  components: {
    FeishouInfo,
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
