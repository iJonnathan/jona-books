<template>
  <div id="app">
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
  data(){
    return{
      category:'3'
    }
  },
  mounted () {
    M.AutoInit();
  },
//   methods:{
// change(){
//       alert()
//       document.getElementById('select1').value = '1'
//       //$("#select1").val;
//     },
//   }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
