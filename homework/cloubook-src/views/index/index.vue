<template>
  <div class="container">
    <MySwiper />
  </div>
</template>

<script>
  import MySwiper from '@/components/my-swiper'
  export default {
    components:{
      MySwiper,
    }
  }
</script>

<style scoped lang='scss'>
  @import '@/globalcss/px-to-rem.scss';
  .container{
    padding: px-to-rem(18)
  }
</style>