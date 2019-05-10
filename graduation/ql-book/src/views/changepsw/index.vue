<template>
	<div class="container"> <!-- 这里没有渲染使用vux中数据，所以可以用v-model-->
		<qlinput class="ql-input"
			title="原密码:" type="password" v-model="formdata.password" placeholder='请输入原密码'></qlinput>
		<qlinput class="ql-input"
			title="新密码:" type="password" v-model="formdata.changePassword" placeholder='请输入新密码'></qlinput>
		<qlinput class="ql-input"
			title="再次输入:" type="password" v-model="testpassword" placeholder='请再次输入'></qlinput>
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
			username: '',
			formdata: {
				password: '',
				changePassword: ''
			},
			testpassword: ''
		}
	},
	methods: {
		handlesave () {
			if((this.formdata.changePassword == this.testpassword)&&(this.formdata.changePassword != this.formdata.password)) {
				this.$axios.post(this.$api.changepassword,this.formdata).then(res => {
					if(res.code == 200) {
						Toast({
							message: '修改密码成功,请重新登录',
							position:'center',
							duration: 1000
						})
						localStorage.clear()
						this.$store.state.usermsg = {}
						// this.$store.commit('CHANGE_USER_MSG', {})
						// this.getusermsg() 那么也可以在查看个人信息页面也会发送请求刷新信息
						setTimeout(() => {
							this.$router.replace('/login')
						},1000)
					} else {
						Toast({
							message: res.msg,
							position:'center',
							duration: 1000
						})
					}
				})
			} else {
				Toast({
					message: '请确保新密码输入一致且与原密码不同',
					position:'center',
					duration: 1000
				})
			}
		}
	},
	created () {
		this.$emit('give','修改密码')
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

.btn {
	margin-top: 20px;
}
</style>
