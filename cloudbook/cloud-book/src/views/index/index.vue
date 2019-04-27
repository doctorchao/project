<template>
  <div class="container">
    <Loadmore :top-method="loadTop"
              :bottom-method="loadBottom"
              :bottom-all-loaded="allLoaded"
              ref="loadmore">
      <Myswiper />
      <div class="content">
          <Contentitem v-for="(item,index) in contentdata" :options="item" :key="index"></Contentitem>
      </div>
    </Loadmore>
  </div>
</template>

<script>
import Myswiper from '@/components/my-swiper'// 引入轮播图
import Contentitem from './components/content-item'// 引入分类图书
import moment from 'moment'// 引入moment时间处理
import { Loadmore, Toast } from 'mint-ui' // 第三步的 引入loadmore 上下拉刷新
export default {
  name: 'ql-index',
  components: {
    Myswiper,
    Contentitem,
    Loadmore,
    Toast
  },
  data () {
    return {
      contentdata: [],
      querydata: {
        pn: 1,
        booksSize: 2, // 在一个分类中选取多少本书    2
        size: 2// 取多少个分类
      },
      allLoaded: false
    }
  },
  methods: {
    getcontent () {
      return new Promise((resolve) => {
        this.$axios.get(this.$api.getcontent, {
          // params:{
          //   booksSize: "3", //在分类中选取多少本书    1
          //   size: "5"// 取多少个分类
          // }
          params: this.querydata
        }).then(res => {
          let resData = res.data
          console.log(res)
          if (resData.length < this.querydata.size) {
            Toast({
              message: '分类书籍加载完毕',
              position:'center',
              duration: 1000
            })
          }
          resData = resData.map(item => {
            item.books = item.books.map(it => {
              it.updateTime = moment(it.updateTime).format('YYYY年MM月DD日')
              return it
            })
            return item
          })
          // this.contentdata = resData
          // console.log(res, '分类图书')
          // this.contentdata = [].concat(this.contentdata,resData) es5
          this.contentdata = [...this.contentdata, ...resData] //  es6
          resolve()
        })
      })
    },
    loadTop () {
      console.log('我是顶部下拉加载')
      // ...加载更多数据
      this.querydata = {
        pn: this.querydata.pn + 1,
        booksSize: 2,
        size: 2
      }
      // this.allLoaded = true
      this.getcontent().then(() => {
        this.$refs.loadmore.onTopLoaded()
      })
    },
    loadBottom () {
    //     console.log('我是底部上拉加载')
    //     this.querydata = {
    //       pn: this.querydata.pn + 1,
    //       booksSize: 2,
    //       size: 1
    //     }
    //     this.allLoaded = false;
    //     this.getcontent().then(() => {
    //       this.$refs.loadmore.onBottomLoaded()
    //     })
    }
  },
  created () {
    this.getcontent()
  }
}
</script>

<style scoped lang='scss'>
  @import '@/globalcss/px-to-rem.scss';
  .container {
    // padding: px-to-rem(18); // 0.24rem
    margin-bottom: px-to-rem(100)
  }
</style>
