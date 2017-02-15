<template>
  <div class="reserve12">
    <el-row class="box_wrap">
      <el-row class="title">
        <h3>专属优惠码</h3>
      </el-row>
      <div class="list">
        <h1 class="code">bq6of</h1>
        <p>在好友第一次预约航拍服务的时候输入您的优惠码，即 可享受88元优惠。好友完成该航拍项目后，您也可以获 得相应额度的航拍优惠券。</p>
        <el-row class="share">
          <el-col :span="6">
            <div class="circle">微信<br>分享</div>
          </el-col>
          <el-col :span="6"><div class="circle">微博<br>分享</div></el-col>
          <el-col :span="6"><div class="circle">电子邮件<br>分享</div></el-col>
          <el-col :span="6"><div class="circle">短信<br>分享</div></el-col>
        </el-row>
      </div>
    </el-row>
    <el-row class="box_wrap coupon">
      <el-row class="list input_coupon">
        <el-input placeholder="我有一个优惠码" v-model="code">
          <el-button slot="append">使用</el-button>
        </el-input>
      </el-row>
      <!-- <el-row class="list input_coupon">
        <el-input placeholder="我有一个优惠码" v-model="code" size="small"></el-input>
        <el-button class="btn_use">使用</el-button>
      </el-row> -->
      <el-row class="list">
        <p class="thin">您的账户里还有一下优惠券未使用：</p>
        <el-row class="coupon_own" :class="{expired: !item.state}" v-for="item in coupons">
          <el-col :span="6">
            <h4>{{item.value}}</h4>
          </el-col>
          <el-col :span="18" class="info">
            <p>{{item.title}}
            <br><span>{{item.desc}}</span></p>
            <div class="state">{{item.state ? '可用' : '过期'}}</div>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'reserve12',
  components: {

  },
  data() {
  	return {
      code: '',
      coupons: [
        {
          value: '￥1000',
          title: '1000元代金券',
          desc: '有效期至2017年04月30日',
          state: true
        },
        {
          value: '￥1000',
          title: '推荐有礼100元代金券',
          desc: '长期有效',
          state: true
        },
        {
          value: '￥1000',
          title: '新人9折优惠',
          desc: '有效期至2016年04月30日',
          state: false
        },
        {
          value: '￥1000',
          title: '1000元代金券',
          desc: '有效期至2016年04月30日',
          state: false
        }
      ]
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

.reserve12 {
  .code {
    font-size: .52rem;
    font-family: "Arial-Black";
    text-align: center;
    margin: .4rem 0;
  }
  .share {
    margin-top: .4rem;
    .circle {
      width: 1.2rem;
      height: 1.2rem;
      border: 1px solid @base-line;
      border-radius: 50%;
      font-size: .22rem;
      line-height: 1.5;
      text-align: center;
      padding-top: .28rem;
      box-sizing: border-box;
    }
  }
  .coupon {
    .input_coupon {
      line-height: 0;
      .el-input {
        font-family: 'PingFangSC-Thin';
        .el-input__inner {
          border-radius: 0;
          height: .6rem;
          font-size: .24rem;
          padding: .06rem .08rem;
        }
      }
      .el-input-group__append {
        border-left: 0;
        border-radius: 0;
        .el-button {
          background-color: @main-color;
          color: #fff;
          font-size: .24rem;
        }
      }
      .btn_use {
        float: right;
      }
    }
    .coupon_own {
      height: 1.2rem;
      margin: .2rem 0;
      background-color: @red;
      color: #fff;
      &.expired {
        background-color: #A6A6A6;
      }
      .info {
        height: 100%;
        border-left: 1px dotted #fff;
        padding: .2rem 0 0 .2rem;
      }
      h4 {
        line-height: 1.2rem;
        padding-left: .16rem;
      }
      p {
        font-family: "PingFangSC-Thin";
        margin: 0;
        span {
          font-size: .18rem;
        }
      }
      .state {
        font-family: "PingFangSC-Semibold";
        position: absolute;
        top: 0;
        right: 0;
        font-size: .72rem;
        opacity: 0.2;
      }
    }
  }
}
</style>
