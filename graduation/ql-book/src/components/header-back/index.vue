<template>
	<div class="header">
		<Header class="header-back" fixed :title="this.doctitle">
			<router-link to="" slot="left">
				<Button @click="$router.back()">
					<i class="iconfont iconBackwardarrowsmall"></i>
					<span class="back-word">返回</span>
				</Button>
			</router-link>
		</Header>
	</div>
</template>

<script>
import {Header, Button} from 'mint-ui'
export default {
	props: {
		doctitle: String
	},
	name:'index',
	components: {
		Header,
		Button
	},
}
</script>

<style scoped lang='scss'>
@import '@/globalcss/px-to-rem.scss';
.header {
	margin-bottom: px-to-rem(100);
	.header-back {
		// background: white;
		// color: rgb(38, 148, 238);
		color: white;
		i {
			font-size: 20px;
			// color: rgb(38, 148, 238)
		}
	}
	.back-word {
		font-size: 16px
	}
}
</style>
