<template>
  <div class="reserve9">
  	<div class="title">
      <h4>订单信息</h4>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="4">
          <h5 class="thin">用户</h5>
        </el-col>
        <el-col :span="20">
          <h5 class="thin">maoyinglu</h5>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <h5 class="thin">电话</h5>
        </el-col>
        <el-col :span="20">
          <h5 class="thin">17301201153</h5>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <h5 class="thin">地点</h5>
        </el-col>
        <el-col :span="20">
          <h5 class="thin">北京市朝阳区滨河森林公园</h5>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <h5 class="thin">时间</h5>
        </el-col>
        <el-col :span="20">
          <h5 class="thin">2016年4月18日 11时50分</h5>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <h5 class="thin">套餐</h5>
        </el-col>
        <el-col :span="20">
          <h5 class="thin">小型活动套餐</h5>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <h5 class="thin">备注</h5>
        </el-col>
        <el-col :span="20">
          <h5 class="thin">拍摄的高清视频很不错哦！很喜欢，会一直选择航拍帮的服务！给个五星！</h5>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <h5 class="thin">金额</h5>
        </el-col>
        <el-col :span="20">
          <h5 class="thin">￥2,999</h5>
        </el-col>
      </el-row>
    </div>
    <div class="coupon">
      <el-row :gutter="15">
        <el-col :span="16">
          <el-input placeholder="我有一个优惠券"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button>使用</el-button>
        </el-col>
      </el-row>
      <el-row>
        <a href="">我的优惠码</a>
        <h6 class="ultra">可使用3个优惠码： </h6>
        <h6 class="ultra">1000元代金券、新人9折优惠、推荐有礼100元券</h6>
      </el-row>
    </div>
    <div class="fixed-bottom">
      <el-row>
        <el-col :span="16">
          <div class="total">
            <p>合计: <span>￥2999</span></p>
          </div>
        </el-col>
        <el-col :span="8">
          <el-button>确认支付</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reserve9',
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
@import '../../assets/css/main.less';

.reserve9 {
  padding: .2rem;
  .title {
    padding: .2rem .1rem;
    border-bottom: 1px solid @base-line;
  }
  .content, .coupon {
    padding: .2rem;
  }
  .content {
    line-height: 2;
  }
  .coupon {
    .el-input {
      display: block;
      .el-input__inner {
        height: .6rem;
        border: 0;
        border-radius: 0;
        font-family: "PingFangSC-Ultralight";
        font-size: .22rem;
        background-color: #f2f5f5;
      }
    }
    .el-button {
      width: 100%;
      background-color: #484848;
      color: #fff;
      border: 0;
      border-radius: 0;
      font-size: .24rem;
    }
    a {
      font-size: .24rem;
      color: @main-color;
      text-decoration: underline;
      line-height: 4;
    }
  }
  .fixed-bottom {
    width: 100%;
    margin: 0 -.2rem;
    position: absolute;
    bottom: 0;
    .total {
      height: 1rem;
      padding: 0 .4rem;
      border-top: 1px solid @base-line;
      p {
        height: 100%;
        font-size: .4rem;
        line-height: 1rem;
        span {
          font-size: .36rem;
          color: @red;
        }
      }
    }
    .el-button {
      width: 100%;
      height: 1rem;
      border: 0;
      border-radius: 0;
      background-color: @main-color;
      color: #fff;
      font-size: .26rem;
    }
  }
}
</style>
