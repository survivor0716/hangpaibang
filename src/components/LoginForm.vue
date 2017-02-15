<template>
  <div class="login-form">
  	<el-form ref="form" :model="form">
			<el-row>
			  <el-input v-model="form.username" placeholder="请输入用户名" size="small"></el-input>
			</el-row>
			<el-row>
			  <el-input v-model="form.password" placeholder="请输入密码" type="password" size="small"></el-input>
			</el-row>
			<el-row>
			  <el-button type="primary" @click="onLogin">登录</el-button>
			</el-row>
			<el-row>
			  <el-button @click="onRegister" class="reg-btn">注册</el-button>
			</el-row>
		</el-form>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      input: '',
      form: {
				username: '',
				password: ''
      }
    }
  },
  methods: {
    onLogin() {
      console.log('login');
    },
    onRegister() {
      console.log('register')
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/main.less';

.login-form {
  padding: .38rem;
  .el-row {
    margin-bottom: .2rem;
    .el-input {
      display: block;
      .el-input__inner {
        padding: .26rem .2rem;
        border-radius: 0;
      }
    }
  }
  .el-button {
    height: .76rem;
    font-size: .28rem;
    width: 100%;
    .reg-btn {
      border-color: @main-color;
      color: @main-color;
    }
  }
}
</style>