<template>
	<el-card :body-style="{ padding: '0'}" class="new-order">
	  <div slot="header">
	    <!-- <span>{{title}}</span> -->
	    <el-button class="panel-header" type="primary"><i class="iconfont icon-03"></i>{{title}}<i class="el-icon-arrow-right el-icon--right"></i></el-button>
	  </div>
	  <div v-for="item in list" class="item" v-if="false">
			<el-row>
				<el-col :span="12"><div class="id">单号 {{item.id}}</div></el-col>
				<el-col :span="12"><div class="state" :class="{'done': item.state == '已完成'}">{{item.state}}</div></el-col>
			</el-row>
			<el-row>
				<div class="title">{{item.name}}</div>
			</el-row>
			<el-row>
				<p>时间：{{item.time}}</p>
			</el-row>
			<el-row>
				<p>飞手：{{item.feishou}}</p>
			</el-row>
	    <el-row :gutter="10">
	    	<template v-for="(btn, index) in item.buttons">
	    		<el-col :span="6" :offset="item.offset*6" v-if="index == 0">
		    		<el-button size="small" v-if="btn">{{btn}}</el-button>
		    	</el-col>
		    	<el-col :span="6" v-else>
		    		<el-button size="small" v-if="btn">{{btn}}</el-button>
		    	</el-col>
	    	</template>
	    </el-row>
	  </div>
	  <div class="no_item">
	  	<el-row>
	  		<i class="iconfont icon-wudingdan"></i>
	  		<p>目前无订单</p>
	  		<el-button>开启第一次航拍</el-button>
	  	</el-row>
	  </div>
	</el-card>
</template>

<script>
export default {
  components: {

  },
  data() {
  	return {
  		title: '最新订单',
      list: []
    }
  },
  methods: {

  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import url('../assets/css/iconfont.css');

body {
  background-color: #fbf9fe;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.el-card.new-order {
	margin-bottom: 10px;
	padding: 0;
	.el-card__header {
		padding: 0;
		.panel-header {
			width: 100%;
			background-color: #36ADE8;
			text-align: left;
			border-radius: 0;
			font-family: "PingFangSC-Regular";
			font-size: 13px;
			.el-icon--right {
				float: right;
			}
			.icon-03 {
				font-size: 22px;
		    position: relative;
		    top: 3px;
		    left: -2px;
		    line-height: 0;
			}
		}
	}
	.item {
		padding: 15px;
		border-bottom: 1px solid #dbdbdb;
		.el-row {
			margin-bottom: 5px;
		}
		.title {
			font-family: "PingFangSC-Regular";
			font-size: 12px;
		}
		.id {
			font-family: "PingFangSC-Light";
			font-size: 9px;
		}
		.state {
			font-family: "PingFangSC-Regular";
			font-size: 12px;
			text-align: right;
			color: #36ADE8;
			&.done {
				color: #000;
			}
		}
		p {
			font-family: "PingFangSC-Light";
			font-size: 11px;
		}
		.el-button {
			border-color: #36ADE8;
			color: #36ADE8;
		}
		.red {
			border-color: #F3683F;
			color: #F3683F;
		}
	}
	.no_item {
		.el-row {
			text-align: center;
			padding-top: 40px;
			i {
				font-size: 40px;
				color: #ccc;
			}
			p {
				font-size: 10px;
				color: #ccc;
			}
			.el-button {
				width: 130px;
				margin: 20px 0 30px;
				border-color: #ccc;
				border-radius: 20px;
				background-color: transparent;
				font-size: 11px;
				color: #36ADE8;
			}
		}
	}
}
</style>
