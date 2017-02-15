<template>
	<div class="reserve2">
		<div class="box_wrap part1">
			<div class="headimg">
				<swiper></swiper>
			</div>
			<div class="list">
				<h1 class="semi">小型活动航拍套餐</h1>
				<p class="light">换一个角度，记录人生的精彩瞬间</p>
				<h6 class="thin"><span>￥1,999</span>/6小时 (超过6小时后，每小时￥299)</h6>
			</div>
		</div>
		<div class="box_wrap part2">
			<h3 class="ultra">针对婚礼及小型活动设计的航拍服务</h3>
		</div>
		<div class="box_wrap part3">
			<div class="list">
				<h4 class="semi">极致轻便</h4>
				<h5 class="thin">一位飞手，一台小巧的飞行器，随时出发，随时起飞</h5>
				<h4 class="semi">轻便不轻质</h4>
				<h5 class="thin">高达4K视频，12MP图片拍摄，完美记录美好时刻</h5>
				<h4 class="semi">低价格，高品质</h4>
				<h5 class="thin">从天而降的惊艳之作，做梦都会笑醒的超低价格，赶快行动起来吧！</h5>
				<h4 class="semi">我们能做更多</h4>
				<h5 class="thin">当爱神降临，无论是婚礼还是求婚，或者单身趴，在任何一个欢乐的时刻里，在你的温柔目光中，让你最美的模样停驻在镜头上，留住最美好的记忆。</h5>
			</div>
		</div>
		<div class="box_wrap part4">
			<div class="list">
				<p class="thin">设备标准：dji Phantom或同级别</p>
				<p class="thin">摄影标准：4K摄像头</p>
				<p class="thin">人员标准：1名飞手</p>
				<p class="thin">拍摄时间：6小时</p>
			</div>
		</div>
		<el-row class="footer">
			<el-button type="primary" size="large">确认</el-button>
		</el-row>
	</div>
</template>

<script>
import Swiper from '../../components/Swiper'

export default {
	name: 'reserve2',
	components: {
		Swiper
	},
	data() {
		return {
			
		}
	},
	methods: {

	}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../../assets/css/main.less';

html, body {
	background-color: @base-grey!important;
}

.reserve2 {
	line-height: 2;
	.part1, .part2, .part3, .part4 {
		margin-bottom: 10px;
		background-color: #fff;
	}
	.part1 {
		.headimg {
			height: 6.4rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.list {
			h6 {
				span {
					font-family: @fm-semi;
					font-size: .28rem;
				}
			}
		}
	}
	.part2 {
		padding: .4rem 0;
		text-align: center;
	}
	.part3 {
		h5 {
			text-indent: 2em;
		}
	}
}

.footer {
	width: 100%;
	.el-button {
		width: 100%;
		font-size: .28rem;

	}
}
</style>
