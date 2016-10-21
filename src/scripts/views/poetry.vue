<template>
  <div>
    <my-head :msg="poetryHead"></my-head>
    <div class="container">
        <nav class="nav">
            <!-- <div class="nav-item active"><span>一首</span></div>
            <div class="nav-item"><span>诗词</span></div>
            <div class="nav-item" @click="showDate"><span>与君语</span></div> -->
            <div class="nav-item" :class="activeIdx==i?'active':''" v-for="(n,i) in poetryNav" :key="i"
            @click="doSwiper(i)">
                <span>{{n}}</span>
            </div>
        </nav>
        <div class="content">
            <div class="swiper-container " id="swipe">
                <div class="swiper-wrapper">
                    <div class="swiper-slide mt-2 slide1" >
                            <my-one></my-one>
                    </div>
                    <div class="swiper-slide mt-2 slide1">
                            <my-all></my-all>
                    </div>
                    <div class="swiper-slide mt-2 slide1">
                            
                
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import Head from "../components/head.vue";
import One from "../components/one.vue";
import AllPoem from "../components/allPoem.vue";

export default {
  data(){
      return {
          mySwiper:""
      }
  },
  components: {
    "my-head": Head,
    "my-one":One,
    "my-all":AllPoem,
  },
  methods: {
    ...mapActions(["doActiveIdx"]),
    doSwiper(idx){
        this.doActiveIdx(idx);
        // console.log(this.mySwiper);
        this.mySwiper.slideTo(idx);
    }
  },
  computed: {
    ...mapState([
      "poetryHead",
      "poetryNav",
      "activeIdx",
    ])
  },
  mounted() {
    var that = this;
    setTimeout(()=>{
    this.$nextTick(()=>{
        this.mySwiper = new Swiper("#swipe",{
            loop:false,
            autoplay: false,
            direction:"horizontal",
            pagination: '.swiper-pagination',
            resistanceRatio:0,
            calculateHeight:true,
            initialSlide:0,
            autoHeight:true,
            onSlideChangeEnd(swiper){
                that.doActiveIdx(swiper.activeIndex);
            }    
        });
    });
    },1000)
  }
};
</script>

<style lang="scss">

</style>
