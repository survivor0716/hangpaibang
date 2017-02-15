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
	</el-row>
</template>

<script>
import Buttons from './ButtonsInList'

export default {
  components: {
  	Buttons
  },
  data() {
  	return {
  		title: '最新订单',
      list: [
      	{
      		id: '201602080019',
      		state: '已确认',
      		name: '小型活动',
	      	feishou: '图狼',
	      	time: '2016-02-08 20:00',
	      	buttons: [
	      		'开始执行',
	      		'联系用户',
	      		'修改订单',
	      		'我要投诉'
	      	],
	      	offset: 0
	      },
	      {
	      	id: '201602080019',
	      	state: '执行中',
      		name: '专业影视制作',
	      	feishou: '图狼',
	      	time: '2016-02-08 20:00',
	      	buttons: [
	      		'结束项目',
	      		'修改订单',
	      		'我要投诉'
	      	],
	      	offset: 1
	      },
	      {
	      	id: '201602080019',
	      	state: '已确认',
      		name: '影视制作',
	      	feishou: '图狼',
	      	time: '2016-02-08 20:00',
	      	buttons: [
	      		'开始执行',
	      		'联系用户',
	      		'修改订单',
	      		'我要投诉'
	      	],
	      	offset: 0
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
}

.float-right {
	float: right;
}
</style>
