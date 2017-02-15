<template>
  <div class="feishou4">
    <div class="header-video">
      <video-player :options="videoOptions"></video-player>
    </div>
    <el-row class="work-info">
      <el-row>
        <h3 class="semi">{{work.name}}</h3>
        <h6 class="light">{{work.author}} / {{work.time}}</h6>
      </el-row>
      <el-button class="share"><i class="iconfont icon-share"></i></el-button>
      <el-button icon="star-on" class="favorite">{{work.favorite}}</el-button>
    </el-row>
    <el-row class="work-detail">
      <el-row>
        <el-col :span="4"><h4 class="semi">地点</h4></el-col>
        <el-col :span="20"><h5 class="light">{{work.place}}</h5 class="light"></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><h4 class="semi">器材</h4></el-col>
        <el-col :span="20"><h5 class="light">{{work.equipment}}</h5></el-col>
      </el-row>
      <el-row>
        <p class="light">{{work.desc}}</p>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'reserve11',
  components: {

  },
  data() {
    return {
      videoOptions: {
        source: {
          type: "video/mp4",
          src: "http://vjs.zencdn.net/v/oceans.mp4"
        },
        // techOrder: ["flash"],
        poster: "http://www.freemake.com/blog/wp-content/uploads/2015/06/videojs-logo.jpg",
        autoplay: false,
        muted: false
        // customEventName: 'state'
      },
      work: {
        name: '空中看北京',
        author: '图狼',
        time: '3‘20’‘',
        favorite: 38,
        place: '北京市北海公园',
        equipment: 'dji悟+X5raw',
        desc: '拍摄那天天气非常好，也没有航空管制，所以拍出了大海的 赶脚。'
      }
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

.feishou4 {
  background-color: #fff;
  .header-video {
    height: 4.52rem;
    background-color: #eee;
    .video-player, #vjs_video_3, video {
      width: 100%;
      height: 100%;
    }
    .vjs-big-play-button {
      width: 2em;
      margin-left: -1em!important;
      border-radius: 50%;
      font-size: 5em!important;
    }
  }
  .work-info, .work-detail {
    padding: .2rem .3rem;
  }
  .work-info {
    border-bottom: 1px solid #eee;
    .el-row {
      float: left;
    }
    .el-button {
      min-width: .8rem;
      border-radius: .3rem;
      background-color: transparent;
      font-size: .2rem;
      padding: .1rem .2rem;
      &.favorite {
        border-color: @red;
        color: @red;
        float: right;
      }
      &.share {
        width: .8rem;
        border-color: @main-color;
        color: @main-color;
        margin-left: .1rem;
        padding: .05rem;
        float: right;
        .icon-share {
          font-size: .28rem;
        }
      }
    }
  }
}
</style>
