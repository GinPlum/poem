<template>
  <div>
    <header class="head">
        <div class="head-box">
          <div class="fl">
             <i class="menu iconfont" v-html="'&#xe61f;'" @click="showMenu">
             </i>
             <span class="title">
                {{msg.title}}
             </span>
          </div>
          <div class="fr">
              <router-link class="btn iconfont" v-html="msg.btn1" :to="msg.to1"></router-link>
              <router-link class="btn iconfont" v-html="msg.btn2" :to="msg.to2"></router-link>
          </div>
        </div>
    </header>
    
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    methods: {
      ...mapActions([
        "showMenu"
      ])
    },
    props: ['msg']
}
</script>

<style scoped lang="scss">
i,span,a{
  font-size: 70px;
}
a.rouetr-link-active{
  color: #9f9f9f!important;
}
.head{
  width: 100%;
  height: 215px;
  position: relative;
  &-box{
    position: absolute;
    width: 100%;
    height: 100px;
    top:50%;
    margin-top: -50px;
    line-height: 100px;
    padding: 0 70px;
    box-sizing: border-box;
    span{
        margin-left: 60px;  
    }
    .btn{
        margin-left: 40px;
        &:nth-of-type(1){
          position: relative;
          top: -5px;
        }
    }
  }
}

</style>
