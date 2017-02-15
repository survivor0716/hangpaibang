<template>
  <div>
    <steps step="3"></steps>
    <el-row class="box_wrap">
      <div class="list header">
        <h4 class="thin">
          时间
          <span class="time">2016-02-08 20:00</span>
          <span class="state" :class="{done: state == '已完成'}">{{state}}</span>
        </h4>
      </div>
      <div class="list main_info">
        <h4 class="semi">专业影视制作</h4>
        <p>单号<span>201602080019</span></p>
        <p>用户<span>刘文厚</span></p>
        <p>电话<span>13800138000</span></p>
        <p>地点<span>北京市朝阳区东北中路</span></p>
        <p>时长<span>6小时</span></p>
        <p>说明<span>我想要一个与众不同的婚礼拍摄</span></p>
      </div>
      <div class="list total">
        <p>劳务总计<span>5699元</span></p>
      </div>
      <!-- <div class="list comment">
        <h4>对方评价</h4>
        <div class="star">
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-off"></i>
        </div>
        <p>非常好的用户，合作愉快</p>
      </div>
      <div class="list complaint">
        <h4 class="red">您有投诉待解决</h4>
        <p class="thin">投诉时间<span>2016-02-08 20:00</span></p>
        <p class="thin">投诉原因<span>你猜啊</span></p>
      </div> -->
      <buttons :buttons="buttons" :offset="offset"></buttons>
    </el-row>
  </div>
</template>

<script>
import Steps from '../../components/Steps'
import Buttons from '../../components/ButtonsInList'

export default {
  name: 'feishou7',
  components: {
    Steps,
    Buttons
  },
  data() {
    return {
      state: '执行中',
      buttons: [
        '开始执行',
        '联系用户',
        '我要投诉'
      ],
      offset: 1
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../../assets/css/main.less';

html, body {
  background-color: @base-grey!important;
}

.list {
  span {
    margin-left: .4rem;
  }
  &.header {
    .state {
      color: @main-color;
      float: right;
      &.done {
        color: #000;
      }
    }
  }
  &.main_info {
    line-height: 1.6;
    h4 {
      margin: .2rem 0;
    }
  }
  &.total {
    span {
      font-family: @fm-semi;
      font-weight: bold;
      font-size: .28rem;
    }
  }
  &.comment {
    position: relative;
    .star {
      position: absolute;
      top: -.5rem;
      right: .5rem;
      i {
        font-size: .16rem;
        color: @secondary-color;
        margin: -.1rem;
      }
    }
  }
  .red {
    color: @red;
  }
}
</style>
