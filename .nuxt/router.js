import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d281b30 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _63ab9226 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _d55797a8 = () => interopDefault(import('../pages/hackville.vue' /* webpackChunkName: "pages/hackville" */))
const _dc58d878 = () => interopDefault(import('../pages/kdb.vue' /* webpackChunkName: "pages/kdb" */))
const _434b945c = () => interopDefault(import('../pages/nob.vue' /* webpackChunkName: "pages/nob" */))
const _2a5799b8 = () => interopDefault(import('../pages/spark.vue' /* webpackChunkName: "pages/spark" */))
const _6db0bc49 = () => interopDefault(import('../pages/sweetDelights.vue' /* webpackChunkName: "pages/sweetDelights" */))
const _1923cd2d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0d281b30,
    name: "about"
  }, {
    path: "/gallery",
    component: _63ab9226,
    name: "gallery"
  }, {
    path: "/hackville",
    component: _d55797a8,
    name: "hackville"
  }, {
    path: "/kdb",
    component: _dc58d878,
    name: "kdb"
  }, {
    path: "/nob",
    component: _434b945c,
    name: "nob"
  }, {
    path: "/spark",
    component: _2a5799b8,
    name: "spark"
  }, {
    path: "/sweetDelights",
    component: _6db0bc49,
    name: "sweetDelights"
  }, {
    path: "/",
    component: _1923cd2d,
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
