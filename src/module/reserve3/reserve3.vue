<template>
  <div>
    <el-row class="box_wrap">
      <el-row class="title">
        <h3 class="light">{{card1.header}}</h3>
      </el-row>
      <el-row class="content reserve_name">
        <h4 class="light">{{card1.title}}</h4>
        <h5 class="light" v-for="s in card1.content">{{s}}</h5>
      </el-row>
    </el-row>

    <el-row class="box_wrap">
      <el-row class="title">
        <h3 class="light">{{card2.header}}</h3>
      </el-row>
      <!-- <el-row class="content">
        <el-col :span="12">
          <el-date-picker
            v-model="card2.date"
            :editable="false"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0"
            @click="onDatePickerClick">
          </el-date-picker>
        </el-col>
        <el-col :span="12">
          <el-time-select
            v-model="card2.time"
            :picker-options="{
              start: '08:00',
              step: '00:30',
              end: '21:00'
            }"
            placeholder="选择时间"
            @click="onTimePickerClick">
          </el-time-select>
        </el-col>
      </el-row> -->
      <el-row style="padding-bottom: .5rem">
        <el-col :span="9" :offset="6">
          <my-date-picker @dateSelect="setSelectedDate"></my-date-picker>
        </el-col>
        <el-col :span="7">
          <my-time-picker :selectedDate="selectedDate" @timeSelect="setSelectedTime"></my-time-picker>
        </el-col>
      </el-row>
      <!-- <el-row class="content date_time">
        <h3 class="thin">2016年4月18日 11时50分</h3>
      </el-row> -->
    </el-row>
    <el-row class="box_wrap">
      <el-row class="title">
        <h3 class="light">{{card3.header}}</h3>
      </el-row>
      <el-row class="content">
        <search-bar size="large"></search-bar>
        <b-map ></b-map>
      </el-row>
    </el-row>
  	<el-row class="box_wrap">
     <el-row class="title">
       <h3 class="light">{{card4.header}}</h3>
     </el-row>
     <el-row class="content hpb_textarea">
      <el-input v-model="remarks" placeholder="选填：对这次交易的说明" type="textarea" :rows="4"></el-input>
     </el-row>
    </el-row>
    <el-row class="box_wrap">
      <el-row class="title">
        <h3 class="light">{{card5.header}}</h3>
      </el-row>
      <el-row class="content user_info">
        <h3 class="thin">{{card5.content}}</h3>
        <h3 class="thin"><a href="">请填写手机号</a></h3>
      </el-row>
    </el-row>
    <el-row>
      <el-button type="primary" size="large" class="full_width">确认预约</el-button>
    </el-row>
  </div>
</template>

<script>
import SearchBar from '../../components/SearchBar'
import BMap from '../../components/BMap'
import MyDatePicker from '../../components/DatePicker'
import MyTimePicker from '../../components/TimePicker'

export default {
  name: 'feishou1',
  components: {
    SearchBar,
  	BMap,
    MyDatePicker,
    MyTimePicker
  },
  data() {
  	return {
      card1: {
        header: '套餐名称',
        title: '小型活动航拍套餐',
        content: [
          '换一个角度，记录人生的精彩瞬间'
        ]
      },
      card2: {
        header: '选择拍摄时间',
        date: '',
        time: ''
      },
      card3: {
        header: '选择拍摄地点'
      },
      card4: {
        header: '备注'
      },
      card5: {
        header: '确认用户信息',
        content: 'maoyinglu'
      },
      remarks: '',
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      selectedDate: '',
      selectedTime: ''
    }
  },
  methods: {
    setSelectedDate(value) {
      this.selectedDate = value
    },
    setSelectedTime(value) {
      this.selectedTime = value
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

.reserve_name {
  .px2rem(padding-top, 70);
  .px2rem(padding-bottom, 50);
  text-align: center;
  h4 {
    font-size: .26rem;
  }
  h5 {
    font-size: .2rem;
  }
}

.hpb_textarea {
  .el-textarea {
    display: block;
    .el-textarea__inner {
      resize: none;
      font-family: @fm-thin;
      .px2rem(font-size, 24);
      .px2rem(padding, 40);
      border: 0;
    }
  }
}

.date_time {
  .px2rem(padding-top, 40);
  .px2rem(padding-bottom, 40);
  text-align: center;
}

.full_width {
  width: 100%;
  display: block !important;
}

.user_info {
  .px2rem(padding-top, 40);
  .px2rem(padding-bottom, 40);
  h3 {
    a {
      .px2rem(font-size, 26);
    }
  }
}
</style>
