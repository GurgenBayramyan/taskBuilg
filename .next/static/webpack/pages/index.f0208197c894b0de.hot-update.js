"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Customers/Customers.tsx":
/*!************************************************!*\
  !*** ./src/components/Customers/Customers.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actionTypes */ \"./src/store/actionTypes/index.ts\");\n/* harmony import */ var _img_Edit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/Edit.svg */ \"./src/img/Edit.svg\");\n/* harmony import */ var _img_Trash_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/Trash.svg */ \"./src/img/Trash.svg\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Customers = function() {\n    _s();\n    var dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var customers = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.customersSlice;\n    }).customers;\n    var handleDelete = function() {\n        dispatch();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_store_actionTypes__WEBPACK_IMPORTED_MODULE_4__.getCustomersAction)());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-1 gap-[20px] p-[40px] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-inter text-lg font-bold leading-6 \",\n                children: \" Customers\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full divide-y divide-gray-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Company\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Admin\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4 whitespace-nowrap\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"bg-white divide-y divide-gray-200\",\n                        children: !!customers.length && customers.map(function(customer) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    dangerouslySetInnerHTML: {\n                                                        __html: customer.svg\n                                                    },\n                                                    className: \"mr-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: customer.firstName\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: customer.company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: customer.email\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: customer.selectedButton\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    className: \"cursor-pointer\",\n                                                    priority: true,\n                                                    src: _img_Edit_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    onClick: function() {\n                                                        return handleDelete();\n                                                    },\n                                                    className: \"cursor-pointer\",\n                                                    priority: true,\n                                                    src: _img_Trash_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, customer.id, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Customers, \"EqgbzRg8ZmjnO9hHnwwO7KUnuFk=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Customers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customers);\nvar _c;\n$RefreshReg$(_c, \"Customers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXN0b21lcnMvQ3VzdG9tZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF5QztBQUNvQjtBQUM5QjtBQUM4QjtBQUNuQjtBQUNFOztBQUk1QyxJQUFNUSxTQUFTLEdBQUcsV0FBTTs7SUFDdEIsSUFBTUMsUUFBUSxHQUFHUCxzREFBYyxFQUFFO0lBQ2pDLElBQU0sU0FBVyxHQUFLQyxzREFBYyxDQUFDLFNBQUNRLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxjQUFjO0tBQUEsQ0FBQyxDQUE3REYsU0FBUztJQUNqQixJQUFNRyxZQUFZLEdBQUcsV0FBTTtRQUN6QkosUUFBUSxFQUFFO0tBQ1g7SUFHRFIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RRLFFBQVEsQ0FBQ0osc0VBQWtCLEVBQUUsQ0FBQyxDQUFDO0tBQ2hDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUMsMkNBQTJDOzswQkFDeEQsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyx5Q0FBeUM7MEJBQUMsWUFBVTs7Ozs7cUJBQUs7MEJBQ3ZFLDhEQUFDRSxPQUFLO2dCQUFDRixTQUFTLEVBQUMscUNBQXFDOztrQ0FDcEQsOERBQUNHLE9BQUs7a0NBQ0osNEVBQUNDLElBQUU7OzhDQUNELDhEQUFDQyxJQUFFO29DQUFDQyxLQUFLLEVBQUMsS0FBSztvQ0FBQ04sU0FBUyxFQUFDLHNFQUFzRTs4Q0FBQyxNQUVqRzs7Ozs7eUNBQUs7OENBQ0wsOERBQUNLLElBQUU7b0NBQUNDLEtBQUssRUFBQyxLQUFLO29DQUFDTixTQUFTLEVBQUMsc0VBQXNFOzhDQUFDLFNBRWpHOzs7Ozt5Q0FBSzs4Q0FDTCw4REFBQ0ssSUFBRTtvQ0FBQ0MsS0FBSyxFQUFDLEtBQUs7b0NBQUNOLFNBQVMsRUFBQyxzRUFBc0U7OENBQUMsT0FFakc7Ozs7O3lDQUFLOzhDQUNMLDhEQUFDSyxJQUFFO29DQUFDQyxLQUFLLEVBQUMsS0FBSztvQ0FBQ04sU0FBUyxFQUFDLHNFQUFzRTs4Q0FBQyxPQUVqRzs7Ozs7eUNBQUs7OENBQ0wsOERBQUNLLElBQUU7b0NBQUNDLEtBQUssRUFBQyxLQUFLO29DQUFDTixTQUFTLEVBQUMsc0VBQXNFOzhDQUFDLFNBRWpHOzs7Ozt5Q0FBSzs4Q0FDTCw4REFBQ08sSUFBRTtvQ0FBQ1AsU0FBUyxFQUFDLDZCQUE2Qjs7Ozs7eUNBQU07Ozs7OztpQ0FDOUM7Ozs7OzZCQUNDO2tDQUNSLDhEQUFDUSxPQUFLO3dCQUFDUixTQUFTLEVBQUMsbUNBQW1DO2tDQUNqRCxDQUFDLENBQUNMLFNBQVMsQ0FBQ2MsTUFBTSxJQUNqQmQsU0FBUyxDQUFDZSxHQUFHLENBQUMsU0FBQ0MsUUFBUTtpREFDckIsOERBQUNQLElBQUU7O2tEQUNELDhEQUFDRyxJQUFFO3dDQUFDUCxTQUFTLEVBQUMsNkJBQTZCO2tEQUN6Qyw0RUFBQ0QsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7OERBQ2hDLDhEQUFDRCxLQUFHO29EQUFDYSx1QkFBdUIsRUFBRTt3REFBRUMsTUFBTSxFQUFFRixRQUFRLENBQUNHLEdBQUc7cURBQUU7b0RBQUVkLFNBQVMsRUFBQyxNQUFNOzs7Ozt5REFBRzs4REFDM0UsOERBQUNELEtBQUc7OERBQUVZLFFBQVEsQ0FBQ0ksU0FBUzs7Ozs7eURBQU87Ozs7OztpREFDM0I7Ozs7OzZDQUNIO2tEQUNMLDhEQUFDUixJQUFFO3dDQUFDUCxTQUFTLEVBQUMsNkJBQTZCO2tEQUFFVyxRQUFRLENBQUNLLE9BQU87Ozs7OzZDQUFNO2tEQUNuRSw4REFBQ1QsSUFBRTt3Q0FBQ1AsU0FBUyxFQUFDLDZCQUE2QjtrREFBRVcsUUFBUSxDQUFDTSxLQUFLOzs7Ozs2Q0FBTTtrREFDakUsOERBQUNWLElBQUU7d0NBQUNQLFNBQVMsRUFBQyw2QkFBNkI7a0RBQUVXLFFBQVEsQ0FBQ08sY0FBYzs7Ozs7NkNBQU07a0RBQzFFLDhEQUFDWCxJQUFFO3dDQUFDUCxTQUFTLEVBQUMsNkJBQTZCO2tEQUN6Qyw0RUFBQ0QsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7OERBQ2hDLDhEQUFDWCxtREFBSztvREFBRVcsU0FBUyxFQUFDLGdCQUFnQjtvREFBQ21CLFFBQVE7b0RBQUNDLEdBQUcsRUFBRTdCLHFEQUFROzs7Ozt5REFBSTs4REFDN0QsOERBQUNGLG1EQUFLO29EQUFDZ0MsT0FBTyxFQUFFOytEQUFJdkIsWUFBWSxFQUFFO3FEQUFBO29EQUFFRSxTQUFTLEVBQUMsZ0JBQWdCO29EQUFDbUIsUUFBUTtvREFBQ0MsR0FBRyxFQUFFNUIsc0RBQVM7Ozs7O3lEQUFJOzs7Ozs7aURBQ3RGOzs7Ozs2Q0FDSDs7K0JBZkVtQixRQUFRLENBQUNXLEVBQUU7Ozs7cUNBZ0JmO3lCQUNOLENBQUM7Ozs7OzZCQUNFOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNKLENBQ047Q0FDSDtHQTdESzdCLFNBQVM7O1FBQ0lOLGtEQUFjO1FBQ1RDLGtEQUFjOzs7QUFGaENLLEtBQUFBLFNBQVM7QUErRGYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DdXN0b21lcnMvQ3VzdG9tZXJzLnRzeD9jN2UzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBnZXRDdXN0b21lcnNBY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25UeXBlcyc7XHJcbmltcG9ydCBlZGl0ZUltZyBmcm9tICcuLi8uLi9pbWcvRWRpdC5zdmcnO1xyXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gJy4uLy4uL2ltZy9UcmFzaC5zdmcnO1xyXG5cclxuXHJcblxyXG5jb25zdCBDdXN0b21lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgY3VzdG9tZXJzIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmN1c3RvbWVyc1NsaWNlKTtcclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCgpXHJcbiAgfVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldEN1c3RvbWVyc0FjdGlvbigpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC0xIGdhcC1bMjBweF0gcC1bNDBweF0gXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWludGVyIHRleHQtbGcgZm9udC1ib2xkIGxlYWRpbmctNiBcIj4gQ3VzdG9tZXJzPC9oMj5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICBDb21wYW55XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICBBZG1pblxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgIEFjdGlvbnNcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPjwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgeyEhY3VzdG9tZXJzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBjdXN0b21lcnMubWFwKChjdXN0b21lcikgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2N1c3RvbWVyLmlkfT5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjdXN0b21lci5zdmcgfX0gY2xhc3NOYW1lPVwibXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57Y3VzdG9tZXIuZmlyc3ROYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+e2N1c3RvbWVyLmNvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj57Y3VzdG9tZXIuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj57Y3VzdG9tZXIuc2VsZWN0ZWRCdXR0b259PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSAgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcicgcHJpb3JpdHkgc3JjPXtlZGl0ZUltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugb25DbGljaz17KCk9PmhhbmRsZURlbGV0ZSgpfSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJyBwcmlvcml0eSBzcmM9e2RlbGV0ZUltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiSW1hZ2UiLCJnZXRDdXN0b21lcnNBY3Rpb24iLCJlZGl0ZUltZyIsImRlbGV0ZUltZyIsIkN1c3RvbWVycyIsImRpc3BhdGNoIiwiY3VzdG9tZXJzIiwic3RhdGUiLCJjdXN0b21lcnNTbGljZSIsImhhbmRsZURlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRkIiwidGJvZHkiLCJsZW5ndGgiLCJtYXAiLCJjdXN0b21lciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwic3ZnIiwiZmlyc3ROYW1lIiwiY29tcGFueSIsImVtYWlsIiwic2VsZWN0ZWRCdXR0b24iLCJwcmlvcml0eSIsInNyYyIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Customers/Customers.tsx\n"));

/***/ })

});