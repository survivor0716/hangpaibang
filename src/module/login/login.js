// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './login.vue'
// import ElementUI from 'element-ui'
import { Row, Form, FormItem, Button, Input } from 'element-ui'
import '../../../theme/index.css'
import 'src/assets/css/main.less'
import '../../assets/js/response.js'

// import iView from 'iview'
// import 'iview/dist/styles/iview.css';    // 使用 CSS

// Vue.use(iView)

// Vue.use(VueRouter)
// Vue.use(ElementUI)
Vue.use(Row)
// Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
// Vue.use(Checkbox)

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
