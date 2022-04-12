exports.ids = [12];
exports.modules = {

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("de970a1e", content, true, context)
};

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spark_vue_vue_type_style_index_0_id_48047678_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spark_vue_vue_type_style_index_0_id_48047678_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spark_vue_vue_type_style_index_0_id_48047678_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spark_vue_vue_type_style_index_0_id_48047678_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spark_vue_vue_type_style_index_0_id_48047678_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.coImg[data-v-48047678]{\n  height:200px;\n  max-width:200px;\n  padding:3rem;\n  margin:0 auto 2rem;\n  -o-object-fit:contain;\n     object-fit:contain\n}\n.orange-bg[data-v-48047678]{\n  background-color:#ebad51\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/spark.vue?vue&type=template&id=48047678&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(54)))+" alt class=\"kb-img-max-h object-cover w-full\" data-v-48047678> <div class=\"p-4 flex flex-col items-center text-center mx-auto my-8\" data-v-48047678><h1 class=\"main-font text-9xl uppercase\" data-v-48047678>Spark App</h1> <p data-v-48047678>\n      A <strong data-v-48047678>collaborative storytelling app</strong> helping connect the\n      Asian diaspora within Canada.\n    </p> <div class=\"flex gap-4 py-4\" data-v-48047678><p class=\"tag\" data-v-48047678>Capstone</p> <p class=\"tag\" data-v-48047678>UX Research</p> <p class=\"tag\" data-v-48047678>UI Design</p></div></div> <div class=\"p-4 kb-max-w my-16\" data-v-48047678><h2 class=\"overline mb-8\" data-v-48047678>Project Info</h2> <div class=\"flex flex-col md:flex-row gap-16 md:gap-4\" data-v-48047678><div class=\"flex-1 flex gap-8 flex-wrap\" data-v-48047678><p class=\"w-5/12\" data-v-48047678><strong data-v-48047678>Project Type</strong><br data-v-48047678>\n          Independent Capsone\n        </p> <p class=\"w-5/12\" data-v-48047678><strong data-v-48047678>Team</strong><br data-v-48047678>\n          Solo\n        </p> <p class=\"w-5/12\" data-v-48047678><strong data-v-48047678>My Role</strong> <br data-v-48047678>\n          UX Designer <br data-v-48047678>UI Designer\n        </p> <p class=\"w-5/12\" data-v-48047678><strong data-v-48047678>Timeline</strong><br data-v-48047678>\n          6 months\n        </p> <p class=\"w-5/12\" data-v-48047678><strong data-v-48047678>Tools</strong><br data-v-48047678>\n          Figma <br data-v-48047678>Miro <br data-v-48047678>Condens.io <br data-v-48047678>Otter.io\n        </p></div> <div class=\"flex-1\" data-v-48047678>\n        Over a 6 month period between September 2020 to April 2021, I worked\n        on this project as my capstone in my final year of Sheridan’s\n        Interaction Design program. The inspiration came grew from\n        conversations with Asian-Canadian friends and genuine, deep-seated\n        curiosity.\n      </div></div></div> <div class=\"p-4 my-16 kb-max-w\" data-v-48047678><h2 class=\"overline mb-8\" data-v-48047678>Introduction</h2> <div class=\"flex flex-col md:flex-row gap-8\" data-v-48047678><h3 class=\"flex-1 heading\" data-v-48047678>Immigration is hard.</h3> <p class=\"flex-1\" data-v-48047678>\n        Around 300 000 people uproot and immigrate to Canada each year, with\n        the top three origins of foreign-born people being from India, China,\n        and the Philippines.\n        <br data-v-48047678><br data-v-48047678>\n        Immigrants experience multiple layers of stress, also known as\n        acculturation stress, which can significantly impact their mental and\n        emotional well-being. This can result in a loss of cultural norms,\n        social status, religious customs, social support systems, adjusting to\n        a new culture and experiencing changes in identity.\n      </p></div></div> <div class=\"flex flex-col md:flex-row gap-16 items-center my-16\" data-v-48047678><div class=\"flex-1\" data-v-48047678><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt class=\"kb-img-max-h object-contain\" data-v-48047678></div> <div class=\"flex-1 p-4\" data-v-48047678><h2 class=\"overline mb-4\" data-v-48047678>Problem Statement</h2> <p class=\"subheading-2\" style=\"max-width: 620px\" data-v-48047678>\n        How might we help foster more positive cultural connections within 1st\n        and 2nd gen Asian-Canadians?\n      </p></div></div> <div class=\"my-16 p-4 kb-max-w\" data-v-48047678><h2 class=\"overline mb-8\" data-v-48047678>Research &amp; Findings</h2> <div class=\"flex flex-col md:flex-row gap-16\" data-v-48047678><div class=\"flex-1\" data-v-48047678><h3 class=\"heading\" data-v-48047678>\n          Speaking with 15 Asian-Canadians about their cultural transitions.\n        </h3></div> <div class=\"flex-1\" data-v-48047678><p data-v-48047678>\n          I conducted interviews with 15 1st and 2nd gen Asian-Canadians aged\n          18-31 with origins from the Philippines, China, India, Korea,\n          Vietnam, and Pakistan. Many factors came into play when building\n          connection, the most influential being their past experiences and\n          their family’s transition into Canadian culture.\n        </p></div></div></div> <div class=\"my-16\" data-v-48047678><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-48047678></div> <div class=\"my-16 p-4 kb-max-w text-center\" data-v-48047678><div class=\"overline mb-4\" data-v-48047678>RESEARCH QUESTION</div> <div class=\"subheading-2 w-8/12 mx-auto\" data-v-48047678>\n      What challenges do Asian-Canadians face when connecting to their ethnic\n      culture?\n    </div></div> <div class=\"my-16 p-4 kb-max-w\" data-v-48047678><div class=\"flex justify-center items-center gap-4 my-8\" data-v-48047678><div class=\"flex-1\" data-v-48047678><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt class=\"kb-img-max-h object-cover\" data-v-48047678></div> <div class=\"flex-1\" data-v-48047678><p class=\"my-4\" data-v-48047678>\n          01\n          <br data-v-48047678> <strong data-v-48047678>The influences of their two cultures frequently pull them in\n            opposite directions causing internal pressure and conflict about\n            their personal identity and social place</strong></p> <p class=\"my-4\" data-v-48047678>\n          02\n          <br data-v-48047678> <strong data-v-48047678>How well the participants spoke their parents' languages affected\n            their personal identity greatly.\n          </strong></p> <p class=\"my-4\" data-v-48047678>\n          03\n          <br data-v-48047678> <strong data-v-48047678>Those living in or who grew up in white-dominant populations felt\n            a greater pressure to conform and repress their ethnic\n            culture.</strong></p></div></div> <div class=\"flex justify-center items-center gap-4 my-8\" data-v-48047678><div class=\"flex-1\" data-v-48047678><p class=\"my-4\" data-v-48047678>\n          04\n          <br data-v-48047678> <strong data-v-48047678>Connection to culture primarily depends on family’s influence\n            which lessens over time.</strong></p> <p class=\"my-4\" data-v-48047678>\n          05\n          <br data-v-48047678> <strong data-v-48047678>Asian-Canadians desire to connect, but don’t know how or where to\n            start.\n          </strong></p></div> <div class=\"flex-1\" data-v-48047678><img"+(_vm._ssrAttr("src",__webpack_require__(58)))+" alt class=\"w-full kb-img-max-h object-cover\" style=\"height: 400px\" data-v-48047678></div></div></div> <div class=\"my-16 p-4 kb-max-w\" data-v-48047678><div class=\"subheading mb-4 text-center\" data-v-48047678>Co-Creation Agenda</div> <div class=\"flex gap-8\" data-v-48047678><div class=\"flex-1\" data-v-48047678><img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt class=\"coImg\" data-v-48047678> <p data-v-48047678><strong data-v-48047678>1. Life Map</strong> <br data-v-48047678>\n          Participants first mapped out their cultural journey on a timeline,\n          adding significant life events, how they’ve connected or\n          disconnected to their ethnic culture, and emotions.\n          <br data-v-48047678><br data-v-48047678> <strong data-v-48047678>Why</strong> <br data-v-48047678>\n          It was a highly reflective activity that gave context to their goals\n          and motivations over time while also getting them in the mindset for\n          co-creating.\n        </p></div> <div class=\"flex-1\" data-v-48047678><img"+(_vm._ssrAttr("src",__webpack_require__(50)))+" alt class=\"coImg\" data-v-48047678> <p data-v-48047678><strong data-v-48047678>2. Empathy Map</strong> <br data-v-48047678>\n          After thinking a lot about the past, this activity focused on their\n          present.\n          <br data-v-48047678><br data-v-48047678> <strong data-v-48047678>Why</strong> <br data-v-48047678>\n          It was to help me better understand what goes on in their day-to-day\n          and how their culture affects them.\n        </p></div> <div class=\"flex-1\" data-v-48047678><img"+(_vm._ssrAttr("src",__webpack_require__(53)))+" alt class=\"coImg\" data-v-48047678> <p data-v-48047678><strong data-v-48047678>3. Questionnaire</strong> <br data-v-48047678>\n          Next, they were to answer 3 questions to find out how they wanted to\n          connect with their ethnic culture.\n          <br data-v-48047678><br data-v-48047678> <strong data-v-48047678>Why</strong> <br data-v-48047678>\n          This really clarified many assumptions I had surrounding the\n          solution.\n        </p></div> <div class=\"flex-1\" data-v-48047678><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt class=\"coImg\" data-v-48047678> <p data-v-48047678><strong data-v-48047678>4. Crazy 8’s</strong> <br data-v-48047678>\n          Lastly, using the challenge statement participants were to think\n          about all the activities they had just completed and try to come up\n          with as many solutions to the challenge as possible.\n          <br data-v-48047678><br data-v-48047678> <strong data-v-48047678>Why</strong> <br data-v-48047678>\n          This activity helped generate more ideas from the target audience\n          themselves, to help mitigate my personal biases towards solutions.\n        </p></div></div></div> <div class=\"flex flex-col md:flex-row gap-16 items-center my-16\" data-v-48047678><div class=\"flex-1\" data-v-48047678><img"+(_vm._ssrAttr("src",__webpack_require__(59)))+" alt class=\"kb-img-max-h object-contain\" data-v-48047678></div> <div class=\"flex-1 p-4\" data-v-48047678><h2 class=\"subheading mb-4\" data-v-48047678>Storytelling Interview</h2> <p style=\"max-width: 620px\" data-v-48047678>\n        I conducted 5 semi-structured storytelling interviews with pairs of\n        siblings and cousins aged 17-25, with either individuals being a 1st\n        or 2nd gen Asian-Canadian. The participant ethnic origins from the\n        Philippines, China, Vietnam, Thailand, and Laos.\n        <br data-v-48047678><br data-v-48047678>\n        During the interviews, participants were asked to collaboratively tell\n        a story of a favourite shared memory. This was for the purpose of\n        observing how Asian-Canadian family members interact with each other\n        when telling a story and uncover the underlying structure of stories.\n      </p></div></div> <div class=\"w-full orange-bg py-16\" data-v-48047678><div class=\"kb-max-w text-4xl text-white text-center\" data-v-48047678><span class=\"opacity-50 text-8xl\" data-v-48047678>“</span><br data-v-48047678>\n      Memories are hard to recall on the spot. An experience worth telling,\n      must be funny or interesting.\n    </div></div> <div class=\"my-16 p-4 kb-max-w\" data-v-48047678><h2 class=\"overline mb-8\" data-v-48047678>Ideation</h2> <div class=\"flex flex-col md:flex-row gap-16\" data-v-48047678><div class=\"flex-1\" data-v-48047678><h3 class=\"heading\" data-v-48047678>\n          A better platform for sharing life experiences.\n        </h3></div> <div class=\"flex-1\" data-v-48047678><p class=\"mb-4\" data-v-48047678>\n          An app that allows friends and families to retell and recreate\n          experiences in a collaborative space, helping them preserve their\n          memories and traditions from anywhere in the world. It lets users\n          find their cultural community, share stories, and provides people a\n          place to learn about themselves and their culture.\n        </p> <p data-v-48047678><strong data-v-48047678>Pros</strong></p> <ul class=\"list-disc pl-4\" data-v-48047678><li data-v-48047678>\n            There currently isn’t a collaborative creation platform just for\n            Asian-Canadians\n          </li> <li data-v-48047678>Encourages all perspectives and opinions</li> <li data-v-48047678>\n            Allows ESL users to communicate easily with English speakers\n          </li></ul> <p class=\"mt-4\" data-v-48047678><strong data-v-48047678>Cons</strong></p> <ul class=\"list-disc pl-4\" data-v-48047678><li data-v-48047678>Frustration could arise with older less tech-savvy users</li> <li data-v-48047678>\n            Frustration could arise in the younger users having to teach their\n            older family members how to use the app\n          </li></ul></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/spark.vue?vue&type=template&id=48047678&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/spark.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var sparkvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/spark.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_sparkvue_type_script_lang_js_ = (sparkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/spark.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(161)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sparkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "48047678",
  "2b90cb15"
  
)

/* harmony default export */ var spark = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Crazy8sGraphic.bf28b30.png";

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/EmpathyMapGraphic.ae538db.png";

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/LifeMapGraphic.44470c8.png";

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/QuestionnaireGraphic.c1fd243.png";

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/SparkHero.c89d388.png";

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/SparkProblemStatement.aa107a5.png";

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/SparkResearch1.76e2c46.png";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/SparkResearch2.af801d4.png";

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/SparkResearch3.497f5b2.png";

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/SparkStorytellingInterview.7994d9b.png";

/***/ })

};;
//# sourceMappingURL=spark.js.map