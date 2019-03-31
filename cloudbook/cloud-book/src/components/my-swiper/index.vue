<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperdata" :key="index">
        <router-link :to="{name: 'details',params: {id: item.book._id}}" class="swiper-img-wrap">
          <img :src="item.img" :alt="item.img" class="swiper-img"><!--要使用绑定语法 不然这个地址会被当做字符串-->
          <div class="title">
            {{item.title}}
          </div>
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperdata: []
    }
  },
  methods: {
    getswiper () {
      this.$axios.get(this.$api.getswiper).then(res => {
        this.swiperdata = res.data
        // console.log(res, '轮播图')
      })
    }
  },
  created () {
    this.getswiper()
  }
}
</script>

<style scoped lang='scss'>
  @import '@/globalcss/px-to-rem.scss';
  .swiper-img-wrap {
    display: block;
    position: relative;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    .swiper-img {
      height: px-to-rem(400);
      // width: 100%; 放init里面了
    }
    .title {
      padding: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, .3)
    }
  }
  // .swiper-img {
  //   height: px-to-rem(400);
  // }
  // .title {
  //   position: absolute;
  //   background: pink
  // }

</style>
