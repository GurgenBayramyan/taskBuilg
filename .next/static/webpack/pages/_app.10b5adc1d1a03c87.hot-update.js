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

/***/ "./src/store/slices/customersSlice.ts":
/*!********************************************!*\
  !*** ./src/store/slices/customersSlice.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteCustomer\": function() { return /* binding */ deleteCustomer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar initialState = {\n    customers: []\n};\nvar customersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"customersSlice\",\n    initialState: initialState,\n    reducers: {\n        deleteCustomer: function(state, param) {\n            var payload = param.payload;\n            state.customers = state.customers.filter(function(el) {\n                return el.id !== payload;\n            });\n        },\n        addCustomer: function(state, param) {\n            var payload = param.payload;\n            st;\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (customersSlice);\nvar deleteCustomer = customersSlice.actions.deleteCustomer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL2N1c3RvbWVyc1NsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThEO0FBRTlELElBQU1DLFlBQVksR0FBbUI7SUFDakNDLFNBQVMsRUFBQyxFQUFFO0NBQ2Y7QUFDRCxJQUFNQyxjQUFjLEdBQUdILDZEQUFXLENBQUM7SUFDL0JJLElBQUksRUFBQyxnQkFBZ0I7SUFDckJILFlBQVksRUFBWkEsWUFBWTtJQUNaSSxRQUFRLEVBQUM7UUFDTEMsY0FBYyxFQUFDLFNBQUNDLEtBQUssU0FBb0M7Z0JBQWxDQyxPQUFPLFNBQVBBLE9BQU87WUFDMUJELEtBQUssQ0FBQ0wsU0FBUyxHQUFHSyxLQUFLLENBQUNMLFNBQVMsQ0FBQ08sTUFBTSxDQUFDQyxTQUFBQSxFQUFFO3VCQUFFQSxFQUFFLENBQUNDLEVBQUUsS0FBS0gsT0FBTzthQUFBLENBQUM7U0FDbEU7UUFDREksV0FBVyxFQUFDLFNBQUNMLEtBQUssU0FBNkI7Z0JBQTNCQyxPQUFPLFNBQVBBLE9BQU87WUFDdkJLLEVBQUU7U0FDTDtLQUdKO0NBQ0osQ0FBQztBQUNGLCtEQUFlVixjQUFjLEVBQUM7QUFDdkIsSUFBTSxjQUFlLEdBQUlBLGNBQWMsQ0FBQ1csT0FBTyxDQUF4Q1IsY0FBYyxDQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvc2xpY2VzL2N1c3RvbWVyc1NsaWNlLnRzPzNlNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBJQ3VzdG9tZXJzLCBJQ3VzdG9tZXJzU3RhdGUgfSBmcm9tIFwiLi9jdXN0b21lcnNUeXBlc1wiO1xyXG5jb25zdCBpbml0aWFsU3RhdGU6SUN1c3RvbWVyc1N0YXRlID0ge1xyXG4gICAgY3VzdG9tZXJzOltdXHJcbn1cclxuY29uc3QgY3VzdG9tZXJzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOlwiY3VzdG9tZXJzU2xpY2VcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICBkZWxldGVDdXN0b21lcjooc3RhdGUse3BheWxvYWR9OlBheWxvYWRBY3Rpb248c3RyaW5nPikgPT57XHJcbiAgICAgICAgICAgIHN0YXRlLmN1c3RvbWVycyA9IHN0YXRlLmN1c3RvbWVycy5maWx0ZXIoZWw9PmVsLmlkICE9PSBwYXlsb2FkKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkQ3VzdG9tZXI6KHN0YXRlLHtwYXlsb2FkfTpQYXlsb2FkQWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tZXJzU2xpY2U7XHJcbmV4cG9ydCBjb25zdCB7ZGVsZXRlQ3VzdG9tZXJ9ID0gY3VzdG9tZXJzU2xpY2UuYWN0aW9ucyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImN1c3RvbWVycyIsImN1c3RvbWVyc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZGVsZXRlQ3VzdG9tZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJmaWx0ZXIiLCJlbCIsImlkIiwiYWRkQ3VzdG9tZXIiLCJzdCIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/slices/customersSlice.ts\n"));

/***/ })

});