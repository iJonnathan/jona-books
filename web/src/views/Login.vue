<template>
  <div class="login">
    <div id="login-page" class="row">
      <div class="col s12 z-depth-6 card-panel">
        <div style="padding-top: 15%">
          <img src="../assets/logo.png" style="width: 35%; height: 35%" />
        </div>
        <form class="login-form" style="padding: 10%">
          <div class="row">
            <div class="input-field col s12">
              <i style="padding-right:10%;padding-top:1%" class="material-icons prefix">sentiment_very_satisfied</i>
              <input
                class="validate"
                id="username"
                type="text"
                v-model="username"
              />
              <label for="username" data-error="wrong" data-success="right"
                >Nombre de Usuario</label
              >
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i style="padding-right:10%;padding-top:1%" class="material-icons prefix">lock_outline</i>
              <input class="validate" id="password" type="password" v-model="password" />
              <label for="password">Contraseña</label>
            </div>
          </div>
          <div class="input-field col s12" style="margin-top: -5%">
            <label>
              <input type="checkbox" v-model="rememberAccount"/>
              <span>Recordar</span>
            </label>
          </div>
          <br /><br /><br />
          <div class="row">
            <a href="#" class="btn waves-effect" @click="requestToken()" :disabled="disableButton">Ingresar</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
import jwt from 'jsonwebtoken'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      rememberAccount: false
    }
  },
  watch: {
  },
  computed: {
    disableButton: function () {
      if (this.username !== '' && this.password !== '') return false
      return true
    }
  },
  methods: {
    requestToken: function () {
      if (!this.disableButton) {
        // this.notify(window.serverUrl)
        axios.post(window.serverUrl + '/auth/login',
          qs.stringify({ username: this.username, password: this.password }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
          .then((res) => {
            localStorage.setItem('access-token', res.data.accesstoken)
            // this.$store.dispatch('setIsLogged', true);
            // extraigo el toquen y lo guardo en el vuex
            var decodedToken = jwt.decode(res.data.accesstoken, { complete: true })
            // this.$store.dispatch('resetStationsState');
            // this.$store.dispatch('setRole', decodedToken.payload.user._role);
            var redirect = this.$route.query.redirect
            if (redirect != null) {
              this.$router.replace(redirect)
            } else {
              alert('.. ' + decodedToken.payload.user._role)
              this.$router.replace('/')
            }
          })
          .catch((error) => {
            alert('!!' + JSON.stringify(error))
          })
      }
    },
    keyListener: function (evt) {
      if (evt.keyCode === 13) {
        this.requestToken()
      }
    },
    notify: function (msj) {
      this.$toasted.show(msj, {
        theme: 'bubble',
        position: 'top-right',
        duration: 4000
      })
    }
  },
  created () {
    document.addEventListener('keyup', this.keyListener)
  },
  destroyed () {
    document.removeEventListener('keyup', this.keyListener)
  }
}
</script>

<style lang="scss" scoped>
#login-page {
  width: 500px;
  background-color: blue;
}
.btnIngresar {
  background-color: blue;
}
</style>