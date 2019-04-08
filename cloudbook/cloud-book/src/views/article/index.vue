<template>
  <div class="container">
    <Header class="header-back">
      <router-link :to="{name: 'titles', params: {id: this.bookId}}" slot="left">
        <Button>
          <i class="iconfont iconBackwardarrowsmall"></i>
        </Button>
      </router-link>
    </Header>
    <div class="content markdown" v-html="html"
        :style="{fontSize: fontSize + 'px'}"></div>
    <div class="btns">
      <i class="iconfont iconhoutui" slot="icon" @click="handlejump('prev')"></i>
      <i class="iconfont iconmulu" slot="icon" @click="showtitles"></i>
      <i class="iconfont iconWord-add" slot="icon" @click="handleadd"></i>
      <i class="iconfont iconWord-minus" slot="icon" @click="handlereduce"></i>
      <i class="iconfont iconqianjin" slot="icon" @click="handlejump('next')"></i>
    </div>
    <div class="title-wrap" v-show="isshow" @click="hidetitles">
      <transition name='slide'>
        <ul class="titles" v-show="isactive" @click.stop>
          <li v-for="(item,index) in titles" :key="index" class="title-item" @click="handlejump(item._id)">
            {{item.title}}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import Showdown from 'showdown'
import {Toast, Header} from 'mint-ui'
export default {
  props: {
    options: Object
  },
  name: 'ql-article',
  data () {
    return {
      article: {},
      html: '',
      fontSize: 40,
      titles: [],
      index: -1,
      isshow: false,
      isactive: false,
      bookId: ''
    }
  },
  components: {
    Header
  },
  methods: {
    getarticle (itemid) {
      return new Promise((reslove) => {
        const id = itemid ? itemid : this.$route.params.id
        this.$axios.get(this.$api.getarticle + id).then(res => {
          // console.log(res)
          const converter = new Showdown.Converter()
          this.html = converter.makeHtml(res.data.article.content)
          this.article = res.data
          this.bookId = res.data.article.bookId
          document.title = res.data.title
          console.log(res)
          this.index = res.data.article.index
          reslove()
        })
      })
    },
    handle () {
      console.log('我爱豆沙包')
    },
    //5be2ce07522f254167830e16
    handleadd () {
      if (this.fontSize >= 74) {
        Toast({
          message: '啊！我的眼睛！',
          position: 'center',
          duration: 1000
        })
      } else {
        this.fontSize += 4
      }
    },
    handlereduce () {
      if (this.fontSize <= 42) {
        Toast({
          message: '招子够亮啊！？',
          position: 'center',
          duration: 1000
        })
      } else {
        this.fontSize -= 4
      }
    },
    gettitles () { // 得先拿到文章内容再能拿目录 所以要一个promise
      const id = this.article.article.bookId
      this.$axios.get(this.$api.gettitle + id).then(res => {
        this.titles = res.data
      })
    },
    handlejump (isprev) { // 传参式调用
      const _this = this
      function getarticleByIndex () {
        const item = _this.titles.find(item => item.index === _this.index)
        const id = item._id
        _this.getarticle(id)
        _this.$router.push({
          name: 'article',
          params: {
            id
          }
        })
      }
      if (isprev === 'prev') {
        if (this.index === 0) {
          Toast({
            message: '你要去山顶洞吗？',
            position: 'center',
            duration: 1000
          })
        } else {
          this.index--
          getarticleByIndex()
        }
      } else if(isprev == 'next') {
        if (this.index === this.titles.length - 1) {
          Toast({
            message: '没了！没了！ 走走走！',
            position: 'center',
            duration: 1000
          })
        } else {
          this.index++
          getarticleByIndex()
        }
      } else {
        const itemid = isprev
        console.log(itemid)
        this.getarticle(itemid)
        this.hidetitles()
      }
    },
    showtitles () {
      this.isshow = true
      this.isactive = true
    },
    hidetitles () {
      this.isactive = false
      setTimeout(() => {
        this.isshow = false
      }, 500)
    }
  },
  created () {
    this.getarticle().then(() => [
      this.gettitles()
    ])
  }
}
</script>

<style scoped lang="scss">
@import '@/globalcss/px-to-rem.scss';
.container {
  padding-bottom: px-to-rem(90)
}
.header-back {
  background: white;
  color: rgb(38, 148, 238);
	i {
    font-size: 20px;
    color: rgb(38, 148, 238)
	}
}
.btns {
  padding: px-to-rem(20);
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(223, 221, 221);
  .iconfont {
    flex: 1;
    font-size: px-to-rem(50);
    text-align: center;
  }
}
.title-wrap {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,.5);
  .titles {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    color: rgb(83, 81, 81);
    background: white;
    width: 70%;
    height: 100%;
    overflow: auto;
    .title-item {
      padding: 20px;
      border-bottom: 1px solid #eee;
    }
  }
  .slide-enter, .slide-leave-to {
    transform: translate3d(-100%,0,0)
  }
  .slide-enter-active, .slide-leave-active{
    transition: transform ease 0.5s
  }
}
</style>

<style lang="scss">
@import './markdown.scss'
</style>
