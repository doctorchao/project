<template>
	<div class="container">
		<div class="change-msg" v-if="usermsg.user">
			<ul class="tabs-items">
				<qlupload class="qlupload" @success='changeavatar'>
					<li class="tabs-item">
						<div>
							头像
						</div>
						<div class="tabs-avator item">
							<img :src="usermsg.user.avatar||ningque" alt="">
							<i class="iconfont iconqianjin"></i>
						</div>
					</li>
				</qlupload>
				<router-link to='/changename'>
					<li>
						<div>
							昵称
						</div>
						<div class="tabs-name item">
							<div>
								{{usermsg.user.username||'18332780127'}}
							</div>
							<i class="iconfont iconqianjin"></i>
						</div>
					</li>
				</router-link>
				<router-link to='/changedesc'>
					<li>
						<div>
							个性签名
						</div>
						<div class="tabs-desc item">
							<div class="desc-content">
								{{usermsg.user.desc||'我爱的人呐,你是否还在天涯'}}
							</div>
							<i class="iconfont iconqianjin"></i>
						</div>
					</li>
				</router-link>
				<router-link to='/changepsw'>
					<li>
						<div>
							修改密码
						</div>
						<div class="tabs-password item">
							<i class="iconfont iconqianjin"></i>
						</div>
					</li>
				</router-link>
      </ul>
		</div>
		<div class="nologin" v-else>
			<div>请先登录</div>
			<i class="iconfont iconicon-test-copy"></i>
		</div>
	</div>
</template>

<script>
import {Header,Toast} from 'mint-ui'
import ningque from '@/assets/head.jpg'
import qlupload from '@/components/ql-upload'
export default {
	name:'ql-information',
	components: {
		Header,
		qlupload
	},
	data () {
		return {
			ningque
		}
	},
	methods: {
		changeavatar (url) {
			console.log(url)
			this.$axios.put(this.$api.changeuser,{avatar: url}).then(res => {
				if(res.code == 200) {
					Toast({
						message: '修改成功',
						position:'center',
						duration: 1000
					})
					this.$store.dispatch('getusermsg')
				}
			})
		}
	},
	computed: {
    usermsg () {
      return this.$store.state.usermsg
    }
	},
	created () {
		this.$emit('give','个人信息')
	}
}
// 15869937451
</script>

<style scoped lang='scss'>
@import './information.scss';
</style>
