<template>
	<div class="container">
		<Loadmore :top-method="loadTop"
              :bottom-method="loadBottom"
              :bottom-all-loaded="allLoaded"
              ref="loadmore">
			<div class="content-item">
				<div class="content-item-row1">
					<h2 class="title">
						{{contentdata.title}}
					</h2>
				</div>
				<div v-for="(item,index) in books" :key="index">
					<router-link :to="{name: 'details',params: {id: item._id}}" class="conten-item-row2">
						<div class="img-wrap">
							<img :src="item.img" :alt="item.img">
						</div>
						<div class="article">
							<div class="article-title">
								{{item.title}}
							</div>
							<div class="article-preview">
								{{item.desc}}
							</div>
							<div class="article-msg">
								<div class="author">
									{{item.author}}
								</div>
								<div class="date">
									{{item.updateTime}}
								</div>
								<div class="looknums">
									{{item.looknums}}喜欢看
								</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</Loadmore>
	</div>
</template>

<script>
import moment from 'moment'
import {Loadmore} from 'mint-ui'
export default {
	name: 'ql-content-item',
	components: {
		Loadmore
	},
  data () {
    return {
			contentdata: {},
			books: [],
			querydata: {
				pn: 1,
				size: 2
			},
			allLoaded: false
    }
  },
  methods: {
    getmuchbooks () {
			return new Promise((reslove) => {
				const typeId = this.$route.params.id
				this.$axios.get(this.$api.getbooks + typeId +'/books',{
					params: this.querydata
				}).then(res => {
					let resdata = res.data
					if (resdata.books.length < this.querydata.size) {
						this.allLoaded = true
					}
					console.log(res)
					resdata.books = resdata.books.map(it => {
							it.updateTime = moment(it.updateTime).format('YYYY年MM月DD日')
							return it
						})
          this.contentdata = resdata
          document.title = this.contentdata.title
					this.books = [...this.books,...resdata.books]
					reslove()
				})
			})
		},
		loadTop () {
      // ...加载更多数据
      this.querydata = {
        pn: 1,
        size: 4
      }
      this.allLoaded = false
      this.getmuchbooks().then(() => {
        this.$refs.loadmore.onTopLoaded()
      })
    },
    loadBottom () {
      this.querydata = {
        pn: this.querydata.pn + 1,
        size: 4
      }
      this.getmuchbooks().then(() => {
        // this.allLoaded = true;// 若数据已全部获取完毕则
        this.$refs.loadmore.onBottomLoaded()
      })
    }
  },
  created () {
    this.getmuchbooks()
  }
}
</script>

<style scoped lang='scss'>
  @import '@/globalcss/px-to-rem.scss';
  .content-item {
    margin-top: 15px;
    .content-item-row1 {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-left: 4px solid #000;
      padding: 4px 0px 4px 10px; // 上 右 下 左
    }
    .conten-item-row2 {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .img-wrap {
        width: px-to-rem(200);
        height: px-to-rem(260);
      }
      .article {
        position: relative;
        margin-left: 10px;
        flex: 1;
        .article-title {
          color: rgb(85, 83, 83);
          font-size: 15px;
          font-weight: 500;
        }
        .article-preview {
          margin-top: 10px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          // line-clamp: 3;
          overflow: hidden;
          font-size: 12px;
          line-height: 1.5;
          color: rgba(122, 130, 136, 0.856)
        }
        .article-msg {
          position: absolute;
          display: flex;
          justify-content: space-between;
          bottom: 0;
          left: 0;
          right: 0;
          font-size: 12px;
          color: skyblue
        }
      }
    }
  }
</style>
