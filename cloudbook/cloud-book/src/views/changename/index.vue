<template>
	<div class="container">
		<qlinput class="ql-input" :value="usermsg.username||usermsg.phone"
			@change="handlechange" placeholder='请输入新昵称'></qlinput>
		<div class="desc">
			二狗！还不改名！
		</div>
		<div class="btn-wrap">
			<Button class="btn" type="primary" size='large' @click="handlesave">确认更改</Button>
		</div>
	</div>
</template>

<script>
import {Header, Button, Toast} from 'mint-ui'
import qlinput from '@/components/ql-input'
import mapState from 'vuex'
export default {
	name:'index',
	components: {
		Header,
		qlinput,
		Button
	},
	data () {
		return {
			username: ''
		}
	},
	methods: {
		handlechange (val) {
			this.username = val
		},
		handlesave () {
			this.$axios.put(this.$api.changeuser,{username:this.username}).then(res => {
				if(res.code == 200) {
					Toast({
						message: '修改成功',
						position:'center',
						duration: 1000
					})
					// this.getusermsg() 那么在查看个人信息页面也会发送请求刷新信息
					setTimeout(() => {
						this.$router.push('/center')
					},1000)
				}
			})
		}
	},
	created () {
		this.$emit('give','修改昵称')
	},
	computed: {
		usermsg () {
			return this.$store.state.usermsg.user
		}
	}
	// computed: {
	// 	...mapState(['usermsg']) // 这个函数返回一个对象，不展开的话computed下面只能写它一个
	//  ...mapState(['getusermsg']) 
	// }
}
</script>

<style lang='scss'>
@import '@/globalcss/px-to-rem.scss';
.desc {
	width: 300px;
	height: 20px;
	line-height: 20px;
	color: rgb(250, 46, 46)
}
.btn {
	margin-top: 20px;
}
</style>
