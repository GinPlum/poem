import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

import Hello from "../components/hello.vue";
import Layout from "./layout.vue";
import Poetry from "./poetry.vue";
import Tea from "./tea.vue";
import Login from "./login.vue";
import Register from "./register.vue";
import Userinfo from "./userinfo.vue";
import Checkcode from "./checkcode.vue";
import Setpwd from "./setpwd.vue";
import Userfollow from "./userfollow.vue";
import Userfollower from "./userfollower.vue";
import Download from "./download.vue";
import Collections from "./collections.vue";
import Mymsg from "./mymsg.vue";
const routes = [
    {
        path:"/",
        component: Hello
    },
    {
        path:"/index",
        component:Layout,
        children:[
            {path:"poetry",component:Poetry,name:"poetry"},
            {path:"teaclub",component:Tea,name:"teaclub"},
            {path:"*",redirect:"/index/poetry"}
        ]
    },
    {
        path:"/login",
        component:Login,
        name:'login'
    },
    {
        path:"/register",
        component:Register,
        name:'register'
    },
    {
        path:"/userinfo",
        component:Userinfo,
        name:'userinfo'
    },
    {
        path:"/checkcode",
        component:Checkcode,
        name:'checkcode'
    },
    {
        path:"/setpwd",
        component:Setpwd,
        name:'setpwd'
    },
    {
        path:"/userfollow",
        component:Userfollow,
        name:'userfollow'
    },
    {
        path:"/userfollower",
        component:Userfollower,
        name:'userfollower'
    },
    {
        path:"/collections",
        component:Collections,
        name:'collections'
    },
    {
        path:"/download",
        component:Download,
        name:'download'
    },
    {
        path:"/mymsg",
        component:Mymsg,
        name:'mymsg'
    },
    {
        path:"*",
        redirect: "/index/poetry"
    }
]


const router = new VueRouter({
    mode:"hash",
    routes
});


export default router;