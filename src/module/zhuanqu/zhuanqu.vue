<template>
  <div>
    <user-info></user-info>
    <tab></tab>
  </div>
</template>

<script>
import UserInfo from '../../components/UserInfo'
import Tab from '../../components/Tab'

export default {
  name: 'login',
  components: {
    UserInfo,
    Tab
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
