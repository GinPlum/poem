<template>
        <div>
            <img src="../../assets/img/hello.png" @click="goIndex"/>
        </div>
</template>

<script>
import router from "../views/router.js";
export default {
    methods: {
      goIndex(){
        router.push('/index/default');
      }  
    },
     mounted () {
        //  setTimeout(() => {
        //      router.push('/index');
        //  }, 2500);
     }
}
</script>

<style scoped lang="scss">
    div{ 
        img{
            display: block;
            width: 100%;
        }
    }
</style>
