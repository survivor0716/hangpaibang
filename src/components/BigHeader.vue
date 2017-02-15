<template>
  <div class="big-header">
    <div class="logo"></div>
    <p class="ultra">航拍帮</p>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/main.less';

.big-header {
  width: 100%;
  height: 4.3rem;
  box-sizing: border-box;
  background-color: @main-color;
  padding-top: .8rem;
  text-align: center;
  .logo {
    width: 1.64rem;
    height: 1.9rem;
    background: url(../assets/img/logo-large@2x.png) no-repeat center;
    background-size: contain;
    margin: 0 auto;
    margin-bottom: .4rem;
  }
  p.ultra {
    font-size: .48rem;
    color: #fff;
  }
}
</style>
