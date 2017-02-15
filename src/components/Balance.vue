<template>
  <el-row class="balance">
    <el-col :span="12">
      <h5>账户余额</h5>
      <h1>￥{{balance}}</h1>
    </el-col>
    <el-col :span="12">
      <h5>未结算</h5>
      <h1>￥{{unfinished}}</h1>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
  	return {
      balance: 9999,
      unfinished: 9999
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/main.less';

.balance {
  padding: .3rem;
  text-align: center;
  h5 {
    font-size: .2rem;
    opacity: .6;
  }
  h1 {
    font-family: "Arial-Black";
    font-size: .36rem;
    color: @main-color;
  }
}
</style>
