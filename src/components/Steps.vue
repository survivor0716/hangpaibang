<template>
  <el-row class="steps">
    <div class="section_wrap" :class="{active: step == 1}">
      <div class="dot">
        <div class="dot_inner"></div>
        <!-- <div class="line_l"></div> -->
        <div class="line_r"></div>
      </div>
      <p>待付款</p>
    </div>
    <div class="section_wrap" :class="{active: step == 2}">
      <div class="dot">
        <div class="dot_inner"></div>
        <div class="line_l"></div>
        <div class="line_r"></div>
      </div>
      <p>已确认</p>
    </div>
    <div class="section_wrap" :class="{active: step == 3}">
      <div class="dot">
        <div class="dot_inner"></div>
        <div class="line_l"></div>
        <div class="line_r"></div>
      </div>
      <p>执行中</p>
    </div>
    <div class="section_wrap" :class="{active: step == 4}">
      <div class="dot">
        <div class="dot_inner"></div>
        <div class="line_l"></div>
        <!-- <div class="line_r"></div> -->
      </div>
      <p>已完成</p>
    </div>
  </el-row>
</template>

<script>
export default {
  props: ['step'],
  data() {
  	return {

    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/main.less';

.steps {
  height: 1.5rem;
  padding: .5rem .2rem .2rem;
  background-color: @main-color;
  .section_wrap {
    width: 1.5rem;
    color: #fff;
    text-align: center;
    float: left;
    .dot {
      width: .24rem;
      height: .24rem;
      border-radius: 50%;
      position: relative;
      background-color: transparent;
      margin: 0 auto .1rem;
      .dot_inner {
        width: .12rem;
        height: .12rem;
        box-sizing: border-box;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -.06rem;
        margin-left: -.06rem;
        border: .02rem solid #fff;
        background-color: transparent;
      }
      .line_l, .line_r {
        width: .7rem;
        border-bottom: 1px solid #fff;
        position: absolute;
      }
      .line_l {
        top: .12rem;
        right: .24rem;
      }
      .line_r {
        top: .12rem;
        left: .24rem;
      }
    }
    p {
      font-size: .2rem;
      opacity: .5;
    }
    &.active {
      .dot {
        background-color: rgba(255,255,255,.3);
        .dot_inner {
          background-color: #fff;
        }
      }
      p {
        opacity: 1;
      }
    }
  }
}
</style>
