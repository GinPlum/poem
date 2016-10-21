<template>
    <div>
        <my-head msg="手机号验证"></my-head>
        <div class="register">
            <div class="msg">验证码已发送至{{codeNum}}</div>
            <mt-field  placeholder="请输入验证码" v-model="code"></mt-field>
            <div class="btn" @click="gocheck">下一步</div>
            <div class="tips">已有账号?<router-link :to="{name:'login'}">立即登录</router-link></div>
        </div>
    </div>
</template>

<script>
import Head from "../components/backhead.vue";
import {mapState,mapActions} from "vuex";
import router from "./router"
export default {
    data () {
        return {
            code:"",
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
    created () {
        
    },
    methods: {
        gocheck(){
            router.push('./setpwd')
        }
    },
    
}
</script>

<style lang="scss">

</style>
