<template>
    <div class="newslist">
      <header class="mint-header">
          <div class="mint-header-button is-left">
              <a href="#/" class="router-link-active">
                <button class="mint-button mint-button--default mint-button--normal">
                    <span class="mint-button-icon">
                        <i class="mintui mintui-back"></i>
                    </span> 
                </button>
            </a>
        </div>
        <h1 class="mint-header-title">新闻列表</h1> 
        <div class="mint-header-button is-right">
            <button class="mint-button mint-button--default mint-button--normal">
                <label class="mint-button-text"></label>
            </button>
        </div>
    </header>

        <ul>
            <li v-for="news in newslist" :key="news.id">
                <router-view class="new.title"></router-view>
                    <img :src="news.img_url" alt="">
                    <div class="mint-body">
                        <span>{{news.title}}</span>
                        <p class="left">点击率：{{news.click}}</p>
                        <p class="right">发表时间：{{news.add_time}}</p>
                    </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.$axios.get("getnewslist").then(res => {
      this.newslist = res.data.message;
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
.newslist {
    width: 100%;
    height:90%;
    overflow: hidden;
    /* margin-top:40px; */
}
ul {
    padding: 0px 10px;
}
li {
    width: 100%;
    height:10%;
    overflow: hidden;
    border-bottom:1px solid #ccc;
    margin:10px;
}
li img {
    width: 20%;
    height:80%;
}
.mint-body {
    margin:0;
    padding:0;
    width: 75%;
    float:right;
    height: 100%;
    overflow: hidden;
}
.mint-body span{
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
    height:50%;
}
.mint-body .left {
    float: left;
    width: 27%;
    height:100%;
    color: blue;
    font-weight: bold;
}
.mint-body .right {
    float: right;
    width: 60%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: blue;
    font-weight: bold;
}
</style>
