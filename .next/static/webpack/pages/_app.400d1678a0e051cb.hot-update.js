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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCustomer\": function() { return /* binding */ addCustomer; },\n/* harmony export */   \"changeCurrentItem\": function() { return /* binding */ changeCurrentItem; },\n/* harmony export */   \"deleteCustomer\": function() { return /* binding */ deleteCustomer; },\n/* harmony export */   \"setCurrentData\": function() { return /* binding */ setCurrentData; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar initialState = {\n    customers: [],\n    currentData: null\n};\nvar customersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"customersSlice\",\n    initialState: initialState,\n    reducers: {\n        deleteCustomer: function(state, param) {\n            var payload = param.payload;\n            state.customers = state.customers.filter(function(el) {\n                return el.id !== payload;\n            });\n        },\n        addCustomer: function(state, param) {\n            var payload = param.payload;\n            state.customers.push(payload);\n        },\n        setCurrentData: function(state, param) {\n            var payload = param.payload;\n            state.currentData = payload;\n        },\n        changeCurrentItem: function(state, param) {\n            var payload = param.payload;\n            state.customers = helper(state.customers);\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (customersSlice);\nvar _actions = customersSlice.actions;\nvar deleteCustomer = _actions.deleteCustomer, addCustomer = _actions.addCustomer, setCurrentData = _actions.setCurrentData, changeCurrentItem = _actions.changeCurrentItem;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL2N1c3RvbWVyc1NsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThEO0FBRTlELElBQU1DLFlBQVksR0FBbUI7SUFDakNDLFNBQVMsRUFBQyxFQUFFO0lBQ1pDLFdBQVcsRUFBQyxJQUFJO0NBQ25CO0FBQ0QsSUFBTUMsY0FBYyxHQUFHSiw2REFBVyxDQUFDO0lBQy9CSyxJQUFJLEVBQUMsZ0JBQWdCO0lBQ3JCSixZQUFZLEVBQVpBLFlBQVk7SUFDWkssUUFBUSxFQUFDO1FBQ0xDLGNBQWMsRUFBQyxTQUFDQyxLQUFLLFNBQW9DO2dCQUFsQ0MsT0FBTyxTQUFQQSxPQUFPO1lBQzFCRCxLQUFLLENBQUNOLFNBQVMsR0FBR00sS0FBSyxDQUFDTixTQUFTLENBQUNRLE1BQU0sQ0FBQ0MsU0FBQUEsRUFBRTt1QkFBRUEsRUFBRSxDQUFDQyxFQUFFLEtBQUtILE9BQU87YUFBQSxDQUFDO1NBQ2xFO1FBQ0RJLFdBQVcsRUFBQyxTQUFDTCxLQUFLLFNBQWU7Z0JBQWJDLE9BQU8sU0FBUEEsT0FBTztZQUN2QkQsS0FBSyxDQUFDTixTQUFTLENBQUNZLElBQUksQ0FBQ0wsT0FBTyxDQUFDO1NBQ2hDO1FBQ0RNLGNBQWMsRUFBQyxTQUFDUCxLQUFLLFNBQXVDO2dCQUFyQ0MsT0FBTyxTQUFQQSxPQUFPO1lBQzFCRCxLQUFLLENBQUNMLFdBQVcsR0FBR00sT0FBTztTQUM5QjtRQUNETyxpQkFBaUIsRUFBQyxTQUFDUixLQUFLLFNBQWdCO2dCQUFkQyxPQUFPLFNBQVBBLE9BQU87WUFDN0JELEtBQUssQ0FBQ04sU0FBUyxHQUFHZSxNQUFNLENBQUNULEtBQUssQ0FBQ04sU0FBUyxDQUFDO1NBQzVDO0tBRUo7Q0FDSixDQUFDO0FBQ0YsK0RBQWVFLGNBQWMsRUFBQztJQUMrQ0EsUUFBc0IsR0FBdEJBLGNBQWMsQ0FBQ2MsT0FBTztBQUE1RixJQUFPWCxjQUFjLEdBQWlESCxRQUFzQixDQUFyRkcsY0FBYyxFQUFDTSxXQUFXLEdBQXFDVCxRQUFzQixDQUF0RVMsV0FBVyxFQUFDRSxjQUFjLEdBQXNCWCxRQUFzQixDQUExRFcsY0FBYyxFQUFDQyxpQkFBaUIsR0FBSVosUUFBc0IsQ0FBM0NZLGlCQUFpQixDQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvc2xpY2VzL2N1c3RvbWVyc1NsaWNlLnRzPzNlNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBJQ3VzdG9tZXJzLCBJQ3VzdG9tZXJzU3RhdGUgfSBmcm9tIFwiLi9jdXN0b21lcnNUeXBlc1wiO1xyXG5jb25zdCBpbml0aWFsU3RhdGU6SUN1c3RvbWVyc1N0YXRlID0ge1xyXG4gICAgY3VzdG9tZXJzOltdLFxyXG4gICAgY3VycmVudERhdGE6bnVsbFxyXG59XHJcbmNvbnN0IGN1c3RvbWVyc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTpcImN1c3RvbWVyc1NsaWNlXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczp7XHJcbiAgICAgICAgZGVsZXRlQ3VzdG9tZXI6KHN0YXRlLHtwYXlsb2FkfTpQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+e1xyXG4gICAgICAgICAgICBzdGF0ZS5jdXN0b21lcnMgPSBzdGF0ZS5jdXN0b21lcnMuZmlsdGVyKGVsPT5lbC5pZCAhPT0gcGF5bG9hZClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZEN1c3RvbWVyOihzdGF0ZSx7cGF5bG9hZH0pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuY3VzdG9tZXJzLnB1c2gocGF5bG9hZClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEN1cnJlbnREYXRhOihzdGF0ZSx7cGF5bG9hZH06UGF5bG9hZEFjdGlvbjxJQ3VzdG9tZXJzPik9PntcclxuICAgICAgICAgICAgc3RhdGUuY3VycmVudERhdGEgPSBwYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2VDdXJyZW50SXRlbTooc3RhdGUse3BheWxvYWR9KSAgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5jdXN0b21lcnMgPSBoZWxwZXIoc3RhdGUuY3VzdG9tZXJzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tZXJzU2xpY2U7XHJcbmV4cG9ydCBjb25zdCB7ZGVsZXRlQ3VzdG9tZXIsYWRkQ3VzdG9tZXIsc2V0Q3VycmVudERhdGEsY2hhbmdlQ3VycmVudEl0ZW19ID0gY3VzdG9tZXJzU2xpY2UuYWN0aW9ucyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImN1c3RvbWVycyIsImN1cnJlbnREYXRhIiwiY3VzdG9tZXJzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJkZWxldGVDdXN0b21lciIsInN0YXRlIiwicGF5bG9hZCIsImZpbHRlciIsImVsIiwiaWQiLCJhZGRDdXN0b21lciIsInB1c2giLCJzZXRDdXJyZW50RGF0YSIsImNoYW5nZUN1cnJlbnRJdGVtIiwiaGVscGVyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/slices/customersSlice.ts\n"));

/***/ })

});