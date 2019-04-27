<template>
  <div class="container">
    <div class="header">
      <h1>网站的标题</h1>
    </div>
    <div class="router-view-wrap">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    <div class="aside">
      <ul>
        <li><router-link to="/layout/list">列表页</router-link></li>
        <li><router-link to="/layout/article">详情页</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name:'layout',
    }
</script>

<style scoped>
  .header {
    margin-left: 200px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #000;
    text-align: center;
  }

  .aside {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: skyblue;
    width: 200px;
  }
  li {
    line-height: 60px;
    height: 50px;
    border-bottom: 1px solid #888;
    text-align: center;
  }
  .router-view-wrap {
    height: 500px;
    background: #f00;
    margin-left: 200px;
  }

  .fade-enter-active{
    transition: all ease 3s;
  }
  .fade-enter {
    opacity: 0;
  }
</style>