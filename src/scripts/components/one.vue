<template>
  <div class="one">
                <mt-loadmore :top-method="loadTop"  topPullText="下拉可以刷新" topDropText="松开即可刷新" ref="loadmore">
                <div class="season">
                    <img :src="seasonBg">
                </div>
                <div class="date">
                    <div class="solar">{{nowDate}}</div>
                    <div class="lunar">农历九月廿四</div>
                </div>
                <div class="commend">
                    <div class="commend-title">

                    </div>
                    <!-- <router-link class="poem" v-for="(n,i) in poetrys" :key="i">
                        <div class="poem-name">
                            {{n.name}}
                        </div>
                        <div class="poem-autor">
                            {{n.author}}
                        </div>
                        <div class="poem-first">
                            {{n.first}}
                        </div>
                    </router-link> -->
                
                <ul>
                    <li v-for="(item,i) in poemList" :key="i">
                        <router-link class="apoem" to=" ">
                                <div class="apoem-name">
                                    {{item.name}}                        
                                </div>
                                <div class="apoem-author">
                                    {{item.gen}}/{{item.author}}  
                                </div>
                                <div class="apoem-first">
                                    {{item.first}}
                                </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </mt-loadmore>     
    </div>

</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
    computed: {
        ...mapState([
            "seasonBg",
            "nowDate",
            "lunarDate",
            "poemList",
        ])  
    },
    methods: {
    ...mapActions(["showDate","refresh","getPoem"]),
     loadTop() {
         setTimeout(()=>{
            this.$refs.loadmore.onTopLoaded();
            this.showDate();
            this.getPoem();
         },1500);
        
        }
    },
    mounted () {
        this.showDate();
        this.getPoem();
    }
}
</script>

<style scoped lang="scss">
.one {
      .season {
        width: 100%;
        margin-top: 40px;
        margin-bottom: 60px;
        img {
          width: 100%;
        }
      }
      .date {
        text-align: center;
        font-size: 60px;
        .solar {
        }
        .lunar {
          width: 840px;
          height: 75px;
          margin: 0 auto;
          margin-top: 40px;
          margin-bottom: 50px;
          line-height: 50px;
          background: {
            image: url("../../assets/img/nlbg.png");
            repeat: no-repeat;
            size: 100%;
            position: center center;
          }
        }
      }
      .commend {
        width: 100%;
        margin-top: 50px;
        &-title {
          width: 100%;
          height: 100px;
          background: {
            image: url("../../assets/img/recbg.png");
            repeat: no-repeat;
            size: 100%;
            position: center center;
          }
        }
        .apoem {
          display: block;
          margin-top: 100px;
          border-bottom: 1px solid #d9d4ce;
          text-align: center;
          &-name {
            color: black;
            font-size: 70px;
            font-weight: 700;
            margin-bottom: 100px;
          }
          &-author {
            color: #cead53;
            font-size: 46px;
            margin-bottom: 130px;
          }
          &-first {
            font-size: 56px;
            color: #929291;
            margin-bottom: 140px;
          }
        }
      }
}
</style>
