<template>
<div>
    <my-head msg="快快查登录"></my-head>
    <div class="login">
        <mt-field  placeholder="手机号码" v-model="username"></mt-field>
        <mt-field  placeholder="密码" type="password" v-model="password"></mt-field>
        <div class="btn" @click="login">马上开始</div>
        <div class="tips">还没有账号?<router-link :to="{name:'register'}">立即注册</router-link></div>
    </div>
</div>
</template>

<script>
import Head from "../components/backhead.vue";
import axios from "axios";
import router from "./router";
import {mapState,mapActions} from "vuex";
import { Toast } from 'mint-ui';
var baseurl =  "http://112.74.49.86:1234/";
export default {
        data(){
            return{
                username:"",
                password:""
            }
        },
        components: {
            'my-head':Head
        },
        computed: {
              
        },
        methods: {
            ...mapActions([
                "dologin"
            ]),
            login(){
                axios.default.baseURL = baseurl;
                if(this.check()){
                    axios.post("login",{
                        username: this.username,
                        password: this.password
                    }).then(res=>{
                        if(res.data.status=="1"){
                            let instance = Toast({
                            message: '您的密码输入错误',
                            position: 'bottom',
                            duration: 3000
                            });
                            setTimeout(() => {
                                instance.close();
                            }, 2000); 
                        }else if(res.data.status=="0"){
                            let instance = Toast({
                            message: '登录成功',
                            position: 'bottom',
                            duration: 3000
                            });
                            setTimeout(() => {
                                instance.close();
                            }, 2000); 
                            this.dologin(this.username);
                            router.push('/userinfo');
                        }else{
                            let instance = Toast({
                            message: '用户名错误',
                            position: 'bottom',
                            duration: 3000
                            });
                            setTimeout(() => {
                                instance.close();
                            }, 2000); 
                        }

                    })
                }
            },
            check(){
                var reg =  /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\d{8}$/; 
                var reg2 = /^\w{6,20}$/;
                if(this.username==""){
                    let instance = Toast({
                    message: '请填写手机号',
                    position: 'bottom',
                    duration: 3000
                    });
                    setTimeout(() => {
                        instance.close();
                    }, 2000); 
                    return false;
                }else if(this.password==""){
                    let instance = Toast({
                    message: '请填写密码',
                    position: 'bottom',
                    duration: 3000
                    });
                    setTimeout(() => {
                        instance.close();
                    }, 2000); 
                    return false;
                }
                if(!reg.test(this.username)){
                    let instance = Toast({
                    message: '手机号码格式不正确',
                    position: 'bottom',
                    duration: 3000
                    });
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                    return false;
                }
                if(!reg2.test(this.password)){
                    let instance = Toast({
                    message: '密码长度在6-20位之间',
                    position: 'bottom',
                    duration: 3000
                    });
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                     return false;
                };
            
             return true;
            }
        }
}
</script>

<style lang="scss">


</style>
