exports.ids = [1];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-t-1.0b4aa11.png";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hackville-t-2.721c42a.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdb-t-1.c0e0359.png";

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdb-t-2.77c9801.png";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-t-1.563420a.png";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nob-t-2.a46df75.png";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spark-t-1.54961ef.png";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spark-t-2.81f26e1.png";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sweetDelights-t-1.2d77154.png";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sweetDelights-t-2.1fd3a83.png";

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("a66a49c4", content, true, context)
};

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudyCard.vue?vue&type=template&id=bedc18d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center relative"},[_c('NuxtLink',{attrs:{"to":_vm.link}},[_c('div',{staticClass:"card-outer-container"},[_c('div',{staticClass:"card-inner-container kb-border-top kb-border-bottom",attrs:{"id":_vm.idName}},[_c('div',{staticClass:"text-8xl main-font uppercase"},[_vm._v("\n          "+_vm._s(_vm.description)+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"case-card-tags text-center flex w-full justify-center"},_vm._l((_vm.tags),function(tag,index){return _c('div',{key:index,staticClass:"uppercase px-2"},[_vm._v("\n            "+_vm._s(tag)+"\n          ")])}),0),_vm._v(" "),_c('img',{staticClass:"thumbnail-left",attrs:{"src":__webpack_require__(92)("./" + _vm.name + "-t-1.png"),"alt":""}}),_vm._v(" "),_c('img',{staticClass:"thumbnail-right",attrs:{"src":__webpack_require__(93)("./" + _vm.name + "-t-2.png"),"alt":""}})])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CaseStudyCard.vue?vue&type=template&id=bedc18d2&scoped=true&

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
/* harmony default export */ var CaseStudyCardvue_type_script_lang_js_ = ({
  props: ["idName", "name", "description", "link", "thumbnail", "tags"]
});
// CONCATENATED MODULE: ./components/CaseStudyCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CaseStudyCardvue_type_script_lang_js_ = (CaseStudyCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CaseStudyCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(94)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CaseStudyCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bedc18d2",
  "3da9fea3"
  
)

/* harmony default export */ var CaseStudyCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./hackville-t-1.png": 37,
	"./kdb-t-1.png": 39,
	"./nob-t-1.png": 41,
	"./spark-t-1.png": 43,
	"./sweetDelights-t-1.png": 45
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
webpackContext.id = 92;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./hackville-t-2.png": 38,
	"./kdb-t-2.png": 40,
	"./nob-t-2.png": 42,
	"./spark-t-2.png": 44,
	"./sweetDelights-t-2.png": 46
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
webpackContext.id = 93;

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_bedc18d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_bedc18d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_bedc18d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_bedc18d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudyCard_vue_vue_type_style_index_0_id_bedc18d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.card-outer-container[data-v-bedc18d2]{\n  width:100%\n}\n.card-inner-container[data-v-bedc18d2]{\n  max-width:400px;\n  margin-left:auto;\n  margin-right:auto;\n  width:100%;\n  padding-top:1.5rem;\n  padding-bottom:1.5rem\n}\n#case-4[data-v-bedc18d2]{\n  border-bottom:1px solid #000\n}\n.thumbnail-left[data-v-bedc18d2],.thumbnail-right[data-v-bedc18d2]{\n  position:absolute;\n  max-height:50vh;\n  max-width:50vw;\n  -o-object-fit:contain;\n     object-fit:contain;\n  opacity:0;\n  z-index:-1;\n  transition:all .2s ease-in-out\n}\n.card-outer-container:hover .thumbnail-left[data-v-bedc18d2],.card-outer-container:hover .thumbnail-right[data-v-bedc18d2]{\n  opacity:1\n}\n.thumbnail-left[data-v-bedc18d2]{\n  top:25%;\n  left:2rem;\n  transform:rotate(-15deg)\n}\n.thumbnail-right[data-v-bedc18d2]{\n  top:0;\n  right:2rem;\n  transform:rotate(15deg)\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=case-study-card.js.map