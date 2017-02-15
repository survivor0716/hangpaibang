<template>
  <div class="login-header">
    <div class="logo"></div>
    <h3 class="logo-label ultra">航拍帮</h3>
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

.login-header {
  width: 100%;
  height: 2rem;
  background-color: @main-color;
  padding-top: .38rem;
  text-align: center;
  box-sizing: border-box;
  .logo {
    width: .76rem;
    height: .86rem;
    background: url(../assets/img/logo-small@2x.png) no-repeat center;
    background-size: contain;
    margin: 0 auto;
  }
  .logo-label {
    color: #fff;
    margin: 0 auto;
  }
}
</style>