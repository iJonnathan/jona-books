<template>
  <div id="app" class="fullScreen">
    <Home/>
          <!-- <a class="waves-effect waves-light btn-small" id="btn1" ><i class="material-icons">delete</i></a>

    <select id="select1" v-model="category">
      <option value="" selected>All</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Categoría</label> -->
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
  }
}
</script>
<style lang="scss">
  .fullScreen{
    width: 100%; max-width:initial; margin:0
  }
</style>
