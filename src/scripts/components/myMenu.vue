<template>
<div class="box" @click="hideMenu">
  <div class="sheet" @touchstart="start" @touchmove="move" @touchend="moveback">
      <section class="sheet-user bbtm"> 
          <div class="sheet-user-box">
              <router-link class="info" :to="user.username=='tour'?{name:'login'}:{name:'userinfo',id:user.username}">
                  <div class="avatar">
                      <!-- <img  v-if="user.avatar==''" src="../../assets/img/avatar.png">
                      <img  v-if="user.avatar!=''" :key="user.avatar"> -->
                      <img :src="img">
                  </div>
                  <div class="username">{{user.nickname}}</div>
              </router-link>
              <div class="community">
                        <router-link :to="user.username=='tour'?{name:'login'}:{name:'userfollower',id:user.username}">
                            <div class="followers">粉丝：<span>{{user.followers}}</span></div>
                        </router-link>
                        <span class="line"></span>
                        <router-link :to="user.username=='tour'?{name:'login'}:{name:'userfollow',id:user.username}">
                            <div class="follow">关注：<span>{{user.follows}}</span></div>
                        </router-link>
              </div>
          </div>
      </section>
      <section class="sheet-my bbtm">
          <div class="sheet-my-box">
                <router-link v-for="(my,i) in myList"  :key="i" :to="user.username=='tour'?{name:'login'}:{name:my.name}">
                    <i class="iconfont" v-html="my.icon"></i>
                    <span>{{my.txt}}</span>
                </router-link>
          </div>
      </section>
      <section class="sheet-category bbtm">
          <div class="sheet-category-box">
                <router-link v-for="(cate,i) in category" :key="i" :to="{name:cate.name}">
                    <i class="iconfont" v-html="cate.icon"></i>
                    <span>{{cate.txt}}</span>
                </router-link>
          </div>
      </section>
      <section class="sheet-sys bbtm">
          <div class="sheet-sys-box">
                <router-link :to="{name:sys.name}">
                    <i class="iconfont" v-html="sys.icon"></i>
                    <span>{{sys.txt}}</span>
                </router-link>
          </div>
      </section>
      <section class="sheet-model">
              <div  class="sheet-model-box">
                <i class="iconfont" v-html="getIcon"></i>
                <span>{{model.txt}}</span>
                <mt-switch v-model="model.switch" @click="changeModel"></mt-switch>
              </div>
      </section>
  </div>
</div>  
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
    computed: {
        ...mapState([
            "user",
            "myList",
            "category",
            "sys",
            "model",
            "originDot",
            "menuState"
        ]),
        getIcon(){
            if(this.model.switch){
                return this.model.icon[1]
            }else{
                return this.model.icon[0]
            }
        },
        img(){
            if(this.user.avatar=="avatar"||this.user.avatar==""){
                return  require("../../assets/img/avatar.png");
            }else{
                return this.user.avatar;
            }
            
        }
    },
    methods: {
        start(event){
            document.querySelector('.sheet').style.transition="";
            this.getOrigin(event);
        },
        move:function(event){
            var e = event.touches[0];
            var x = (this.originDot -  e.clientX)<0?0:this.originDot - e.clientX;
            document.querySelector('.sheet').style.transform=`translateX(-${x}px)`;
            if(x>300){
                this.hideMenu();
            }
        },
        moveback(event){
            if(this.menuState){
                document.querySelector('.sheet').style.transition="all .4s";
                document.querySelector('.sheet').style.transform=`translateX(0px)`;
            }
        },
        ...mapActions([
            "hideMenu",
            "changeModel",
            "getOrigin"
        ])
    },
    created(){
       
    }
}
</script>

<style scoped lang="scss">
a{
    color: #b9b9b9;
    &:visited{
        color: #b9b9b9;
    }
}
span{
    color: #b9b9b9;
}
i{
    color: #b9b9b9!important;
    font-size: 66px;
}
.bbtm{
    border-bottom: 1px solid #555;
}
.active{
    color:#cead53!important;
}   
   .box{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: transparent;
    z-index: 999;
    .sheet{
        position: absolute;
        width:1000px;
        height: 100%;
        box-sizing: border-box;
        font-size: 50px;
        z-index: 9999;
        padding: {
            left: 80px;
            right: 120px;
        }
        background: {
            image: url(../../assets/img/sbg.png);
            repeat:repeat;
            size:100%;
        }
        &-user{
            width: 100%;
            height: 699px;
            box-sizing: border-box;
            overflow: hidden;
            &-box{
                width: 100%;
                height: 100%;
                .info{
                    display: block;
                    .username{
                        text-align: center;
                        width: 100%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        margin-top: 40px;
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
        }
        &-my{
            width: 100%;
            height: 669px;
            box-sizing: border-box;
            &-box{
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: center;
                a{
                    display:block;
                    width: 100%;
                    height: 200px;
                    line-height: 200px;
                    i{
                        float: left;
                        line-height: 190px;
                    }
                    span{
                        float: left;
                        margin-left: 40px;
                        line-height: 200px;
                    }
                    &:nth-of-type(2n+1) span{
                            line-height: 180px;
                        }
                }
            }
        }
        &-category{
            width: 100%;
            height: 630px;
            box-sizing: border-box;
            &-box{
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: center;
                a{
                    display:block;
                    width: 100%;
                    height: 200px;
                    line-height: 200px;
                    i{
                        float: left;
                        line-height: 190px;
                    }
                    span{
                        float: left;
                        margin-left: 40px;
                        line-height: 200px;
                    }
                    &:nth-of-type(2n+1) span{
                            line-height: 180px;
                        }
                }
            }
        }
        &-sys{
            width: 100%;
            height: 200px;
            &-box{
                height: 100%;
                a{
                    display: block;
                    height: 100%;
                    line-height: 200px;
                   span{
                        margin-left: 40px;
                   }
                }
            }
        }
        &-model{
            width: 100%;
            height: 260px;
            position: relative;
            &-box{
                width: 100%;
                height: 100px;
                line-height: 100px;
                position: absolute;
                top:50%;
                margin-top: -50px;
                i,span{
                    display: block;
                    float: left;
                }
                span{
                    margin-left: 40px;
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
