import Vue from 'vue'
import Router from 'vue-router'
import PageOne from '@/pages/PageOne'
import PageTwo from '@/pages/PageTwo'
import PageThree from '@/pages/PageThree'
import PageFour from '@/pages/PageFour'

import PageOneChildren from '@/pageChildren/pageOneChild'
import PageTwoChildren from '@/pageChildren/pageTwoChild'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageOne',
      component: PageOne,
      children:[
        { path: '/PageChildren', component: PageOneChildren },
      ]
    },
    {
      path: '/PageTwo',
      name: 'PageTwo',
      component: PageTwo,
      children:[
        { path: '/PageTwo/PageTwoChildren', component: PageTwoChildren },
      ]
    },
    {
      path: '/PageThree',
      name: 'PageThree',
      component: PageThree
    },
    {
      path: '/PageFour',
      name: 'PageFour',
      component: PageFour
    }
  ]
})
