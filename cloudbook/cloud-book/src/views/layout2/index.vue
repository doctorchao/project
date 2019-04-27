<template>
	<div>
		<Header :doctitle='doctitle'></Header>
		<router-view @give='get'></router-view>
	</div>
</template>

<script>
import Header from '@/components/header-back'
export default {
	name:'',
	components: {
		Header
	},
	data () {
		return {
			doctitle:''
		}
	},
	methods: {
		get(val) {
			this.doctitle = val
		}
	},
}
</script>

<style scoped>

</style>
