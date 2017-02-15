<template>
  <div>
    <login-header></login-header>
    <login-form></login-form>
    <login-content></login-content>
  </div>
</template>

<script>
import LoginHeader from '../../components/LoginHeader'
import LoginForm from '../../components/LoginForm'
import LoginContent from '../../components/LoginContent'

export default {
  components: {
    LoginHeader,
    LoginForm,
    LoginContent
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../../assets/css/main.less';

</style>
