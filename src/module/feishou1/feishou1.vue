<template>
  <div>
  	<user-info></user-info>
  	<order-list title="我要抢单" :has-icon="true"></order-list>
  	<new-order-list></new-order-list>
  </div>
</template>

<script>
import UserInfo from '../../components/UserInfo'
import OrderList from '../../components/OrderList'
import NewOrderList from '../../components/NewOrderList'

export default {
  name: 'feishou1',
  components: {
  	UserInfo,
    OrderList,
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

</style>
