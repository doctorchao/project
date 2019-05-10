<template>
	<div class="container study">
		<div class="study-item" v-for="(item, index) in readlist" :key="index">
			<div class="img-wrap">
				<img :src="item.book.img" alt="">
			</div>
			<div class="book-msg">
				<h2 class="title">
					{{item.book.title}}
				</h2>
				<div class="read-msg">
					书籍{{item.title.index + 1}}/{{item.title.total}}章
				</div>
				<div class="progress-wrap">
					<!-- <div class="progress-item"> -->
						<qlprogress :value ='item.title.index + 1' :total ='item.title.total'></qlprogress>
					<!-- </div> -->
					<div>已看{{((item.title.index + 1)/(item.title.total)).toFixed(3)* 100}}%</div>
				</div>
				<div class="prev-read-wrap">
					<div class="prev-read">
						上次查看  <span class="prev-read-msg">{{item.title.title}}</span>
					</div>
					<!-- <div class="prev-read-time">13天前</div> -->
					<qltime :value='item.updateTime'></qltime>
				</div>
				<div class="btn-wrap">
					<Button size='small'>继续阅读</Button>
					<Button size='small'>查看文档</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {Button} from 'mint-ui'
import qlprogress from '@/components/ql-progress'
import qltime from '@/components/ql-time'
export default {
	name: 'index',
	components:{
		Button,
		qlprogress,
		qltime
	},
	data () {
		return {
			readlist:[]
		}
	},
	methods: {
		getreadlist () {
			this.$axios.get(this.$api.getread).then(res => {
				console.log(res)
				console.log(res.data[0].updateTime)
				this.readlist = res.data
			})
		}
	},
	created () {
		document.title = '我的学习'
		this.getreadlist()
	}
}
// eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2E1YmNhNmZiYWI3Mjc0YjRhYjdiZDMiLCJpYXQiOjE1NTQ4Njk2MzgsImV4cCI6MjE1OTY2OTYzOH0.hOrtSA6m-JUAecU52vGOjkD3LHSqF3fxEkV_wd70RhP_s-brAUKg14k739Xf61-F
</script>

<style scoped lang='scss'>
@import './index.scss'
</style>
