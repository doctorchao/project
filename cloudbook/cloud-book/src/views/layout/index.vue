<template>
  <div>
    <router-view></router-view>
    <qlTabbar />
  </div>
</template>

<script>
import qlTabbar from '@/components/tab-bar'
export default {
  name: 'ql-layout',
  components: {
    qlTabbar
  }
}
</script>

<style scoped>

</style>
