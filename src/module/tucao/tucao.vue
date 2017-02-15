<template>
  <div class="tucao">
    <el-row class="box_wrap header">
      <p>航拍帮致力于提供专业、安全、高性价比的航拍服务， 您的意见或建议对我们很重要，感谢您对我们的新人！</p>
    </el-row class="box_wrap">
    <el-row class="box_wrap btns">
      <el-row>
        <el-col :span="6">
          <el-button type="small" :class="{'active': btn1.isActive}" @click="toggleActive(btn1)">拍摄质量</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="small" :class="{'active': btn2.isActive}" @click="toggleActive(btn2)">服务态度</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="small" :class="{'active': btn3.isActive}" @click="toggleActive(btn3)">软件使用</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="small" :class="{'active': btn4.isActive}" @click="toggleActive(btn4)">优惠券</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="small" :class="{'active': btn5.isActive}" @click="toggleActive(btn5)">付款</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="small" :class="{'active': btn6.isActive}" @click="toggleActive(btn6)">账户</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="small" :class="{'active': btn7.isActive}" @click="toggleActive(btn7)">发票</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="small" :class="{'active': btn8.isActive}" @click="toggleActive(btn8)">其他</el-button>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="box_wrap feedback">
      <el-form ref="form" :model="form">
        <el-form-item prop="feedback">
          <el-input v-model="form.feedback" placeholder="反馈内容" type="textarea" :rows="4"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="footer">
      <el-button type="primary" size="large" @click="submitForm('form')">提交</el-button>
    </el-row>
    <div class="triangle"></div>
  </div>
</template>

<script>
export default {
  name: 'tuao',
  components: {

  },
  data () {
    return {
      form: {
        feedback: ''
      },
      rules: {
        feedback: [
          { required: false, message: '请输入反馈内容', trigger: 'blur' }
        ]
      },
      btn1: {
        isActive: true
      },
      btn2: {
        isActive: false
      },
      btn3: {
        isActive: false
      },
      btn4: {
        isActive: false
      },
      btn5: {
        isActive: false
      },
      btn6: {
        isActive: false
      },
      btn7: {
        isActive: false
      },
      btn8: {
        isActive: false
      }
    }
  },
  methods: {
    toggleActive(obj) {
      obj.isActive = !obj.isActive
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit! regist params: ', JSON.stringify(this.form))
        } else {
          console.log('error submit!!')
          return false
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
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

.tucao {
  .header {
    padding: .55rem .3rem;
  }
  .btns {
    padding: .15rem;
    .el-col {
      padding: .1rem;
      .el-button {
        width: 100%;
        background-color: @base-grey;
        border: 0;
        &.active {
          background-color: @main-color;
          color: #fff;
        }
      }
    }
  }
  .feedback {
    .el-textarea {
      display: block;
      .el-textarea__inner {
        resize: none;
        font-family: @fm-thin;
        font-size: .24rem;
        padding: .4rem;
        border-radius: 0;
        border: 0;
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    .el-button {
      width: 100%;
      font-size: .28rem;

    }
  }
}
</style>