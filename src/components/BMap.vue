<template>
	<!--<div id="allmap" style="width: 100%; height: {{mapHeight}}px"></div>-->
	<!--<div id="allmap":style="{width: '100%', height: mapHeight + 'px'}"></div>-->
	<div id="allmap" :style="mapStyle"></div>
</template>

<script>

export default{
	data() {
		return {
			mapStyle: {
				width: '100%',
				height: this.mapHeight/100 +'rem'
			}
		}
	},
	props: {
		// 地图在该视图上的高度
		mapHeight: {
			type: Number,
			default: 476
		},
		// 经度
		longitude: {
			type: Number,
			default: 116.404
		},
		// 纬度
		latitude: {
			type: Number,
			default: 39.915
		},
		description: {
			type: String,
			default: '天安门'
		}
	},
	mounted() {
	console.log('mounted')
	var map = new BMap.Map("allmap")
	var point = new BMap.Point(this.longitude, this.latitude)
	var marker = new BMap.Marker(point)
	map.addOverlay(marker)
	map.centerAndZoom(point, 14)
	// // 信息窗的配置信息
	// var opts ={
	// width :250,
	// height:75,
	// title :"地址：",
	// }
	// var infoWindow =new BMap.InfoWindow(this.description, opts);// 创建信息窗口对象
	// marker.addEventListener("click",function(){
	// map.openInfoWindow(infoWindow,point);
	// });
	// map.enableScrollWheelZoom(true);
	// map.openInfoWindow(infoWindow,point);//开启信息窗口
	}
}
</script>

<!--Add"scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>