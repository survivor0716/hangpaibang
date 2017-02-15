<template>
  <el-row class="button-group">
    <el-button-group>
      <el-button :class="{active: active == 'btn1'}" @click="changeActiveBtn('btn1')">全部</el-button>
      <el-button :class="{active: active == 'btn2'}" @click="changeActiveBtn('btn2')">已确认</el-button>
      <el-button :class="{active: active == 'btn3'}" @click="changeActiveBtn('btn3')">执行中</el-button>
      <el-button :class="{active: active == 'btn4'}" @click="changeActiveBtn('btn4')">已完成</el-button>
    </el-button-group>
  </el-row>
</template>

<script>
export default {
  name: 'feishou5',
  components: {

  },
  data() {
  	return {
      active: 'btn1'
    }
  },
  methods: {
    changeActiveBtn(btn) {
      this.active = btn;
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/main.less';

.button-group {
  padding: .2rem;
  .el-button-group {
    width: 100%;
    display: block;
    .el-button {
      border-radius: 0;
      border-top: 0;
      border-bottom: 0;
      &:first-child {
        border-left: 0;
      }
      &:last-child {
        border-right: 0;
      }
      width: 25%;
      height: .65rem;
      &.active {
        background-color: #36ADE8;
        color: #fff;
      }
      &:active {

      }
      &:hover {

      }
      &:focus {

      }
      &:visited {

      }
    }
  }
}
</style>
