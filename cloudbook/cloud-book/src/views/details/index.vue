<template>
  <div class="container">
    <Header class="header-back">
      <router-link :to="{name: 'index'}" slot="left">
        <Button>
          <i class="iconfont iconBackwardarrowsmall"></i>
        </Button>
      </router-link>
    </Header>
    <div class="book"><!-- 书籍概要-->
      <div class="book-left">
        <img :src="bookdata.img" :alt="bookdata.img" class="img">
      </div>
      <div class="book-right">
        <h2 class="title">
          {{bookdata.title}}
        </h2>
        <div class="book-msg">
          <div class="author">
          {{bookdata.author}}
          </div>
          <div class="looknums">
          {{bookdata.looknums}} 个宝宝在瞅
          </div>
          <div class="startsnums">
          {{bookdata.startsnums}} 个宝宝喜欢
          </div>
        </div>
      </div>
    </div>
    <div class="btns"><!--选项卡-->
      <Button size='small' @click="handlecollection">{{iscollection}}</Button>
      <Button size='small'>分享好友</Button>
    </div>
    <div class="line"></div>
    <div class="title1">
      {{bookdata.title}}
    </div>
    <div class="desc">
      {{bookdata.desc}}
    </div>
    <div class="show-titles">
      <div>
        <span class="title2" @click="handlejump">查看目录</span>
        <span>共{{totaltitles}}章</span>
      </div>
      <div class="date">
        {{bookdata.updateTime}}
      </div>
    </div>
    <div class="line"></div>
    <div class="readbook">
      <Button type="primary" size="large" @click="handlejump">阅读该书籍</Button>
    </div>
  </div>
</template>

<script>
import { Button, Toast, Header } from 'mint-ui'
import moment from 'moment'
export default {
  name: 'ql-details',
  components: {
    Button,
    Header
  },
  data () {
    return {
      bookdata: [],
      totaltitles: 0,
      iscollection: '加入收藏',
    }
  },
  methods: {
    getbookdata () {
      const id = this.$route.params.id
      this.$axios.get(this.$api.getbook + id).then(res => {
        let resData = res.data
        resData.updateTime = moment(resData.updateTime).format('YYYY年M月D日')
        this.bookdata = resData
        this.totaltitles = res.length
        document.title = this.bookdata.title
      })
    },
    handlejump () {
      this.$router.push({
        name: 'titles',
        params: {
          id: this.bookdata._id
        }
      })
    },
    handlecollection () {
      const bookid = this.$route.params.id
      this.$axios.post(this.$api.collection, bookid).then(res => {
        console.log(res.code)
        Toast({
          message: res.msg,
          position: 'center',
          duration: 1000
        })
      })
    }
  },
  beforeCreate () {
    document.title = '书籍详情'
  },
  created () {
    this.getbookdata()
  }
}
</script>

<style scoped lang='scss'>
  @import '@/globalcss/px-to-rem.scss';
  // .container {
  //   padding: px-to-rem(20);
  //   padding-bottom: 52px;
  // }
.header-back {
  background: white;
  color: rgb(38, 148, 238);
  margin-bottom: 5px;
  i {
    font-size: 20px;
  }
}
.book {
  display: flex;
  justify-content: space-between;
  .book-left {
    width: px-to-rem(200);
    height: px-to-rem(266);
    box-shadow: 0 0 2px 2px rgba(0,0,0, .5);
  }
  .book-right {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
  }
  .title {
    font-size: 16px;
    font-weight: 500
  }
  .book-msg {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    flex: 1;
    margin-top: 25px;
    color: rgb(250, 168, 182)
  }
}
.btns {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  /deep/ .mint-button--small {// 深度选择器
    font-size: 12px;
    color: rgb(29, 80, 33);
    width: px-to-rem(200);
  }
}
.line {
  height: 7px;
  border-radius: 2px;
  background: rgb(160, 148, 148);
  margin-top: 30px;
}
.title1 {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-top: 20px;
}
.desc {
  margin-top: 16px;
  font-size: 12px;
  line-height: 2;
  color: #333;
}
.show-titles {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .title2 {
    font-size: 16px;
    font-weight: 700;
    color: #333;
    span {
      font-size: 12px;
      margin-left: 20px;
    }
  }
  .date {
    font-size: 12px;
    color: #555;
  }
}
.readbook {
  margin-top: 40px;
  // position: fixed;
  // bottom: 10px;
  left: 0;
  right: 0;
  padding: 0 px-to-rem(50);
  /deep/ .mint-button--large {
    font-size: 16px;
  }
}
</style>
