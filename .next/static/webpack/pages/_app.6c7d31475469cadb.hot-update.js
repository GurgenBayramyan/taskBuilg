/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ \"./src/store/rootReducer.ts\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _sagas_customerSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas/customerSaga */ \"./src/store/sagas/customerSaga.ts\");\n/* harmony import */ var _sagas_customerSaga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sagas_customerSaga__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _marked = C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(RootSaga);\n\n\n\n\n\nvar sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nfunction RootSaga() {\n    return C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function RootSaga$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__.all)([\n                    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__.fork)(_sagas_customerSaga__WEBPACK_IMPORTED_MODULE_4__.watchCustomerSaga)\n                ]);\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked);\n}\nvar store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.configureStore)({\n    reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_1__.rootReducer,\n    middleware: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.getDefaultMiddleware)({\n        thunk: false,\n        serializableCheck: false\n    })).concat([\n        sagaMiddleware, \n    ]),\n    devTools: \"development\" !== \"production\"\n});\nsagaMiddleware.run(RootSaga);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzt3SkFTVUEsUUFBUTtBQVRzRDtBQUM1QjtBQUNkO0FBQ2lCO0FBQ1U7QUFHekQsSUFBTVEsY0FBYyxHQUFHSixzREFBSSxFQUFFO0FBRTdCLFNBQVVKLFFBQVEsR0FBRzs4SkFBWEEsU0FBUTs7Ozt1QkFDUkssdURBQUcsQ0FBQztvQkFDTkMsd0RBQUksQ0FBQ0Msa0VBQWlCLENBQUM7aUJBQzFCLENBQUM7Ozs7OztDQUNMO0FBRUQsSUFBTUUsS0FBSyxHQUFHUixnRUFBYyxDQUFDO0lBQzNCUyxPQUFPLEVBQUVQLHFEQUFXO0lBQ3BCUSxVQUFVLEVBQUUscUZBQ1BULHNFQUFvQixDQUFDO1FBQUVVLEtBQUssRUFBRSxLQUFLO1FBQUVDLGlCQUFpQixFQUFFLEtBQUs7S0FBRSxDQUFDLENBQWhFWCxRQURPO1FBRVZNLGNBQWM7S0FDZjtJQUNETSxRQUFRLEVBQUVDLGFBckJDLEtBcUJ3QixZQUFZO0NBQ2hELENBQUM7QUFFRlAsY0FBYyxDQUFDUSxHQUFHLENBQUNoQixRQUFRLENBQUMsQ0FBQztBQUM3QiwrREFBZVMsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9pbmRleC50cz9jZWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBnZXREZWZhdWx0TWlkZGxld2FyZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHJvb3RSZWR1Y2VyIH0gZnJvbSBcIi4vcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHNhZ2EgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyB3YXRjaEN1c3RvbWVyU2FnYSB9IGZyb20gXCIuL3NhZ2FzL2N1c3RvbWVyU2FnYVwiO1xyXG5cclxuXHJcbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gc2FnYSgpO1xyXG5cclxuZnVuY3Rpb24qIFJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQ3VzdG9tZXJTYWdhKSBcclxuICAgIF0pO1xyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiByb290UmVkdWNlcixcclxuICBtaWRkbGV3YXJlOiBbXHJcbiAgICAuLi5nZXREZWZhdWx0TWlkZGxld2FyZSh7IHRodW5rOiBmYWxzZSwgc2VyaWFsaXphYmxlQ2hlY2s6IGZhbHNlIH0pLFxyXG4gICAgc2FnYU1pZGRsZXdhcmUsXHJcbiAgXSxcclxuICBkZXZUb29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiLFxyXG59KTtcclxuXHJcbnNhZ2FNaWRkbGV3YXJlLnJ1bihSb290U2FnYSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDsiXSwibmFtZXMiOlsiUm9vdFNhZ2EiLCJjb25maWd1cmVTdG9yZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwicm9vdFJlZHVjZXIiLCJzYWdhIiwiYWxsIiwiZm9yayIsIndhdGNoQ3VzdG9tZXJTYWdhIiwic2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsInJlZHVjZXIiLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJzZXJpYWxpemFibGVDaGVjayIsImRldlRvb2xzIiwicHJvY2VzcyIsInJ1biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/index.ts\n"));

/***/ }),

/***/ "./src/store/sagas/customerSaga.ts":
/*!*****************************************!*\
  !*** ./src/store/sagas/customerSaga.ts ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});