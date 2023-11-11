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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"watchCustomerSaga\": function() { return /* binding */ watchCustomerSaga; }\n/* harmony export */ });\n/* harmony import */ var C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ \"./src/store/actionTypes/index.ts\");\n/* harmony import */ var _services_index___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/index. */ \"./src/services/index..ts\");\n/* harmony import */ var _slices_customersSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slices/customersSlice */ \"./src/store/slices/customersSlice.ts\");\n\nvar _marked = C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(watchCustomerSaga);\nvar _marked1 = C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(deleteCustomer);\nvar _marked2 = C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(setCustomerSaga);\nvar _marked3 = C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(getCustomerSaga);\n\n\n\n\nfunction getCustomerSaga() {\n    var data;\n    return C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function getCustomerSaga$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.prev = 0;\n                _ctx.next = 3;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_services_index___WEBPACK_IMPORTED_MODULE_3__.getCustomer, \"api/AddCustomer\");\n            case 3:\n                data = _ctx.sent;\n                _ctx.next = 6;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)((0,_slices_customersSlice__WEBPACK_IMPORTED_MODULE_4__.setAllCustomers)(data));\n            case 6:\n                _ctx.next = 11;\n                break;\n            case 8:\n                _ctx.prev = 8;\n                _ctx.t0 = _ctx[\"catch\"](0);\n                console.log(_ctx.t0);\n            case 11:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked3, null, [\n        [\n            0,\n            8\n        ]\n    ]);\n}\nfunction setCustomerSaga(param) {\n    var payload, data, resp;\n    return C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function setCustomerSaga$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                payload = param.payload;\n                data = payload;\n                _ctx.prev = 2;\n                _ctx.next = 5;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_services_index___WEBPACK_IMPORTED_MODULE_3__.setCustomer, \"api/AddCustomer\", data);\n            case 5:\n                resp = _ctx.sent;\n                _ctx.next = 8;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)((0,_slices_customersSlice__WEBPACK_IMPORTED_MODULE_4__.setCustomerReducer)(resp.customer));\n            case 8:\n                _ctx.next = 13;\n                break;\n            case 10:\n                _ctx.prev = 10;\n                _ctx.t0 = _ctx[\"catch\"](2);\n                console.log(_ctx.t0);\n            case 13:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked2, null, [\n        [\n            2,\n            10\n        ]\n    ]);\n}\nfunction deleteCustomer(param) {\n    var payload, id, data, resp;\n    return C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function deleteCustomer$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                payload = param.payload;\n                id = payload;\n                _ctx.prev = 2;\n                _ctx.next = 5;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_services_index___WEBPACK_IMPORTED_MODULE_3__.getCustomer, \"api/AddCustomer\");\n            case 5:\n                data = _ctx.sent;\n                _ctx.next = 8;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_services_index___WEBPACK_IMPORTED_MODULE_3__.deleteCustomerService, \"api/AddCustomer/\".concat(id));\n            case 8:\n                resp = _ctx.sent;\n                _ctx.next = 11;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)((0,_slices_customersSlice__WEBPACK_IMPORTED_MODULE_4__.setAllCustomers)(resp));\n            case 11:\n                _ctx.next = 16;\n                break;\n            case 13:\n                _ctx.prev = 13;\n                _ctx.t0 = _ctx[\"catch\"](2);\n                console.log(_ctx.t0);\n            case 16:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked1, null, [\n        [\n            2,\n            13\n        ]\n    ]);\n}\nfunction watchCustomerSaga() {\n    return C_Users_User_Desktop_test_task_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchCustomerSaga$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_actionTypes__WEBPACK_IMPORTED_MODULE_2__.getCustomersAction, getCustomerSaga);\n            case 2:\n                _ctx.next = 4;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_actionTypes__WEBPACK_IMPORTED_MODULE_2__.setCustomerAction, setCustomerSaga);\n            case 4:\n                _ctx.next = 6;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_actionTypes__WEBPACK_IMPORTED_MODULE_2__.deleteCustomerAction, deleteCustomer);\n            case 6:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2FnYXMvY3VzdG9tZXJTYWdhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTt3SkE0Q2lCQSxpQkFBaUI7eUpBaEJ4QkMsY0FBYzt5SkFUZEMsZUFBZTt5SkFWZkMsZUFBZTtBQVRrQztBQUNrQztBQUVSO0FBQ047QUFLL0UsU0FBVUEsZUFBZSxHQUF1QjtRQUVsQ1ksSUFBSTs4SkFGUlosZ0JBQWU7Ozs7O3VCQUVNQyx3REFBSSxDQUFDTyx5REFBVyxFQUFDLGlCQUFpQixDQUFDOztnQkFBcERJLElBQUksWUFBZ0Q7O3VCQUNwRFYsdURBQUcsQ0FBQ1EsdUVBQWUsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Z0JBRWhDQyxPQUFPLENBQUNDLEdBQUcsU0FBSzs7Ozs7Ozs7Ozs7Q0FHdkI7QUFFRCxTQUFVZixlQUFlLENBQUMsS0FBa0MsRUFBc0I7UUFBdkRnQixPQUFPLEVBQ3hCSCxJQUFJLEVBRUFJLElBQUk7OEpBSFJqQixnQkFBZTs7O2dCQUFDLE9BQVEsR0FBUixLQUFrQyxDQUFqQ2dCLE9BQU8sQ0FBMEI7Z0JBQ2xESCxJQUFJLEdBQUdHLE9BQU87Ozt1QkFFT2Qsd0RBQUksQ0FBQ1EseURBQVcsRUFBQyxpQkFBaUIsRUFBQ0csSUFBSSxDQUFDOztnQkFBekRJLElBQUksWUFBcUQ7O3VCQUN6RGQsdURBQUcsQ0FBQ1MsMEVBQWtCLENBQUNLLElBQUksQ0FBRUMsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7Z0JBRTdDSixPQUFPLENBQUNDLEdBQUcsU0FBSzs7Ozs7Ozs7Ozs7Q0FFdkI7QUFDRCxTQUFVaEIsY0FBYyxDQUFDLEtBQStCLEVBQXNCO1FBQXBEaUIsT0FBTyxFQUN2QkcsRUFBRSxFQUVFTixJQUFJLEVBQ0pJLElBQUk7OEpBSlJsQixlQUFjOzs7Z0JBQUMsT0FBUSxHQUFSLEtBQStCLENBQTlCaUIsT0FBTyxDQUF1QjtnQkFDOUNHLEVBQUUsR0FBR0gsT0FBTzs7O3VCQUVTZCx3REFBSSxDQUFDTyx5REFBVyxFQUFDLGlCQUFpQixDQUFDOztnQkFBcERJLElBQUksWUFBZ0Q7O3VCQUNuQ1gsd0RBQUksQ0FBQ00sbUVBQXFCLEVBQUMsa0JBQWlCLENBQUssT0FBSFcsRUFBRSxDQUFFLENBQUM7O2dCQUFwRUYsSUFBSSxZQUFnRTs7dUJBSXBFZCx1REFBRyxDQUFDUSx1RUFBZSxDQUFDTSxJQUFJLENBQUMsQ0FBQzs7Ozs7OztnQkFJaENILE9BQU8sQ0FBQ0MsR0FBRyxTQUFLOzs7Ozs7Ozs7OztDQUV2QjtBQUVNLFNBQVVqQixpQkFBaUIsR0FBRTs4SkFBbkJBLGtCQUFpQjs7Ozt1QkFDeEJNLDhEQUFVLENBQUNFLDREQUFrQixFQUFDTCxlQUFlLENBQUM7Ozt1QkFDOUNHLDhEQUFVLENBQUNHLDJEQUFpQixFQUFDUCxlQUFlLENBQUM7Ozt1QkFDN0NJLDhEQUFVLENBQUNDLDhEQUFvQixFQUFDTixjQUFjLENBQUM7Ozs7OztDQUN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvc2FnYXMvY3VzdG9tZXJTYWdhLnRzPzg0M2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBkZWxldGVDdXN0b21lckFjdGlvbiwgZ2V0Q3VzdG9tZXJzQWN0aW9uLCBzZXRDdXN0b21lckFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtkZWxldGVDdXN0b21lclNlcnZpY2UsIGdldEN1c3RvbWVyLCBzZXRDdXN0b21lcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXguJ1xyXG5pbXBvcnQgeyBzZXRBbGxDdXN0b21lcnMsIHNldEN1c3RvbWVyUmVkdWNlciB9IGZyb20gXCIuLi9zbGljZXMvY3VzdG9tZXJzU2xpY2VcIjtcclxuaW1wb3J0IHsgSUN1c3RvbWVycyB9IGZyb20gXCIuLi9zbGljZXMvY3VzdG9tZXJzVHlwZXNcIjtcclxuaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IElQb3N0RGF0YSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuZnVuY3Rpb24qIGdldEN1c3RvbWVyU2FnYSgpOkdlbmVyYXRvcjxhbnksIHZvaWQ+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGRhdGE6YW55ID0geWllbGQgY2FsbChnZXRDdXN0b21lcixcImFwaS9BZGRDdXN0b21lclwiKSBcclxuICAgICAgICB5aWVsZCBwdXQoc2V0QWxsQ3VzdG9tZXJzKGRhdGEpKVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZXRDdXN0b21lclNhZ2Eoe3BheWxvYWR9OlBheWxvYWRBY3Rpb248SVBvc3REYXRhPik6R2VuZXJhdG9yPGFueSwgdm9pZD57XHJcbiAgICBjb25zdCBkYXRhID0gcGF5bG9hZFxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3A6YW55ID0geWllbGQgY2FsbChzZXRDdXN0b21lcixcImFwaS9BZGRDdXN0b21lclwiLGRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHNldEN1c3RvbWVyUmVkdWNlcihyZXNwIS5jdXN0b21lcikpXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIGRlbGV0ZUN1c3RvbWVyKHtwYXlsb2FkfTpQYXlsb2FkQWN0aW9uPHN0cmluZz4pOkdlbmVyYXRvcjxhbnksIHZvaWQ+e1xyXG4gICAgY29uc3QgaWQgPSBwYXlsb2FkXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgZGF0YTphbnkgPSB5aWVsZCBjYWxsKGdldEN1c3RvbWVyLFwiYXBpL0FkZEN1c3RvbWVyXCIpIFxyXG4gICAgICAgIGNvbnN0IHJlc3A6YW55ID0geWllbGQgY2FsbChkZWxldGVDdXN0b21lclNlcnZpY2UsYGFwaS9BZGRDdXN0b21lci8ke2lkfWApO1xyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dChzZXRBbGxDdXN0b21lcnMocmVzcCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogd2F0Y2hDdXN0b21lclNhZ2EoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoZ2V0Q3VzdG9tZXJzQWN0aW9uLGdldEN1c3RvbWVyU2FnYSlcclxuICAgIHlpZWxkIHRha2VMYXRlc3Qoc2V0Q3VzdG9tZXJBY3Rpb24sc2V0Q3VzdG9tZXJTYWdhKVxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChkZWxldGVDdXN0b21lckFjdGlvbixkZWxldGVDdXN0b21lcilcclxufSJdLCJuYW1lcyI6WyJ3YXRjaEN1c3RvbWVyU2FnYSIsImRlbGV0ZUN1c3RvbWVyIiwic2V0Q3VzdG9tZXJTYWdhIiwiZ2V0Q3VzdG9tZXJTYWdhIiwiY2FsbCIsInB1dCIsInRha2VMYXRlc3QiLCJkZWxldGVDdXN0b21lckFjdGlvbiIsImdldEN1c3RvbWVyc0FjdGlvbiIsInNldEN1c3RvbWVyQWN0aW9uIiwiZGVsZXRlQ3VzdG9tZXJTZXJ2aWNlIiwiZ2V0Q3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInNldEFsbEN1c3RvbWVycyIsInNldEN1c3RvbWVyUmVkdWNlciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInJlc3AiLCJjdXN0b21lciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/sagas/customerSaga.ts\n"));

/***/ })

});