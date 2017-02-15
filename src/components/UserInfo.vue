<template>
	<el-row class="box_wrap user_info">
	  <el-row class="user">
  		<div class="head-img">
  			<img src="../assets/img/head@2x.png" alt="">
  		</div>
  		<div class="info">
  			<i class="iconfont icon-bianji"></i>
  			<h3 class="semi">图狼</h3>
  			<h6><a href="">进入飞手专区</a></h6>
  			<h5>电话：13800138000</h5>
  			<h5>邮箱：email@modoculture.com</h5>
  			<h5>微信：weixin001</h5>
  			<h5>微博：航拍帮官方微博</h5>
  		</div>
	  </el-row>
	  <balance></balance>
	</el-row>
</template>

<script>
import Balance from './Balance'

export default {
  name: 'order-list',
  components: {
    Balance
  },
  data() {
  	return {
  		title: '我要抢单',
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
@import url('../assets/css/iconfont.css');
@import '../assets/css/main.less';

html, body {
  background-color: @base-grey;
}

.user_info {
	.user {
		padding: .2rem;
		border-bottom: 1px solid #dbdbdb;
		.head-img {
			width: 2.2rem;
			display: inline-block;
			text-align: center;
			vertical-align: 40%;
			img {
				width: 1.5rem;
				height: 1.5rem;
			}
		}
		.info {
			width: 3.3rem;
			padding: .3rem .2rem;
			padding-left: 0;
			display: inline-block;
			line-height: 2;
			i {
				position: absolute;
				top: .3rem;
				right: .5rem;
				color: @main-color;
				font-size: .4rem;
			}
			h6 {
				font-size: .2rem;
				margin: .1rem 0;
			}
		}
	}
}
</style>
