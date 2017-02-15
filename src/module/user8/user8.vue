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
        <p>地点<span>北京市朝阳区东北中路</span></p>
        <p>时长<span>6小时</span></p>
        <p>说明<span>我想要一个与众不同的婚礼拍摄</span></p>
      </div>
      <div class="list total">
        <p>套餐费用<span>6999元</span></p>
        <p>优惠金额<span>1000元</span></p>
        <p>费用总计<span class="semi">8999元</span></p>
        <p>订单尚未付款，请<a href="">立即支付</a></p>
      </div>
      <div class="list headimg">
        <el-row>
          <el-col :span="4">
            <div class="img_wrap">
              <img src="../../assets/img/default-head@2x.png" alt="">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="info_wrap">
              <p class="light">飞手：未指派</p>
              <p class="light">电话：13800138000</p>
            </div>
          </el-col>
          <el-col :span="8">
            <p class="thin"><a href="">进入飞手专区</a></p>
          </el-col>
        </el-row>
      </div>
    </el-row>
    <el-row class="footer">
      <el-button type="primary" size="large">进入订单执行界面</el-button>
    </el-row>
  </div>
</template>

<script>
import Steps from '../../components/Steps'
import Buttons from '../../components/ButtonsInList'

export default {
  name: 'user8',
  components: {
    Steps,
    Buttons
  },
  data() {
    return {
      state: '执行中',
      buttons: [
        '修改订单',
        '取消订单',
        '我要投诉'
      ],
      offset: 1
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
    span.semi {
      font-family: @fm-semi;
      font-weight: bold;
    }
  }
  &.headimg {
    position: relative;
    .img_wrap {
      width: 1rem;
      height: 1rem;
      line-height: 1;
      text-align: center;
      img {
        width: 100%;
      }
    }
    .info_wrap {
      width: 100%;
      height: 1rem;
      padding-left: .4rem;
      p {
        text-align: left;
      }
    }
  }
  .red {
    color: @red;
  }
}

.footer {
  position: absolute!important;
  bottom: 0;
  width: 100%;
  .el-button {
    width: 100%;
    font-size: .28rem;

  }
}
</style>
