<template>
  <mt-loadmore class="list" :bottom-method="loadBottom"  bottomPullText="上拉可以刷新" bottomDropText="松开即可刷新" ref="loadbtm">
        <li v-for="(item,i) in allpoem" :key="i">
            <router-link class="poem" to=" ">
                    <div class="poem-name">
                        {{item.name}}                        
                    </div>
                    <div class="poem-author">
                        {{item.gen}}/{{item.author}}  
                    </div>
                    <div class="poem-first">
                        {{item.first}}
                    </div>
            </router-link>
        </li>
    </mt-loadmore>  
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
    computed: {
       ...mapState([
           "allpoem"
       ])  
    },
     methods:{
         ...mapActions([
            "getAllPoem",
         ]),
         loadBottom() {
            this.allLoaded = true;// if all data are loaded
            let count = this.allpoem.length;
            setTimeout(()=>{
                this.$refs.loadbtm.onBottomLoaded();
                this.getAllPoem(count);
                // this.allLoaded = false;
            },1500);
            }
     },
     created(){
             this.getAllPoem(0);
     }
}
</script>

<style scoped lang="scss">
.list {
    list-style: none;
      .poem {
        display: block;
        margin-top: 100px;
        border-bottom: 1px solid #d9d4ce;
        text-indent: 20px;
        text-align: left;
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
   
</style>
