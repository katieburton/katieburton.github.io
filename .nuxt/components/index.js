export const CaseStudyCard = () => import('../../components/CaseStudyCard.vue' /* webpackChunkName: "components/case-study-card" */).then(c => wrapFunctional(c.default || c))
export const CaseStudyMenu = () => import('../../components/CaseStudyMenu.vue' /* webpackChunkName: "components/case-study-menu" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Gallery = () => import('../../components/Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => wrapFunctional(c.default || c))
export const ImageLightbox = () => import('../../components/ImageLightbox.vue' /* webpackChunkName: "components/image-lightbox" */).then(c => wrapFunctional(c.default || c))
export const Nav = () => import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
