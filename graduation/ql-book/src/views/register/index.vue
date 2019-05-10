<template>
	<div class="container">
		<div class="top-box">
			<div class="top-item">
				<i class="iconfont iconbook" slot="icon"></i>
			</div>
		</div>
		<div class="register">
			<ul>
				<li>
					<i class="iconfont icondianhua" slot="icon"></i>
					<Field class="field" placeholder="请输入手机号" type="tel" v-model="postmsg.phone"></Field>
				</li>
				<div class="bot-line"></div>
				<li>
					<i class="iconfont" :class="ishide?'iconbukejian':'iconkejian'"
						slot="icon" @click="ishide = !ishide"></i>
					<Field class="field" placeholder="请输入不少于6位密码"
						:type="ishide?'password':'text'" v-model="postmsg.password"></Field>
				</li>
				<div class="bot-line"></div>
				<li>
					<i class="iconfont iconyanzhengma" slot="icon"></i>
					<Field class="field" disableClear placeholder="请输入6位验证码"
						type="tel" :attr="{maxlength: 6}" v-model="postmsg.code"></Field>
					<Button type="default" size="small" @click="handlecode"
						:disabled="cansendcode">{{btntext}}</Button>
				</li>
				<div class="bot-line"></div>
			</ul>
		</div>
		<div class="btn-register">
			<Button size="large" type="primary" @click="handleregister">
				立即注册
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
			postmsg: {
				phone: '',
				password: '',
				code: ''
			},
			ishide: true,
			num: 10,
			cansendcode: false,
			btntext: '获取验证码',
			issendcode: false
		}
	},
	methods: {
		handleregister () {
			let phonestatus = validator.isMobilePhone(this.postmsg.phone,'zh-CN')
			let passwordstatus = validator.isLength(this.postmsg.password,6)
			if (phonestatus&&passwordstatus&&this.issendcode) {
				this.$axios.post(this.$api.register,this.postmsg).then(res => {
					console.log(res.code)
					if(res.code == 200) {
						setTimeout(() => {
							this.$router.push({
								name:'login'
							})
							// this.$router.push('/login')
						}, 1000)
						Toast({
							message: res.msg,
							position:'center',
							duration: 1000
						})
					} else {
						Toast({
							message: '注册失败，输入有误',
							position:'center',
							duration: 1000
						})
					}
				})
			} else {
				Toast({
					message: '请确保注册信息格式正确',
					position:'center',
					duration: 1000
				})
			}
		},
		handlecode () {
			if(!this.cansendcode) {
				this.cansendcode = true
				this.issendcode = true
				let phonenum = validator.isMobilePhone(this.postmsg.phone)
				if (phonenum) {
					this.$axios.post(this.$api.sendcode,{phone: this.postmsg.phone}).then(res => {
						Toast({
							message: res.msg,
							position:'center',
							duration: 1000
						})
					})
					let timer = setInterval(() => {
						this.num--
						this.btntext = `再次获取${this.num}s`
						if(this.num == 0) {
							clearInterval(timer)
							this.num = 10
							this.btntext = '获取验证码'
							this.cansendcode = false
						}
					}, 1000);
				} else {
					Toast({
						message: '请正确输入手机号',
						position:'center',
						duration: 1000
					})
					this.cansendcode = false
				}
			}
		}
	}
}
</script>

<style scoped lang ='scss'>
@import './register.scss'
</style>

