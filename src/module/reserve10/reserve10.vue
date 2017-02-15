<template>
  <div>
    <button-group></button-group>
    <div class="works-list">
      <div class="work" v-for="item in works">
        <h4>{{item.h4}}</h4>
        <h6 class="thin">{{item.author}} / {{item.time}}</h6>
        <div class="favorite">
          <el-button icon="star-on">{{item.favorite}}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonGroup from '../../components/ButtonGroupReserve10'

export default {
  name: 'reserve10',
  components: {
    ButtonGroup
  },
  data() {
  	return {
      works: [
        {
          img: '',
          h4: '《通过飞艇看南海》',
          author: 'wanwe',
          time: '3’35’’',
          favorite: 1138
        },
        {
          img: '',
          h4: '《通过飞艇看南海》',
          author: 'wanwe',
          time: '3’35’’',
          favorite: 138
        },
        {
          img: '',
          h4: '《通过飞艇看南海》',
          author: 'wanwe',
          time: '3’35’’',
          favorite: 38
        },
        {
          img: '',
          h4: '《通过飞艇看南海》',
          author: 'wanwe',
          time: '3’35’’',
          favorite: 8
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

.works-list {
  background-color: #fff;
  padding: .2rem;
  .work {
    position: relative;
    min-height: 3.33rem;
    background-color: #eee;
    margin-bottom: .2rem;
    text-align: center;
    h4, h6 {
      position: relative;
      top: 1.2rem;
    }
    h4 {
      font-family: "Microsoft YaHei";
    }
    .favorite {
      position: absolute;
      right: .2rem;
      bottom: .2rem;
      .el-button {
        min-widht: .8rem;
        border-radius: .3rem;
        border-color: @red;
        color: @red;
        background-color: transparent;
        font-size: .2rem;
        padding: .1rem .2rem;
      }
    }
  }
}
</style>
