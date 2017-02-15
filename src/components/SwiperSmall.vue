<template>
  <swiper :aspect-ratio="200/640" auto dots-class="custom-bottom" dots-position="center">
    <swiper-item class="swiper-demo-img" v-for="item in demo_list"><img :src="item"></swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  title: `(可点击)${item.title}`
}))

export default {
  components: {
    Swiper,
    SwiperItem
  },
  data() {
  	return {
      demo_list: baseList
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

.vux-slider {
  .vux-indicator {
    a {
      margin-left: .12rem!important;
      i {
        width: .06rem!important;
        height: .06rem!important;
        border-radius: 50%!important;
      }
    }
  }
}
</style>
