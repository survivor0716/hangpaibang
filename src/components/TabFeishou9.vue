<template>
	<el-row class="box_wrap tab">
		 <tab :line-width=2 active-color="#36ADE8"  v-model="index">
			<tab-item class="vux-center" active-class="active-6-1" :selected="demo2 === item" v-for="item in list2" @click="demo2 = item">{{item}}</tab-item>
		</tab>
		<swiper v-model="index" height="10rem" :show-dots="false">
			<swiper-item>
				<div class="tab-swiper vux-center">
					<order-list></order-list>
				</div>
			</swiper-item>
			<swiper-item>
				<div class="tab-swiper vux-center">
					<order-list></order-list>
				</div>
			</swiper-item>
		</swiper>
	</el-row>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
import OrderList from './OrderListFeishou9'

const list = () => ['已结项目', '未结项目']

export default {
	components: {
		Tab,
		TabItem,
		Swiper,
		SwiperItem,
		OrderList
	},
	data () {
		return {
			list2: list(),
			demo2: '作品展示',
			index: 0
		}
	}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/main.less';

.tab {
	.vux-slider{
		.vux-swiper {
			.vux-swiper-item {
				overflow: auto;
			}
		}
	}
	.vux-tab {
		height: .86rem;
		.vux-tab-item {
			font-family: @fm-semi;
			font-size: .24rem;
			line-height: 3.5;
			color: #000;
			opacity: 0.3;
			&.active-6-1 {
			  color: #000!important;
			  opacity: 1;
			  border-color: @main-color;
			}
		}
	}
}

.tab-swiper {
  background-color: #fff;
}
</style>