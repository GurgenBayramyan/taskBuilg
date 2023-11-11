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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! miragejs */ \"./node_modules/miragejs/dist/mirage-esm.js\");\n\nvar CustomerFactory = miragejs__WEBPACK_IMPORTED_MODULE_0__.Factory.extend({});\ncreateServer({\n    models: {\n        customer: miragejs__WEBPACK_IMPORTED_MODULE_0__.Model.extend({})\n    },\n    factories: {\n        customer: CustomerFactory\n    },\n    seeds: function seeds(server) {\n        server.createList(\"customer\", 5);\n    },\n    routes: function routes() {\n        this.get(\"/customers\", function(schema) {\n            return schema.customers.all();\n        });\n        this.get(\"/customers/:id\", function(schema, request) {\n            var customerId = parseInt(request.params.id, 10);\n            return schema.customers.find(customerId);\n        });\n        this.post(\"/customers\", function(schema, request) {\n            var attrs = JSON.parse(request.requestBody);\n            return schema.customers.create(attrs);\n        });\n        this.put(\"/customers/:id\", function(schema, request) {\n            var customerId = parseInt(request.params.id, 10);\n            var attrs = JSON.parse(request.requestBody);\n            var customer = schema.customers.find(customerId);\n            customer.update(attrs);\n            return customer;\n        });\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL3NlcnZlci50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUFrRDtBQU1sRCxJQUFNRSxlQUFlLEdBQUdELG9EQUFjLENBQU8sRUFBRSxDQUFDO0FBRWhERyxZQUFZLENBQUM7SUFDWEMsTUFBTSxFQUFFO1FBQ05DLFFBQVEsRUFBRU4sa0RBQVksQ0FBWSxFQUFFLENBQUM7S0FDdEM7SUFDRE8sU0FBUyxFQUFFO1FBQ1RELFFBQVEsRUFBRUosZUFBZTtLQUMxQjtJQUNETSxLQUFLLEVBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsTUFBTSxFQUFFO1FBQ1pBLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNsQztJQUNEQyxNQUFNLEVBQU5BLFNBQUFBLE1BQU0sR0FBRztRQUNQLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFDQyxNQUFNLEVBQUs7WUFDakMsT0FBT0EsTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsRUFBRSxDQUFDO1NBQy9CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQ0gsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFNBQUNDLE1BQU0sRUFBRUcsT0FBTyxFQUFLO1lBQzlDLElBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDRixPQUFPLENBQUNHLE1BQU0sQ0FBQ0MsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsRCxPQUFPUCxNQUFNLENBQUNDLFNBQVMsQ0FBQ08sSUFBSSxDQUFDSixVQUFVLENBQUMsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUNLLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBQ1QsTUFBTSxFQUFFRyxPQUFPLEVBQUs7WUFDM0MsSUFBTU8sS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1QsT0FBTyxDQUFDVSxXQUFXLENBQUM7WUFDN0MsT0FBT2IsTUFBTSxDQUFDQyxTQUFTLENBQUNhLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQUM7U0FDdkMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDSyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsU0FBQ2YsTUFBTSxFQUFFRyxPQUFPLEVBQUs7WUFDOUMsSUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNGLE9BQU8sQ0FBQ0csTUFBTSxDQUFDQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xELElBQU1HLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNULE9BQU8sQ0FBQ1UsV0FBVyxDQUFDO1lBQzdDLElBQU1wQixRQUFRLEdBQUdPLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDTyxJQUFJLENBQUNKLFVBQVUsQ0FBQztZQUNsRFgsUUFBUSxDQUFDdUIsTUFBTSxDQUFDTixLQUFLLENBQUMsQ0FBQztZQUN2QixPQUFPakIsUUFBUSxDQUFDO1NBQ2pCLENBQUMsQ0FBQztLQUNKO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2ZXIvc2VydmVyLnRzPzM1YWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyLCBNb2RlbCwgRmFjdG9yeSB9IGZyb20gJ21pcmFnZWpzJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBDdXN0b21lckZhY3RvcnkgPSBGYWN0b3J5LmV4dGVuZDxJQ3VzPih7fSk7XHJcblxyXG5jcmVhdGVTZXJ2ZXIoe1xyXG4gIG1vZGVsczoge1xyXG4gICAgY3VzdG9tZXI6IE1vZGVsLmV4dGVuZDxJQ3VzdG9tZXI+KHt9KSxcclxuICB9LFxyXG4gIGZhY3Rvcmllczoge1xyXG4gICAgY3VzdG9tZXI6IEN1c3RvbWVyRmFjdG9yeSxcclxuICB9LFxyXG4gIHNlZWRzKHNlcnZlcikge1xyXG4gICAgc2VydmVyLmNyZWF0ZUxpc3QoJ2N1c3RvbWVyJywgNSk7XHJcbiAgfSxcclxuICByb3V0ZXMoKSB7XHJcbiAgICB0aGlzLmdldCgnL2N1c3RvbWVycycsIChzY2hlbWEpID0+IHtcclxuICAgICAgcmV0dXJuIHNjaGVtYS5jdXN0b21lcnMuYWxsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmdldCgnL2N1c3RvbWVycy86aWQnLCAoc2NoZW1hLCByZXF1ZXN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbWVySWQgPSBwYXJzZUludChyZXF1ZXN0LnBhcmFtcy5pZCwgMTApO1xyXG4gICAgICByZXR1cm4gc2NoZW1hLmN1c3RvbWVycy5maW5kKGN1c3RvbWVySWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wb3N0KCcvY3VzdG9tZXJzJywgKHNjaGVtYSwgcmVxdWVzdCkgPT4ge1xyXG4gICAgICBjb25zdCBhdHRycyA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXF1ZXN0Qm9keSk7XHJcbiAgICAgIHJldHVybiBzY2hlbWEuY3VzdG9tZXJzLmNyZWF0ZShhdHRycyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnB1dCgnL2N1c3RvbWVycy86aWQnLCAoc2NoZW1hLCByZXF1ZXN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbWVySWQgPSBwYXJzZUludChyZXF1ZXN0LnBhcmFtcy5pZCwgMTApO1xyXG4gICAgICBjb25zdCBhdHRycyA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXF1ZXN0Qm9keSk7XHJcbiAgICAgIGNvbnN0IGN1c3RvbWVyID0gc2NoZW1hLmN1c3RvbWVycy5maW5kKGN1c3RvbWVySWQpO1xyXG4gICAgICBjdXN0b21lci51cGRhdGUoYXR0cnMpO1xyXG4gICAgICByZXR1cm4gY3VzdG9tZXI7XHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIk1vZGVsIiwiRmFjdG9yeSIsIkN1c3RvbWVyRmFjdG9yeSIsImV4dGVuZCIsImNyZWF0ZVNlcnZlciIsIm1vZGVscyIsImN1c3RvbWVyIiwiZmFjdG9yaWVzIiwic2VlZHMiLCJzZXJ2ZXIiLCJjcmVhdGVMaXN0Iiwicm91dGVzIiwiZ2V0Iiwic2NoZW1hIiwiY3VzdG9tZXJzIiwiYWxsIiwicmVxdWVzdCIsImN1c3RvbWVySWQiLCJwYXJzZUludCIsInBhcmFtcyIsImlkIiwiZmluZCIsInBvc3QiLCJhdHRycyIsIkpTT04iLCJwYXJzZSIsInJlcXVlc3RCb2R5IiwiY3JlYXRlIiwicHV0IiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/server.ts\n"));

/***/ })

});