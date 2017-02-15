<template>
  <div>
    <big-header></big-header>
    <div class="content">
    	<h5>航拍帮致力于提供专业便捷、值得信任的无人机航拍服务。通过标准化产品、严苛的飞手认证机制，以及针对飞行安全所做的不懈努力，让无人机航拍成为您艺术创作、活动推广中值得信赖的伙伴。</h5>
    	<h5>“航拍帮”操作流程极尽便捷，定价明确，大量的团队基础，避免传输航拍服务中的不确定因素。</h5>
    	<h5>我们的航拍团队不仅经过严格的技术考核，在航拍的艺术层面也会经过航拍帮精选，配合高画质的摄影机，确保你所需要的画面得以实现。</h5>
    	<h5>关于航拍，我们无所不能！</h5>
    </div>
  </div>
</template>

<script>
import BigHeader from '../../components/BigHeader'

export default {
  name: 'intro',
  components: {
    BigHeader
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../../assets/css/main.less';

.content {
	padding: .5rem;
	h5 {
		font-family: @fm-thin;
    line-height: 2;
    margin-bottom: .1rem;
	}
}
</style>
