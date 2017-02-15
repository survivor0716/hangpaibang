<template>
  <div>
    <normal-header></normal-header>
    <div class="reg-form">
  		<el-form ref="form" :model="form">
			<el-form-item prop="name">
			  <el-input v-model="form.name" placeholder="请输入姓名" size="small"></el-input>
			</el-form-item>
			<el-form-item prop="area">
			  <el-input v-model="form.area" placeholder="请输入所在地区" size="small"></el-input>
			</el-form-item>
			<el-form-item prop="email">
			  <el-input v-model="form.email" placeholder="请输入电子邮件" type="email" size="small"></el-input>
			</el-form-item>
			<el-form-item prop="wxid">
			  <el-input v-model="form.wxid" placeholder="请输入微信号" size="small"></el-input>
			</el-form-item>
			<el-row>
				<el-col :span="24">
					<el-form-item prop="age">
					  <el-input v-model="form.age" placeholder="请输入航龄" type="tel" size="small"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item>
						<el-checkbox v-model="form.hasFlight">是否拥有飞机</el-checkbox>
					</el-form-item>
				</el-col>
			</el-row>
			<el-form-item prop="desc">
			  <el-input v-model="form.desc" placeholder="请输入飞机型号、自我介绍及留言" type="textarea" :rows="4"></el-input>
			</el-form-item>
			<el-form-item>
			  <el-button type='primary' @click="submitForm('form')">注册</el-button>
			</el-form-item>
		</el-form>
  </div>
  </div>
</template>

<script>
import NormalHeader from '../../components/LoginHeader'

export default {
  name: 'reg2',
  components: {
    NormalHeader
  },
  data() {
  	return {
  		form: {
  			name: '',
  			area: '',
  			email: '',
  			wxid: '',
  			age: '',
  			hasFlight: false,
  			desc: ''
  		},
		rules: {
			name: [
				{ required: true, message: '请输入姓名', trigger: 'blur' }
			],
			area: [
				{ required: true, message: '请输入所在地区', trigger: 'blur' }
			],
			email: [
				{ required: true, message: '请输入电子邮件', trigger: 'blur' }
			],
			wxid: [
				{ required: true, message: '请输入微信号', trigger: 'blur' }
			],
			age: [
				{ required: true, message: '请输入航龄', trigger: 'blur' }
			],
			desc: [
				{ required: true, message: '请输入飞机型号、自我介绍及留言', trigger: 'blur' }
			]
		}
  	}
  },
  methods: {
  	submitForm(formName) {
        this.$refs[formName].validate((valid) => {
			if (valid) {
				console.log('submit! regist params: ', JSON.stringify(this.form))
			} else {
				console.log('error submit!!')
				return false
			}
		});
	},
	resetForm(formName) {
		this.$refs[formName].resetFields();
	}
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../../assets/css/main.less';

.reg-form {
  padding: .38rem;
  .el-form-item {
    margin-bottom: .2rem;
    .el-input {
    	display: inline-table;
	    .el-input__inner {
	      padding: .26rem .2rem;
	      border-radius: 0;
	    }
	    .el-input-group__append {
	    	background-color: @secondary-color;
	    	.el-button--warning {
	    		color: #fff;
	    	}
	    }
  	}
  	.el-form-item__error {
  		font-size: .12rem;
  	}
  	.el-textarea {
	    display: block;
	    .el-textarea__inner {
	      resize: none;
	      font-family: @fm-thin;
	      font-size: .24rem;
	      padding: .3rem .2rem;
	      border-radius: 0;
	    }
	  }
  }
  .el-button {
    height: .76rem;
    font-size: .28rem;
    width: 100%;
  }
}
</style>
