<template>
  <div class="content-item">
    <div class="content-item-row1">
      <h2 class="title">
        {{options.title}}
      </h2>
      <router-link :to="{name: 'muchbook', params: {id: options._id}}">更多...</router-link>
    </div>
    <div v-for="(item,index) in options.books" :key="index">
      <router-link :to="{name: 'details',params: {id: item._id}}" class="conten-item-row2">
        <div class="img-wrap">
          <img :src="item.img" :alt="item.img">
        </div>
        <div class="article">
          <div class="article-title">
            {{item.title}}
          </div>
          <div class="article-preview">
            {{item.desc}}
          </div>
          <div class="article-msg">
            <div class="author">
              {{item.author}}
            </div>
            <div class="date">
              {{item.updateTime}}
            </div>
            <div class="looknums">
              {{item.looknums}}喜欢看
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ql-content-item',
  props: {
    options: Object
  },
  created () {
    // console.log(this.options, '被传图书')
  }
}
</script>

<style scoped lang='scss'>
  @import '@/globalcss/px-to-rem.scss';
  .content-item {
    margin-top: 15px;
    .content-item-row1 {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-left: 4px solid #000;
      padding: 4px 0px 4px 10px; // 上 右 下 左
    }
    .conten-item-row2 {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .img-wrap {
        width: px-to-rem(200);
        height: px-to-rem(260);
      }
      .article {
        position: relative;
        margin-left: 10px;
        flex: 1;
        .article-title {
          color: rgb(85, 83, 83);
          font-size: 15px;
          font-weight: 500;
        }
        .article-preview {
          margin-top: 10px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          // line-clamp: 3;
          overflow: hidden;
          font-size: 12px;
          line-height: 1.5;
          color: rgba(122, 130, 136, 0.856)
        }
        .article-msg {
          position: absolute;
          display: flex;
          justify-content: space-between;
          bottom: 0;
          left: 0;
          right: 0;
          font-size: 12px;
          color: skyblue
        }
      }
    }
  }
</style>
