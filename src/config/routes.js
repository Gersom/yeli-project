/* eslint-disable no-multi-spaces */
import Vue        from 'vue'
import Router     from 'vue-router'

import Home       from '~/pages/index'
import Lawyer     from '~/pages/abogada'
import Adviser    from '~/pages/asesora'
import ErrorLayout from '~/layouts/error'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/abogada',
        name: 'Lawyer',
        component: Lawyer
      },
      {
        path: '/asesora',
        name: 'Adviser',
        component: Adviser
      },
      {
        path: '/404',
        name: 'ErrorLayout',
        component: ErrorLayout
      }
    ]
  })
}
