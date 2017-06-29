<template lang="html">
  <div id="app">
    <loading v-show="loading"></loading>
     <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    <FootView v-show="headerShow"></FootView>
  </div>
</template>

<script>
import FootView from './components/foot.vue';
import {mapGetters,matpActions} from 'vuex';
export default {
  computed:mapGetters([
    'headerShow',
    'loading'
  ]),
  watch:{
    $route(to,from){
      console.log('从'+from.path,'到'+to.path);
      if(to.path=='/user'){
        this.$store.dispatch('showHeader');//发送hideheader请求到store->index.js
      }else{
        this.$store.dispatch('showHeader');
      }
    }
  },
components:{
  FootView
}
}
</script>

<style lang="css">

</style>
