<template>
  <el-input v-model="input" placeholder="搜素订单" icon="search" :size="size" class="search-bar"></el-input>
</template>

<script>
export default {
  props: ['size'],
  data() {
  	return {
      input: ''
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/main.less';

.el-input.search-bar {
  display: block;
  border-bottom: 1px solid @base-grey;
  .el-input__icon {
    left: .3rem;
    width: .35rem;
  }
  .el-input__inner {
    font-family: "PingFangSC-Thin";
    padding: .4rem .8rem;
    border: 0;
  }
}
</style>
