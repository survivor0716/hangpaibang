<template>
  <div>
    <search-bar size="mini"></search-bar>
    <button-group></button-group>
    <order-list :isEmpty="true"></order-list>
  </div>
</template>

<script>
import SearchBar from '../../components/SearchBar'
import ButtonGroup from '../../components/ButtonGroup'
import OrderList from '../../components/OrderList5'

export default {
  name: 'feishou5',
  components: {
    SearchBar,
    ButtonGroup,
    OrderList
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
