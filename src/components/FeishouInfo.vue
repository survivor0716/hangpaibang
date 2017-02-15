<template>
	<el-row class="box_wrap feishou_info">
		<el-row class="user">
  		<div class="head-img">
  			<img src="../assets/img/head@2x.png" alt="">
  		</div>
  		<div class="info">
  			<i class="iconfont icon-bianji"></i>
  			<h3 class="semi">图狼</h3>
  			<h6><a href="">航拍帮认证飞手</a></h6>
  			<h5>总执行项目数：<span>48</span></h5>
  			<h5>用户评分：<span>5.0</span></h5>
  		</div>
  		<el-row class="desc">
		  	<h6>从业多年，跟随国家航模队教练学习无人机飞行技术，手法娴熟、 细腻，适合执行精确飞行和需要大范围镜头调度的项目。</h6>
		  </el-row>
	  </el-row>
	</el-row>
</template>

<script>
import headimg from '../assets/img/head@2x.png'

export default {
  components: {

  },
  data() {
  	return {
  		headimg: headimg
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

.feishou_info {
	.user {
		padding: .2rem;
		border-bottom: 1px solid #dbdbdb;
		.head-img {
			width: 2.2rem;
			display: inline-block;
			text-align: center;
			vertical-align: 10%;
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
			h5 {
				span {
					color: @secondary-color;
				}
			}
		}
		.desc {
			padding: .2rem .6rem;
		}
	}
}
</style>
