import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYoutube from 'vue-youtube'
import device from 'vue-device-detector-js'

Vue.config.productionTip = false
Vue.use(VueYoutube)
Vue.use(device)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
