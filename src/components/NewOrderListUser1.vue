<template>
	<el-row class="box_wrap new-order">
		<div class="title link">
			<h3>
				<i class="iconfont icon-03"></i>
				{{title}}
				<i class="el-icon-arrow-right float-right"></i>
			</h3>
		</div>
		<div v-for="item in list" class="list">
			<h6 class="id light">单号 {{item.id}}</h6>
			<h4 class="state">{{item.state}}</h4>
			<h4 class="name semi">{{item.name}}</h4>
			<h5 class="light">时间：{{item.time}}</h5>
			<h5 class="light">飞手：{{item.feishou}}</h5>
			<buttons :buttons="item.buttons" :offset="item.offset"></buttons>
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
import Buttons from './ButtonsInListUser1'

export default {
	props: ['isEmpty'],
	components: {
		Buttons
	},
	data() {
		return {
			title: '最新订单',
			list: null,
			orders: [
				{
					id: '201602080019',
					state: '已确认',
					name: '小型活动',
					feishou: '图狼',
					time: '2016-02-08 20:00',
					buttons: [
						'联系飞手'
					],
					offset: 3
				},
				{
					id: '201602080019',
					state: '执行中',
					name: '专业影视制作',
					feishou: '图狼',
					time: '2016-02-08 20:00',
					buttons: [
						'联系飞手'
					],
					offset: 3
				},
				{
					id: '201602080019',
					state: '已完成',
					name: '影视制作',
					feishou: '图狼',
					time: '2016-02-08 20:00',
					buttons: [
						'联系飞手'
					],
					offset: 3
				},
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
		.state {
			position: absolute;
			top: .3rem;
			right: .2rem;
			color: @main-color;
		}
	}
	.empty {
		height: 4rem;
		padding-top: 1.5rem;
		.el-row {
			text-align: center;
			opacity: .3;
			.icon-wudingdan {
				font-size: 1rem;
			}
		}
	}
}

.float-right {
	float: right;
}
</style>
