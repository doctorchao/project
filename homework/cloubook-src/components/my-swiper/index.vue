<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperdata" :key="index">
        <router-link :to="{name:'details'}" class="swiper-img-wrap">
          <img :src="item.img" :alt="item.img" class="img-wrap"><!--要使用绑定语法 不然这个地址会被当做字符串-->
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
    components:{
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption:{
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperdata:[]
      }
    },
    methods:{
      getswiper() {
        this.$axios.get(this.$api.getswiper).then(res =>{
          this.swiperdata = res.data;
          console.log(res)
        })
      }
    },
    created() {
      this.getswiper()
    }
  }
</script>

<style scoped>

</style>