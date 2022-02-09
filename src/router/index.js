import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import About from '../views/About.vue'
import Home from '../views/Home.vue'

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
})

