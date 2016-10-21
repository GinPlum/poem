
import router  from "./router.js";
import Vue from "vue";
import Vuex from "vuex";
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);  // 全局使用
import axios from 'axios'
import MintUI from "mint-ui";
import 'mint-ui/lib/style.css';
Vue.use(MintUI);  
Vue.use(Vuex);  
import store from "../vuex/store.js"  // 导入store 容器

const app = new Vue({
    el:"#app",
    router,
    store,
})