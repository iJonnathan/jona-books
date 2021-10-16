<template>
  <div id="app" class="app fullScreen">
        <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
import Home from '@/views/Home.vue'
import M from 'materialize-css'
export default {
  name: 'App',
  components: {
    Home
  },
  
  mounted () {
    M.AutoInit();
    // SET SIZE OF SCREEN
    console.log($(document).height()+ "   "+document.querySelector('.app').offsetWidth)
    this.$store.commit('setWidthScreen', document.querySelector('.app').offsetWidth);
    //KEEP REFRESH PAGE WHEN CLICK BACK BUTTON
    window.onpopstate = function () {
      location.reload()
  };
  }
}
</script>
<style lang="scss">
  .fullScreen{
    width: 100%; max-width:initial; margin:0;
    background-color:#e4e4e4;
  }
</style>
