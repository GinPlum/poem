<template>
   <div>
        <transition name="menu">
            <my-menu v-if="menuState"></my-menu>
        </transition>
        <router-view></router-view>
   </div>
</template>

<script>
import Menu from "../components/myMenu.vue";
import {mapState,mapActions} from "vuex";
export default {
    components: {
        "my-menu" : Menu
    },
    computed: {
        ...mapState([
            "menuState"
        ])
    },
    methods: {
        ...mapActions([
            "hideMenu"
        ])
    }
    
}
</script>

<style scoped lang="scss">
    
</style>
