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

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findDeletedObj\": function() { return /* binding */ findDeletedObj; },\n/* harmony export */   \"helper\": function() { return /* binding */ helper; }\n/* harmony export */ });\nvar findDeletedObj = function(arr, id) {\n    return arr.filter(function(el) {\n        return el.id !== id;\n    });\n};\nvar helper = function(arr, object) {\n    var index = arr.findIndex(function(el) {\n        return el.id === object.id;\n    });\n    if (index !== -1) {\n        arr[index] = object;\n    }\n    return arr;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVPLElBQU1BLGNBQWMsR0FBRyxTQUFDQyxHQUFnQixFQUFDQyxFQUFTLEVBQUs7SUFDMUQsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUNDLFNBQUFBLEVBQUU7ZUFBSUEsRUFBRSxDQUFDRixFQUFFLEtBQUtBLEVBQUU7S0FBQSxDQUFDO0NBQ3hDO0FBQ00sSUFBTUcsTUFBTSxHQUFHLFNBQUNKLEdBQWlCLEVBQUVLLE1BQWtCLEVBQW1CO0lBQzNFLElBQU1DLEtBQUssR0FBR04sR0FBRyxDQUFDTyxTQUFTLENBQUMsU0FBQ0osRUFBRTtlQUFLQSxFQUFFLENBQUNGLEVBQUUsS0FBS0ksTUFBTSxDQUFDSixFQUFFO0tBQUEsQ0FBQztJQUV4RCxJQUFJSyxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDZE4sR0FBRyxDQUFDTSxLQUFLLENBQUMsR0FBR0QsTUFBTSxDQUFDO0tBQ3ZCO0lBRUQsT0FBT0wsR0FBRyxDQUFDO0NBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9pbmRleC50cz9lYWJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDdXN0b21lcnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL2N1c3RvbWVyc1R5cGVzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBmaW5kRGVsZXRlZE9iaiA9IChhcnI6SUN1c3RvbWVyc1tdLGlkOnN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGFyci5maWx0ZXIoZWwgPT4gZWwuaWQgIT09IGlkKVxyXG59XHJcbmV4cG9ydCBjb25zdCBoZWxwZXIgPSAoYXJyOiBJQ3VzdG9tZXJzW10sIG9iamVjdDogSUN1c3RvbWVycyk6IElDdXN0b21lcnNbXSA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IGFyci5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gb2JqZWN0LmlkKTtcclxuXHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgYXJyW2luZGV4XSA9IG9iamVjdDsgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufTtcclxuIl0sIm5hbWVzIjpbImZpbmREZWxldGVkT2JqIiwiYXJyIiwiaWQiLCJmaWx0ZXIiLCJlbCIsImhlbHBlciIsIm9iamVjdCIsImluZGV4IiwiZmluZEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/index.ts\n"));

/***/ })

});