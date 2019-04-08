<template>
	<div class="container">
		<Header class="header-back" fixed title="修改个人信息">
			<router-link to="" slot="left">
				<Button @click="$router.back()">
				<i class="iconfont iconBackwardarrowsmall"></i>
				</Button>
			</router-link>
		</Header>
		<div class="change-msg">
			<ul class="tabs-items">
        <li class="tabs-item">
          <div>
            头像
          </div>
					<div class="tabs-avator item">
						<img :src="usermsg.user.avatar||ningque" alt="">
						<i class="iconfont iconqianjin"></i>
					</div>
        </li>
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
        <li>
          <div>
            个性签名
          </div>
          <div class="tabs-desc item">
						<div>
							{{usermsg.user.desc||'我爱的人呐,你是否还在天涯'}}
						</div>
						<i class="iconfont iconqianjin"></i>
					</div>
        </li>
        <li>
          <div>
            修改密码
          </div>
          <div class="tabs-password item">
						<i class="iconfont iconqianjin"></i>
					</div>
        </li>
      </ul>
		</div>
	</div>
</template>

<script>
import {Header} from 'mint-ui'
import ningque from '@/assets/head.jpg'
export default {
	name:'ql-information',
	components: {
		Header
	},
	data () {
		return {
			ningque
		}
	},
	computed: {
    usermsg () {
      return this.$store.state.usermsg
    }
  }
}
</script>

<style scoped lang='scss'>
@import './information.scss';
</style>
