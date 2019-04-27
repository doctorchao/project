<template>
<div class="ql-progress-wrap">
	<div class="progress-child" :style="{width}"></div>
</div>
</template>

<script>
export default {
	name:'index',
	props: {
		value: Number,
		total: Number
	},
	data () {
		return {
			width: 0
		}
	},
	methods: {
		translate () {
			this.width = this.value/this.total * 100 +'%'
		}
	},
	created () {
		setTimeout(()=> {
			this.translate()
		},300)
	},
	watch: {
		value () {
			this.translate()
		},
		total () {
			this.translate()
		}
	}
}
</script>

<style scoped lang='scss'>
@import '@/globalcss/px-to-rem.scss';
.ql-progress-wrap {
	// position: relative;
	background: rgb(223, 214, 214);
	height: 5px;
	width: px-to-rem(360);
	border-radius: 5px;
	
	.progress-child {
		// position: absolute;
		height: 100%;
		width: 0;
		background: skyblue;
		// transition: all ease 0.8s;
		transition: width ease 0.8s;
		left: 0;
	}
}
</style>
