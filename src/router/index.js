import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactsView from '../views/ContactsView.vue'
import DetailedView from '../views/DetailedView.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/detailed/:id',
    name: 'detailed',
    component: DetailedView
  },
  {
    path: '/404',
    component: PageNotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
