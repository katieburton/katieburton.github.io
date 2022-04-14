exports.ids = [10,1,2,5];
exports.modules = {

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4847d1fc", content, true, context)
};

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudyCard.vue?vue&type=template&id=5e8356e2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full my-16"},[_c('NuxtLink',{attrs:{"to":_vm.link}},[_c('div',{staticClass:"flex flex-col md:flex-row md:items-center gap-4 md:gap-8"},[_c('div',{staticClass:"block md:hidden"},[_c('div',{staticClass:"text-8xl main-font uppercase leading-none"},[_vm._v("\n          "+_vm._s(_vm.title)+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"flex gap-2 w-full justify-center my-2"},_vm._l((_vm.tags),function(tag,index){return _c('div',{key:index,staticClass:"uppercase tag"},[_vm._v("\n            "+_vm._s(tag)+"\n          ")])}),0)]),_vm._v(" "),_c('div',{staticClass:"md:w-5/12"},[_c('img',{staticClass:"w-full h-3/6 md:h-auto object-cover",attrs:{"src":__webpack_require__(117)("./" + _vm.name + "-t-1.png"),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"flex-1 text-left"},[_c('div',{staticClass:"md:w-9/12 mx-auto"},[_c('div',{staticClass:"hidden md:block"},[_c('div',{staticClass:"text-8xl main-font uppercase"},[_vm._v("\n              "+_vm._s(_vm.title)+"\n            ")]),_vm._v(" "),_c('div',[_vm._v("\n              "+_vm._s(_vm.description)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"flex gap-2 w-full justify-start my-4"},_vm._l((_vm.tags),function(tag,index){return _c('div',{key:index,staticClass:"uppercase tag"},[_vm._v("\n                "+_vm._s(tag)+"\n              ")])}),0)]),_vm._v(" "),_c('div',{staticClass:"purple font-bold my-2 md:my-16 text-right md:text-left"},[_vm._v("\n            View case study →\n          ")])])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CaseStudyCard.vue?vue&type=template&id=5e8356e2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudyCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CaseStudyCardvue_type_script_lang_js_ = ({
  props: ["idName", "name", "title", "description", "link", "thumbnail", "tags"]
});
// CONCATENATED MODULE: ./components/CaseStudyCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CaseStudyCardvue_type_script_lang_js_ = (CaseStudyCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CaseStudyCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(118)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CaseStudyCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5e8356e2",
  "3da9fea3"
  
)

/* harmony default export */ var CaseStudyCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gallery; });
const gallery = [{
  name: "kdb",
  title: "katja de bourbon",
  description: "An artistic portfolio site for an emotion-driven cinematographer.",
  thumbnail: "KDB-1.png",
  tags: ["branding", "ui design"]
}, {
  name: "hackville",
  title: "hackville 2020",
  description: "A cohesive brand for a student-wide hackathon.",
  thumbnail: "Hackville-1.png",
  tags: ["branding", "ui design", "creative direction"]
} // {
//   name: "sweetDelights",
//   description: "sweet delights",
//   thumbnail: "SweetDelights.png",
//   tags: ["branding"],
// },
// {
//   name: "spark",
//   title: "spark app",
//   description:
//     "A collaborative storytelling app helping connect the Asian diaspora within Canada.",
//   thumbnail1: "SparkApp.png",
//   tags: ["ux research", "ui design"],
// },
// {
//   name: "nob",
//   description: "north of brooklyn",
//   thumbnail: "NoB-1.png",
//   tags: ["branding", "ui design"],
// },
// {
// 	name: 'leoMarin',
// 	description: 'leo marin branding',
// 	thumbnail: 'LeoMarin.png',
// },
// {
// 	name: 'milesJoseph',
// 	description: 'miles joseph photography branding',
// 	thumbnail: 'MilesJoseph.png',
// },
// {
// 	name: 'goliath',
// 	description: 'goliath skateboard deck designs',
// 	thumbnail: 'Goliath.png',
// },
];

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./hackville-t-1.png": 34,
	"./kdb-t-1.png": 35
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
webpackContext.id = 117;

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_5e8356e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_5e8356e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_5e8356e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_5e8356e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_5e8356e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@media (min-width: 768px){\nimg[data-v-5e8356e2]{\n    height:80vh\n}\n}\n.card-outer-container[data-v-5e8356e2]{\n  width:100%\n}\n.card-inner-container[data-v-5e8356e2]{\n  max-width:400px;\n  margin-left:auto;\n  margin-right:auto;\n  width:100%;\n  padding-top:1.5rem;\n  padding-bottom:1.5rem\n}\n#case-4[data-v-5e8356e2]{\n  border-bottom:1px solid #000\n}\n.thumbnail-left[data-v-5e8356e2],.thumbnail-right[data-v-5e8356e2]{\n  position:absolute;\n  max-height:50vh;\n  max-width:50vw;\n  -o-object-fit:contain;\n     object-fit:contain;\n  opacity:0;\n  z-index:-1;\n  transition:all .2s ease-in-out\n}\n.card-outer-container:hover .thumbnail-left[data-v-5e8356e2],.card-outer-container:hover .thumbnail-right[data-v-5e8356e2]{\n  opacity:1\n}\n.thumbnail-left[data-v-5e8356e2]{\n  top:25%;\n  left:2rem;\n  transform:rotate(-15deg)\n}\n.thumbnail-right[data-v-5e8356e2]{\n  top:0;\n  right:2rem;\n  transform:rotate(15deg)\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0b8ae510", content, true, context)
};

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("133df5d7", content, true, context)
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyMenu_vue_vue_type_style_index_0_id_69701ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyMenu_vue_vue_type_style_index_0_id_69701ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyMenu_vue_vue_type_style_index_0_id_69701ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyMenu_vue_vue_type_style_index_0_id_69701ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyMenu_vue_vue_type_style_index_0_id_69701ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.case-card[data-v-69701ec6]{\n  transform:translateY(100px);\n  opacity:0;\n  transition:.25s ease-in\n}\n.case-card.show[data-v-69701ec6]{\n  transform:translateY(0);\n  opacity:1\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameHeader_vue_vue_type_style_index_0_id_020483cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameHeader_vue_vue_type_style_index_0_id_020483cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameHeader_vue_vue_type_style_index_0_id_020483cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameHeader_vue_vue_type_style_index_0_id_020483cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameHeader_vue_vue_type_style_index_0_id_020483cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\nh1[data-v-020483cf]{\n  font-size:7rem\n}\n.sticker[data-v-020483cf]{\n  max-width:200px;\n  max-height:100px;\n  -o-object-fit:contain;\n     object-fit:contain;\n  position:absolute;\n  transform:scale(.8);\n  transition:all .1s ease-in-out\n}\n.sticker[data-v-020483cf]:hover{\n  transform:rotate(8deg) scale(1)!important\n}\n#sticker-uxr[data-v-020483cf]{\n  top:-1rem;\n  left:-2rem;\n  transform:rotate(-15deg) scale(.8)\n}\n#sticker-visual[data-v-020483cf]{\n  top:-4rem;\n  right:-1rem;\n  transform:rotate(4deg) scale(.8);\n  z-index:100\n}\n#sticker-3d[data-v-020483cf]{\n  bottom:-1rem;\n  left:-4rem;\n  max-width:150px\n}\n#sticker-3d[data-v-020483cf],#sticker-usability[data-v-020483cf]{\n  transform:rotate(-15deg) scale(.8);\n  z-index:10\n}\n#sticker-usability[data-v-020483cf]{\n  bottom:-5rem;\n  left:-3rem;\n  max-width:120px\n}\n#sticker-ui[data-v-020483cf]{\n  bottom:-1.5rem;\n  left:.5rem;\n  transform:rotate(-10deg) scale(.8);\n  z-index:100;\n  max-width:160px\n}\n#sticker-motion[data-v-020483cf]{\n  bottom:0;\n  right:-3rem;\n  max-width:160px\n}\n#sticker-branding[data-v-020483cf],#sticker-motion[data-v-020483cf]{\n  transform:rotate(4deg) scale(.8);\n  z-index:10\n}\n#sticker-branding[data-v-020483cf]{\n  bottom:-1rem;\n  right:0;\n  max-width:180px\n}\n@media (min-width: 768px){\n.ctr[data-v-020483cf]{\n    transform:scale(1.5)\n}\n}\n@media (min-width: 1024px){\n.ctr[data-v-020483cf],.sticker[data-v-020483cf]{\n    transform:scale(1)\n}\n.sticker[data-v-020483cf]{\n    max-width:250px;\n    max-height:150px\n}\n.sticker[data-v-020483cf]:hover{\n    transform:rotate(8deg) scale(1.1)!important\n}\nh1[data-v-020483cf]{\n    font-size:20rem;\n    line-height:15rem;\n    text-align:center\n}\n#sticker-uxr[data-v-020483cf]{\n    top:-6rem;\n    left:-4rem;\n    transform:rotate(-15deg)\n}\n#sticker-visual[data-v-020483cf]{\n    top:-8rem;\n    right:-6rem;\n    transform:rotate(4deg);\n    z-index:100\n}\n#sticker-3d[data-v-020483cf]{\n    bottom:2rem;\n    left:-7rem;\n    max-width:150px\n}\n#sticker-3d[data-v-020483cf],#sticker-usability[data-v-020483cf]{\n    transform:rotate(-15deg);\n    z-index:10\n}\n#sticker-usability[data-v-020483cf]{\n    bottom:-5rem;\n    left:-8rem;\n    max-width:120px\n}\n#sticker-ui[data-v-020483cf]{\n    bottom:-2rem;\n    left:-.5rem;\n    transform:rotate(-10deg);\n    z-index:100;\n    max-width:160px\n}\n#sticker-motion[data-v-020483cf]{\n    bottom:1rem;\n    right:-10rem;\n    transform:rotate(4deg);\n    z-index:10;\n    max-width:160px\n}\n#sticker-branding[data-v-020483cf]{\n    bottom:-1rem;\n    right:-6rem;\n    z-index:10;\n    max-width:180px\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudyMenu.vue?vue&type=template&id=69701ec6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center"},[_vm._ssrNode("<h2 class=\"uppercase\" data-v-69701ec6>Case Studies</h2> "),_vm._ssrNode("<div class=\"card-wrapper my-6\" data-v-69701ec6>","</div>",_vm._l((_vm.gallery),function(gal,index){return _c('CaseStudyCard',{key:index,staticClass:"case-card",attrs:{"thumbnail":gal.thumbnail,"title":gal.title,"description":gal.description,"link":'/' + gal.name,"tags":gal.tags,"idName":'case-' + index,"name":gal.name}})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CaseStudyMenu.vue?vue&type=template&id=69701ec6&scoped=true&

// EXTERNAL MODULE: ./data.js
var data = __webpack_require__(116);

// EXTERNAL MODULE: ./components/CaseStudyCard.vue + 4 modules
var CaseStudyCard = __webpack_require__(115);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudyMenu.vue?vue&type=script&lang=js&
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


/* harmony default export */ var CaseStudyMenuvue_type_script_lang_js_ = ({
  components: {
    CaseStudyCard: CaseStudyCard["default"]
  },

  data() {
    return {
      gallery: data["a" /* gallery */]
    };
  },

  mounted() {
    const cards = document.querySelectorAll(".case-card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.25
    });
    cards.forEach(card => {
      observer.observe(card);
    });
  }

});
// CONCATENATED MODULE: ./components/CaseStudyMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CaseStudyMenuvue_type_script_lang_js_ = (CaseStudyMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CaseStudyMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CaseStudyMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "69701ec6",
  "1a2ad972"
  
)

/* harmony default export */ var CaseStudyMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CaseStudyCard: __webpack_require__(115).default})


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NameHeader.vue?vue&type=template&id=020483cf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative mb-40 kb-max-w ctr"},[_vm._ssrNode("<div class=\"flex justify-center items-center relative z-50\" data-v-020483cf><h1 class=\"uppercase\" data-v-020483cf>Katie Burton</h1></div> <img id=\"sticker-uxr\""+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-visual\""+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-3d\""+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-usability\""+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-ui\""+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-motion\""+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-branding\""+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt class=\"sticker\" data-v-020483cf>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/NameHeader.vue?vue&type=template&id=020483cf&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NameHeader.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var NameHeadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/NameHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NameHeadervue_type_script_lang_js_ = (NameHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NameHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NameHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "020483cf",
  "6182596e"
  
)

/* harmony default export */ var NameHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("31102a3a", content, true, context)
};

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_96cba28e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_96cba28e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_96cba28e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_96cba28e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_96cba28e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.hero[data-v-96cba28e]{\n  height:100vh\n}\n.line-container[data-v-96cba28e]{\n  width:1px;\n  margin:2rem auto 0;\n  height:100px;\n  position:relative;\n  padding:0;\n  background-color:#ccc\n}\n.hscroll-line[data-v-96cba28e]{\n  width:100%;\n  height:50%;\n  position:absolute;\n  overflow:hidden;\n  background-color:#000;\n  transform:translateY(0);\n  -webkit-animation:move-data-v-96cba28e 1s infinite;\n          animation:move-data-v-96cba28e 1s infinite\n}\n@-webkit-keyframes move-data-v-96cba28e{\n0%{\n    transform:translateY(0);\n    height:0\n}\n30%{\n    height:50%\n}\n80%{\n    transform:translateY(50px);\n    height:50%\n}\nto{\n    height:0;\n    transform:translateY(100px)\n}\n}\n@keyframes move-data-v-96cba28e{\n0%{\n    transform:translateY(0);\n    height:0\n}\n30%{\n    height:50%\n}\n80%{\n    transform:translateY(50px);\n    height:50%\n}\nto{\n    height:0;\n    transform:translateY(100px)\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=96cba28e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-4 w-full"},[_vm._ssrNode("<div class=\"hero flex flex-col md:justify-center items-center w-full kb-max-w\" data-v-96cba28e>","</div>",[_c('NameHeader'),_vm._ssrNode(" <div class=\"flex justify-between items-center w-full flex-col md:flex-row gap-6\" data-v-96cba28e><div class=\"flex-1 text-center\" data-v-96cba28e><div data-v-96cba28e><strong data-v-96cba28e>Visual and UX Designer </strong> based in\n          <strong data-v-96cba28e> Toronto </strong>passionate about exploring bold aesthetics\n          and intuitive experiences.\n        </div> <div class=\"line-container\" data-v-96cba28e><div class=\"hscroll-line\" data-v-96cba28e></div></div></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-96cba28e>","</div>",[_c('CaseStudyMenu')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=96cba28e&scoped=true&

// EXTERNAL MODULE: ./components/CaseStudyMenu.vue + 4 modules
var CaseStudyMenu = __webpack_require__(128);

// EXTERNAL MODULE: ./components/NameHeader.vue + 4 modules
var NameHeader = __webpack_require__(129);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    CaseStudyMenu: CaseStudyMenu["default"],
    NameHeader: NameHeader["default"]
  },
  name: "IndexPage"
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "96cba28e",
  "1a5cfe8a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NameHeader: __webpack_require__(129).default,CaseStudyMenu: __webpack_require__(128).default})


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-t-1.f3d192c.png";

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdb-t-1.aebf683.png";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-3d.051f6ce.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-branding.7047a74.png";

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-motion.32374d0.png";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-ui.aa91970.png";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-usability.c01526f.png";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-uxr.fe06a52.png";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-visual.f85c4ba.png";

/***/ })

};;
//# sourceMappingURL=index.js.map