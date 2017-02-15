<template>
<div class="user3">
	<div class="photo"></div>
	<el-form ref="form" :model="form" label-width=".8rem">
		<div class="box_wrap userinfo">
			<el-form-item label="姓名" prop="name">
				<el-row>
					<el-col :span="18">
						<el-input v-model="form.name" placeholder="请输入姓名"></el-input>
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item label="电话" prop="phone">
				<el-row>
					<el-col :span="18">
						<el-input v-model="form.phone" placeholder="请输入手机号码"></el-input>
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-row>
					<el-col :span="18">
						<el-input v-model="form.email" placeholder="请输入电子邮件" type="email"></el-input>
					</el-col>
					<el-col :span="6" class="auth">
						<p class="thin red"><a href="">认证</a></p>
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item label="微信" prop="wxid">
				<el-row>
					<el-col :span="18">
						<el-input v-model="form.wxid" placeholder="请输入微信账号"></el-input>
					</el-col>
					<el-col :span="6" class="auth">
						<p class="thin"><a href="">认证</a></p>
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item label="微博" prop="weiboid">
				<el-row>
					<el-col :span="18">
						<el-input v-model="form.weiboid" placeholder="请输入微博账号"></el-input>
					</el-col>
					<el-col :span="6" class="auth">
						<p class="thin"><a href="">认证</a></p>
					</el-col>
				</el-row>
			</el-form-item>
		</div>
		<div class="box_wrap addrs">
			<el-form-item label="地址" prop="addr" v-for="(item, index) in form.addrs">
				<el-row>
					<el-col :span="18">
						<el-input v-model="item.addr" placeholder="请输入地址"></el-input>
					</el-col>
					<el-col :span="6" v-if="index == form.addrs.length-1">
						<el-button class="btn_add" @click="addInputAddr()">+</el-button>
					</el-col>
				</el-row>
			</el-form-item>
		</div>
		<el-row class="footer">
				<el-button type="primary" size="large" @click="submitForm('form')">确认</el-button>
			</el-row>
	</el-form>
</template>

<script>
export default {
	name: 'user3',
	components: {

	},
	data() {
		return {
			form: {
				name: '',
				phone: '',
				email: '',
				wxid: '',
				weiboid: '',
				addrs: [
					{
						addr: ''
					},
					{
						addr: ''
					}
				]
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
		},
		addInputAddr() {
			this.form.addrs.push({addr:''})
		}
	}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../../assets/css/main.less';

html, body {
	background-color: @base-grey!important;
}

.user3 {
	.photo {
		height: 2.8rem;
		background-color: @base-grey;
		background: url('../../assets/img/upload-head@2x.png') center no-repeat;
		background-size: 1.5rem;
	}
	.el-input__inner, .el-textarea__inner, .el-button {
		border-radius: 0;
		font-family: 'PingFangSC-Thin';
		font-size: .22rem;
	}
	.userinfo, .addrs {
		.el-input__inner {
			height: .6rem;
		}
	}
	.userinfo {
		padding: .2rem;
	}
	.addrs {
		height: 3rem;
		padding: .2rem;
		overflow: auto;
		.el-col {
			text-align: center;
			.plus {
				width: 34px;
				height: 34px;
				padding: 0;
				border: 1px solid #dbdbdb;
				font-size: 20px;
				line-height: 34px;
				margin: 0 auto;
			}
		}
		.btn_add {
			margin: 0 auto;
			padding: .16rem .2rem;
		}
	}
	.el-form-item {
		background-color: #fff;
		margin-bottom: 14px;
		.el-form-item__label {
			text-align: right;
			vertical-align: middle;
			float: left;
			font-size: .24rem;
			color: rgb(72, 90, 106);
			line-height: 1;
			padding: .18rem 0;
			padding-right: .2rem;
			box-sizing: border-box;
		}
		.auth {
			text-align: center;
			line-height: 2.5;
			p {
				a {
				color: #000;
				opacity: .3;
				}
				&.red {
					a {
						color: @red;
						opacity: 1;
					}
				}
			}
		}
	}
}

.footer {
	position: fixed!important;
	bottom: 0;
	width: 100%;
	.el-button {
		width: 100%;
		font-size: .28rem;

	}
}
</style>
