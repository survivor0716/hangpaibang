<template>
	<el-row :gutter="10" class="btns">
  	<template v-for="(btn, index) in buttons">
  		<el-col :span="6" :offset="offset*6" v-if="index == 0">
    		<el-button v-if="btn">{{btn}}</el-button>
    	</el-col>
    	<el-col :span="6" v-else>
    		<el-button v-if="btn">{{btn}}</el-button>
    	</el-col>
  	</template>
  </el-row>
</template>

<script>
export default {
  props: ['buttons', 'offset']
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/iconfont.css';
@import '../assets/css/main.less';

.btns {
  margin-top: -.7rem;
  .el-button {
    border-color: @main-color;
    color: @main-color;
    &.red {
      border-color: @red;
      color: @red;
    }
  }
}
</style>