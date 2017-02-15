<template>
  <div>
    <search-bar size="mini"></search-bar>
    <order-list :isEmpty="true">
      <el-button class="first_time">开启第一次航拍</el-button>
    </order-list>
  </div>
</template>

<script>
import SearchBar from '../../components/SearchBar'
import OrderList from '../../components/OrderList5'

export default {
  name: 'user10',
  components: {
  	SearchBar,
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

.el-button.first_time {
  margin: .24rem auto 0;
  padding: .15rem .5rem;
  font-family: @fm;
  font-size: .18rem;
  color: @main-color;
  border-color: @base-grey;
  border-radius: .5rem;
}
</style>
