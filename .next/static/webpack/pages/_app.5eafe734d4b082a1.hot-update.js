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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCustomer\": function() { return /* binding */ addCustomer; },\n/* harmony export */   \"deleteCustomer\": function() { return /* binding */ deleteCustomer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar initialState = {\n    customers: [],\n    currentData: null\n};\nvar customersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"customersSlice\",\n    initialState: initialState,\n    reducers: {\n        deleteCustomer: function(state, param) {\n            var payload = param.payload;\n            state.customers = state.customers.filter(function(el) {\n                return el.id !== payload;\n            });\n        },\n        addCustomer: function(state, param) {\n            var payload = param.payload;\n            state.customers.push(payload);\n        },\n        setCurrentData: function(state, param) {\n            var payload = param.payload;\n            state.currentData;\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (customersSlice);\nvar _actions = customersSlice.actions;\nvar deleteCustomer = _actions.deleteCustomer, addCustomer = _actions.addCustomer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL2N1c3RvbWVyc1NsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4RDtBQUU5RCxJQUFNQyxZQUFZLEdBQW1CO0lBQ2pDQyxTQUFTLEVBQUMsRUFBRTtJQUNaQyxXQUFXLEVBQUMsSUFBSTtDQUNuQjtBQUNELElBQU1DLGNBQWMsR0FBR0osNkRBQVcsQ0FBQztJQUMvQkssSUFBSSxFQUFDLGdCQUFnQjtJQUNyQkosWUFBWSxFQUFaQSxZQUFZO0lBQ1pLLFFBQVEsRUFBQztRQUNMQyxjQUFjLEVBQUMsU0FBQ0MsS0FBSyxTQUFvQztnQkFBbENDLE9BQU8sU0FBUEEsT0FBTztZQUMxQkQsS0FBSyxDQUFDTixTQUFTLEdBQUdNLEtBQUssQ0FBQ04sU0FBUyxDQUFDUSxNQUFNLENBQUNDLFNBQUFBLEVBQUU7dUJBQUVBLEVBQUUsQ0FBQ0MsRUFBRSxLQUFLSCxPQUFPO2FBQUEsQ0FBQztTQUNsRTtRQUNESSxXQUFXLEVBQUMsU0FBQ0wsS0FBSyxTQUFlO2dCQUFiQyxPQUFPLFNBQVBBLE9BQU87WUFDdkJELEtBQUssQ0FBQ04sU0FBUyxDQUFDWSxJQUFJLENBQUNMLE9BQU8sQ0FBQztTQUNoQztRQUNETSxjQUFjLEVBQUMsU0FBQ1AsS0FBSyxTQUF1QztnQkFBckNDLE9BQU8sU0FBUEEsT0FBTztZQUMxQkQsS0FBSyxDQUFDTCxXQUFXO1NBQ3BCO0tBRUo7Q0FDSixDQUFDO0FBQ0YsK0RBQWVDLGNBQWMsRUFBQztJQUNjQSxRQUFzQixHQUF0QkEsY0FBYyxDQUFDWSxPQUFPO0FBQTNELElBQU9ULGNBQWMsR0FBZ0JILFFBQXNCLENBQXBERyxjQUFjLEVBQUNNLFdBQVcsR0FBSVQsUUFBc0IsQ0FBckNTLFdBQVcsQ0FBMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NsaWNlcy9jdXN0b21lcnNTbGljZS50cz8zZTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgSUN1c3RvbWVycywgSUN1c3RvbWVyc1N0YXRlIH0gZnJvbSBcIi4vY3VzdG9tZXJzVHlwZXNcIjtcclxuY29uc3QgaW5pdGlhbFN0YXRlOklDdXN0b21lcnNTdGF0ZSA9IHtcclxuICAgIGN1c3RvbWVyczpbXSxcclxuICAgIGN1cnJlbnREYXRhOm51bGxcclxufVxyXG5jb25zdCBjdXN0b21lcnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6XCJjdXN0b21lcnNTbGljZVwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6e1xyXG4gICAgICAgIGRlbGV0ZUN1c3RvbWVyOihzdGF0ZSx7cGF5bG9hZH06UGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PntcclxuICAgICAgICAgICAgc3RhdGUuY3VzdG9tZXJzID0gc3RhdGUuY3VzdG9tZXJzLmZpbHRlcihlbD0+ZWwuaWQgIT09IHBheWxvYWQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRDdXN0b21lcjooc3RhdGUse3BheWxvYWR9KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmN1c3RvbWVycy5wdXNoKHBheWxvYWQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRDdXJyZW50RGF0YTooc3RhdGUse3BheWxvYWR9OlBheWxvYWRBY3Rpb248SUN1c3RvbWVycz4pPT57XHJcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnREYXRhXHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbWVyc1NsaWNlO1xyXG5leHBvcnQgY29uc3Qge2RlbGV0ZUN1c3RvbWVyLGFkZEN1c3RvbWVyfSA9IGN1c3RvbWVyc1NsaWNlLmFjdGlvbnMiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJjdXN0b21lcnMiLCJjdXJyZW50RGF0YSIsImN1c3RvbWVyc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZGVsZXRlQ3VzdG9tZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJmaWx0ZXIiLCJlbCIsImlkIiwiYWRkQ3VzdG9tZXIiLCJwdXNoIiwic2V0Q3VycmVudERhdGEiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/slices/customersSlice.ts\n"));

/***/ })

});