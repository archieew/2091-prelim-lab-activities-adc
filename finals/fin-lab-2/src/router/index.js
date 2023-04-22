import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import gallery from '@/components/gallery'
import contact from '@/components/contact'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: blog
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: gallery
    },
    {
      path: '/contact',
      name: 'Contact',
      component: contact
    },
    {
      path: '/about',
      name: 'About',
      component: about
    },
  ]
})
