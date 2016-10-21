<template>
  <div>
        <my-head msg="设置密码"></my-head>
        <div class="login">
            <mt-field  placeholder="请输入您的密码" type="password" v-model="password"></mt-field>
            <mt-field  placeholder="请再次输入密码" type="password" v-model="repassword"></mt-field>
            <div class="btn" @click="login(codeNum,password)">登录</div>
        </div>
  </div>
</template>

<script>
import Head from "../components/backhead.vue";
import axios from "axios";
import {mapState,mapActions} from "vuex";
import router from "./router";
import { Toast } from 'mint-ui';
var baseurl =  "http://112.74.49.86:1234/";
 axios.default.baseURL = baseurl;
export default {
    data () {
        return {
            password:"",
            repassword:""
        }
    },
    computed: {
      ...mapState([
          "codeNum"
      ])  
    },
    components: {
         'my-head':Head
    },
    methods: {
        check(){
            var reg = /^\w{6,20}$/;
            if(this.password==""||this.repassword==''){
                    let instance = Toast({
                    message: '输入不能为空',
                    position: 'bottom',
                    duration: 3000
                    });
                    setTimeout(() => {
                        instance.close();
                    }, 2000); 
                    return false;
            }else if(this.password!=this.repassword){
                    let instance = Toast({
                    message: '两次密码不一致',
                    position: 'bottom',
                    duration: 3000
                    });
                    setTimeout(() => {
                        instance.close();
                    }, 2000); 
                    return false;
            }else if(!reg.test(this.password)){
                    let instance = Toast({
                    message: '密码为6到20位',
                    position: 'bottom',
                    duration: 3000
                    });
                    setTimeout(() => {
                        instance.close();
                    }, 2000); 
                    return false;
            }
            return true;
        },
        ...mapActions([
            "dologin"
        ]),
        login(username,password){
            if(this.check()){
                 axios.post("register",{
                        username: username,
                        password: password
                }).then(res=>{
                    if(res.data.status=="0"){
                        this.dologin(username);
                        setTimeout(()=>{
                            router.push('/userinfo');
                        },1000)
                    }else{
                        let instance = Toast({
                        message: '注册失败',
                        position: 'bottom',
                        duration: 3000
                        });
                        setTimeout(() => {
                            instance.close();
                        }, 2000); 
                        router.push('/register');
                    }
                })
                
            }
        }

    }
}
</script>

<style>

</style>
