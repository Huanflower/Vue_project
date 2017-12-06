//引入资源
import Vue from 'vue';

// 注册全局过滤器开始
import Moment from 'moment';
Vue.filter('convertTime', (value) => {
    return Moment(value).format('YYYY-MM-DD');
});

// 处理title太长的问题
Vue.filter('convetTitle', (value, limit) => {
        if (value.length > limit) {
            return value.substr(0, limit) + '...'
        }
        // 返回原数据
        return value;
    })
    // 注册全局过滤器结束



// 注册全局组件开始
import MyLi from './components/commons/MyLi.vue';
import MyUl from './components/commons/MyUl.vue';
import NavBar from './components/commons/NavBar.vue';
import Comment from './components/commons/Comment.vue';
import MySwipe from './components/commons/MySwipe.vue';
Vue.component(MyLi.name, MyLi);
Vue.component(MyUl.name, MyUl);
Vue.component(NavBar.name, NavBar);
Vue.component(Comment.name, Comment);
Vue.component(MySwipe.name, MySwipe);
// 注册全局组件结束

//路由相关组件 开始
import App from './components/App.vue';
import Home from './components/Home/Home.vue';
import Member from './components/Member/Member.vue';
import Shopcart from './components/Shopcart/Shopcart.vue';
import Search from './components/Search/Search.vue';
import NewsList from './components/News/NewsList.vue';
import NewsDetail from './components/News/NewsDetail.vue';
import PhotoList from './components/Photo/PhotoList.vue';
import PhotoDetail from './components/Photo/PhotoDetail.vue';

import GoodsList from './components/Goods/GoodsList.vue';
import GoodsDetail from './components/Goods/GoodsDetail.vue';
//路由相关组件 结束

//VueRouter 开始
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//VuePreview开始
import VuePreview from 'vue-preview';
Vue.use(VuePreview);


let router = new VueRouter();
router.addRoutes([
    //重定向 到首页
    { path: '/', redirect: { name: 'home' } },

    { name: 'home', path: '/home', component: Home },
    { name: 'member', path: '/member', component: Member },
    { name: 'shopcart', path: '/shopcart', component: Shopcart },
    { name: 'search', path: '/search', component: Search },
    { name: 'news.list', path: '/news/list', component: NewsList },
    { name: 'news.detail', path: '/news/detail', component: NewsDetail },
    { name: 'photo.list', path: '/photo/list/:categoryId', component: PhotoList },
    { name: 'photo.detail', path: '/photo/detail/:imgId', component: PhotoDetail },
    // { name: 'test', path: '/test', component: Comment },
    { name: 'goods.list', path: '/goods/list', component: GoodsList },
    { name: 'goods.detail', path: '/goods/detail/:goodsId', component: GoodsDetail },
]);
//VueRouter 结束

//MintUi 开始
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
//MintUi 结束


//考虑未来可能有样式的覆盖，在之后再引入自己的css
import './static/css/global.css';



//Axios开始
import Axios from 'axios';
Vue.prototype.$axios = Axios;
//设置默认URL请求基础路径
Axios.defaults.baseURL = 'http://vue.studyit.io/api/';
//Axios结束

new Vue({
    el: '#app',
    render: c => c(App),
    router
});