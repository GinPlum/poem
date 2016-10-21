<template>
  <div>
      <my-head msg="手机号注册"></my-head>
      <div class="register">
        <mt-field  placeholder="请输入手机号" v-model="username"></mt-field>
        <div class="btn" @click="register">下一步</div>
        <div class="tips">已有账号?<router-link :to="{name:'login'}">立即登录</router-link></div>
      </div>
  </div>
</template>

<script>
import Head from "../components/backhead.vue";
import {mapState,mapActions} from "vuex";
import router from "./router";
import { Toast } from 'mint-ui';
import axios from "axios";
import {bus} from "./bus"
var baseurl =  "http://112.74.49.86:1234/";
 axios.default.baseURL = baseurl;
export default {
  data () {
    return {
      username:""
    }
  },
 components: {
       'my-head':Head,
 },
 computed: {
    
 },
 methods: {
  ...mapActions([
    "nextmsg"
  ]),
  register(){
    
      var reg =  /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\d{8}$/; 
      if(this.username==""){
          let instance = Toast({
          message: '手机号不能为空',
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
          message: '手机号格式不正确',
          position: 'bottom',
          duration: 3000
          });
          setTimeout(() => {
              instance.close();
          }, 2000); 
          return false;
      }
      axios.post("checkname",{
       username:this.username
     }).then(res=>{
       console.log(res.data.status);
       if(res.data.status==0){
          router.push('./checkcode');
          this.nextmsg(this.username);
          }else{
            let instance = Toast({
              message: '手机号已被注册',
              position: 'bottom',
              duration: 3000
              });
              setTimeout(() => {
                  instance.close();
              }, 2000); 
          }
     })
  }
 }
}
</script>

<style>

</style>
