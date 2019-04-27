<template>
    <div>
        <h1>我是page2 蒋林芝</h1>
        <router-Link to="/">找周青蓉</router-Link>
        <router-Link to="/page2/123">测试钩子</router-Link>
        <router-Link to="/layout/page1">layout找周青蓉</router-Link>
    </div>
</template>

<script>
export default {
  name: '',
  created () { // 只执行一次的钩子 组件就地复用 当要发ajax请求数据时就不好了 用watch
    console.log(this.$route.params, 'created钩子')
  },
  watch: {
    $route (next, pre) {
      console.log(pre, '出发路由信息')
      console.log(next, '跳转路由信息')
    }
  }
}
</script>

<style scoped>

</style>
