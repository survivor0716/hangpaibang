<template>
  <el-row>
     <date-picker :date="startTime" :option="option" :limit="limit" @change="emitParent"></date-picker>
  </el-row>
</template>

<script>
import myDatepicker from 'vue-datepicker'

function currentDate() {
  var now = new Date();
  var year = now.getFullYear();       //年
  var month = now.getMonth() + 1;     //月
  var day = now.getDate();            //日
  if(month < 10) month = '0' + month;
  if(day < 10) day = '0' + day;
  return year + '-' + month + '-' + day;
}

export default {
  components: {
    'date-picker': myDatepicker
  },
  data() {
    return {
      startTime: {
        time: currentDate()
      },
      endtime: {
        time: ''
      },
      option: {
        type: 'day',
        SundayFirst: true,
        // week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        // month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        week: ['日', '一', '二', '三', '四', '五', '六'],
        month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        format: 'YYYY-MM-DD',
        placeholder: '请选择日期',
        inputStyle: {
          'display': 'inline-block',
          'padding': '.1rem',
          'line-height': '.4rem',
          'font-size': '.28rem',
          'border': '2px solid #fff',
          // 'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#000',
          'border': '0',
          'font-family': '"PingFangSC-Thin"'
        },
        color: {
          checked: '#2bace9',
          header: '#ccc',
          headerText: '#2bace9'
        },
        buttons: {
          ok: '确认',
          cancel: '取消'
        },
        overlayOpacity: 1, // 0.5 as default
        dismissible: true // as true as default
      },
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5, 6, 7]
      }],
      selectedDate: ''
    }
  },
  methods: {
    emitParent(value) {
      this.selectedDate = value
      this.$emit('dateSelect', value)
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';



</style>