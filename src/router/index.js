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
            
            path: 'installation',
            name: 'installation',
            component: ()=> import('../views/component/installation/index.vue'),
          },
          {
            path: 'changelog',
            name: 'changelog',
            component: ()=> import('../views/component/changelog/index.vue'),
          },
          {
            path: 'menu',
            name: 'menu',
            component: ()=> import('../views/component/menu/index.vue'),
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
