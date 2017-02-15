// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './user9.vue'
// import ElementUI from 'element-ui'
import { Row, Col, ButtonGroup, Button } from 'element-ui'
import '../../../theme/index.css'
import 'src/assets/css/main.less'
import '../../assets/js/response.js'

// Vue.use(VueRouter)
// Vue.use(ElementUI)
Vue.use(Row)
Vue.use(Col)
Vue.use(ButtonGroup)
Vue.use(Button)

// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

/* eslint-disable no-new */
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
