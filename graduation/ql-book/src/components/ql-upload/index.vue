<template>
	<div>
		<label class="ql-upload-wrap">
			<input type="file" class="ql-upload-input" @change="change">
			<!-- <div class="ql-upload-btn">点击选择文件</div> -->
			<slot></slot>
		</label>
	</div>
</template>

<script>
// import axios from 'axios'
export default {
	name:'index',
	data () {
		return {
			token: ''
		}
	},
	methods: {
		gettoken () {
			this.$axios.get(this.$api.upload).then(res => {
				this.token = res.data.token
			})
		},
		change ($event) {
			const file = $event.target.files[0]
			var form = new FormData()
			form.append('file',file)
			form.append('token',this.token)
			this.$axios.post('http://upload-z1.qiniup.com',form).then(res => {
				console.log(res)
				this.$emit('success',res.url)
			})
		}
	},
	created () {
		this.gettoken()
	}
}
</script>

<style lang='scss'>
.ql-upload-wrap {
	display: block;
	.ql-upload-input {
		display: none
	}
	.ql-upload-btn {
		width: 100px;
		height: 40px;
		border: 1px solid #000;
		text-align: center;
		line-height: 40px;
		color: pink;
	}
}
</style>
