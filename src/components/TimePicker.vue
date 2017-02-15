<template>
	<el-row>
		<el-input class="tp-input" placeholder="请选择时间" v-model="currentTime"></el-input>
		<div class="inputCover" @click="openPicker"></div>
		<div class="timepicker" @click.self="closePicker" v-show="showPicker">
			<div class="tp-body">
				<div class="tp-box">
					<el-row class="tp-header">
						<!-- <i class="el-icon-arrow-left"></i> -->
						<p>{{selectedDate}}</p>
						<!-- <i class="el-icon-arrow-right"></i> -->
					</el-row>
					<el-row class="tp-contain">
						<el-col :span="4" v-for="(item, index) in times">
						<div class="time" :class="{disabled: item.disabled, active: index == activeIndex}" @click.stop="chooseTime(item, index)">{{item.time}}</div>
						</el-col>
					</el-row>
					<el-row class="tp-footer">
						<el-button type="primary" @click.stop="confirm">确定</el-button>
					</el-row>
				</div>
			</div>
		</div>
	</el-row>
</template>

<script>

export default {
	props: ['selectedDate'],
	components: {

	},
	data() {
		return {
			times: [],
			activeIndex: null,
			currentTime: '',
			showPicker: false
		}
		},
		methods: {
		openPicker() {
			this.showPicker = true
		},
		closePicker() {
			this.showPicker = false
		},
		chooseTime(item, index) {
			if(!item.disabled) {
			this.activeIndex = index
			this.currentTime = item.time
			}
		},
		confirm() {
			this.showPicker = false
			this.$emit('timeSelect', this.currentTime)
		},
		setTimes() {
			this.times = []
			var hour = 8
			var min = 0
			for(let i = 1; i <= 22; i++) {
				if(i%2) {
					min = 30
				} else {
					hour++
					min = 0
				}
				if((hour + '').length == 1) {
					hour = '0' + hour;
				}
				hour = hour + ''

				if(!min) {
					min = '0' + min
				}
				min = min + '';



				var time = hour + ':' + min
				this.times.push({
					time: time,
					disabled: false
				})
			}
		},
		disabledTime(time) {
			function compareTo(currentTime, selectTime) {
		        var beginTime = currentTime;
		        var endTime = selectTime;
		        console.log(beginTime)
		        console.log(endTime)
		        var beginTimes = beginTime.substring(0,10).split('-');  
		        var endTimes   =  endTime.substring(0,10).split('-');  
		          
		        beginTime = beginTimes[1]+'-'+beginTimes[2]+'-'+beginTimes[0]+' '+beginTime.substring(10,19);  
		        endTime    = endTimes[1]+'-'+endTimes[2]+'-'+endTimes[0]+' '+endTime.substring(10,19);  
		        console.log(beginTime);  
		        console.log(endTime);  
		        var a =(Date.parse(endTime)-Date.parse(beginTime))/3600/1000;  
		        alert(a);  
		        if(a<0){  
		            // alert("endTime小!");  
		            return false;
		        }else if (a>0){  
		            // alert("endTime大!");  
		            return true;
		        }else if (a==0){  
		            // alert("时间相等!");  
		            return true
		        }  
		    } 
			
			var selectedTime = this.selectedDate + ' ' + time;
			var currentTime = '';

			var now = new Date();
			var year = now.getFullYear();
			var month = now.getMonth() + 1;
			var dd = now.getDate();
			var hh = now.getHours();
			var mm = now.getMinutes();

			currentTime = year + month < 10 ? '0'+month : month + dd < 10 ? '0'+dd : dd + hh < 10 ? '0'+hh : hh + mm < 10 ? '0'+mm : mm;

			return compareTo(currentTime, selectedTime);
		}
	},
	watch: {
		selectedDate() {
			console.log('watch')
			this.setTimes()
		}
	},
	mounted() {
		console.log(this.selectedDate)
		this.setTimes()
	}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../assets/css/main.less';

.tp-input {
	.el-input__inner {
		display: inline-block;
		height: .6rem;
		padding: .1rem;
		line-height: .4rem;
		font-size: .28rem;
		color: #000;
		border: 0;
		&::placeholder {
			color: #b1b1b1;
		}
	}
}

.inputCover {
	position: absolute;
	top: .7rem;
	width: 2rem;
	height: .6rem;
	z-index: 9;
}

.timepicker {
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 998;
	top: 0;
	left: 0;
	overflow: hidden;
	background: #666;
	-webkit-animation: fadein 0.5s;
	/* Safari, Chrome and Opera > 12.1 */
	-moz-animation: fadein 0.5s;
	/* Firefox < 16 */
	-ms-animation: fadein 0.5s;
	/* Internet Explorer */
	-o-animation: fadein 0.5s;
	/* Opera < 12.1 */
	animation: fadein 0.5s;
	.tp-body {
	display: inline-block;
	background: #3F51B5;
	overflow: hidden;
	position: relative;
	font-size: .16rem;
	font-family: 'Roboto';
	font-weight: 400;
	position: fixed;
	display: block;
	width: 5.6rem;
	max-width: 100%;
	z-index: 999;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
	}
	.tp-box {
	background: #fff;
	width: 100%;
	display: inline-block;
	box-sizing: border-box !important;
	-moz-box-sizing: border-box !important;
	-webkit-box-sizing: border-box !important;
	-ms-box-sizing: border-box !important;
	width: 5.6rem;
	height: 7.4rem;
	max-width: 100%;
	text-align: start!important;
	.tp-header {
		height: .86rem;
		font-size: .28rem;
		line-height: .86rem;
		text-align: center;
		border-bottom: 1px solid @base-line;
		.float-left {
		float: left;
		}
		.float-right {
		float: right;
		}
		i {
		margin: 0 .2rem;
		}
	}
	.tp-contain {
		padding: .5rem 0;
		.time {
		margin: .1rem auto;
		width: .66rem;
		height: .66rem;
		background-color: #fff;
		border-radius: 50%;
		text-align: center;
		line-height: .66rem;
		font-size: .2rem;
		font-family: @fm-light;
		&.disabled {
			background-color: @base-grey;
		}
		&.active {
			background-color: @main-color;
			color: #fff;
		}
		}
	}
	.tp-footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		.el-button {
		width: 100%;
		height: .76rem;
		}
	}
	}
}
@keyframes fadein {
	from {
	opacity: 0;
	}
	to {
	opacity: 1;
	}
}
/* Firefox < 16 */
@-moz-keyframes fadein {
	from {
	opacity: 0;
	}
	to {
	opacity: 1;
	}
}
/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
	from {
	opacity: 0;
	}
	to {
	opacity: 1;
	}
}
/* Internet Explorer */
@-ms-keyframes fadein {
	from {
	opacity: 0;
	}
	to {
	opacity: 1;
	}
}
/* Opera < 12.1 */
@-o-keyframes fadein {
	from {
	opacity: 0;
	}
	to {
	opacity: 1;
	}
}
</style>