exports.ids = [5];
exports.modules = {

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("133df5d7", content, true, context)
};

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameHeader_vue_vue_type_style_index_0_id_020483cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameHeader_vue_vue_type_style_index_0_id_020483cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameHeader_vue_vue_type_style_index_0_id_020483cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameHeader_vue_vue_type_style_index_0_id_020483cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameHeader_vue_vue_type_style_index_0_id_020483cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 149:
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

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NameHeader.vue?vue&type=template&id=020483cf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative mb-40 kb-max-w ctr"},[_vm._ssrNode("<div class=\"flex justify-center items-center relative z-50\" data-v-020483cf><h1 class=\"uppercase\" data-v-020483cf>Katie Burton</h1></div> <img id=\"sticker-uxr\""+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-visual\""+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-3d\""+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-usability\""+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-ui\""+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-motion\""+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt class=\"sticker\" data-v-020483cf> <img id=\"sticker-branding\""+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt class=\"sticker\" data-v-020483cf>")])}
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
  
  var style0 = __webpack_require__(148)
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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-3d.051f6ce.png";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-branding.7047a74.png";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-motion.32374d0.png";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-ui.aa91970.png";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-usability.c01526f.png";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-uxr.fe06a52.png";

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sticker-visual.f85c4ba.png";

/***/ })

};;
//# sourceMappingURL=name-header.js.map