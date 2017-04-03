import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Home from '@/components/Home'

import Swiper from '../../static/swiper/swiper.min.js'
require('../../static/swiper/swiper.min.css')

Vue.use(Router)
Vue.use(VueResource)
Vue.use(Home)


export default new Router({
  mode:'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
