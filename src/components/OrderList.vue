<template>
	<el-row class="box_wrap qiangdan">
		<div class="title link">
			<h3>
				<i class="iconfont icon-qiangdan" v-if="hasIcon"></i>
				{{title}}
				<i class="el-icon-arrow-right float-right"></i>
			</h3>
		</div>
		<div v-for="item in list" class="list">
			<h4 class="name">{{item.name}}</h4>
			<h6 class="thin time">时间：{{item.time}}</h6>
			<p class="ultra">{{item.addr}}</p>
		</div>
	</el-row>
</template>

<script>
export default {
	name: 'order-list',
	props: ['title', 'hasIcon'],
	components: {
		
	},
	data() {
		return {
			list: [
				{
					name: '小型活动',
					addr: '北京海淀区北清路68号院',
					time: '2016-02-08 20:00'
				},
				{
					name: '专业影视制作',
					addr: '北京海淀区北清路68号院',
					time: '2016-02-08 20:00'
				},
				{
					name: '影视制作',
					addr: '北京海淀区北清路68号院',
					time: '2016-02-08 20:00'
				},
			]
		}
	},
	methods: {

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

.box_wrap {
	.icon-qiangdan {
		font-size: .26rem;
		position: absolute;
		left: 0.15rem;
	}
	.list {
		position: relative;
		h4, h6 {
			line-height: 2;
		}
		.time {
			position: absolute;
			top: .3rem;
			right: .2rem;
		}
	}
}

.float-right {
	float: right;
}
</style>
