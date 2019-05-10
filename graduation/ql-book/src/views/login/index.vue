<template>
<div class="container">
	<div class="top-box">
		<div class="top-item">
			<i class="iconfont iconbook" slot="icon"></i>
		</div>
	</div>
	<div class="login">
		<ul>
			<li>
				<i class="iconfont icongerenzhongxin" slot="icon"></i>
				<Field class="field" placeholder="请输入用户名" v-model="loginmsg.phone"></Field>
			</li>
			<div class="bot-line"></div>
			<li>
				<i class="iconfont" :class="ishide?'iconbukejian':'iconkejian'"
				  slot="icon" @click="ishide = !ishide"></i>
				<Field class="field" placeholder="请输入不少于6位密码"
					:type="ishide?'password':'text'" v-model="loginmsg.password"></Field>
			</li>
			<div class="bot-line"></div>
		</ul>
		<div class="register-box">
			<span class="register" @click="jumpregiste">没有账号？立即注册</span>
		</div>
	</div>
	<div class="btn-login">
		<Button size="large" type="primary" @click="handlelogin">
			立即登录
		</Button>
	</div>
</div>
</template>

<script>
import {Button,Field,Header} from 'mint-ui'
import {Toast} from 'mint-ui'
import validator from 'validator'
export default {
	name:'',
	components: {
		Button,
		Field,
		Header
	},
	data () {
		return {
			ishide: true,
			loginmsg: {
				phone: '',
				password: ''
			}
		}
	},
	methods: {
		jumpregiste () {
			this.$router.push ({
				name: 'register'
			})
		},
		handlelogin () {
			let phonestatus = validator.isMobilePhone(this.loginmsg.phone,'zh-CN')
			let passwordstatus = validator.isLength(this.loginmsg.password,6)
			if(phonestatus&&passwordstatus) {
				this.$axios.post(this.$api.login,this.loginmsg).then(res => {
					console.log(res.code)
					if(res.code == 200) {
						Toast({
							message: '登录成功',
							position:'center',
							duration: 1000
						})
						let token = res.token
						localStorage.setItem('token', token)
						setTimeout(() => {
							this.$router.push('/center')
						},600)
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
					message: '输入格式有误',
					position:'center',
					duration: 1000
				})
			}
		}
	}
}
</script>

<style scoped lang ='scss'>
@import './login.scss'
</style>
