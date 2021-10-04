import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import 'materialize-css/dist/css/materialize.css'
//import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'material-icons/iconfont/material-icons.css';
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
window.serverUrl = process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + process.env.VUE_APP_SERVER_BASE_URL

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
