import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Welcome from '@/views/welcome/Welcome'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'welcome',
      children: [
        { path: 'welcome', name: 'welcome', component: Welcome }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    if (to.path !== '/login') {
      // 如果没有登录，但你访问其他需要登录的页面，那我就让你跳到登录页面去
      next({ path: '/login' })
    } else {
      // 如果没有登录，但你访问的login，那就不干涉你，让你访问
      next()
    }
  }
})

export default router
