<template>
	<div>
		{{currenttext}}
	</div>
</template>

<script>
export default {
	name:'index',
	props: {
		value: [String, Number]
	},
	data () {
		return {
			currenttext: '',
			currentdate: new Date(),
			olddate: null
		}
	},
	methods: {
		handlecomputed () {
			const valuedate = new Date (this.value)
			this.olddate = new Date (valuedate)
			const oldtime = this.olddate.getTime() // 获取服务器所给Unix时间戳
			const currenttime = this.currentdate.getTime() // 获取本地实时Unix时间戳
			const reducetime = currenttime - oldtime // 获取本地实时Unix时间戳
			const time = new Date()
			time.setHours(0)
			time.setMinutes(0)
			time.setSeconds(0)
			time.setMilliseconds(0)
			const zerotime = time.getTime()
			// 小于一小时 显示多少分钟前
			// 小于一天 显示多少小时前
			// 小于一个月 显示多少天前
			// 小于一年 显示多少个月前
			if ((reducetime/(1000*60*60)<1) && (zerotime-oldtime <= 0)) {
				this.currenttext = `${Math.round(reducetime/(1000*60))} 分钟前`
			} else if ((reducetime/(1000*60*60) >= 1)&&(zerotime-oldtime <= 0)){
				this.currenttext = `${Math.round(reducetime/(1000*60*60))} 小时前`
			} else if (zerotime-oldtime > 0) {
				this.currenttext = `${Math.ceil(((zerotime-oldtime)/(1000*60*60))/24)} 天前`
			} else if ((reducetime/(1000*60*60*24))/30 > 1) {
				this.currenttext = `${Math.ceil((reducetime/(1000*60*60*24*30)))} 月前`
			}
		}
	},
	watch: {
		// value (val) { // 藏得比较深 得换个方式
		// 	if (val) {
		// 		console.log('123')
		// 		this.handlecomputed()
		// 	}
		// }
		value: {
			deep: true,
			immediate: true,
			handler (val) {
				if (val) {
					this.handlecomputed()
				}
			}
		}
	},
	// created () {
	// 	this.handlecomputed()
	// },
	// computed: {
	// 	currentdate () {
	// 		return new Date()
	// 	}
	// }

}
</script>

<style scoped>
	
</style>
