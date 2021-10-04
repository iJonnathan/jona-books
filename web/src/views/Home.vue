<template>
  <div class="home">
    <Bookshelft />
    <!-- <transition name="fade">
      <component v-bind:is="currentComponent" />
    </transition>
    <notifications group="foo" />
    <notifications group="auth" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Admin from '@/views/Admin.vue';
import Bookshelft from '@/components/Bookshelft.vue'

import { mapState } from "vuex";
export default {
  name: 'Home',
  components: {
    Admin,Bookshelft
  },
  data(){
    return{
      currentComponent: "Bookshelft"
    }
  }
  // beforeCreated(){
  //     this.$store.commit('setCurrentComponent','Admin');
  // },

  // computed:{
  //   ...mapState({
  //     currentComponent: 'currentComponent',
  //   })
  // }
}
</script>
