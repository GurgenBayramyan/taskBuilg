"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/services/index..ts":
/*!********************************!*\
  !*** ./src/services/index..ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteCustomerService\": function() { return /* binding */ deleteCustomerService; },\n/* harmony export */   \"getCustomer\": function() { return /* binding */ getCustomer; },\n/* harmony export */   \"setCustomer\": function() { return /* binding */ setCustomer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar getCustomer = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var resp;\n        return C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(url);\n                case 2:\n                    resp = _ctx.sent;\n                    return _ctx.abrupt(\"return\", resp.data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getCustomer(url) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar setCustomer = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url, data) {\n        var resp;\n        return C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(url, data);\n                case 2:\n                    resp = _ctx.sent;\n                    return _ctx.abrupt(\"return\", resp.data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function setCustomer(url, data) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar deleteCustomerService = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var resp;\n        return C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](url);\n                case 2:\n                    resp = _ctx.sent;\n                    c;\n                    return _ctx.abrupt(\"return\", resp.data);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function deleteCustomerService(url) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaW5kZXguLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFHbEIsSUFBTUMsV0FBVztlQUFHLCtPQUFNQyxHQUFVLEVBQUs7WUFDdENDLElBQUk7Ozs7OzJCQUFTSCxpREFBUyxDQUFDRSxHQUFHLENBQUM7O29CQUEzQkMsSUFBSSxZQUF1QjtpREFDMUJBLElBQUksQ0FBQ0UsSUFBSTs7Ozs7O0tBQ25CO29CQUhZSixXQUFXLENBQVNDLEdBQVU7OztHQUcxQztBQUNNLElBQU1JLFdBQVc7ZUFBRywrT0FBTUosR0FBVSxFQUFDRyxJQUFjLEVBQUs7WUFDckRGLElBQUk7Ozs7OzJCQUFTSCxrREFBVSxDQUFDRSxHQUFHLEVBQUNHLElBQUksQ0FBQzs7b0JBQWpDRixJQUFJLFlBQTZCO2lEQUNoQ0EsSUFBSSxDQUFDRSxJQUFJOzs7Ozs7S0FDbkI7b0JBSFlDLFdBQVcsQ0FBU0osR0FBVSxFQUFDRyxJQUFjOzs7R0FHekQ7QUFDTSxJQUFNRyxxQkFBcUI7ZUFBRywrT0FBTU4sR0FBVSxFQUFLO1lBQ2hEQyxJQUFJOzs7OzsyQkFBU0gsdURBQVksQ0FBQ0UsR0FBRyxDQUFDOztvQkFBOUJDLElBQUksWUFBMEI7b0JBQ3BDTyxDQUFDO2lEQUNNUCxJQUFJLENBQUNFLElBQUk7Ozs7OztLQUNuQjtvQkFKWUcscUJBQXFCLENBQVNOLEdBQVU7OztHQUlwRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvaW5kZXguLnRzPzExM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IElQb3N0RGF0YSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbWVyID0gYXN5bmModXJsOnN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgcmV0dXJuIHJlc3AuZGF0YVxyXG59XHJcbmV4cG9ydCBjb25zdCBzZXRDdXN0b21lciA9IGFzeW5jKHVybDpzdHJpbmcsZGF0YTpJUG9zdERhdGEpID0+IHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5wb3N0KHVybCxkYXRhKTtcclxuICAgIHJldHVybiByZXNwLmRhdGFcclxufVxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ3VzdG9tZXJTZXJ2aWNlID0gYXN5bmModXJsOnN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmRlbGV0ZSh1cmwpO1xyXG4gICAgY1xyXG4gICAgcmV0dXJuIHJlc3AuZGF0YVxyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0Q3VzdG9tZXIiLCJ1cmwiLCJyZXNwIiwiZ2V0IiwiZGF0YSIsInNldEN1c3RvbWVyIiwicG9zdCIsImRlbGV0ZUN1c3RvbWVyU2VydmljZSIsImRlbGV0ZSIsImMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/index..ts\n"));

/***/ })

});