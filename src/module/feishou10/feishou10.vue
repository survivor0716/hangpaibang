<template>
  <div>
  	<order-list title="已预约订单" :has-icon="false"></order-list>
  	<new-order-list></new-order-list>
  </div>
</template>

<script>
import OrderList from '../../components/OrderList'
import NewOrderList from '../../components/NewOrderList10'

export default {
  name: 'feishou10',
  components: {
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

html, body {
  background-color: @base-grey!important;
}
</style>
