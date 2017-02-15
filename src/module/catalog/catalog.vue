<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
    <el-tab-pane label="飞手" name="first">
      <el-row>
        <el-col :span="8" v-for="item in feishou" style="padding: 10px">
          <a :href="item.url"><img :src="item.img" alt=""></a>
          <p><a :href="item.url">{{item.name}}</a></p>
          <span>{{item.isDone ? '已完成' : ''}}</span>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="用户" name="second">
      <el-row>
        <el-col :span="8" v-for="item in user" style="padding: 10px">
          <a :href="item.url"><img :src="item.img" alt=""></a>
          <p><a :href="item.url">{{item.name}}</a></p>
          <span>{{item.isDone ? '已完成' : ''}}</span>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="预约" name="third">
      <el-row>
        <el-col :span="8" v-for="item in reserve" style="padding: 10px">
          <a :href="item.url"><img :src="item.img" alt=""></a>
          <p><a :href="item.url">{{item.name}}</a></p>
          <span>{{item.isDone ? '已完成' : ''}}</span>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { feishou, reserve, user } from '../../assets/js/catalog.js'

export default {
  name: 'catalog',
  components: {

  },
  data() {
  	return {
      activeName: 'first',
      feishou: feishou,
      reserve: reserve,
      user: user
    }
  },
  methods: {
  	handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/reset.less';

img {
  width: 100%;
}

p {
  font-size: 12px;
}

span {
  font-size: 12px;
  color: #65b74e;
}
</style>
