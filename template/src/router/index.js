import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'

Vue.use(Router)

export default new Router({
  base: '',
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
