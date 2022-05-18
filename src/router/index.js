import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout/index.vue'),
    children: [
      {
        path: 'component',
        name: 'component',
        component: ()=> import('../views/component/index.vue'),
        children: [
          {
            path: 'changelog',
            name: 'changelog',
            component: ()=> import('../views/component/changelog/index.vue'),
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
