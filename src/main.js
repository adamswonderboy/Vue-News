// import Vue from 'vue'
// import App from './App.vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

// Vue.use(Vuetify)
// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// register jw pagination component globally
import JwPagination from 'jw-vue-pagination';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('jw-pagination', JwPagination);

new Vue({
  render: h => h(App),
}).$mount('#app')
