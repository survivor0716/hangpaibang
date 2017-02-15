<template>
	<div class="comments">
		<el-row class="comment_wrap" v-for="item in comments">
			<el-row class="top">
					<div class="headimg">
						<img :src="item.headimg" alt="">
					</div>
					<div class="middle">
						<p class="username">{{item.name}}</p>
						<p>{{item.time}} 套餐：{{item.type}}</p>
					</div>
					<div class="star">
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-off"></i>
					</div>
				</el-col>
			</el-row>
			<el-row class="tags">
				<div class="tag" v-for="tag in item.tags">{{tag}}</div>
			</el-row>
			<el-row class="comment">
				<p>{{item.content}}</p>
			</el-row>
		</el-row>
	</div>
</template>

<script>
import headimg from '../assets/img/head@2x.png'

let comment = {
	headimg: headimg,
	name: '猪八戒',
	time: '2016-10-2',
	type: '小型活动',
	tags: ['手法细腻', '经验丰富', '善于理解用户需求'],
	content: '非常好的飞手，人帅活好。关键还给了一个打折扣，免费帮我飞1个多小时。必须点赞！'
}

let comments = [];

for(let i = 0; i < 2; i++) {
	comments.push(comment)
}

export default {
	components: {

	},
	data () {
		return {
			comments: comments
		}
	}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/main.less';

.comments {
	.comment_wrap {
		padding: .2rem .1rem;
		border-bottom: 1px solid #eee;
		.headimg, .middle, .star {
			display: inline-block;
			line-height: 1;
			vertical-align: middle;
		}
		.top {
			padding: 0 .2rem;
			.headimg {
				width: 1rem;
				height: 1rem;
				margin: 0 auto;
				text-align: center;
				img {
					width: .76rem;
					height: .76rem;
				}
			}
			.middle {
				p {
					font-size: .2rem;
					line-height: 1.5;
				}
				.username {
					font-size: .24rem;
				}
			}
			.star {
				position: relative;
				top: -.5rem;
				left: .5rem;
				i {
					font-size: .16rem;
					color: @secondary-color;
					margin: -.1rem;
				}
			}
		}
	}
	.tags {
		padding: 0 .2rem;
		margin-bottom: .2rem;
		.tag {
			margin: .1rem;
			padding: .08rem .14rem;
			border-radius: .08rem;
			background-color: #eee;
			color: #9f9f9f;
			font-size: .18rem;
			float: left;
		}
	}
	.comment {
		padding: 0 .4rem;
		p {
			font-family: "PingFangSC-Ultralight";
			font-size: .22rem;
		}
	}
}
</style>