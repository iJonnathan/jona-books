import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../utils/auth'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      var redirect = to.query.redirect
      if (redirect != null) {
        var valid = Auth.isCertificateValid()
        if (valid) {
          next({ path: redirect })
        } else {
          next()
        }
      } else {
        next()
      }
    }
  },
  {
    path: '/book/:idBook',
    name: 'PdfViewer',
    // beforeEnter: function(to, from, next) {
    //   var id = to.params.idBook

    // },
    props: (route) => ({ idBook: route.params.idBook }),
    component: () => import(/* webpackChunkName: "about" */ '../components/PdfViewer.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
