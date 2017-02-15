<template>
  <div>
    <el-row class="box_wrap">
      <el-row class="title">
        <h3 class="light">{{card1.header}}</h3>
      </el-row>
      <div class="item">
        <h4>{{card1.title}}</h4>
        <h6 v-for="s in card1.content">{{s}}</h6>
      </div>
    </el-row>
    <el-row class="box_wrap">
      <el-row class="title">
        <h3 class="light">{{card2.header}}</h3>
      </el-row>
      <div class="item">
        <h4>{{card2.title}}</h4>
        <h6 v-for="s in card2.content">{{s}}</h6>
      </div>
    </el-row>
    <el-row class="footer">
      <el-button type="primary" size="large" @click="clickJoin">申请成为航拍帮认证飞手</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'join',
  components: {

  },
  data() {
    return {
      card1: {
        header: '飞手招募',
        title: '申请成为航拍帮飞手，您将会获得：',
        content: [
          '兼职或全职一份收益颇丰的工作；',
          '基于航拍的专家指导及平台认证；',
          '圈中好友及行业先锋参与的定期交流活动；',
          '与保险公司联合推出的保险保障； 不管提升自己的挑战及认可。'
        ]
      },
      card2: {
        header: '招聘信息',
        title: '宣传专员',
        content: [
          '专科以上学历，熟悉各类媒体并能料号沟通；',
          '优秀的文字功底和写作能力，能创作段子、写故事，可搞笑、 卖萌、穿越，二次元、三次元都OK；',
          '熟悉使用设计类软件，能胜任微博、微信、论坛等相关信息 发布、线上活动及用户运营等工作。'
        ]
      }
    }
  },
  methods: {
    clickJoin() {
      console.log('click join button')
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

.item {
  h4 {
    line-height: 2;
    margin-bottom: .2rem;
  }
  h6 {
    font-family: @fm-ultra;
    font-size: .2rem;
    line-height: 2;
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
