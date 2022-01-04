exports.ids = [7,4];
exports.modules = Array(35).concat([
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./goliath.png": 48,
	"./hackademics.gif": 49,
	"./hackville-1.png": 50,
	"./hackville-2.png": 51,
	"./hackville-3.png": 52,
	"./hackville-4.png": 53,
	"./hackville-5.png": 54,
	"./hackville-t-1.png": 37,
	"./hackville-t-2.png": 38,
	"./kdb-1.png": 55,
	"./kdb-2.png": 56,
	"./kdb-3.png": 57,
	"./kdb-4.png": 58,
	"./kdb-t-1.png": 39,
	"./kdb-t-2.png": 40,
	"./kineticType.gif": 59,
	"./leoMarin.png": 60,
	"./nob-1.png": 61,
	"./nob-2.png": 62,
	"./nob-3.png": 63,
	"./nob-4.png": 64,
	"./nob-5.png": 65,
	"./nob-6.png": 66,
	"./nob-7.png": 67,
	"./nob-t-1.png": 41,
	"./nob-t-2.png": 42,
	"./spark-t-1.png": 43,
	"./spark-t-2.png": 44,
	"./sweetDelights-1.png": 68,
	"./sweetDelights-2.png": 69,
	"./sweetDelights-3.png": 70,
	"./sweetDelights-t-1.png": 45,
	"./sweetDelights-t-2.png": 46,
	"./touchDesigner-1.gif": 71,
	"./touchDesigner-2.gif": 72,
	"./workCulture.png": 73
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("680fff7c", content, true, context)
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-t-1.0b4aa11.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-t-2.721c42a.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdb-t-1.c0e0359.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdb-t-2.77c9801.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-t-1.563420a.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-t-2.a46df75.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spark-t-1.54961ef.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spark-t-2.81f26e1.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sweetDelights-t-1.2d77154.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sweetDelights-t-2.1fd3a83.png";

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageLightbox.vue?vue&type=template&id=b8bd4aac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-6"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(35)("./" + _vm.img)))+" alt data-v-b8bd4aac> <p class=\"my-2 text-center\" data-v-b8bd4aac>"+_vm._ssrEscape("\n    "+_vm._s(_vm.description)+"\n  ")+"</p> <div"+(_vm._ssrClass("lightbox text-right",{ active: _vm.active }))+" data-v-b8bd4aac><p class=\"underline uppercase\" data-v-b8bd4aac>Close</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)("./" + _vm.img)))+" alt data-v-b8bd4aac> <p class=\"text-center w-full\" data-v-b8bd4aac>"+_vm._ssrEscape(_vm._s(_vm.description))+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ImageLightbox.vue?vue&type=template&id=b8bd4aac&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageLightbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ImageLightboxvue_type_script_lang_js_ = ({
  props: ["img", "description"],

  data() {
    return {
      active: false
    };
  },

  mounted() {},

  methods: {
    toggle() {
      this.active = !this.active;
    },

    toggleOutside(e) {
      if (e.target == e.currentTarget) this.active = !this.active;
    }

  }
});
// CONCATENATED MODULE: ./components/ImageLightbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageLightboxvue_type_script_lang_js_ = (ImageLightboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ImageLightbox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImageLightboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b8bd4aac",
  "3654b83c"
  
)

/* harmony default export */ var ImageLightbox = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/goliath.c509ac4.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackademics.0c87595.gif";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-1.887a40a.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-2.42872ec.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-3.e5e0472.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-4.26bfb31.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-5.df73cf1.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdb-1.da2cd0f.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdb-2.b2fb149.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdb-3.c1ae482.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdb-4.989db15.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kineticType.4de389b.gif";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/leoMarin.1058b4f.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-1.a153f56.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-2.4c32520.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-3.ebaf221.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-4.b15107b.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-5.0a0a27d.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-6.d34fe0e.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-7.4ab8948.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sweetDelights-1.46d18ae.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sweetDelights-2.5d3d18a.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sweetDelights-3.112876f.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/touchDesigner-1.aa3056c.gif";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/touchDesigner-2.8847ec7.gif";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/workCulture.9bc098b.png";

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLightbox_vue_vue_type_style_index_0_id_b8bd4aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLightbox_vue_vue_type_style_index_0_id_b8bd4aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLightbox_vue_vue_type_style_index_0_id_b8bd4aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLightbox_vue_vue_type_style_index_0_id_b8bd4aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLightbox_vue_vue_type_style_index_0_id_b8bd4aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\nimg[data-v-b8bd4aac]{\n  max-width:1024px;\n  max-height:80vh;\n  cursor:pointer;\n  margin-left:auto;\n  margin-right:auto;\n  height:100%;\n  width:100%;\n  -o-object-fit:contain;\n     object-fit:contain\n}\n.lightbox[data-v-b8bd4aac]{\n  position:fixed;\n  z-index:1000;\n  top:0;\n  left:0;\n  width:100vw;\n  height:100vh;\n  background:rgba(0,0,0,.4);\n  display:none;\n  flex-direction:column;\n  justify-content:center;\n  align-items:flex-end;\n  -webkit-backdrop-filter:blur(6px);\n          backdrop-filter:blur(6px);\n  padding:1rem\n}\n.lightbox.active[data-v-b8bd4aac]{\n  display:flex\n}\n.lightbox img[data-v-b8bd4aac]{\n  max-width:90%;\n  max-height:90%;\n  padding:0 1rem;\n  -o-object-fit:contain;\n     object-fit:contain;\n  margin:1rem auto\n}\n.lightbox p[data-v-b8bd4aac]{\n  color:#fff\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("e1fa0e84", content, true, context)
};

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hackville_vue_vue_type_style_index_0_id_83be29d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hackville_vue_vue_type_style_index_0_id_83be29d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hackville_vue_vue_type_style_index_0_id_83be29d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hackville_vue_vue_type_style_index_0_id_83be29d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hackville_vue_vue_type_style_index_0_id_83be29d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.mw-800[data-v-83be29d4]{\n  max-width:800px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/hackville.vue?vue&type=template&id=83be29d4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-4 w-full text-center"},[_c('ImageLightbox',{attrs:{"img":"hackville-1.png","description":"UI Home page design."}}),_vm._ssrNode(" <div class=\"text-left mw-800 mx-auto my-8\" data-v-83be29d4><h2 class=\"main-font text-9xl uppercase\" data-v-83be29d4>Hackville 2020</h2> <p data-v-83be29d4>\n      Hackville is Sheridan College’s student-led hackathon run by the Hackademics Club.\n      Hackville welcomes all, from first-time hackers to seasoned pros to take part in\n      social good challenges hosted by various sponsors.\n      <br data-v-83be29d4><br data-v-83be29d4>\n      With this project, I mobilized a small team of designers to create visual assets\n      and promotional content for the event. To help uphold visual consistency I\n      designed a brand and illustration guide.\n    </p></div> "),_c('ImageLightbox',{attrs:{"img":"hackville-2.png","description":"Pages from Brand Guide."}}),_vm._ssrNode(" "),_c('ImageLightbox',{attrs:{"img":"hackville-3.png","description":"Pages from Illustration Guide."}}),_vm._ssrNode(" "),_c('ImageLightbox',{attrs:{"img":"hackville-4.png","description":"Event banner."}}),_vm._ssrNode(" "),_c('ImageLightbox',{attrs:{"img":"hackville-5.png","description":"Event schedule."}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/hackville.vue?vue&type=template&id=83be29d4&scoped=true&

// EXTERNAL MODULE: ./components/ImageLightbox.vue + 4 modules
var ImageLightbox = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/hackville.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var hackvillevue_type_script_lang_js_ = ({
  components: {
    ImageLightbox: ImageLightbox["default"]
  }
});
// CONCATENATED MODULE: ./pages/hackville.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_hackvillevue_type_script_lang_js_ = (hackvillevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/hackville.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_hackvillevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "83be29d4",
  "0777b831"
  
)

/* harmony default export */ var hackville = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ImageLightbox: __webpack_require__(47).default})


/***/ })
]);;
//# sourceMappingURL=hackville.js.map