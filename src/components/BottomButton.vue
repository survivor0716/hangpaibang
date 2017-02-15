<template>
  <div class="bottom-btn">
    <el-button @click="onClick()">{{btnText}}</el-button>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: ['btnText'],
  data () {
    return {
      
    }
  },
  methods: {
    onClick() {
      console.log("button " + this.btnText + " click")
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="less">
.bottom-btn {
  background-color: #36ADE8;
  width: 100%;
  height: 45px;
  position: absolute;
  bottom: 0;
  line-height: 45px;
  .el-button {
    width: 100%;
    background-color: transparent;
    border: 0;
    font-family: 'PingFangSC-Light';
    color: #fff;
  }
}
</style>