<template>
   <div>
       <!-- 头 -->
       <mt-header ref="header" title="哈喽,初次见面,请多多关照"></mt-header>
       <!-- 中 -->
       <router-view class="tmpl" :appRefs="$refs"></router-view>
       <!-- 底 -->
       <mt-tabbar  ref="footer" v-model="selected">
            <mt-tab-item id="home">
                <img slot="icon" src="../static/img/index.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="member">
                <img slot="icon" src="../static/img/vip.png">
                会员
            </mt-tab-item>
            <mt-tab-item id="shopcart">
                <img slot="icon" src="../static/img/shopcart.png">
                购物车
            </mt-tab-item>
            <mt-tab-item id="search">
                <img slot="icon" src="../static/img/find.png">
                查找
            </mt-tab-item>
        </mt-tabbar>
   </div>
</template>

<script>
export default {
    data() {
        return {
        selected:'',
        }
    },
    watch:{
        selected(newV){
            this.$router.push({
                name:newV,
            })
        }
    }
};
</script>

<style scoped>

    .mint-tabbar {
        position: fixed;
        bottom:0;
    }
</style>
