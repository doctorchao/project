<template>
  <div class="container">
    <ul class="titles">
      <li class="title-item" v-for="(item,index) in titles" :key="index">
        <router-link :to="{name: 'article',params: {id: item._id}}">
          <div class="item">
            {{item.title}}
          </div>
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
      this.$emit('give','目录')
      const id = this.$route.params.id
      this.$axios.get(this.$api.gettitle + id).then(res => {
        this.titles = res.data
        // console.log(res)
      })
    },
    // getbookdata () {// 为目录获取当前书籍标题
    //   const id = this.$route.params.id
    //   this.$axios.get(this.$api.getbook + id).then(res => {
    //     this.bookdata = res.data
    //   })
    // }
  },
  created () {
    this.gettitles()
    // this.getbookdata()
  }
}
</script>

<style scoped lang="scss">
// @import "@/globalcss/px-to-rem.scss";
//   .container {
//     margin: px-to-rem(18)
//   }
.title-item {
  line-height: 40px;
  height: 40px;
  padding-left: 10px;
  border-bottom: 2px solid rgb(216, 214, 214);
  border-radius: 2px;
}
</style>
