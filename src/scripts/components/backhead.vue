<template>
  <header>
      <div class="head-box">
          <div class="fl">
            <i class="iconfont" v-html="'&#xe606;'" @click="goback(path)"></i>
            <span>{{msg}}</span>
          </div>
          <div class="fr"></div>
      </div>
  </header>
</template>

<script>
import router from "../views/router"
export default {
    methods: {
        goback(path){
            if(path){
                router.push(path);
            }else{
                router.go(-1)
            }
            
        }
    },
    props:["msg","path"]
}
</script>

<style scoped lang="scss">
  header{
      height: 200px;
      font-size: 66px;
      line-height: 200px;
      box-sizing: border-box;
      padding: 0 40px;
      .head-box{
        border-bottom: 1px solid #d9d4ce;
        overflow: hidden;
        i{
            font-size: 88px!important;
            color:#717170!important;
        }
        span{
            
        }
      }
  }
</style>
