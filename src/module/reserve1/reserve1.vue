<template>
  <div class="reserve1">
<!--     <el-carousel height="300px">
      <el-carousel-item>
        <div class="header">
          <h3>小型活动航拍套餐</h3>
          <h2>换一个角度，记录人生的精彩瞬间</h2>
          <p>￥1,999/6小时</p>
          <el-button type="small">立即预约<i class="el-icon-arrow-right"></i></el-button>
        </div>
      </el-carousel-item>
    </el-carousel> -->
    <el-row class="box_wrap swiper">
      <swiper></swiper>
      <div class="cover_text">
        <h4 class="semi">小型活动航拍套餐</h4>
        <h2 class="ultra">换一个角度，记录人生的精彩瞬间</h2>
        <h3 class="semi">￥1,999/6小时</h3>
        <el-button type="small">立即预约<i class="el-icon-arrow-right"></i></el-button>
      </div>
    </el-row>
    <el-row class="box_wrap links">
      <el-row class="title">
        <h3 class="thin">按照我的需求定制航拍服务<i class="el-icon-arrow-right float-right"></i></h3>
      </el-row>
      <el-row class="title">
        <h3 class="thin">加入航拍帮成为签约飞手<i class="el-icon-arrow-right float-right"></i></h3>
      </el-row>
    </el-row>
    <div class="box_wrap swiper_small">
      <swiper-small></swiper-small>
    </div>
    <div class="box_wrap recommend">
      <div class="title">
        <p><span>作品推荐</span></p>
      </div>
      <div class="work_list">
        <div class="work" v-for="item in recommend">
          <el-row>
            <el-col :span="12"><img src="" alt=""></el-col>
            <el-col :span="12">
              <h4 class="semi">{{item.title}}</h4>
              <h6 class="thin">{{item.author}} / {{item.time}}</h6>
              <h6 class="thin">{{item.desc}}</h6>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../components/Swiper'
import SwiperSmall from '../../components/SwiperSmall'

export default {
  name: 'reserve1',
  components: {
    Swiper,
    SwiperSmall
  },
  data() {
  	return {
      recommend: [
        {
          img: '',
          title: '通过飞艇看南海',
          author: 'wanwe',
          time: "3'35''",
          desc: '当天北京正在举行热气球巡航活...'
        },
        {
          img: '',
          title: '通过飞艇看南海',
          author: 'wanwe',
          time: "3'35''",
          desc: '当天北京正在举行热气球巡航活...'
        },
        {
          img: '',
          title: '通过飞艇看南海',
          author: 'wanwe',
          time: "3'35''",
          desc: '当天北京正在举行热气球巡航活...'
        },
        {
          img: '',
          title: '通过飞艇看南海',
          author: 'wanwe',
          time: "3'35''",
          desc: '当天北京正在举行热气球巡航活...'
        },
        {
          img: '',
          title: '通过飞艇看南海',
          author: 'wanwe',
          time: "3'35''",
          desc: '当天北京正在举行热气球巡航活...'
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

.reserve1 {
  .swiper {
    height: 6.4rem;
    overflow: hidden;
    .cover_text {
      position: relative;
      top: -6.4rem;
      text-align: center;
      padding-top: 1rem;
      h2, h3, h4 {
        margin-bottom: 10px;
        line-height: 2;
      }
      h2 {
        font-weight: normal;
      }
      h3 {
        color: @main-color;
      }
      .el-button {
        margin: 0 auto;
        background-color: transparent;
        border-color: #000;
        font-size: .18rem;
        padding: .1rem .2rem;
        border-radius: .06rem;
      }
    }
  }
  .links {
    .float-right {
      float: right;
    }
  }
  .swiper_small {
    height: 2rem;
  }
  .recommend {
    padding: .2rem;
    background-color: #fff;
    .title {
      border-bottom: 1px solid #eee;
      text-align: center;
      margin-bottom: .2rem;
      p {
        width: 2.4rem;
        border-bottom: 1px solid #000;
        margin: 0 auto;
        position: relative;
        top: -.25rem;
        span {
          position: relative;
          top: .15rem;
          background-color: #fff;
          padding: .16rem;
          font-size: .28rem;
        }
      }
    }
    .work_list {
      height: 6.4rem;
      overflow: auto;
      .work {
        margin: .2rem 0;
        img {
          width: 90%;
          min-height: 1.35rem;
          background-color: #eee;
        }
        h4, p {
          line-height: 2;
        }
      }
    }
  }
}
</style>
