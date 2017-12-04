<template>
    <div class="newslist">
      <div class="mint-header">
          <div class="mint-header-button is-left">
              <a href="#/" class="router-link-active">
                <button class="mint-button mint-button--default mint-button--normal">
                    <span class="mint-button-icon">
                        <i class="mintui mintui-back"></i>
                    </span> 
                </button>
            </a>
            </div>
        <h1 class="mint-header-title">新闻详情</h1> 
        <div class="mint-header-button is-right">
            <button class="mint-button mint-button--default mint-button--normal">
                <label class="mint-button-text"></label>
            </button>
        </div>  
        </div>

         <div class="news-title">
            <p v-text="newsInfo.title"></p>
                <div>
                    <span>{{newsInfo.click}}次点击</span>
                    <span>分类：民生经济</span>
                    <span>添加事件{{newsInfo.add_time}}</span>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newsInfo: {},
      title:'新闻详情',
    };
  },
  created() {
      let newsId = this.$route.query.newsId;
     this.$axios.get('getnew/'+newsId)
    .then(res => {
      this.newsInfo = res.data.message[0];
      console.log(res);
    });
  }
};
</script>

<style scoped>
.mint-header {
  background-color: #ccc;
}
.mintui-back {
  color: blue;
  font-weight: bold;
}
.mint-header-title {
  color: #000;
}
</style>
