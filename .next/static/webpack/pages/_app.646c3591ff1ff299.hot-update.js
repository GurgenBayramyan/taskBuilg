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

/***/ "./src/store/sagas/customerSaga.ts":
/*!*****************************************!*\
  !*** ./src/store/sagas/customerSaga.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! miragejs */ \"./node_modules/miragejs/dist/mirage-esm.js\");\n\n(0,miragejs__WEBPACK_IMPORTED_MODULE_0__.createServer)({\n    models: {\n        movie: miragejs__WEBPACK_IMPORTED_MODULE_0__.Model.extend({\n            actors: (0,miragejs__WEBPACK_IMPORTED_MODULE_0__.hasMany)()\n        })\n    },\n    routes: function routes() {\n        this.namespace = \"api\";\n        this.post(\"/movies\", function(schema, request) {\n            var attrs = JSON.parse(request.requestBody);\n            return schema.movies.create(attrs);\n        });\n        this.patch(\"/movies/:id\", function(schema, request) {\n            var newAttrs = JSON.parse(request.requestBody);\n            var id = request.params.id;\n            var movie = schema.movies.find(id);\n            return movie.update(newAttrs);\n        });\n        this.get(\"/movies\");\n        this.get(\"/movies/:id\");\n        this.del(\"/movies/:id\");\n        this.get(\"/movies/:id/actors\", function(schema, request) {\n            var movie = schema.movies.find(request.params.id);\n            return movie.actors;\n        });\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2FnYXMvY3VzdG9tZXJTYWdhLnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWtFO0FBRWxFQSxzREFBWSxDQUFDO0lBQ1hHLE1BQU0sRUFBRTtRQUNOQyxLQUFLLEVBQUVILGtEQUFZLENBQUM7WUFDbEJLLE1BQU0sRUFBRUosaURBQU8sRUFBRTtTQUNsQixDQUFDO0tBRUg7SUFFREssTUFBTSxFQUFOQSxTQUFBQSxNQUFNLEdBQUc7UUFDUCxJQUFJLENBQUNDLFNBQVMsR0FBRyxLQUFLO1FBRXRCLElBQUksQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFDQyxNQUFNLEVBQUVDLE9BQU8sRUFBSztZQUN4QyxJQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxPQUFPLENBQUNJLFdBQVcsQ0FBQztZQUUzQyxPQUFPTCxNQUFNLENBQUNNLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDTCxLQUFLLENBQUM7U0FDbkMsQ0FBQztRQUVGLElBQUksQ0FBQ00sS0FBSyxDQUFDLGFBQWEsRUFBRSxTQUFDUixNQUFNLEVBQUVDLE9BQU8sRUFBSztZQUM3QyxJQUFJUSxRQUFRLEdBQUdOLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxPQUFPLENBQUNJLFdBQVcsQ0FBQztZQUM5QyxJQUFJSyxFQUFFLEdBQUdULE9BQU8sQ0FBQ1UsTUFBTSxDQUFDRCxFQUFFO1lBQzFCLElBQUloQixLQUFLLEdBQUdNLE1BQU0sQ0FBQ00sTUFBTSxDQUFDTSxJQUFJLENBQUNGLEVBQUUsQ0FBQztZQUVsQyxPQUFPaEIsS0FBSyxDQUFDbUIsTUFBTSxDQUFDSixRQUFRLENBQUM7U0FDOUIsQ0FBQztRQUVGLElBQUksQ0FBQ0ssR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNuQixJQUFJLENBQUNBLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDdkIsSUFBSSxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBRXZCLElBQUksQ0FBQ0QsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFNBQUNkLE1BQU0sRUFBRUMsT0FBTyxFQUFLO1lBQ2xELElBQUlQLEtBQUssR0FBR00sTUFBTSxDQUFDTSxNQUFNLENBQUNNLElBQUksQ0FBQ1gsT0FBTyxDQUFDVSxNQUFNLENBQUNELEVBQUUsQ0FBQztZQUVqRCxPQUFPaEIsS0FBSyxDQUFDRSxNQUFNO1NBQ3BCLENBQUM7S0FDSDtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NhZ2FzL2N1c3RvbWVyU2FnYS50cz84NDNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlcnZlciwgTW9kZWwsIGhhc01hbnksIGJlbG9uZ3NUbyB9IGZyb20gJ21pcmFnZWpzJ1xyXG5cclxuY3JlYXRlU2VydmVyKHtcclxuICBtb2RlbHM6IHtcclxuICAgIG1vdmllOiBNb2RlbC5leHRlbmQoe1xyXG4gICAgICBhY3RvcnM6IGhhc01hbnkoKSxcclxuICAgIH0pLFxyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgcm91dGVzKCkge1xyXG4gICAgdGhpcy5uYW1lc3BhY2UgPSAnYXBpJ1xyXG5cclxuICAgIHRoaXMucG9zdCgnL21vdmllcycsIChzY2hlbWEsIHJlcXVlc3QpID0+IHtcclxuICAgICAgbGV0IGF0dHJzID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlcXVlc3RCb2R5KVxyXG5cclxuICAgICAgcmV0dXJuIHNjaGVtYS5tb3ZpZXMuY3JlYXRlKGF0dHJzKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnBhdGNoKCcvbW92aWVzLzppZCcsIChzY2hlbWEsIHJlcXVlc3QpID0+IHtcclxuICAgICAgbGV0IG5ld0F0dHJzID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlcXVlc3RCb2R5KVxyXG4gICAgICBsZXQgaWQgPSByZXF1ZXN0LnBhcmFtcy5pZFxyXG4gICAgICBsZXQgbW92aWUgPSBzY2hlbWEubW92aWVzLmZpbmQoaWQpXHJcblxyXG4gICAgICByZXR1cm4gbW92aWUudXBkYXRlKG5ld0F0dHJzKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmdldCgnL21vdmllcycpXHJcbiAgICB0aGlzLmdldCgnL21vdmllcy86aWQnKVxyXG4gICAgdGhpcy5kZWwoJy9tb3ZpZXMvOmlkJylcclxuXHJcbiAgICB0aGlzLmdldCgnL21vdmllcy86aWQvYWN0b3JzJywgKHNjaGVtYSwgcmVxdWVzdCkgPT4ge1xyXG4gICAgICBsZXQgbW92aWUgPSBzY2hlbWEubW92aWVzLmZpbmQocmVxdWVzdC5wYXJhbXMuaWQpXHJcblxyXG4gICAgICByZXR1cm4gbW92aWUuYWN0b3JzXHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pIl0sIm5hbWVzIjpbImNyZWF0ZVNlcnZlciIsIk1vZGVsIiwiaGFzTWFueSIsIm1vZGVscyIsIm1vdmllIiwiZXh0ZW5kIiwiYWN0b3JzIiwicm91dGVzIiwibmFtZXNwYWNlIiwicG9zdCIsInNjaGVtYSIsInJlcXVlc3QiLCJhdHRycyIsIkpTT04iLCJwYXJzZSIsInJlcXVlc3RCb2R5IiwibW92aWVzIiwiY3JlYXRlIiwicGF0Y2giLCJuZXdBdHRycyIsImlkIiwicGFyYW1zIiwiZmluZCIsInVwZGF0ZSIsImdldCIsImRlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/sagas/customerSaga.ts\n"));

/***/ })

});