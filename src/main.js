// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Open+Sans:300'
  // })
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Fredericka+the+Great'
  // })
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Cormorant+Unicase'
  // })
  // head.script.push({
  //   src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js'
  // })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,900'
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}