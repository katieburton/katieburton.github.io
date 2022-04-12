exports.ids = [1];
exports.modules = {

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4847d1fc", content, true, context)
};

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudyCard.vue?vue&type=template&id=5e8356e2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full my-16"},[_c('NuxtLink',{attrs:{"to":_vm.link}},[_c('div',{staticClass:"flex flex-col md:flex-row md:items-center gap-4 md:gap-8"},[_c('div',{staticClass:"block md:hidden"},[_c('div',{staticClass:"text-8xl main-font uppercase leading-none"},[_vm._v("\n          "+_vm._s(_vm.title)+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"flex gap-2 w-full justify-center my-2"},_vm._l((_vm.tags),function(tag,index){return _c('div',{key:index,staticClass:"uppercase tag"},[_vm._v("\n            "+_vm._s(tag)+"\n          ")])}),0)]),_vm._v(" "),_c('div',{staticClass:"md:w-5/12"},[_c('img',{staticClass:"w-full h-3/6 md:h-auto object-cover",attrs:{"src":__webpack_require__(139)("./" + _vm.name + "-t-1.png"),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"flex-1 text-left"},[_c('div',{staticClass:"md:w-9/12 mx-auto"},[_c('div',{staticClass:"hidden md:block"},[_c('div',{staticClass:"text-8xl main-font uppercase"},[_vm._v("\n              "+_vm._s(_vm.title)+"\n            ")]),_vm._v(" "),_c('div',[_vm._v("\n              "+_vm._s(_vm.description)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"flex gap-2 w-full justify-start my-4"},_vm._l((_vm.tags),function(tag,index){return _c('div',{key:index,staticClass:"uppercase tag"},[_vm._v("\n                "+_vm._s(tag)+"\n              ")])}),0)]),_vm._v(" "),_c('div',{staticClass:"purple font-bold my-2 md:my-16 text-right md:text-left"},[_vm._v("\n            View case study →\n          ")])])])])])],1)}
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
  
  var style0 = __webpack_require__(140)
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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./hackville-t-1.png": 36,
	"./kdb-t-1.png": 34,
	"./nob-t-1.png": 37,
	"./spark-t-1.png": 38,
	"./sweetDelights-t-1.png": 39
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
webpackContext.id = 139;

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_5e8356e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_5e8356e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_5e8356e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_5e8356e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_5e8356e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 141:
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdb-t-1.cd4e258.png";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-t-1.0b4aa11.png";

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-t-1.563420a.png";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spark-t-1.81f26e1.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sweetDelights-t-1.2d77154.png";

/***/ })

};;
//# sourceMappingURL=case-study-card.js.map