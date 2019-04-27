<template>
	<div class="ql-input">
		<div class="title" v-if="title">
			{{title}}
		</div>
		<input class="input" type="text" :value="value" :placeholder="placeholder"
			@change="handlechange" v-if="type == 'text'">  <!-- 这里用v-moudel会将vuex里的值一起改变-->
		<input class="input" type="password" :value="value" :placeholder="placeholder"
			@change="handlechange" v-if="type == 'password'">  <!-- 这里用v-moudel会将vuex里的值一起改变-->
	</div>
</template>

<script>
export default {
	name:'index',
	props: {
		value: String,
		placeholder: String,
		title: String,
		type:{
			type: String,
			default: 'text'
		}
	},
	methods: {
		handlechange ($event) {
			this.$emit('input',$event.target.value)
			this.$emit('change',$event.target.value)
		}
	}
}
</script>

<style lang='scss' src='./index.scss'>
</style>
