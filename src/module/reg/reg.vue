<template>
	<div>
		<normal-header></normal-header>
		<div class="reg-form">
			<el-form ref="form" :model="form">
			<el-form-item prop="phone">
				<el-input v-model="form.name" placeholder="请输入手机号" size="small"></el-input>
			</el-form-item>
			<el-form-item prop="code">
				<el-input v-model="form.area" placeholder="请输入验证码" size="small">
					<el-button type="warning" slot="append" @click="getCode()">获取验证码</el-button>
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type='primary' @click="submitForm('form')">下一步</el-button>
			</el-form-item>
		</el-form>
		</div>
	</div>
</template>

<script>
import NormalHeader from '../../components/LoginHeader'

export default {
	name: 'reg',
	components: {
		NormalHeader
	},
	data() {
		return {
			form: {
				phone: '',
				code: ''
			},
		rules: {
			phone: [
				{ required: true, message: '请输入手机号', trigger: 'blur' }
			],
			code: [
				{ required: true, message: '请输入验证码', trigger: 'blur' }
			]
		}
		}
	},
	methods: {
		getCode() {
			console.log('get code')
		},
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
	}
	.el-button {
		height: .76rem;
		font-size: .28rem;
		width: 100%;
	}
}
</style>
