<template>
  <div>
    <user-info></user-info>
    <new-order-list :is-empty="false"></new-order-list>
  </div>
</template>

<script>
import UserInfo from '../../components/UserInfo1'
import NewOrderList from '../../components/NewOrderListUser1'

export default {
  name: 'user1',
  components: {
    UserInfo,
    NewOrderList
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

html, body {
  background-color: @base-grey!important;
}
</style>
