<template>
  <el-row class="works_show">
    <div class="" v-for="item in allWorks">
      <p class="date">{{item.date}}</p>
      <div class="work" v-for="work in item.works">
        <img src="" alt="">
        <h4>{{work.name}}</h4>
        <p>{{work.author}} / {{work.time}}</p>
      </div>
    </div>
  </el-row>
</template>

<script>
export default {
  components: {

  },
  data() {
  	return {
      allWorks: [
        {
          date: '2016.04',
          works: [
            {
              name: '',
              author: '',
              time: ''
            },
            {
              name: '《通过飞艇看南海》',
              author: 'wanwe',
              time: '3‘35’‘'
            },
            {
              name: '《通过飞艇看南海》',
              author: 'wanwe',
              time: '3‘35’‘'
            }
          ]
        },
        {
          date: '2016.05',
          works: [
            {
              name: '《通过飞艇看南海》',
              author: 'wanwe',
              time: '3‘35’‘'
            },
            {
              name: '《通过飞艇看南海》',
              author: 'wanwe',
              time: '3‘35’‘'
            }
          ]
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
@import '../assets/css/main.less';

.works_show {
  padding: .4rem .2rem;
  .date {
    font-size: .22rem;
  }
  .work {
    width: 6rem;
    height: 3.3rem;
    margin: .2rem auto;
    padding-top: 1.2rem;
    background-color: #eee;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    h4, p {
      color: #fff;
      font-family: "PingFangSC-Thin";
    }
    h4 {
      font-size: .24rem;
    }
    p {
      font-size: .2rem;
    }
  }
}
</style>
