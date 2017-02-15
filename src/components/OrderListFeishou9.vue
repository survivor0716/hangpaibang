<template>
	<el-row class="box_wrap new-order">
		<div v-for="item in list" class="list">
			<h6 class="id light">单号 {{item.id}}</h6>
			<h4 class="amount">{{item.amount}}</h4>
			<h4 class="name semi">{{item.name}}</h4>
			<h5 class="light">时间：{{item.time}}</h5>
			<h5 class="light">飞手：{{item.feishou}}</h5>
		</div>
		<div class="empty" v-if="!list.length">
      <el-row>
      	<i class="iconfont icon-wudingdan"></i>
      	<h6>目前无订单</h6>
      </el-row>
      <slot></slot>
		</div>
	</el-row>
</template>

<script>
export default {
	props: ['isEmpty'],
	components: {

	},
	data() {
		return {
			title: '最新订单',
			list: null,
			orders: [
				{
					id: '201602080019',
					amount: '3000元',
					name: '小型活动',
					feishou: '图狼',
					time: '2016-02-08 20:00'
				},
				{
					id: '201602080019',
					amount: '3000元',
					name: '专业影视制作',
					feishou: '图狼',
					time: '2016-02-08 20:00'
				},
				{
					id: '201602080019',
					amount: '3000元',
					name: '影视制作',
					feishou: '图狼',
					time: '2016-02-08 20:00'
				},
				{
					id: '201602080019',
					amount: '3000元',
					name: '影视制作',
					feishou: '图狼',
					time: '2016-02-08 20:00'
				}
			]
		}
	},
	methods: {

	},
	created() {
		this.list = this.isEmpty ? [] : this.orders
	}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/iconfont.css';
@import '../assets/css/main.less';

html, body {
	background-color: @base-grey!important;
}

.new-order {
	h3 {
		padding-left: .3rem;
		font-size: .26rem;
		.icon-03 {
			font-size: .4rem;
			position: absolute;
			left: 0.1rem;
			top: 0.24rem;
		}
	}
	.list {
		position: relative;
		h4, h5, h6 {
			line-height: 2;
		}
		.name {
			line-height: 3;
		}
		.amount {
			position: absolute;
			top: .3rem;
			right: .2rem;
			color: @secondary-color;
			&.done {
				color: #000;
			}
		}
	}
	.empty {
		height: 9.5rem;
		padding-top: 1.5rem;
		.el-row {
			text-align: center;
			opacity: .3;
			.icon-wudingdan {
				font-size: 1rem;
			}
		}
	}
	.btns {
		margin-top: .2rem;
		.el-button {
			border-color: @main-color;
			color: @main-color;
			&.red {
				border-color: @red;
				color: @red;
			}
		}
	}
}

.float-right {
	float: right;
}
</style>
