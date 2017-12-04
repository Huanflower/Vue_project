//引入资源
import Vue from 'vue';

// 注册全局组件开始
import MyLi from './components/commons/MyLi.vue';
import MyUl from './components/commons/MyUl.vue';
Vue.component(MyLi.name,MyLi);
Vue.component(MyUl.name, MyUl);
// 注册全局组件结束

//路由相关组件 开始
import App from './components/App.vue';
import Home from './components/Home/Home.vue';
import Member from './components/Member/Member.vue';
import Shopcart from './components/Shopcart/Shopcart.vue';
import Search from './components/Search/Search.vue';
import NewsList from './components/News/NewsList.vue';
import Newsdetail from './components/News/Newsdetail.vue'
//路由相关组件 结束

//VueRouter 开始
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter();
router.addRoutes([
    //重定向 到首页
    {path: '/',redirect:{name:'home'}},
    {name: 'home',path: '/home',component:Home},
    {name: 'member', path: '/member', component: Member },
    {name: 'shopcart', path: '/shopcart', component: Shopcart },
    {name: 'search', path: '/search', component: Search },
    { name: 'newslist', path: '/newslist', component: NewsList },
    { name: 'newsdetail', path: '/newsdetail', component: Newsdetail },
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
    render: c=>c(App),
    router
});