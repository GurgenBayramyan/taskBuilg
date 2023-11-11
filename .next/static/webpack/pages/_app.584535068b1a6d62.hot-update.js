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

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! miragejs */ \"./node_modules/miragejs/dist/mirage-esm.js\");\n\n(0,miragejs__WEBPACK_IMPORTED_MODULE_0__.createServer)({\n    models: {\n        customer: miragejs__WEBPACK_IMPORTED_MODULE_0__.Model\n    },\n    routes: function routes() {\n        this.namespace = \"api\";\n        this.get(\"/AddCustomer\", function(schema) {\n            return schema.db.customers;\n        });\n        this.post(\"/AddCustomer\", function(schema, request) {\n            var attrs = JSON.parse(request.requestBody);\n            attrs.id = Math.floor(Math.random() * 10000);\n            return {\n                customer: attrs\n            };\n        });\n        this.delete(\"/AddCustomer/:id\", function(schema, request) {\n            var id = request.params.id;\n            var customer = schema.db.customers.find(id);\n            schema.db.customers.remove(id);\n            return customer;\n        });\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL3NlcnZlci50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUErQztBQUUvQ0Msc0RBQVksQ0FBQztJQUNYQyxNQUFNLEVBQUU7UUFDTkMsUUFBUSxFQUFFSCwyQ0FBSztLQUNoQjtJQUVESSxNQUFNLEVBQU5BLFNBQUFBLE1BQU0sR0FBRztRQUNQLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV2QixJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsU0FBQ0MsTUFBTSxFQUFLO1lBQ25DLE9BQU9BLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDQyxTQUFTLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDQyxJQUFJLENBQUMsY0FBYyxFQUFFLFNBQUNILE1BQU0sRUFBRUksT0FBTyxFQUFLO1lBQzdDLElBQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILE9BQU8sQ0FBQ0ksV0FBVyxDQUFDO1lBQzNDSCxLQUFLLENBQUNJLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDN0MsT0FBTztnQkFBRWhCLFFBQVEsRUFBRVMsS0FBSzthQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDUSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsU0FBQ2IsTUFBTSxFQUFFSSxPQUFPLEVBQUs7WUFDakQsSUFBSUssRUFBRSxHQUFHTCxPQUFPLENBQUNVLE1BQU0sQ0FBQ0wsRUFBRTtZQUcxQixJQUFNYixRQUFRLEdBQUdJLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDQyxTQUFTLENBQUNhLElBQUksQ0FBQ04sRUFBRSxDQUFDO1lBRzdDVCxNQUFNLENBQUNDLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDYyxNQUFNLENBQUNQLEVBQUUsQ0FBQyxDQUFDO1lBRy9CLE9BQU9iLFFBQVEsQ0FBQztTQUNqQixDQUFDLENBQUM7S0FHTjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmVyL3NlcnZlci50cz8zNWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsLCBjcmVhdGVTZXJ2ZXIgfSBmcm9tICdtaXJhZ2Vqcyc7XHJcblxyXG5jcmVhdGVTZXJ2ZXIoe1xyXG4gIG1vZGVsczoge1xyXG4gICAgY3VzdG9tZXI6IE1vZGVsLFxyXG4gIH0sXHJcblxyXG4gIHJvdXRlcygpIHtcclxuICAgIHRoaXMubmFtZXNwYWNlID0gJ2FwaSc7XHJcblxyXG4gICAgdGhpcy5nZXQoJy9BZGRDdXN0b21lcicsIChzY2hlbWEpID0+IHtcclxuICAgICAgcmV0dXJuIHNjaGVtYS5kYi5jdXN0b21lcnM7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBvc3QoJy9BZGRDdXN0b21lcicsIChzY2hlbWEsIHJlcXVlc3QpID0+IHtcclxuICAgICAgbGV0IGF0dHJzID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlcXVlc3RCb2R5KTtcclxuICAgICAgYXR0cnMuaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XHJcbiAgICAgIHJldHVybiB7IGN1c3RvbWVyOiBhdHRycyB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kZWxldGUoXCIvQWRkQ3VzdG9tZXIvOmlkXCIsIChzY2hlbWEsIHJlcXVlc3QpID0+IHtcclxuICAgICAgICBsZXQgaWQgPSByZXF1ZXN0LnBhcmFtcy5pZDtcclxuICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyID0gc2NoZW1hLmRiLmN1c3RvbWVycy5maW5kKGlkKTtcclxuICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgc2NoZW1hLmRiLmN1c3RvbWVycy5yZW1vdmUoaWQpO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcblxyXG4gIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiTW9kZWwiLCJjcmVhdGVTZXJ2ZXIiLCJtb2RlbHMiLCJjdXN0b21lciIsInJvdXRlcyIsIm5hbWVzcGFjZSIsImdldCIsInNjaGVtYSIsImRiIiwiY3VzdG9tZXJzIiwicG9zdCIsInJlcXVlc3QiLCJhdHRycyIsIkpTT04iLCJwYXJzZSIsInJlcXVlc3RCb2R5IiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkZWxldGUiLCJwYXJhbXMiLCJmaW5kIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/server.ts\n"));

/***/ })

});