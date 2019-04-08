<template>
  <div class="container">
    <Header class="header-back">
      <router-link :to="{name: 'details', params: {id: this.$route.params.id}}" slot="left">
        <Button>
          <i class="iconfont iconBackwardarrowsmall"></i>
        </Button>
      </router-link>
    </Header>
    <ul class="titles">
      <li class="title-item" v-for="(item,index) in titles" :key="index">
        <router-link :to="{name: 'article',params: {id: item._id}}">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Header} from 'mint-ui'
export default {
  name: 'ql-titles',
  data () {
    return {
      titles: []
    }
  },
  components: {
    Header
  },
  methods: {
    gettitles () {
      const id = this.$route.params.id
      this.$axios.get(this.$api.gettitle + id).then(res => {
        this.titles = res.data
      })
    },
    getbookdata () {
      const id = this.$route.params.id
      this.$axios.get(this.$api.getbook + id).then(res => {
        this.bookdata = res.data
      })
    }
  },
  created () {
    this.gettitles()
    this.getbookdata()
  }
}
</script>

<style scoped lang="scss">
// @import "@/globalcss/px-to-rem.scss";
//   .container {
//     margin: px-to-rem(18)
//   }
.header-back {
    background: white;
    color: rgb(38, 148, 238);
	i {
        font-size: 20px;
        color: rgb(38, 148, 238)
	}
}
.title-item {
  line-height: 30px;
  height: 30px;
  padding-left: 20px;
  border-bottom: 2px solid rgb(216, 214, 214);
  border-radius: 2px;
}
</style>
