import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f066e11e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _46d7b5b6 = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _cec5b696 = () => interopDefault(import('..\\pages\\hackville.vue' /* webpackChunkName: "pages/hackville" */))
const _898eeac8 = () => interopDefault(import('..\\pages\\illustration.vue' /* webpackChunkName: "pages/illustration" */))
const _8ecc41e6 = () => interopDefault(import('..\\pages\\kdb.vue' /* webpackChunkName: "pages/kdb" */))
const _8e8f927e = () => interopDefault(import('..\\pages\\spark.vue' /* webpackChunkName: "pages/spark" */))
const _b0f72b94 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _f066e11e,
    name: "about"
  }, {
    path: "/gallery",
    component: _46d7b5b6,
    name: "gallery"
  }, {
    path: "/hackville",
    component: _cec5b696,
    name: "hackville"
  }, {
    path: "/illustration",
    component: _898eeac8,
    name: "illustration"
  }, {
    path: "/kdb",
    component: _8ecc41e6,
    name: "kdb"
  }, {
    path: "/spark",
    component: _8e8f927e,
    name: "spark"
  }, {
    path: "/",
    component: _b0f72b94,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
