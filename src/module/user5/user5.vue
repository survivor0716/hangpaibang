<template>
	<div>
		<el-row class="box_wrap">
			<search-bar size="mini"></search-bar>
		</el-row>
		<order-list></order-list>
	</div>
</template>

<script>
import SearchBar from '../../components/SearchBar'
import OrderList from '../../components/OrderList5'

export default {
	name: 'user5',
	components: {
		SearchBar,
		OrderList
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
</style>
