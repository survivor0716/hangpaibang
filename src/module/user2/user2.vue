<template>
  <div>
    <user-info></user-info>
    <new-order-list :is-empty="true">
      <el-button class="first_time">开启第一次航拍</el-button>
    </new-order-list>
  </div>
</template>

<script>
import UserInfo from '../../components/UserInfo1'
import NewOrderList from '../../components/NewOrderListUser1'

export default {
  name: 'user2',
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
