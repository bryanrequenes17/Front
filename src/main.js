import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


//importamos nuestro complemento keycloak
//import authentication from "@/plugins/authentication"

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
//inicializamos nuestro complemento keycloak
/*Vue.use(authentication)

Vue.$keycloak
  .init({ onLoad: 'login-required', checkLoginIframe: false })
  .then(() => {
    new Vue({
      vuetify,
      router,
      render: h => h(App)
    }).$mount('#app')
  })

*/

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");