webpackJsonp([1],{

/***/ "+RqN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/LkL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Answers_vue__ = __webpack_require__("Mzaf");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0aabd3f9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Answers_vue__ = __webpack_require__("tNuP");
function injectStyle (ssrContext) {
  __webpack_require__("jIO1")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0aabd3f9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Answers_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0aabd3f9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Answers_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "0L+I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"start d-flex align-items-center"},[_c('div',{staticClass:"card w-50 text-center py-4 mx-auto"},[_vm._m(0),_vm._v(" "),_c('h1',[_vm._v("User detail")]),_vm._v(" "),_c('div',{staticClass:"w-50 mx-auto",attrs:{"id":"btn-container"}},[_c('div',{staticClass:"container"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.name),expression:"user.name"}],staticClass:"bits w-100",attrs:{"type":"text","maxlength":"30"},domProps:{"value":(_vm.user.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "name", $event.target.value)}}}),_vm._v(" "),_c('button',{staticClass:"action-button animate blue mt-4 mb-2 w-100",on:{"click":function($event){_vm.gotoGame()}}},[_vm._v("Start game")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/"}},[_c('button',{staticClass:"action-button animate green my-2 w-100"},[_vm._v("Back")])])],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-75 mx-auto"},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__("7Otq"),"alt":""}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "2s5O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Yourdetail_vue__ = __webpack_require__("pHbL");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e402852_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Yourdetail_vue__ = __webpack_require__("U/LL");
function injectStyle (ssrContext) {
  __webpack_require__("7gsz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e402852"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Yourdetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e402852_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Yourdetail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "3WBU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game_timer"},[_c('div',{staticClass:"game_timer_score"},[_c('h3',[_vm._v(_vm._s(_vm.total)+"/10")])]),_vm._v(" "),_c('div',{staticClass:"game_timer_time"},[_c('h3',[_vm._v(_vm._s(_vm.time.minutes ? _vm.time.minutes+':' : '')+" "+_vm._s(_vm.time.second)+"s")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "5TSa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__("UlOv");



/* harmony default export */ __webpack_exports__["a"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["a" /* Doughnut */],
    data() {
        return {
            incorrects: this.$store.state.results.incorrect_answers,
            corrects: this.$store.state.results.correct_answers
        };
    },
    mounted() {
        this.renderChart({
            labels: ['Incorrects Answers', 'Correct Answers'],
            datasets: [{
                backgroundColor: ['#E74C3C', '#82BF56'],
                data: [this.incorrects, this.corrects]
            }]
        }, {
            responsive: true,
            maintainAspectRatio: false
        });
    }
});

/***/ }),

/***/ "6tiV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Yourinitials_vue__ = __webpack_require__("x6dW");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_462585c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Yourinitials_vue__ = __webpack_require__("WZX2");
function injectStyle (ssrContext) {
  __webpack_require__("ugBM")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-462585c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Yourinitials_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_462585c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Yourinitials_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "7Otq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"

/***/ }),

/***/ "7gsz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8P1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('transition',{attrs:{"name":"fade"}},[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "9rYS":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFFQjJBOTVBMUY5NTExRTg5RDE5QzlDNzVBMzAzOTQ4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFFQjJBOTVCMUY5NTExRTg5RDE5QzlDNzVBMzAzOTQ4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzJFMUQxMDkxRjk0MTFFODlEMTlDOUM3NUEzMDM5NDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzJFMUQxMEExRjk0MTFFODlEMTlDOUM3NUEzMDM5NDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4CphiGAAAFvElEQVR42uxdQWsUSRSuTgwIBoJIDkJkFlHxMpCEhUDQi4d4E2QuhrkIIoLoQbwIcxnwovgDPKkQMErwJoJ32cDC4mrWw7IRo2yyUeMiEddsxOzb92Wqk7HTXdWZqerqmakHHwPJpKrr667vVb/3qhIIh0ZCFPjjR0aRcYjxA2Mvo5+xK/L1fxhLjEXGa8YfjN8YvwRCvBGdYExYH6PMmGAsMMgQFmSbaLuv3UjrYZQYDxmrBklLwqrsC332tDJxexgVxmIGpCVhUV7DnlabplXGZ4fERfFZXlNfnonrYpxlvM8RcVG8l9fYlTfyDjN+yjFxUeBaD+eBuIBxnrHSQuSFWJHXHrgir5cx1YLERYEx9GZN3j7GTBuQFwJj2ZcVeUXGX21EXgiMqWibvCHGUhuSFwJjG7L55LUzefUkpn4Sg7Saxx8/yxf9TjAELEaYnD91X+xK423541EHkSfkWB+l8c5dunUef9wWtsU1n4Yx325qnSgXmtThON+QBspXnV8ZO0Vn27+MISbq99RTWL5s3/LkrRs4uJUUgEjSwDOMUc/dho1KTvRTWMbMZmVewtumIR9zkAlb1j2Blzx5sdYvuUl+AmXoGxmuXS07zOFhIcbHhVhbE+L+fSGePTPZOjKDBSbt7yTPWzG6BDh5kujVK1q358+Jjhyxu+Qol4nW1mjDvn2rXYPZfiqq7Jm5BNDgYG0A9bayQnTihB3yxse/Jy803EDziaqeOAJLRju6do1i7etXolLJ7KBwU9Bukpm/YaU4J3LaqBZ1d8f/vIdv3tSUEOWymX7GxoR48KDWbpzNzNhQ2tNxqUizSe/h4fgpFRp+d+5cc30cO0b05UtyH5AMO7q7+l2KVJZE2Bf1OLtwobG2R0aIPn1KbhdT2pbe1lCuJ3DCWkcQd5U+wa5c2f7TvbysfrpN6+xWTNQTuGC1M53Iw65eTddWsUi0tKQmD0++/SjNQkheIZOw0NiYWq9g168TBUFyGwcOEL17p26jWV3dHgrmly860VfpFuzmzXgS9+8nmp+3o6fNLGdk0U12nUL8VfoFu3OHqLt7828GBohevjSro2ZQBYGTmXcMJ6DSMdjdu0Q7dhD19xPNzprRT/OYBIHTTjqHM9Dp2ePHRC9e6HXTXbh/GgTOObsAOAWdrjWil9lhTjgvhIRz0Olbkk66JW+9cFPkIvMFJ6HTuag+1jsZhxC5SR/CWej0LtRFOJecXHd+Sl0/fhRifl7/vYEBIXbvzlV5rvs7iemIaZnWMN0x7XMyhd06ETgCOITtGhwPHFAOnMicU/KwFGnUsATCUsjxMmba2QVgEawyOBU4DZW9fVtblDtcSE866RyvXzqdg2eGx9XpI14L8Xro6FWumnnHePHX6Vu9k4CT0ekkAhQIVDgIJpQy7fTiRb2uxTmHNHqJUBlCZhmHswqZdYhgp07PVE4BJOp0E0FbBG+zCqhmEtJPk2CCjqV1Bjr9tJ9Q2gzpW08qAUjwqMiDfm3XCeh0FCQioZVRUqlsrSNdQgm61aj46/TUboKpbDexDiCpjeS2Sq+aFX3oqi6Bb36Js7pl77HcJm+2I1RkqaaYKbHX6euNG6YJfGi/uAjIUuShs0lSgUInS8VF9srbgLA2MDqlbIk7bkpUMlBih1I72+Vt1gos62sEs6gagO6G0oEbaLnA0n6J7+CgEKdO1crd7t0T4unTVq6TVpf4ShKreQmX5xBVv83B9jYH+YWK52uLVaLkJe6Vk9uanvjdShs2zTjKZP3nNxtmsdlQMos/uOwfPnE5ibw0Kc+gTc6GaeZMGeWG6yAFib1SAzpt1zoOdxwNkLpshkBJoj90IsFSlXbIho4zPnQAeRjj8TTkNaKJ/uAdAyT6o58MkOgPHzNAoj/+zgCJ/gBGQ0T6I0ANkOgPoTVEpD8G2RCR/iBuQ0T6o+ANT++2+mcEgWNCW/7fYfwvwAAhtBU22R+9oQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "BbuY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CXBR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Termsconditions_vue__ = __webpack_require__("Xp4V");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba17782e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Termsconditions_vue__ = __webpack_require__("RPiB");
function injectStyle (ssrContext) {
  __webpack_require__("Dg55")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Termsconditions_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba17782e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Termsconditions_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Dg55":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FYSy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"parent_section"},[_vm._m(0),_vm._v(" "),_c('section',{staticClass:"leader_board_content"},[_c('div',{staticClass:"container"},_vm._l((_vm.scores),function(score,index){return _c('div',{staticClass:"row",class:{'text-info': _vm.selected_id == score.unique_id},attrs:{"data-id":score.unique_id,"id":'ref_'+score.unique_id}},[_c('div',{staticClass:"col-1"},[_c('h4',[_vm._v(_vm._s(index+1)+_vm._s(_vm._f("pluralize")(index+1,'st','nd','rd','th')))])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('p',{staticClass:"initials"},[_vm._v(_vm._s(score.initial_name))])]),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('div',{staticClass:"progress"},[_c('div',{staticClass:"progress-bar",class:{'bg-info': _vm.selected_id == score.unique_id},style:({width: score.correct_answers*10+'%'}),attrs:{"role":"progressbar","aria-valuenow":score.correct_answers,"aria-valuemin":score.correct_answers,"aria-valuemax":"100"}})])]),_vm._v(" "),_c('div',{staticClass:"col-1"},[_c('h4',[_vm._v(_vm._s(score.time.minutes)+":"+_vm._s(score.time.seconds < 10 ? '0'+score.time.seconds : score.time.seconds))]),_vm._v("\n                    "+_vm._s(score.time.offsetX)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"col-1"},[_c('h4',[_vm._v(_vm._s(score.correct_answers)+"/10")])])])}))]),_vm._v(" "),_c('router-link',{attrs:{"to":'/'}},[_c('button',{staticClass:"quiz-button inverted"},[_vm._v("Next")])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section_leaderboard"},[_c('div',{staticClass:"top_heading"},[_c('h2',{staticClass:"large"},[_vm._v("Leaderboard")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Fvhm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Leaderboard_vue__ = __webpack_require__("IYJr");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b17834c2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Leaderboard_vue__ = __webpack_require__("FYSy");
function injectStyle (ssrContext) {
  __webpack_require__("qaU4")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b17834c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Leaderboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b17834c2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Leaderboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "GVBi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            upload: {
                username: '',
                score: ''
            }
        };
    },
    methods: {
        sendData: function () {
            console.log(this.upload);
            this.$http.post('https://unilad-expo-quiz.firebaseio.com/results.json', this.upload).then(function (data) {
                console.log(data);
                this.$router.push({
                    name: 'Start'
                });
            }).catch(function (data) {
                console.log("Error: ", data);
            });
        }
    },
    created() {
        this.upload.score = this.$store.getters.getScore;
    }
});

/***/ }),

/***/ "Gp+1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_timers_mixin__ = __webpack_require__("6Y9k");
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0_vue_timers_mixin__["a" /* default */]],
    data() {
        return {
            time: {
                minutes: 0,
                second: 0
            }
        };
    },
    props: ['total'],
    methods: {
        log() {
            this.time.second++;
            if (this.time.second >= 60) {
                this.time.minutes++;
                this.time.second = 0;
            }
            this.$emit('total_time', this.time);
        },

        totalTimeMillisecond() {
            var elapsedTime = Date.now() - this.startTime;
            this.$store.commit('setMilliseconds', elapsedTime);
        }

    },
    created: function () {
        this.$options.interval = setInterval(this.log, 1000);
    },
    destroyed: function () {}
});

/***/ }),

/***/ "IYJr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'leader_board',
    data() {
        return {
            scores: [],
            selected_id: ''
        };
    },
    methods: {},
    created() {
        if (this.$route.query.id) {
            this.selected_id = this.$route.query.id;
        }

        this.$http.get('https://unilad-expo-quiz.firebaseio.com/results.json').then(function (data) {
            let arr = [];
            for (let x in data.body) {
                arr.push(data.body[x]);
            }
            //                    this.scores = arr.sort((a, b) => a.correct_answers < b.correct_answers || a.milliseconds < b.milliseconds ? 1 : -1)
            var sorto = {
                correct_answers: "desc", milliseconds: "asc"
            };
            this.scores = arr.keySort(sorto);
        }).catch(function (data) {
            console.log('Error: ', data);
        });
    }
});

Array.prototype.keySort = function (keys) {

    keys = keys || {};

    var obLen = function (obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    // avoiding using Object.keys because I guess did it have IE8 issues?
    // else var obIx = function(obj, ix){ return Object.keys(obj)[ix]; } or
    // whatever
    var obIx = function (obj, ix) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (size == ix) return key;
                size++;
            }
        }
        return false;
    };

    var keySort = function (a, b, d) {
        d = d !== null ? d : 1;
        // a = a.toLowerCase(); // this breaks numbers
        // b = b.toLowerCase();
        if (a == b) return 0;
        return a > b ? 1 * d : -1 * d;
    };

    var KL = obLen(keys);

    if (!KL) return this.sort(keySort);

    for (var k in keys) {
        // asc unless desc or skip
        keys[k] = keys[k] == 'desc' || keys[k] == -1 ? -1 : keys[k] == 'skip' || keys[k] === 0 ? 0 : 1;
    }

    this.sort(function (a, b) {
        var sorted = 0,
            ix = 0;

        while (sorted === 0 && ix < KL) {
            var k = obIx(keys, ix);
            if (k) {
                var dir = keys[k];
                sorted = keySort(a[k], b[k], dir);
                ix++;
            }
        }
        return sorted;
    });
    return this;
};

/***/ }),

/***/ "KC4o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"game_view"},[_c('timer-component',{attrs:{"total":_vm.total_question},on:{"total_time":function($event){_vm.time_toplay($event)}}}),_vm._v(" "),_c('question',{attrs:{"question":_vm.question}}),_vm._v(" "),_c('answers',{attrs:{"answers":_vm.object},on:{"nextQuestion":function($event){_vm.getQuestion($event)}}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2eba02e0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("8P1d");
function injectStyle (ssrContext) {
  __webpack_require__("X5IN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2eba02e0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Mzaf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['answers'],

    data() {
        return {
            index: '',
            option: [],
            options: [],
            correct: '',
            gameActive: true,
            selected: '',
            status: false,
            letters: ['A', 'B', 'C', 'D']
        };
    },

    methods: {
        assign: function () {
            this.options = this.answers.incorrect_answers;
            this.correct = this.answers.correct_answer.answer;
            this.gameActive = true;
            this.selected = '';
        },

        pickOption: function (a) {
            this.selected = a;
            this.gameActive = false;

            if (this.correct == this.selected.answer) {
                this.status = true;
            } else {
                this.status = false;
            }
        },

        nextQuestion: function () {
            this.$emit('nextQuestion', this.status);
        }
    },

    created() {
        this.assign();
    },

    watch: {
        '$props': {
            handler: function (val, oldVal) {
                this.assign();
            },

            deep: true
        }
    }
});

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__("wtEF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_resource__ = __webpack_require__("8+8L");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue2_filters__ = __webpack_require__("OjAt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue2_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue2_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_bootstrap_min_css__ = __webpack_require__("toXb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuelidate__ = __webpack_require__("ESwS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vuelidate__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








// vue validation plugin

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_7_vuelidate___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_vue2_filters___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vue_resource__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  store: __WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* store */],
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "QG5F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Score_vue__ = __webpack_require__("c52X");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a2697a2a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Score_vue__ = __webpack_require__("vAvH");
function injectStyle (ssrContext) {
  __webpack_require__("TvOH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Score_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a2697a2a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Score_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "QTlf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RPiB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"user_detail"},[_vm._m(0),_vm._v(" "),_c('section',{staticClass:"terms_conditions"},[_c('div',{staticClass:"container"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col text-center"},[_c('router-link',{attrs:{"to":'/your_detail'}},[_c('button',{staticClass:"term_button"},[_vm._v("Back")])])],1)])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"tc_heading"},[_c('div',{staticClass:"container top_heading"},[_c('div',{staticClass:"row top_heading_content"},[_c('div',{staticClass:"col text-center"})])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"terms_condition_box"},[_c('h2',[_vm._v("Terms and Conditions")]),_vm._v(" "),_c('p',[_vm._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of")]),_vm._v(" "),_c('p',[_vm._v("type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ")]),_vm._v(" "),_c('p',[_vm._v("the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")]),_vm._v(" "),_c('p',[_vm._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of")]),_vm._v(" "),_c('p',[_vm._v("type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ")]),_vm._v(" "),_c('p',[_vm._v("the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "RcUN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Question_vue__ = __webpack_require__("d5Sz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Answers_vue__ = __webpack_require__("/LkL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Timer_vue__ = __webpack_require__("ZqlF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_timers_mixin__ = __webpack_require__("6Y9k");
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_3_vue_timers_mixin__["a" /* default */]],
    name: 'game',
    components: {
        question: __WEBPACK_IMPORTED_MODULE_0__Question_vue__["a" /* default */],
        answers: __WEBPACK_IMPORTED_MODULE_1__Answers_vue__["a" /* default */],
        'timer-component': __WEBPACK_IMPORTED_MODULE_2__Timer_vue__["a" /* default */]
    },

    data: function () {
        return {
            questions: this.$store.state.questions,
            total_question: 0,
            question: '',
            object: {},
            result: {
                corrects: 0,
                incorrects: 0
            },
            gameActive: true,
            millisecond: 0,
            startTime: Date.now()
        };
    },

    methods: {
        getQuestion: function (answer) {
            if (answer) {
                this.result.corrects++;
                this.object.useranswer = 1;
                this.$store.commit('setUserQuestion', this.object);
            } else if (answer == false) {
                this.result.incorrects++;
                this.object.useranswer = 0;
                this.$store.commit('setUserQuestion', this.object);
            } else if (answer == null) {}

            if (this.questions[0]) {
                this.total_question++;
                this.gameActive = true;
                this.object = this.questions.shift();
                this.question = this.object.question;
            } else {
                this.$store.commit('setMilliseconds', this.millisecond);
                this.$store.commit('setResults', this.result);
                this.$router.push({ name: 'your_initial' });
            }
        },

        totalTimeMillisecond() {
            this.millisecond = Date.now() - this.startTime;
        },

        time_toplay(time) {
            this.$store.commit('setTotalTimetoplay', time);
        }
    },

    created() {
        this.getQuestion();
        this.totalTimeMillisecond();
        this.$options.interval = setInterval(this.totalTimeMillisecond, 10);
    },

    destroyed() {}
});

/***/ }),

/***/ "SgRs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"results d-flex align-items-center"},[_c('div',{staticClass:"card w-75 animated bounce text-center py-4 mb-3 mx-auto"},[_c('doughnut'),_vm._v(" "),_c('div',{staticClass:"container"},[_c('router-link',{attrs:{"to":"/import"}},[_c('button',{staticClass:"action-button animate blue my-2 w-100"},[_vm._v("Upload Score")])]),_vm._v(" "),_c('router-link',{attrs:{"to":"/"}},[_c('button',{staticClass:"action-button animate green w-100"},[_vm._v("Home Page")])])],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "TvOH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "U/LL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"user"},[_vm._m(0),_vm._v(" "),_c('section',{staticClass:"your_detail"},[_c('div',{staticClass:"container"},[_c('form',{on:{"submit":function($event){_vm.$v.$touch()}}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-6 text-right"},[_c('label',{class:{'text-danger': _vm.$v.user.full_name.$error},attrs:{"for":"first_name"}},[_vm._v("Full Name:*")])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.full_name),expression:"user.full_name"}],attrs:{"type":"text","id":"first_name"},domProps:{"value":(_vm.user.full_name)},on:{"blur":function($event){_vm.$v.user.full_name.$touch()},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "full_name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-6 text-right"},[_c('label',{class:{'text-danger': _vm.$v.user.company.$error},attrs:{"for":"company"}},[_vm._v("Company:*")])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.company),expression:"user.company"}],attrs:{"type":"text","id":"company"},domProps:{"value":(_vm.user.company)},on:{"blur":function($event){_vm.$v.user.company.$touch()},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "company", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-6 text-right"},[_c('label',{class:{'text-danger' : _vm.$v.user.email.$error},attrs:{"for":"email"}},[_vm._v("Email:*")])]),_vm._v(" "),_c('div',{staticClass:"col-6 text-left"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.email),expression:"user.email"}],attrs:{"type":"text","id":"email"},domProps:{"value":(_vm.user.email)},on:{"blur":function($event){_vm.$v.user.email.$touch()},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "email", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-6 text-right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.term_conditions),expression:"user.term_conditions"}],attrs:{"type":"checkbox","id":"term"},domProps:{"checked":Array.isArray(_vm.user.term_conditions)?_vm._i(_vm.user.term_conditions,null)>-1:(_vm.user.term_conditions)},on:{"blur":function($event){_vm.$v.user.term_conditions.$touch()},"change":function($event){var $$a=_vm.user.term_conditions,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.user, "term_conditions", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.user, "term_conditions", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.user, "term_conditions", $$c)}}}})]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('label',{staticClass:"term",attrs:{"for":"term"}},[_c('span',{class:{'text-danger': _vm.$v.user.term_conditions.$error}},[_vm._v("I agree to the "),_c('a',{staticClass:"term_condition",attrs:{"href":""},on:{"click":function($event){$event.preventDefault();_vm.gototermsCondition()}}},[_vm._v("Terms & conditions")])])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col text-right"},[_c('input',{attrs:{"type":"submit","value":"Submit"},on:{"click":function($event){$event.preventDefault();return _vm.submitForm($event)}}})])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"top_heading"},[_c('h2',{staticClass:"large"},[_vm._v("Your details")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "WZX2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"start d-flex align-items-center"},[_c('div',{staticClass:"w-100 text-center py-4 mx-auto"},[_c('section',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('transition',{attrs:{"name":"fade"}},[_c('section',{staticClass:"col-12 initial_heading"},[_c('h2',[_vm._v("What are your initials?")])])]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[_c('section',{staticClass:"col-12"},[(_vm.required_field)?_c('div',{staticClass:"alert"},[_vm._v("Field is required")]):_vm._e(),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.initial_value),expression:"initial_value"}],staticClass:"initial_input",attrs:{"type":"text","maxlength":"3"},domProps:{"value":(_vm.initial_value)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.initial_value=$event.target.value},function($event){_vm.$v.initial_value.$touch()}]}})])]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.initial_value)?_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col text-center"},[_c('img',{staticClass:"img-fluid",attrs:{"src":"img","alt":""}}),_vm._v(" "),_c('button',{staticClass:"quiz-button",on:{"click":function($event){_vm.enterPriceDraw()}}},[_vm._v("Enter prize draw")]),_vm._v(" "),_c('button',{staticClass:"quiz-button",on:{"click":function($event){_vm.leaderboard()}}},[_vm._v("Leaderboard")])])])]):_vm._e()])],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "X5IN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XDdL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Import_vue__ = __webpack_require__("GVBi");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d0b87a9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Import_vue__ = __webpack_require__("fc3/");
function injectStyle (ssrContext) {
  __webpack_require__("QTlf")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Import_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d0b87a9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Import_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Xp4V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'term_condition',
    data() {
        return {};
    },
    methods: {
        submitForm() {}
    },
    created() {}

});

/***/ }),

/***/ "YORL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"question animation-heading"},[_c('h2',{staticClass:"large text-center"},[_vm._v(_vm._s(_vm.question))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YTlo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Results_vue__ = __webpack_require__("sKj1");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6692c5b0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Results_vue__ = __webpack_require__("SgRs");
function injectStyle (ssrContext) {
  __webpack_require__("tUX2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Results_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6692c5b0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Results_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Start__ = __webpack_require__("zgV5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Game__ = __webpack_require__("tZZY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Results__ = __webpack_require__("YTlo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Import__ = __webpack_require__("XDdL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Score__ = __webpack_require__("QG5F");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_User__ = __webpack_require__("jyJz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Leaderboard__ = __webpack_require__("Fvhm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Yourdetail__ = __webpack_require__("2s5O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Termsconditions__ = __webpack_require__("CXBR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Yourinitials__ = __webpack_require__("6tiV");













__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Start',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Start__["a" /* default */]
  }, {
    path: '/user',
    name: 'user',
    component: __WEBPACK_IMPORTED_MODULE_7__components_User__["a" /* default */]
  }, {
    path: '/game',
    name: 'game',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Game__["a" /* default */]
  }, {
    path: '/results',
    name: 'results',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Results__["a" /* default */]
  }, {
    path: '/import',
    name: 'import',
    component: __WEBPACK_IMPORTED_MODULE_5__components_Import__["a" /* default */]
  }, {
    path: '/score',
    name: 'score',
    component: __WEBPACK_IMPORTED_MODULE_6__components_Score__["a" /* default */]
  }, {
    path: '/leader_board',
    name: 'leader_board',
    component: __WEBPACK_IMPORTED_MODULE_8__components_Leaderboard__["a" /* default */]
  }, {
    path: '/term_condition',
    name: 'term_condition',
    component: __WEBPACK_IMPORTED_MODULE_10__components_Termsconditions__["a" /* default */]
  }, {
    path: '/your_detail',
    name: 'your_detail',
    component: __WEBPACK_IMPORTED_MODULE_9__components_Yourdetail__["a" /* default */]
  }, {
    path: '/your_initials',
    name: 'your_initial',
    component: __WEBPACK_IMPORTED_MODULE_11__components_Yourinitials__["a" /* default */]
  }]
}));

/***/ }),

/***/ "ZqlF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Timer_vue__ = __webpack_require__("Gp+1");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dbb8168_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Timer_vue__ = __webpack_require__("3WBU");
function injectStyle (ssrContext) {
  __webpack_require__("h1gD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Timer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dbb8168_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Timer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "b3jg":
/***/ (function(module, exports) {

module.exports = {"easy":[{"id":2,"type":"image","difficulty":"easy","question":"Who has the most liked instagram photo at the moment?","correct_answer":{"answer":1,"image":"static/images/3/kylie-jenner2.jpg","text":"Kylie Jenner"},"incorrect_answers":[{"answer":0,"image":"static/images/2/image.jpeg","text":"Kendall Jenner"},{"answer":0,"image":"static/images/2/beyonce-pregnant-bump-pic-ftr.jpg","text":"Beyonce"},{"answer":0,"image":"static/images/2/selena-gomez-coca-cola-ads-ftr.jpg","text":"Selena Gomez"}]},{"id":4,"type":"image","difficulty":"easy","question":"What is the world's most popular social network?","correct_answer":{"answer":1,"image":"static/images/4/FB-f-Logo__blue_1024.png","text":"Facebook"},"incorrect_answers":[{"answer":0,"image":"static/images/4/580b57fcd9996e24bc43c543-copy.png","text":"Whatsapp"},{"answer":0,"image":"static/images/4/Facebook_Messenger_logo.png","text":"Facebook messenger"},{"answer":0,"image":"static/images/4/Twitter_logo_bird_transparent_png.png","text":"Twitter"}]},{"id":6,"type":"image","difficulty":"easy","question":"What is the most popular social networking app?","correct_answer":{"answer":1,"image":"static/images/6/580b57fcd9996e24bc43c543.png","text":"Whatsapp"},"incorrect_answers":[{"answer":0,"image":"static/images/6/viber_PNG7.png","text":"Viber"},{"answer":0,"image":"static/images/6/Facebook_Messenger_logo.svg-copy.png","text":"Facebook messenger"},{"answer":0,"image":"static/images/6/1200x630bb.png","text":"QQ Chat"}]},{"id":10,"type":"text","difficulty":"easy","image":"","question":"Why is someone called a “snake”?","correct_answer":{"answer":1,"text":"When they backstab someone"},"incorrect_answers":[{"answer":0,"text":"When they slither in the DMs"},{"answer":0,"text":"When they’re sneaky"},{"answer":0,"text":"When they have a lisp"}]},{"id":11,"type":"text","difficulty":"easy","image":"","question":"This party is ‘Lit’ means?","correct_answer":{"answer":1,"text":"This party is fun"},"incorrect_answers":[{"answer":0,"text":"Literally bad"},{"answer":0,"text":"Everyone is on drugs"},{"answer":0,"text":"This party is fuming (aka bad)"}]},{"id":12,"type":"text","difficulty":"easy","image":"","question":"What is the most popular hashtag on Instagram?","correct_answer":{"answer":1,"text":"#love"},"incorrect_answers":[{"answer":0,"text":"#tbt"},{"answer":0,"text":"#happy"},{"answer":0,"text":"#summer"}]},{"id":13,"type":"text","difficulty":"easy","image":"","question":"Most retweeted tweet ever?","correct_answer":{"answer":1,"text":"“Help me please a man needs his nuggs” - Carter Wilkerson"},"incorrect_answers":[{"answer":0,"text":"“If only Bradleys arm was longer. Best photo ever. #oscars” - Ellen DeGeneres"},{"answer":0,"text":"“Always in my heart @Harry_Styles. Yours sincerely, Louis” - Louis Tomlinson"},{"answer":0,"text":"“No one is born hating another person because of the color of his skin or his background or his religion…” - Barack Obama"}]},{"id":14,"type":"image_text","difficulty":"easy","image":"static/images/14/fb.png","question":"What year was Facebook founded?","correct_answer":{"answer":1,"text":"2004"},"incorrect_answers":[{"answer":0,"text":"2002"},{"answer":0,"text":"2006"},{"answer":0,"text":"2008"}]},{"id":16,"type":"image","difficulty":"easy","question":"What is the most viewed video on youtube?","correct_answer":{"answer":1,"image":"static/images/16/maxresdefault-2.jpg","text":"“Despacito” - Luis Fonsi"},"incorrect_answers":[{"answer":0,"image":"static/images/16/maxresdefault.jpg","text":"“Gangnam Style” - Psy"},{"answer":0,"image":"static/images/16/maxresdefault-1.jpg","text":"“Donald Trump Singing Despacito”"},{"answer":0,"image":"static/images/16/see_you_again.jpg","text":"“See You Again” - Wiz Khalifa"}]},{"id":20,"type":"text","difficulty":"easy","image":"","question":"What does the ‘e’ in eSports stand for?","correct_answer":{"answer":1,"text":"Electronic"},"incorrect_answers":[{"answer":0,"text":"Entertainment"},{"answer":0,"text":"Ethernet"},{"answer":0,"text":"Electric"}]},{"id":21,"type":"image_text","difficulty":"easy","image":"","question":"What was the most shared content on Facebook in 2017?","correct_answer":{"answer":1,"text":"“Despacito” - Luis Fonsi"},"incorrect_answers":[{"answer":0,"text":"“Shape of You” - Ed Sheeran"},{"answer":0,"text":"“Linkin Park Singer Commits Suicide by Hanging”"},{"answer":0,"text":"“Quiz: Only 1 in 50 people can identify these 16 grammar mistakes. Can you?”"}]},{"id":18,"type":"text","difficulty":"easy","question":"What is the name of the Gorilla that was killed and later became an internet star?","correct_answer":{"answer":1,"text":"Harambe"},"incorrect_answers":[{"answer":0,"text":"Chichwa"},{"answer":0,"text":"Cecil"},{"answer":0,"text":"Bananas"}]},{"id":23,"type":"image","difficulty":"easy","question":"Which one of these was not a real online challenge?","correct_answer":{"answer":1,"image":"static/images/23/khloe-kardashian.jpg","text":"The Khloe challenge"},"incorrect_answers":[{"answer":0,"image":"static/images/23/cinnamon.jpg","text":"The cinnamon challenge"},{"answer":0,"image":"static/images/23/image.jpeg","text":"The Tide pod challenge"},{"answer":0,"image":"static/images/23/flat.jpg","text":"The Kylie Jenner challenge"}]},{"id":30,"type":"image","difficulty":"easy","question":"Which one came out first?","correct_answer":{"answer":1,"image":"static/images/30/icq.png","text":"ICQ"},"incorrect_answers":[{"answer":0,"image":"static/images/30/myspace.jpg","text":"MySpace"},{"answer":0,"image":"static/images/30/msn.jpg","text":"Msn Messenger"},{"answer":0,"image":"static/images/30/bebo.jpg","text":"Bebo"}]},{"id":42,"type":"image_text","difficulty":"easy","image":"static/images/42/double-rainbow.jpg","question":"How many rainbows did Paul Vasquez see at Yosemite park?","correct_answer":{"answer":1,"text":"Two"},"incorrect_answers":[{"answer":0,"text":"One and a half"},{"answer":0,"text":"Three"},{"answer":0,"text":"Four"}]},{"id":43,"type":"image_text","difficulty":"easy","image":"static/images/43/charlie.png","question":"What is the name of the boy that bit his brother in 2007?","correct_answer":{"answer":1,"text":"Charlie"},"incorrect_answers":[{"answer":0,"text":"George"},{"answer":0,"text":"Harry"},{"answer":0,"text":"Richard"}]},{"id":44,"type":"text","difficulty":"easy","question":"What does ‘ikr’ stand for?","correct_answer":{"answer":1,"text":"I Know Right"},"incorrect_answers":[{"answer":0,"text":"I’m Knackered Rn (Right now)"},{"answer":0,"text":"I Know Klingon"},{"answer":0,"text":"Is Ketchup Red"}]},{"id":49,"type":"image_text","difficulty":"easy","image":"static/images/49/flat.jpg","question":"What is the meme called?","correct_answer":{"answer":1,"text":"Troll Face"},"incorrect_answers":[{"answer":0,"text":"You’re Lying Face"},{"answer":0,"text":"Smirk Face"},{"answer":0,"text":"Sneaky Face"}]},{"id":54,"type":"image","difficulty":"easy","question":"Which social network has the most users?","correct_answer":{"answer":1,"image":"static/images/54/fb.png","text":"Facebook"},"incorrect_answers":[{"answer":0,"image":"static/images/54/insta.png","text":"Instagram"},{"answer":0,"image":"static/images/54/twitter.png","text":"Twitter"},{"answer":0,"image":"static/images/54/vero.jpg","text":"Vero"}]},{"id":55,"type":"text","difficulty":"easy","question":"What year was Instagram created?","correct_answer":{"answer":1,"text":"2010"},"incorrect_answers":[{"answer":0,"text":"2004"},{"answer":0,"text":"2006"},{"answer":0,"text":"2008"}]},{"id":56,"type":"image","difficulty":"easy","question":"Which one of these political figures has the most followers on Twitter?","correct_answer":{"answer":1,"image":"static/images/56/obama.jpg","text":"Barack Obama"},"incorrect_answers":[{"answer":0,"image":"static/images/56/donald-trump.png","text":"Donald Trump"},{"answer":0,"image":"static/images/56/flat.jpg","text":"Theresa May"},{"answer":0,"image":"static/images/56/hillary_clinton.png","text":"Hillary Clinton"}]},{"id":57,"type":"image","difficulty":"easy","question":"Who founded Facebook?","correct_answer":{"answer":1,"image":"static/images/57/flat.jpg","text":"Mark Zuckerberg"},"incorrect_answers":[{"answer":0,"image":"static/images/57/bill-gates.jpg","text":"Bill Gates"},{"answer":0,"image":"static/images/57/topic_steve.jpg","text":"Steve Jobs"},{"answer":0,"image":"static/images/57/bezos_jeff.jpg","text":"Jeff Bezos"}]},{"id":58,"type":"image","difficulty":"easy","question":"Which one is Instagram’s original logo?","correct_answer":{"answer":1,"image":"static/images/58/instagram_old.png","text":"(a)"},"incorrect_answers":[{"answer":0,"image":"static/images/58/insta-line.png","text":"(b)"},{"answer":0,"image":"static/images/58/insta.png","text":"(c)"},{"answer":0,"image":"static/images/58/insta-circ.png","text":"(d)"}]},{"id":60,"type":"image_text","difficulty":"easy","image":"static/images/3/kylie-jenner2.jpg","question":"Why did Kylie Jenner take a break from social media?","correct_answer":{"answer":1,"text":"She was pregnant"},"incorrect_answers":[{"answer":0,"text":"She was on holiday"},{"answer":0,"text":"Bad photos were leaked"},{"answer":0,"text":"She didn’t like the fame"}]}],"medium":[{"id":22,"type":"image_text","difficulty":"medium","image":"static/images/22/linkedin.png","question":"Who owns Linkedin?","correct_answer":{"answer":1,"text":"Microsoft"},"incorrect_answers":[{"answer":0,"text":"Apple"},{"answer":0,"text":"Facebook"},{"answer":0,"text":"Google"}]},{"id":9,"type":"image","difficulty":"medium","question":"What is the most popular gaming app ever?","correct_answer":{"answer":1,"image":"static/images/9/candy-crush-saga.jpg","text":"Candy Crush Saga"},"incorrect_answers":[{"answer":0,"image":"static/images/9/Angry+Birds_TitlePicture.png","text":"Angry Birds"},{"answer":0,"image":"static/images/9/fruit-ninja-screenshot.jpg","text":"Fruit Ninja"},{"answer":0,"image":"static/images/9/MV5BNGU_.jpg","text":"Subway Surfers"}]},{"id":1,"type":"image","difficulty":"medium","question":"What is the most used emoji?","correct_answer":{"answer":1,"image":"static/images/1/laugh-emojis.png","text":"Laugh Cry emoji"},"incorrect_answers":[{"answer":0,"image":"static/images/1/heart-eye-emojis.png","text":"Heart eye emoji"},{"answer":0,"image":"static/images/1/Aubergine-emojis.png","text":"Aubergine emoji"},{"answer":0,"image":"static/images/1/peach-emojis.png","text":"Peach emoji"}]},{"id":3,"type":"image","difficulty":"medium","question":"Who is the most followed person on instagram?","correct_answer":{"answer":1,"image":"static/images/3/1469588275-selena-gomez.jpg","text":"Selena Gomez"},"incorrect_answers":[{"answer":0,"image":"static/images/3/beyonce.jpg","text":"Beyonce"},{"answer":0,"image":"static/images/3/kylie-jenner2.jpg","text":"Kylie Jenner"},{"answer":0,"image":"static/images/3/6bc8e7d0925589c9fd8ce80e4e6789d2.jpg","text":"Kim Kardashian-West"}]},{"id":5,"type":"text","difficulty":"medium","question":"What does “Ghosting” mean?","correct_answer":{"answer":1,"text":"When one person in a relationship suddenly disappears and stops responding"},"incorrect_answers":[{"answer":0,"text":"When you ignore someone by accident"},{"answer":0,"text":"When someone believes they are in a relationship and the other doesn't"},{"answer":0,"text":"When a couple are both cheating"}]},{"id":15,"type":"image","difficulty":"medium","question":"Who is the most followed person on Twitter?","correct_answer":{"answer":1,"image":"static/images/15/Taylor-Swift-800x800.png","text":"Taylor Swift"},"incorrect_answers":[{"answer":0,"image":"static/images/15/beyonce.jpg","text":"Beyonce"},{"answer":0,"image":"static/images/15/kylie-jenner2.jpg","text":"Kylie Jenner"},{"answer":0,"image":"static/images/15/1469588275-selena-gomez.jpg","text":"Selena Gomez"}]},{"id":19,"type":"image_text","difficulty":"medium","image":"static/images/19/Taylor-Swift-800x800.png","question":"Why was Taylor Swift’s comment section on Instagram flooded with the snake emoji?","correct_answer":{"answer":1,"text":"Because of her feud with Kim Kardashian West"},"incorrect_answers":[{"answer":0,"text":"For her new album"},{"answer":0,"text":"For her new song"},{"answer":0,"text":"Because she tweeted she bought a snake"}]},{"id":25,"type":"image","difficulty":"medium","question":"Who is the most streamed artist of 2017?","correct_answer":{"answer":1,"image":"static/images/25/ed-sheeran.jpg","text":"Ed Sheeran"},"incorrect_answers":[{"answer":0,"image":"static/images/25/starving_acoustic.jpg","text":"Hailee Steinfeld"},{"answer":0,"image":"static/images/25/drake.jpg","text":"Drake"},{"answer":0,"image":"static/images/25/Khalid.jpg","text":"Khalid"}]},{"id":27,"type":"image","difficulty":"medium","question":"Who’s tweet made Snapchat’s stock value drop $1.4bn?","correct_answer":{"answer":1,"image":"static/images/27/kylie-jenner2.jpg","text":"Kylie Jenner"},"incorrect_answers":[{"answer":0,"image":"static/images/27/kim_kardashian-West.jpg","text":"Kim Kardashian-West"},{"answer":0,"image":"static/images/27/kendall_jenner.jpg","text":"Kendall Jenner"},{"answer":0,"image":"static/images/27/kourtney_kardashian.jpg","text":"Kourtney Kardashian"}]},{"id":32,"type":"text","difficulty":"medium","question":"What does ‘ngl’ stand for?","correct_answer":{"answer":1,"text":"Not Gonna Lie"},"incorrect_answers":[{"answer":0,"text":"Never Gonna Like (...)"},{"answer":0,"text":"Never Gonna Love"},{"answer":0,"text":"Not Goin ‘lone"}]},{"id":35,"type":"text","difficulty":"medium","question":"How is the acronym ‘lol’ most commonly used for texting?","correct_answer":{"answer":1,"text":"Laugh Out Loud"},"incorrect_answers":[{"answer":0,"text":"Lots Of Love"},{"answer":0,"text":"Lots Of Laughter"},{"answer":0,"text":"Little Old Lady"}]},{"id":36,"type":"image_text","difficulty":"medium","image":"static/images/36/Salt-bae.png","question":"Who is this?","correct_answer":{"answer":1,"text":"Salt bae"},"incorrect_answers":[{"answer":0,"text":"Salt babe"},{"answer":0,"text":"Salt baeb"},{"answer":0,"text":"Salt baby"}]},{"id":37,"type":"image","difficulty":"medium","question":"Where is the most Instagrammed place in the world?","correct_answer":{"answer":1,"image":"static/images/37/new-york.jpg","text":"New York, USA"},"incorrect_answers":[{"answer":0,"image":"static/images/37/los-angeles.jpg","text":"Los Angeles, USA"},{"answer":0,"image":"static/images/37/paris-france.jpg","text":"Paris, France"},{"answer":0,"image":"static/images/37/saint-basil.jpg","text":"Moscow, Russia"}]},{"id":38,"type":"image","difficulty":"medium","question":"What is the most Instagrammed food in the world?","correct_answer":{"answer":1,"image":"static/images/38/p_free.jpg","text":"Pizza"},"incorrect_answers":[{"answer":0,"image":"static/images/38/bagel.png","text":"Bagels"},{"answer":0,"image":"static/images/38/large_sushi.jpg","text":"Sushi"},{"answer":0,"image":"static/images/38/paleo_superlean.jpg","text":"Steak"}]},{"id":39,"type":"image_text","difficulty":"medium","image":"static/images/39/flat.jpg","question":"What is this famous cat known as?","correct_answer":{"answer":1,"text":"Grumpy cat"},"incorrect_answers":[{"answer":0,"text":"Angry cat"},{"answer":0,"text":"Crabby cat"},{"answer":0,"text":"Cranky cat"}]},{"id":41,"type":"text","difficulty":"medium","question":"What is the animal in the viral song “What does the _____ say?","correct_answer":{"answer":1,"text":"Fox"},"incorrect_answers":[{"answer":0,"text":"Hippo"},{"answer":0,"text":"Seal"},{"answer":0,"text":"Giraffe"}]},{"id":46,"type":"text","difficulty":"medium","question":"What does ‘CSB’ stand for?","correct_answer":{"answer":1,"text":"Cool Story Bro"},"incorrect_answers":[{"answer":0,"text":"Could Someone Bring (...)"},{"answer":0,"text":"Cruel Sassy B*tch"},{"answer":0,"text":"Could She Bang"}]}],"hard":[{"id":7,"type":"text","difficulty":"hard","question":"What does L.A.T mean?","correct_answer":{"answer":1,"text":"Living Apart Together"},"incorrect_answers":[{"answer":0,"text":"Literally Always Talking"},{"answer":0,"text":"Lizards And Tortoises"},{"answer":0,"text":"A term Latino couples use"}]},{"id":8,"type":"text","difficulty":"hard","question":"What does “Shipping” mean?","correct_answer":{"answer":1,"text":"Really wanting two people to have something together"},"incorrect_answers":[{"answer":0,"text":"Ordering someone online and waiting for it to be shipped"},{"answer":0,"text":"PG version of “Shitting”"},{"answer":0,"text":"When you're in a relationship and it’s going really well"}]},{"id":17,"type":"text","difficulty":"hard","image":"","question":"How many tweets are tweeted approximately per day on twitter?","correct_answer":{"answer":1,"text":"500 million"},"incorrect_answers":[{"answer":0,"text":"200 million"},{"answer":0,"text":"300 million"},{"answer":0,"text":"400 million"}]},{"id":24,"type":"image","difficulty":"hard","question":"What is the most played song on spotify?","correct_answer":{"answer":1,"image":"static/images/24/psycho.jpg","text":"God’s Plan - Drake"},"incorrect_answers":[{"answer":0,"image":"static/images/24/havana.jpg","text":"Havana - Camilla Cabello"},{"answer":0,"image":"static/images/24/new_rules.jpg","text":"New Rules - Dua Lipa"},{"answer":0,"image":"static/images/24/cvrart.jpg","text":"Psycho - Post Malone Feat. Ty Dolla $ign"}]},{"id":26,"type":"image","difficulty":"hard","question":"What is the most Shazamed song of all time?","correct_answer":{"answer":1,"image":"static/images/26/avicii.jpg","text":"Wake Me Up - Avicii"},"incorrect_answers":[{"answer":0,"image":"static/images/26/passenger.jpg","text":"Let Her Go - Passenger"},{"answer":0,"image":"static/images/26/lazer.jpeg","text":"Lean On - Major Lazer & DJ Snake"},{"answer":0,"image":"static/images/26/gotye.jpg","text":"Somebody That I Used To Know - Gotye"}]},{"id":28,"type":"text","difficulty":"hard","image":"","question":"How many times has Tinder been downloaded?","correct_answer":{"answer":1,"text":"100 million"},"incorrect_answers":[{"answer":0,"text":"50 million"},{"answer":0,"text":"150 million"},{"answer":0,"text":"200 million"}]},{"id":29,"type":"text","difficulty":"hard","image":"","question":"What is the number of daily swipes on Tinder?","correct_answer":{"answer":1,"text":"1.6bn"},"incorrect_answers":[{"answer":0,"text":"1.2bn"},{"answer":0,"text":"1.4bn"},{"answer":0,"text":"1.8bn"}]},{"id":31,"type":"image_text","difficulty":"hard","image":"static/images/31/snapchat.png","question":"How many Snapchats are sent out a day?","correct_answer":{"answer":1,"text":"3.5bn"},"incorrect_answers":[{"answer":0,"text":"1.5bn"},{"answer":0,"text":"2.5bn"},{"answer":0,"text":"4.5bn"}]},{"id":33,"type":"text","difficulty":"hard","question":"What does ‘smh’ stand for?","correct_answer":{"answer":1,"text":"Shake My Head"},"incorrect_answers":[{"answer":0,"text":"Stop Messaging Him"},{"answer":0,"text":"Stop Messaging Her"},{"answer":0,"text":"Somehow"}]},{"id":34,"type":"text","difficulty":"hard","question":"What does ‘tl;dr’ stand for?","correct_answer":{"answer":1,"text":"Too long; didn't read"},"incorrect_answers":[{"answer":0,"text":"Too late; didn't realize"},{"answer":0,"text":"Too late; don’t rate"},{"answer":0,"text":"Too little; don't recommend"}]},{"id":40,"type":"image_text","difficulty":"hard","image":"static/images/40/steals-your.jpg","question":"What is the name of this meme?","correct_answer":{"answer":1,"text":"Good Guy Greg"},"incorrect_answers":[{"answer":0,"text":"Good Guy Grayson"},{"answer":0,"text":"Good Guy George"},{"answer":0,"text":"Good Guy Gavin"}]},{"id":45,"type":"text","difficulty":"hard","question":"What does ‘Bae’ stand for?","correct_answer":{"answer":1,"text":"Before Anyone Else"},"incorrect_answers":[{"answer":0,"text":"Before Anything Else"},{"answer":0,"text":"Danish word for poop"},{"answer":0,"text":"Shortcut for babe"}]},{"id":47,"type":"image","difficulty":"hard","question":"What shoe brand was Daniel wearing in the viral video ‘Damn Daniel’?","correct_answer":{"answer":1,"image":"static/images/47/vetement.png","text":"Vans"},"incorrect_answers":[{"answer":0,"image":"static/images/47/images.png","text":"Stan Smith"},{"answer":0,"image":"static/images/47/new.png","text":"New Balance"},{"answer":0,"image":"static/images/47/0.jpg","text":"Converse"}]},{"id":48,"type":"image_text","difficulty":"hard","image":"static/images/48/flat.jpg","question":"What is the meme called?","correct_answer":{"answer":1,"text":"Forever Alone"},"incorrect_answers":[{"answer":0,"text":"Always Alone"},{"answer":0,"text":"Endlessly Alone"},{"answer":0,"text":"Permanently Alone"}]},{"id":50,"type":"image_text","difficulty":"hard","image":"static/images/50/what.jpg","question":"What is the name of the man from the ‘Watch Out We Have a Badass Over Here’ meme?","correct_answer":{"answer":1,"text":"Neil deGrasse Tyson"},"incorrect_answers":[{"answer":0,"text":"Bill Nye"},{"answer":0,"text":"Carl Sagen"},{"answer":0,"text":"Michio Kaku"}]},{"id":51,"type":"image_text","difficulty":"hard","image":"static/images/51/aliens.jpg","question":"What is the caption of this meme?","correct_answer":{"answer":1,"text":"Aliens"},"incorrect_answers":[{"answer":0,"text":"Extraterrestrials "},{"answer":0,"text":"Groundbreaking"},{"answer":0,"text":"Huge"}]},{"id":52,"type":"image_text","difficulty":"hard","image":"static/images/52/bitch.jpg","question":"Who is this?","correct_answer":{"answer":1,"text":"Yao Ming"},"incorrect_answers":[{"answer":0,"text":"Obama"},{"answer":0,"text":"Ye Li"},{"answer":0,"text":"Kim Jong- Un"}]},{"id":53,"type":"image","difficulty":"hard","question":"Who has the most likes on Facebook?","correct_answer":{"answer":1,"image":"static/images/53/christianoronaldo-1.jpg","text":"Cristiano Ronaldo"},"incorrect_answers":[{"answer":0,"image":"static/images/53/vin-diesel.jpg","text":"Vin Diesel"},{"answer":0,"image":"static/images/53/shakira.png","text":"Shakira"},{"answer":0,"image":"static/images/53/6bc8e.jpg","text":"Kim Kardashian-West"}]},{"id":59,"type":"text","difficulty":"hard","image":"","question":"Why did Justin Bieber delete his Instagram?","correct_answer":{"answer":1,"text":"His fans were jealous of his rumoured girlfriend Sofia Richie"},"incorrect_answers":[{"answer":0,"text":"He wanted a break from social media"},{"answer":0,"text":"He was embarrassed how many followers he lost after Instagram removed fake followers"},{"answer":0,"text":"He wanted to start a fresh new Instagram feed"}]}]}

/***/ }),

/***/ "b6+R":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "c52X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            score: []
        };
    },
    created() {
        this.$http.get('https://quiz-medium.firebaseio.com/score.json').then(function (data) {
            let arr = [];
            for (let x in data.body) {
                arr.push(data.body[x]);
            }
            this.score = arr.sort((a, b) => a.score < b.score ? 1 : -1);
            console.log(this.score);
        }).catch(function (data) {
            console.log('Error: ', data);
        });
    }
});

/***/ }),

/***/ "d5Sz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Question_vue__ = __webpack_require__("eE7u");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b4ea75e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Question_vue__ = __webpack_require__("YORL");
function injectStyle (ssrContext) {
  __webpack_require__("+RqN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8b4ea75e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Question_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b4ea75e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Question_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "eE7u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['question']
});

/***/ }),

/***/ "fc3/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"import d-flex align-items-center"},[_c('div',{staticClass:"card w-75 animated bounce text-center py-4 mb-3 mx-auto"},[_c('h3',{staticClass:"bits mb-3"},[_vm._v("Upload Score")]),_vm._v(" "),_c('div',{staticClass:"container"},[_c('label',{staticClass:"bits w-100 bold mt-2 mb-0",attrs:{"for":"user"}},[_vm._v("Your Score:")]),_vm._v(" "),_c('label',{staticClass:"bits w-100",attrs:{"for":"user"}},[_vm._v(_vm._s(_vm.upload.score))]),_vm._v(" "),_c('label',{staticClass:"bits w-100 bold mt-3",attrs:{"for":"user"}},[_vm._v("Enter your username:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.upload.username),expression:"upload.username"}],staticClass:"bits w-75",attrs:{"type":"text","maxlength":"12"},domProps:{"value":(_vm.upload.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.upload, "username", $event.target.value)}}}),_vm._v(" "),_c('button',{staticClass:"action-button animate blue mt-4 mb-2 w-100",on:{"click":function($event){_vm.sendData()}}},[_vm._v("Upload")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/results"}},[_c('button',{staticClass:"action-button animate green my-2 w-100"},[_vm._v("Back")])])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "h1gD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hcza":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_timers_mixin__ = __webpack_require__("6Y9k");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0_vue_timers_mixin__["a" /* default */]],
    name: 'your_initial',
    data() {
        return {
            scores: []
        };
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {});
    },
    methods: {
        getQuestions() {
            var router = this.$router;
            this.$store.dispatch('getQuestions').then(function (data) {
                router.push({
                    name: 'games'
                });
            }).catch(function (data) {
                console.log("Rejected Request");
            });
        },

        begainGame() {
            var router = this.$router;
            this.$store.dispatch('getQuestions').then(function (data) {
                router.push({
                    name: 'game'
                });
            }).catch(function (data) {
                console.log("Rejected Request");
            });
        }
    },

    created() {
        this.$store.state.questions = [];
        this.$store.commit('setInitializeUserQuestion');
        this.$http.get('https://unilad-expo-quiz.firebaseio.com/results.json').then(function (data) {
            let arr = [];
            for (let x in data.body) {
                arr.push(data.body[x]);
            }
            var sorto = {
                correct_answers: "desc", milliseconds: "asc"
            };
            this.scores = arr.keySort(sorto);
            this.$store.commit('setLastId', this.scores.length);
        }).catch(function (data) {
            console.log('Error: ', data);
        });
    },
    mounted() {},
    destroyed() {}
});

Array.prototype.keySort = function (keys) {

    keys = keys || {};

    // via
    // https://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
    var obLen = function (obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    // avoiding using Object.keys because I guess did it have IE8 issues?
    // else var obIx = function(obj, ix){ return Object.keys(obj)[ix]; } or
    // whatever
    var obIx = function (obj, ix) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (size == ix) return key;
                size++;
            }
        }
        return false;
    };

    var keySort = function (a, b, d) {
        d = d !== null ? d : 1;
        // a = a.toLowerCase(); // this breaks numbers
        // b = b.toLowerCase();
        if (a == b) return 0;
        return a > b ? 1 * d : -1 * d;
    };

    var KL = obLen(keys);

    if (!KL) return this.sort(keySort);

    for (var k in keys) {
        // asc unless desc or skip
        keys[k] = keys[k] == 'desc' || keys[k] == -1 ? -1 : keys[k] == 'skip' || keys[k] === 0 ? 0 : 1;
    }

    this.sort(function (a, b) {
        var sorted = 0,
            ix = 0;

        while (sorted === 0 && ix < KL) {
            var k = obIx(keys, ix);
            if (k) {
                var dir = keys[k];
                sorted = keySort(a[k], b[k], dir);
                ix++;
            }
        }
        return sorted;
    });
    return this;
};

/***/ }),

/***/ "jIO1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jyJz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__("qgpy");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a386bde_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__("0L+I");
function injectStyle (ssrContext) {
  __webpack_require__("b6+R")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a386bde_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "lBUR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Doughnut_vue__ = __webpack_require__("5TSa");
/* unused harmony namespace reexport */
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Doughnut_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "m2Op":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ohoZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"section-start"}},[_c('div',{staticClass:"start d-flex align-items-center"},[_c('div',{staticClass:"card w-100 text-center py-4 mx-auto"},[_c('section',{staticClass:"container"},[_c('div',{staticClass:"row"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"leader_board text-left",attrs:{"id":"leader_board"}},[_c('div',{attrs:{"id":"children"}},[_c('h2',{staticClass:"text-left sub_heading"},[_vm._v("Leaderboard")]),_vm._v(" "),_c('table',{staticClass:"table"},[_c('tbody',_vm._l((_vm.scores),function(score,index){return (index < 10)?_c('tr',[_c('td',[_c('strong',{staticStyle:{"font-family":"'giorgiosans-bolditalic'"}},[_vm._v(_vm._s(index+1)+_vm._s(_vm._f("pluralize")(index+1,'st','nd','rd','th')))])]),_vm._v(" "),_c('td',{staticStyle:{"font-family":"'gotham-book'","font-weight":"normal","font-style":"normal","text-transform":"uppercase"}},[_vm._v(_vm._s(score.initial_name || score.user.full_name))]),_vm._v(" "),_c('td',[_c('strong',{staticStyle:{"font-family":"'giorgiosans-bolditalic'"}},[_vm._v(_vm._s(score.time.minutes)+":"+_vm._s(score.time.seconds))])]),_vm._v(" "),_c('td',[_c('strong',{staticStyle:{"font-family":"'giorgiosans-bolditalic'"}},[_vm._v(_vm._s(score.correct_answers)+"/10")])])]):_vm._e()}))])])])])])]),_vm._v(" "),_vm._m(1)])]),_vm._v(" "),_c('button',{staticClass:"quiz-button",on:{"click":function($event){_vm.begainGame()}}},[_vm._v("Start")])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-8 table-style"},[_c('div',{staticClass:"table-cell-style"},[_c('div',{staticClass:"heading_leaderboard_page"},[_c('h1',{staticClass:"heading_main"},[_vm._v("How well do you"),_c('br'),_vm._v("understand the"),_c('br'),_vm._v("social generation?")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"pos-bottom"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-10"},[_c('p',{staticClass:"text-left"},[_vm._v("Test your knowledge of the world of social by answering 10 questions as quick as you can to see if you have what it takes to become a social media expert.")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "pHbL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__ = __webpack_require__("+cKO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'your_initial',
    data() {
        return {
            user: {
                'full_name': '',
                'company': '',
                'email': '',
                'term_conditions': ''
            },
            last_id: 0
        };
    },
    validations: {
        user: {
            full_name: {
                required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"]
            },
            company: {
                required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"]
            },
            email: {
                required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"],
                email: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["email"]
            },
            term_conditions: {
                required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"]
            }
        }
    },
    methods: {
        submitForm() {
            this.$v.user.$touch();
            if (!this.$v.user.$invalid) {

                var created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
                var initial_name = this.$store.getters.getInitialName;
                var answer = this.$store.getters.getIncorrectCorrect;
                this.last_id = this.$store.getters.getLastId;

                var upload = {
                    time: {
                        minutes: this.$store.state.time.minutes,
                        seconds: this.$store.state.time.seconds
                    },

                    user: {
                        full_name: this.user.full_name,
                        email: this.user.email,
                        company: this.user.company,
                        terms: this.user.term_conditions
                    },

                    correct_answers: answer.correct_answers,
                    incorrect_answers: answer.incorrect_answers,
                    milliseconds: this.$store.getters.getMilliseconds,
                    userquestions: this.$store.getters.getUserQuestion,
                    created_at: created_at,
                    unique_id: this.last_id,
                    initial_name: initial_name
                };

                this.user.full_name = '';
                this.user.email = '';
                this.user.company = '';
                this.user.term_conditions = '';

                this.$http.post('https://unilad-expo-quiz.firebaseio.com/results.json', upload).then(function (data) {
                    this.$router.push({
                        name: 'leader_board',
                        query: { id: this.last_id }
                    });
                }).catch(function (data) {
                    console.log("Error: ", data);
                });
            }
        },

        gototermsCondition() {
            this.$store.commit('setUser', this.user);
            this.$router.push({
                name: 'term_condition'
            });
        }
    },
    created() {
        this.user = this.$store.getters.getUser;
    }

});

/***/ }),

/***/ "qaU4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qgpy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'user',
    data() {
        return {
            user: {
                name: ''
            }
        };
    },
    methods: {
        gotoGame() {
            var router = this.$router;
            this.$store.commit('setUser', this.user.name);
            this.$store.dispatch('getQuestions').then(function (data) {
                router.push({
                    name: 'game'
                });
            }).catch(function (data) {
                console.log("Rejected Request");
            });
        }
    }
});

/***/ }),

/***/ "qkG4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMyRTFEMTA3MUY5NDExRTg5RDE5QzlDNzVBMzAzOTQ4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMyRTFEMTA4MUY5NDExRTg5RDE5QzlDNzVBMzAzOTQ4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzJFMUQxMDUxRjk0MTFFODlEMTlDOUM3NUEzMDM5NDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzJFMUQxMDYxRjk0MTFFODlEMTlDOUM3NUEzMDM5NDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz57gHoOAAAHdElEQVR42uydfWxT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"

/***/ }),

/***/ "sKj1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Doughnut__ = __webpack_require__("lBUR");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'results',
  data() {
    return {};
  },
  components: {
    "doughnut": __WEBPACK_IMPORTED_MODULE_0__Doughnut__["a" /* default */]
  },
  created: function () {
    var upload = {
      time: this.$store.state.time.minites + ':' + this.$store.state.time.seconds,
      username: this.$store.state.user.name,
      email: this.$store.state.user.email,
      score: this.$store.getters.getScore
    };
    console.log("Time info: ");
    //        this.$http.post('https://unilad-expo-quiz.firebaseio.com/results.json', upload)
    //            .then(function(data) {
    //                console.log(data)
    //                this.$router.push({
    //                    name: 'Start'
    //                })
    //            })
    //            .catch(function(data) {
    //                console.log("Error: ", data)
    //            });
    console.log(this.$store.state.time.minites + ':' + this.$store.state.time.seconds);
    console.log("user is info:");
    console.log("Name: " + this.$store.state.user.name + ' | Email: ' + this.$store.state.user.email);
    console.log("Current result");
    console.log(this.$store.state.results);
  }
});

/***/ }),

/***/ "tNuP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game_main_container"},[(_vm.answers.type === 'image_text')?_c('div',{staticClass:"game_type_image_text"},[_c('div',{staticClass:"row answer"},[_c('div',{staticClass:"col-8"},_vm._l((_vm.options),function(option,index){return _c('div',{staticClass:"row",class:{selected: option == _vm.selected, disabled : option != _vm.selected && _vm.selected}},[_c('div',{staticClass:"answer_content image_text",class:{selected: option == _vm.selected, disabled : option != _vm.selected && _vm.selected},on:{"click":function($event){_vm.pickOption(option)}}},[(_vm.selected && option.answer === 1 && option === _vm.selected)?_c('div',{staticClass:"answer_result"},[_c('img',{attrs:{"src":__webpack_require__("qkG4")}})]):_vm._e(),_vm._v(" "),(_vm.selected && option.answer != 1 && option === _vm.selected)?_c('div',{staticClass:"answer_result"},[_c('img',{attrs:{"src":__webpack_require__("9rYS")}})]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"index"},[_vm._v(_vm._s(_vm.letters[index])+".")]),_vm._v(" "),_c('p',{staticClass:"answer_title"},[_vm._v(_vm._s(option.text))])])])})),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"row"},[(_vm.answers.image)?_c('div',{staticClass:"right_img"},[_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.answers.image}})]):_vm._e()])])])]):_vm._e(),_vm._v(" "),(_vm.answers.type === 'text')?_c('div',{staticClass:"game_type_text"},[_c('div',{staticClass:"row answer"},_vm._l((_vm.options),function(option,index){return _c('div',{staticClass:"col-6",class:{selected: option == _vm.selected, disabled : option != _vm.selected && _vm.selected}},[_c('div',{staticClass:"answer_content text_layout",class:{selected: option == _vm.selected, disabled : option != _vm.selected && _vm.selected},on:{"click":function($event){_vm.pickOption(option)}}},[(_vm.selected && option.answer === 1 && option === _vm.selected)?_c('div',{staticClass:"answer_result"},[_c('img',{attrs:{"src":__webpack_require__("qkG4")}})]):_vm._e(),_vm._v(" "),(_vm.selected && option.answer != 1 && option === _vm.selected)?_c('div',{staticClass:"answer_result"},[_c('img',{attrs:{"src":__webpack_require__("9rYS")}})]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"index"},[_vm._v(_vm._s(_vm.letters[index])+".")]),_vm._v(" "),_c('p',{staticClass:"answer_title"},[_vm._v(_vm._s(option.text))])])])}))]):_vm._e(),_vm._v(" "),(_vm.answers.type === 'image')?_c('div',{staticClass:"game_type_image"},[_c('div',{staticClass:"row answer"},_vm._l((_vm.options),function(option){return _c('div',{staticClass:"col-3",class:{selected: option == _vm.selected, disabled : option != _vm.selected && _vm.selected}},[_c('div',{staticClass:"answer_content image_layout",on:{"click":function($event){_vm.pickOption(option)}}},[(_vm.selected && option.answer === 1 && option === _vm.selected)?_c('div',{staticClass:"answer_result"},[_c('img',{attrs:{"src":__webpack_require__("qkG4")}})]):_vm._e(),_vm._v(" "),(_vm.selected && option.answer != 1 && option === _vm.selected)?_c('div',{staticClass:"answer_result"},[_c('img',{attrs:{"src":__webpack_require__("9rYS")}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"img_box",class:{selected: option == _vm.selected,
                     disabled : option != _vm.selected && _vm.selected}},[_c('img',{staticClass:"img-fluid",attrs:{"src":option.image}})]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('p',{staticClass:"answer_title"},[_vm._v(_vm._s(option.text))])])])])}))]):_vm._e(),_vm._v(" "),(!_vm.gameActive)?_c('button',{staticClass:"quiz-button",on:{"click":function($event){_vm.nextQuestion()}}},[_vm._v("Next")]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "tUX2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tZZY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Game_vue__ = __webpack_require__("RcUN");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2cfdf1ef_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Game_vue__ = __webpack_require__("KC4o");
function injectStyle (ssrContext) {
  __webpack_require__("m2Op")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2cfdf1ef"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Game_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2cfdf1ef_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Game_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "toXb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ugBM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uslO":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "3CJN",
	"./af.js": "3CJN",
	"./ar": "3MVc",
	"./ar-dz": "tkWw",
	"./ar-dz.js": "tkWw",
	"./ar-kw": "j8cJ",
	"./ar-kw.js": "j8cJ",
	"./ar-ly": "wPpW",
	"./ar-ly.js": "wPpW",
	"./ar-ma": "dURR",
	"./ar-ma.js": "dURR",
	"./ar-sa": "7OnE",
	"./ar-sa.js": "7OnE",
	"./ar-tn": "BEem",
	"./ar-tn.js": "BEem",
	"./ar.js": "3MVc",
	"./az": "eHwN",
	"./az.js": "eHwN",
	"./be": "3hfc",
	"./be.js": "3hfc",
	"./bg": "lOED",
	"./bg.js": "lOED",
	"./bm": "hng5",
	"./bm.js": "hng5",
	"./bn": "aM0x",
	"./bn.js": "aM0x",
	"./bo": "w2Hs",
	"./bo.js": "w2Hs",
	"./br": "OSsP",
	"./br.js": "OSsP",
	"./bs": "aqvp",
	"./bs.js": "aqvp",
	"./ca": "wIgY",
	"./ca.js": "wIgY",
	"./cs": "ssxj",
	"./cs.js": "ssxj",
	"./cv": "N3vo",
	"./cv.js": "N3vo",
	"./cy": "ZFGz",
	"./cy.js": "ZFGz",
	"./da": "YBA/",
	"./da.js": "YBA/",
	"./de": "DOkx",
	"./de-at": "8v14",
	"./de-at.js": "8v14",
	"./de-ch": "Frex",
	"./de-ch.js": "Frex",
	"./de.js": "DOkx",
	"./dv": "rIuo",
	"./dv.js": "rIuo",
	"./el": "CFqe",
	"./el.js": "CFqe",
	"./en-au": "Sjoy",
	"./en-au.js": "Sjoy",
	"./en-ca": "Tqun",
	"./en-ca.js": "Tqun",
	"./en-gb": "hPuz",
	"./en-gb.js": "hPuz",
	"./en-ie": "ALEw",
	"./en-ie.js": "ALEw",
	"./en-il": "QZk1",
	"./en-il.js": "QZk1",
	"./en-nz": "dyB6",
	"./en-nz.js": "dyB6",
	"./eo": "Nd3h",
	"./eo.js": "Nd3h",
	"./es": "LT9G",
	"./es-do": "7MHZ",
	"./es-do.js": "7MHZ",
	"./es-us": "INcR",
	"./es-us.js": "INcR",
	"./es.js": "LT9G",
	"./et": "XlWM",
	"./et.js": "XlWM",
	"./eu": "sqLM",
	"./eu.js": "sqLM",
	"./fa": "2pmY",
	"./fa.js": "2pmY",
	"./fi": "nS2h",
	"./fi.js": "nS2h",
	"./fo": "OVPi",
	"./fo.js": "OVPi",
	"./fr": "tzHd",
	"./fr-ca": "bXQP",
	"./fr-ca.js": "bXQP",
	"./fr-ch": "VK9h",
	"./fr-ch.js": "VK9h",
	"./fr.js": "tzHd",
	"./fy": "g7KF",
	"./fy.js": "g7KF",
	"./gd": "nLOz",
	"./gd.js": "nLOz",
	"./gl": "FuaP",
	"./gl.js": "FuaP",
	"./gom-latn": "+27R",
	"./gom-latn.js": "+27R",
	"./gu": "rtsW",
	"./gu.js": "rtsW",
	"./he": "Nzt2",
	"./he.js": "Nzt2",
	"./hi": "ETHv",
	"./hi.js": "ETHv",
	"./hr": "V4qH",
	"./hr.js": "V4qH",
	"./hu": "xne+",
	"./hu.js": "xne+",
	"./hy-am": "GrS7",
	"./hy-am.js": "GrS7",
	"./id": "yRTJ",
	"./id.js": "yRTJ",
	"./is": "upln",
	"./is.js": "upln",
	"./it": "FKXc",
	"./it.js": "FKXc",
	"./ja": "ORgI",
	"./ja.js": "ORgI",
	"./jv": "JwiF",
	"./jv.js": "JwiF",
	"./ka": "RnJI",
	"./ka.js": "RnJI",
	"./kk": "j+vx",
	"./kk.js": "j+vx",
	"./km": "5j66",
	"./km.js": "5j66",
	"./kn": "gEQe",
	"./kn.js": "gEQe",
	"./ko": "eBB/",
	"./ko.js": "eBB/",
	"./ky": "6cf8",
	"./ky.js": "6cf8",
	"./lb": "z3hR",
	"./lb.js": "z3hR",
	"./lo": "nE8X",
	"./lo.js": "nE8X",
	"./lt": "/6P1",
	"./lt.js": "/6P1",
	"./lv": "jxEH",
	"./lv.js": "jxEH",
	"./me": "svD2",
	"./me.js": "svD2",
	"./mi": "gEU3",
	"./mi.js": "gEU3",
	"./mk": "Ab7C",
	"./mk.js": "Ab7C",
	"./ml": "oo1B",
	"./ml.js": "oo1B",
	"./mr": "5vPg",
	"./mr.js": "5vPg",
	"./ms": "ooba",
	"./ms-my": "G++c",
	"./ms-my.js": "G++c",
	"./ms.js": "ooba",
	"./mt": "oCzW",
	"./mt.js": "oCzW",
	"./my": "F+2e",
	"./my.js": "F+2e",
	"./nb": "FlzV",
	"./nb.js": "FlzV",
	"./ne": "/mhn",
	"./ne.js": "/mhn",
	"./nl": "3K28",
	"./nl-be": "Bp2f",
	"./nl-be.js": "Bp2f",
	"./nl.js": "3K28",
	"./nn": "C7av",
	"./nn.js": "C7av",
	"./pa-in": "pfs9",
	"./pa-in.js": "pfs9",
	"./pl": "7LV+",
	"./pl.js": "7LV+",
	"./pt": "ZoSI",
	"./pt-br": "AoDM",
	"./pt-br.js": "AoDM",
	"./pt.js": "ZoSI",
	"./ro": "wT5f",
	"./ro.js": "wT5f",
	"./ru": "ulq9",
	"./ru.js": "ulq9",
	"./sd": "fW1y",
	"./sd.js": "fW1y",
	"./se": "5Omq",
	"./se.js": "5Omq",
	"./si": "Lgqo",
	"./si.js": "Lgqo",
	"./sk": "OUMt",
	"./sk.js": "OUMt",
	"./sl": "2s1U",
	"./sl.js": "2s1U",
	"./sq": "V0td",
	"./sq.js": "V0td",
	"./sr": "f4W3",
	"./sr-cyrl": "c1x4",
	"./sr-cyrl.js": "c1x4",
	"./sr.js": "f4W3",
	"./ss": "7Q8x",
	"./ss.js": "7Q8x",
	"./sv": "Fpqq",
	"./sv.js": "Fpqq",
	"./sw": "DSXN",
	"./sw.js": "DSXN",
	"./ta": "+7/x",
	"./ta.js": "+7/x",
	"./te": "Nlnz",
	"./te.js": "Nlnz",
	"./tet": "gUgh",
	"./tet.js": "gUgh",
	"./tg": "5SNd",
	"./tg.js": "5SNd",
	"./th": "XzD+",
	"./th.js": "XzD+",
	"./tl-ph": "3LKG",
	"./tl-ph.js": "3LKG",
	"./tlh": "m7yE",
	"./tlh.js": "m7yE",
	"./tr": "k+5o",
	"./tr.js": "k+5o",
	"./tzl": "iNtv",
	"./tzl.js": "iNtv",
	"./tzm": "FRPF",
	"./tzm-latn": "krPU",
	"./tzm-latn.js": "krPU",
	"./tzm.js": "FRPF",
	"./ug-cn": "To0v",
	"./ug-cn.js": "To0v",
	"./uk": "ntHu",
	"./uk.js": "ntHu",
	"./ur": "uSe8",
	"./ur.js": "uSe8",
	"./uz": "XU1s",
	"./uz-latn": "/bsm",
	"./uz-latn.js": "/bsm",
	"./uz.js": "XU1s",
	"./vi": "0X8Q",
	"./vi.js": "0X8Q",
	"./x-pseudo": "e/KL",
	"./x-pseudo.js": "e/KL",
	"./yo": "YXlc",
	"./yo.js": "YXlc",
	"./zh-cn": "Vz2w",
	"./zh-cn.js": "Vz2w",
	"./zh-hk": "ZUyn",
	"./zh-hk.js": "ZUyn",
	"./zh-tw": "BbgG",
	"./zh-tw.js": "BbgG"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "uslO";

/***/ }),

/***/ "vAvH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"score d-flex align-items-center"},[_c('div',{staticClass:"card w-75 animated bounce text-center py-4 px-5 mb-3 mx-auto"},[_c('h3',{staticClass:"bits"},[_vm._v("Ranking")]),_vm._v(" "),_c('div',{staticClass:"container mb-4 px-5"},[_vm._m(0),_vm._v(" "),_vm._l((_vm.score),function(user){return _c('div',{staticClass:"d-flex justify-content-between bits"},[_c('span',[_vm._v(_vm._s(user.username))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(user.score))])])})],2),_vm._v(" "),_c('div',{staticClass:"w-100"},[_c('router-link',{staticClass:"w-100 d-flex justify-content-center",attrs:{"to":"/"}},[_c('button',{staticClass:"w-50 action-button animate green bits"},[_vm._v("\n                        Back\n                      ")])])],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-between mb-4"},[_c('span',{staticClass:"bits"},[_vm._v("Username")]),_vm._v(" "),_c('span',{staticClass:"bits text-right"},[_vm._v("Score")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "wtEF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_json__ = __webpack_require__("b3jg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_data_json__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: {
        unique_id: null,
        results: { correct_answers: 0, incorrect_answers: 0 },
        user: {
            full_name: '',
            company: '',
            email: ''
        },
        time: {
            minutes: 0,
            seconds: 0
        },
        millisecond: 0,
        initial_name: '',
        questions: [],
        userQuestions: []
    },

    getters: {},

    mutations: {
        translateData: function (state, questions) {
            var array = [];
            for (var i = 0; i < questions.length; i++) {
                questions[i].incorrect_answers.push(questions[i].correct_answer);
                shuffle(questions[i].incorrect_answers);
            }
            state.questions = questions;
        },

        setLastId(state, id) {
            state.unique_id = id + 1;
        },
        setResults(state, answers) {
            state.results.correct_answers = answers.corrects;
            state.results.incorrect_answers = answers.incorrects;
        },
        setUser(state, user) {
            state.user.full_name = user.full_name;
            state.company = user.compnay;
            state.email = user.email;
        },

        setUserQuestion(state, question) {
            state.userQuestions.push(question);
        },
        setInitializeUserQuestion(state) {
            state.userQuestions = [];
        },

        setTotalTimetoplay(state, time) {
            state.time.minutes = time.minutes;
            state.time.seconds = time.second;
            state.time.millisecond = time.millisecond;
        },

        setInitialName(state, initial_name) {
            state.initial_name = initial_name;
        },
        setMilliseconds(state, millisecond) {
            state.millisecond = millisecond;
        }
    },
    getters: {
        getScore(state) {
            var total = state.results.correct_answers + state.results.incorrect_answers;
            return state.results.correct_answers + " / " + total;
        },

        getLastId(state) {
            return state.unique_id;
        },

        getIncorrectCorrect(state) {
            return state.results;
        },

        getUser(state) {
            return state.user;
        },
        getUserQuestion(state) {
            return state.userQuestions;
        },

        getTotalTimeToPlay(state) {
            return state.time;
        },

        getInitialName(state) {
            return state.initial_name;
        },
        getMilliseconds(state) {
            return state.millisecond;
        }
    },

    actions: {
        getQuestions(context) {
            return new Promise(function (resolve, reject) {
                var newObject = JSON.parse(JSON.stringify(__WEBPACK_IMPORTED_MODULE_2__data_data_json___default.a));
                var quiz_question = getQuizquestion(newObject);
                context.commit('translateData', quiz_question);
                resolve(true);
            });
        }
    }
}),
      shuffle = function (a, n) {
    var shuffled = a.sort(() => .5 - Math.random()); // shuffle  
    return shuffled.slice(0, n);
},
      getQuizquestion = function (data) {
    // data random
    var q_easy = 24; // Max 24
    var q_medium = 17; // Max 17
    var q_hard = 19; // Max 19
    var result = [];

    var easy = shuffle(data.easy, q_easy);
    var medium = shuffle(data.medium, q_medium);
    var hard = shuffle(data.hard, q_hard);

    // // Push 10 question to resutl variable
    result.push(...easy);
    result.push(...medium);
    result.push(...hard);

    var quiz_data_shuffle = shuffle(result);
    return quiz_data_shuffle;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = store;

/* unused harmony export shuffle */

/* unused harmony export getQuizquestion */


/***/ }),

/***/ "x6dW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__ = __webpack_require__("+cKO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'your_initial',
    data() {
        return {
            initial_value: '',
            required_field: false,
            last_id: '',
            invalid: false
        };
    },
    validations: {
        initial_value: {
            required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"]
        }

    },
    methods: {
        enterPriceDraw() {
            this.$store.commit('setInitialName', this.initial_value);
            this.$router.push({
                name: 'your_detail'
            });
        },

        leaderboard() {
            if (this.initial_value == '') {
                this.required_field = true;
                return;
            }

            this.$store.commit('setInitialName', this.initial_value);

            var created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
            var initial_name = this.initial_value;
            this.last_id = this.$store.getters.getLastId;
            var answer = this.$store.getters.getIncorrectCorrect;

            var upload = {
                time: {
                    minutes: this.$store.state.time.minutes,
                    seconds: this.$store.state.time.seconds
                },

                user: {
                    full_name: "",
                    email: "",
                    company: ""
                },
                correct_answers: answer.correct_answers,
                incorrect_answers: answer.incorrect_answers,
                milliseconds: this.$store.getters.getMilliseconds,
                userquestions: this.$store.getters.getUserQuestion,
                created_at: created_at,
                unique_id: this.last_id,
                initial_name: initial_name
            };

            this.$http.post('https://unilad-expo-quiz.firebaseio.com/results.json', upload).then(function (data) {
                this.$router.push({
                    name: 'leader_board',
                    query: { id: this.last_id }
                });
            }).catch(function (data) {
                console.log("Error: ", data);
            });
        },

        sendtest() {
            this.$router.push({
                name: 'leader_board',
                query: { id: 10 }

            });
        }
    },

    created() {},
    mounted() {}
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'app'
});

/***/ }),

/***/ "zgV5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Start_vue__ = __webpack_require__("hcza");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54213b4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Start_vue__ = __webpack_require__("ohoZ");
function injectStyle (ssrContext) {
  __webpack_require__("BbuY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54213b4c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Start_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54213b4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Start_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},["NHnr"]);
//# sourceMappingURL=app.958c919a3b57c6489c44.js.map