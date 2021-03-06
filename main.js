//引入Vue
import Vue from 'vue';



//引入自己的组件
import App from "./app.vue";
import Home from "./components/home/home.vue";
import Vip from "./components/vip/vip.vue";
import GoodsCar from "./components/goodsCar/goodsCar.vue";
import Search from "./components/search/search.vue";
import NewsList from "./components/news/newsList.vue";
import NewsDetail from "./components/news/newsDetail.vue";
import PicShare from "./components/pic/share.vue";
import PicDetail from "./components/pic/detail.vue";
import GoodsList from "./components/goods/goodsList.vue";
import GoodDetail from "./components/goods/goodDetail.vue";
import GoodCom from "./components/goods/goodComment.vue";


//自定义子组件
import NavBar from './components/common/navBar.vue';
Vue.component('nav-bar', NavBar);



//引入mint-UI
import MintUi from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUi);

//引入自定义配置接口配置
import HttpConfig from "./httpConfig.js";
Vue.prototype.$httpConfig = HttpConfig;


//引入mui的css
import "./static/vendor/mui/dist/css/mui.css";

//引入路由Route
import VueRouter from "vue-router";
Vue.use(VueRouter);
//第一种配置路由的方式：
// let router new VueRouter({
// 	routes: [
// 		{name: "home", path: "/home", components: Home}
// 	]
// });
//第二种配置路由的方式：
let router = new VueRouter({
	linkActiveClass: 'mui-active'
});
router.addRoutes([
	{name: "default", path: "/", redirect: "home"},	
	{name: "home", path: "/home", component: Home},
	{name: "vip", path: "/vip", component: Vip},
	{name: "goodsCar", path: "/goodsCar", component: GoodsCar},
	{name: "search", path: "/search", component: Search},
	{name: "newsList", path: "/news/list", component: NewsList},
	{name: "newsDetail", path: "/news/detail/:newsId", component: NewsDetail},
	{name: "picShare", path: "/pic/share", component: PicShare},
	{name: "picDetail", path: "/pic/detail", component: PicDetail},
	{name: "goodsList", path: "/goods/list", component: GoodsList},
	{name: "goodDetail", path: "/goods/detail/:goodId", component: GoodDetail},
	{name: "goodCom", path: "./goods/comment/:imgId", component: GoodCom}
]);

//引入自己的css
import './static/css/global.css';


//全局组件
//moment组件
import Moment from "moment";
Vue.filter("transTime", (val) => {
	return Moment(val).format("YYYY-MM-DD");
});
//comment组件
import Comment from "./components/common/comment.vue";
Vue.component("comment", Comment);
//轮播组件
import MySwip from "./components/common/mySwip.vue";
Vue.component("my-swip", MySwip);


//安装vue-preview 羽浏览图片
import VuePreView from "vue-preview";
Vue.use(VuePreView);
//安装Qs插件
import Qs from "qs";
Vue.prototype.$qs = Qs;

//引入axios
import Axios from "axios";
Vue.prototype.$ajax = Axios;

//配置拦截器，设置loading图标
// Axios.interceptors.request.use(function (config) {
// 	MintUi.Indicator.open({
// 	  text: 'Loading...',
// 	  spinnerType: 'fading-circle'
// 	});

//     return config;
//   }, function (error) {

//     return Promise.reject(error);
//   });
 

// Axios.interceptors.response.use(function (response) {
// 	MintUi.Indicator.close();
//     return response;
//   }, function (error) {

//     return Promise.reject(error);
//   });

new Vue({
	router,
    el: '#app',
    render: function(c) {
        return c(App);
    }
})
