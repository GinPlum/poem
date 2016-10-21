<template>
  <div>
      <div class="top">
        <my-head msg="我的" path="/index/poetry"></my-head>
        <div class="user">
            <div class="user-box">
                <div class="info">
                    <div class="avatar">
                        <!-- <img  v-if="user.avatar==''" src="../../assets/img/avatar.png">
                        <img  v-if="user.avatar!=''" :key="user.avatar"> -->
                        <img :src="img">
                    </div>
                    <!-- <router-link class="username" to="{name:upinfo}">{{user.nickname}}</router-link> -->
                    <div class="username">{{user.nickname}}</div>
                </div>
                <div class="community">
                        <router-link :to="{name:'userfollower',id:user.username}">
                            <div class="followers">粉丝：<span>{{user.followers}}</span></div>
                        </router-link>
                        <span class="line"></span>
                        <router-link :to="{name:'userfollow',id:user.username}">
                            <div class="follow">关注：<span>{{user.follows}}</span></div>
                        </router-link>
                </div>
            </div>
        </div>
      </div>
      <div class="content">
            <router-link class="item" to="{name:'topic',id:username}">
                <div class="fl">
                    <i class="iconfont" v-html="''"></i>
                    <span>我的话题</span>
                </div>
                <div class="fr">
                    <i class="iconfont" v-html="'&#xe600;'"></i>
                </div>
            </router-link>
            <router-link class="item" to="{name:'house',id:username}">
                <div class="fl">
                    <i class="iconfont" v-html="''"></i>
                    <span>我的小舍</span>
                </div>
                <div class="fr">
                    <i class="iconfont" v-html="'&#xe600;'"></i>
                </div>
            </router-link>
            <router-link class="item" to="{name:'mypoem',id:username}">
                <div class="fl">
                    <i class="iconfont" v-html="''"></i>
                    <span>我的诗集</span>
                </div>
                <div class="fr">
                    <i class="iconfont" v-html="'&#xe600;'"></i>
                </div>
            </router-link>
            <router-link class="item" to="{name:'video',id:username}">
                <div class="fl">
                    <i class="iconfont" v-html="''"></i>
                    <span>我的录音</span>
                </div>
                <div class="fr">
                    <i class="iconfont" v-html="'&#xe600;'"></i>
                </div>
            </router-link>
      </div>    
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import Head from "../components/backhead.vue";
export default {
  components: {
      'my-head':Head
  },
  computed: {
      ...mapState([
            "user"
        ]),
        img(){
            if(this.user.avatar=="avatar"||this.user.avatar==""){
                return  require("../../assets/img/avatar.png");
            }else{
                return this.user.avatar;
            }
            
        }
  }
}
</script>

<style  lang="scss">
.top{
    background:{
        image:url('../../assets/img/infobg.png');
        repeat:repeat;
        size:50% 50%;
    } 
    .head-box{
            .fl{
                i,span{
                    color:#fff!important;
                }
            }
    }      
}
.content{
    padding-left: 70px;
    box-sizing: border-box;
    .item{
        display: block;
        overflow: hidden;
        height: 210px;
        line-height: 210px;
        font-size: 62px!important;
        border-bottom: 1px solid #d9d4ce;
        .fl{
            i{
                font-size: 62px!important
            }
        }
        .fr{
            margin-right: 80px;
            i{
                font-size: 62px!important;
            }
        }
    }
}
.user{
    width: 100%;
    height: 650px;
         &-box{
                width: 100%;
                height: 100%;
                .info{
                    display: block;
                    .username{
                        display:block;
                        text-align: center;
                        width: 100%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        margin-top: 40px;
                        font-size: 70px;
                        color:white;
                    }
                    .avatar{
                        width: 320px;
                        height: 320px;
                        border-radius: 160px;
                        position: relative;
                        overflow: hidden;
                        margin: {
                            top:60px;
                            left:auto;
                            right:auto;
                        }
                        background: {     
                            image:url("../../assets/img/icon.png");                 
                            size: 100% 100%;
                            repeat:no-repeat;
                            position: center center;
                        }
                        img{
                            display: block;
                            width: 280px;
                            height: 280px;
                            border-radius: 140px;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            margin: {
                                left:-(280px/2);
                                 top: -(280px/2);
                            }
                        }
                    }
                }
            }    
        .community{
        width: 80%;
        margin: 0 auto;
        height: 100px;
        line-height: 100px;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        position: relative;
            a{
                display: block;
                float: left;
                div{
                    font-size: 56px;
                    color:#fff;
                }
            }
            .line{
                display: block;
                width: 4px;
                height: 60px;
                background-color: #b9b9b9;
                z-index: 9999;
                position: relative;
                float: left;
                margin: 0 50px;
                top:20px;
            }
    }
}

</style>
