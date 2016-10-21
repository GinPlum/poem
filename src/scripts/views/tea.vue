<template>
  <div>
    <my-head :msg="teaHead"></my-head>
    <div class="container">
        <nav class="nav">
                <!-- <div class="nav-item active"><span>一首</span></div>
                <div class="nav-item"><span>诗词</span></div>
                <div class="nav-item" @click="showDate"><span>与君语</span></div> -->
                <div class="nav-item" :class="activeIdx==i?'active':''" v-for="(n,i) in teaNav" :key="i"
                @click="doActiveIdx(i)">
                    <span>{{n}}</span>
                </div>
        </nav>
        <div class="content">

        </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
import Head from "../components/head.vue";
export default {
    components: {
        "my-head":Head,
    },
    computed: {
        ...mapState([
            "teaHead",
            "teaNav",
            "activeIdx"
        ])
    },
    methods:{
        ...mapActions([
            "doActiveIdx"
        ])
    }
}
</script>

<style>

</style>
