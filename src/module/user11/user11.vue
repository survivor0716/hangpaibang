<template>
  <div>
    <div class="box_wrap top">
      <div class="clock">
        <img class="nlbg" src="../../assets/img/nlbg.png" alt="">
        <img class="nl" src="../../assets/img/nl.png" alt="">
        <div class="reddot">
          <img src="../../assets/img/reddot.png" alt="">
        </div>
      </div>
      <div id="countdown">
        <css-circle></css-circle>
      </div>
      <el-button class="first_time">追加订单</el-button>
      <h6>追加订单费用：299元／小时</h6>
    </div>
    <div class="box_wrap">
      <el-row class="list">
        <el-col :span="6">
          <div class="state_icon">
            <h1><i class="iconfont icon-lishi"></i></h1>
            <div class="v-line"></div>
            <h1><i class="iconfont icon-shijian"></i></h1>
            <div class="v-line"></div>
            <h1><i class="iconfont icon-xuanzhong"></i></h1>
          </div>
        </el-col>
        <el-col :span="18">
        <div class="state">
          <el-row class="single_state">
            <p>套餐执行开始套餐执行开始</p>
            <h6>2016-02-08 11:22</h6>
          </el-row>
          <el-row class="single_state">
            <p>基础套餐时间结束</p>
            <h6>2016-02-08 11:22</h6>
          </el-row>
          <el-row class="single_state">
            <p>追单执行中</p>
            <h6>2016-02-08 11:22</h6>
          </el-row>
        </div>
        </el-col>
      </el-row>
    </div>
    <el-row class="footer">
      <el-button type="primary" size="large">确认</el-button>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'user11',
  components: {

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
@import '../../assets/css/iconfont.css';
@import '../../assets/css/main.less';

html, body {
  background-color: @base-grey!important;
}

.top {
  padding: .4rem 0;
  .clock {
    width: 4rem;
    height: 4rem;
    position: relative;
    margin: 0 auto;
    .nlbg, .nl {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .reddot {
      width: .4rem;
      height: .4rem;
      overflow: visible;
      position: absolute;
      top: 0;
      left: 50% - 0.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .el-button.first_time {
    margin: .24rem auto 0;
    padding: .15rem .5rem;
    font-family: @fm;
    font-size: .18rem;
    color: @main-color;
    border-color: @base-grey;
    border-radius: .5rem;
  }
  h6 {
    text-align: center;
  }
}

.state_icon {
  padding-left: .7rem;
  h1 {
    i {
      color: @main-color;
      font-size: .5rem;
    }
  }
  .v-line {
    height: .5rem;
    border-left: 1px solid @main-color;
    margin-left: .25rem;
  }
}

.state {
  padding-left: .2rem;
  .single_state {
    margin-bottom: .5rem;
    &:first-child {
      margin-top: .2rem;
    }
  }
}

.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  .el-button {
    width: 100%;
    font-size: .28rem;

  }
}
</style>
