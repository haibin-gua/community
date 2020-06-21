import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component:Login
    }
  ]
})