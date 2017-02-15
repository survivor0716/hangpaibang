<template>
	<el-row class="box_wrap new-order">
	  <div class="title link">
	    <h3>
		    {{title}}
		    <i class="el-icon-arrow-right float-right"></i>
	    </h3>
	  </div>
	  <div v-for="item in list" class="list">
			<el-row>
				<h4 class="semi">{{item.name}}</h4>
				<p class="thin assigned" v-if="item.assigned">已指派飞手</p>
				<p class="thin assigned" v-else><a href="">未指派飞手</a></p>
			</el-row>
			<el-row>
				<p>时间：{{item.time}}</p>
				<p>地点：{{item.place}}</p>
				<el-button v-if="!item.assigned">我要抢单</el-button>
			</el-row>
	  </div>
	</el-row>
</template>

<script>
export default {
  components: {
    
  },
  data() {
  	return {
  		title: '最新订单',
      list: [
      	{
      		stars: 4,
      		name: '小型活动',
	      	place: '北京市朝阳区双井南路',
	      	time: '2016-02-08 20:00',
	      	assigned: true
	      },
	      {
	      	stars: 4,
      		name: '专业影视制作',
	      	place: '北京市朝阳区双井南路',
	      	time: '2016-02-08 20:00',
	      	assigned: false
	      },
	      {
	      	stars: 4,
      		name: '影视制作',
	      	place: '北京市朝阳区双井南路',
	      	time: '2016-02-08 20:00',
	      	assigned: true
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

.box_wrap {
	h3 {
		padding-left: .3rem;
		font-size: .26rem;
		.icon-qiangdan {
			font-size: .26rem;
			position: absolute;
			left: 0.15rem;
		}
	}
	.list {
		position: relative;
		.el-row {
			position: relative;
			h4, h6 {
				line-height: 2;
			}
			h6 {
				position: absolute;
				top: .3rem;
				right: .2rem;
			}
			p {
				font-size: .2rem;
				&.assigned {
					position: absolute;
					top: 0;
					right: .2rem;
				}
			}
			.el-button {
				position: absolute;
				top: 0;
				right: .2rem;
				border-radius: .04rem;
				border-color: @main-color;
				color: @main-color;
				font-family: @fm;
			}
		}
	}
}
</style>
