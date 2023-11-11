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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_Edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/Edit.svg */ \"./src/img/Edit.svg\");\n/* harmony import */ var _img_Trash_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/Trash.svg */ \"./src/img/Trash.svg\");\n/* harmony import */ var _store_slices_customersSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/slices/customersSlice */ \"./src/store/slices/customersSlice.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Customers = function() {\n    _s();\n    var dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var customers = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.customersSlice;\n    }).customers;\n    var handleDelete = function(id) {\n        dispatch((0,_store_slices_customersSlice__WEBPACK_IMPORTED_MODULE_6__.deleteCustomer)(id));\n    };\n    var handleChange = function(data) {\n        dispatch((0,_store_slices_customersSlice__WEBPACK_IMPORTED_MODULE_6__.setCurrentData)(data));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-1 gap-[20px] p-[40px] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-inter text-lg font-bold leading-6 \",\n                children: \" Customers\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full divide-y divide-gray-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Company\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Admin\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4 whitespace-nowrap\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"bg-white divide-y divide-gray-200\",\n                        children: !!customers.length && customers.map(function(customer) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    dangerouslySetInnerHTML: {\n                                                        __html: customer.svg\n                                                    },\n                                                    className: \"mr-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: customer.firstName\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: customer.company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: customer.email\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap w \".concat(customer.selectedButton === \"User\" ? \"#0EA5E9\" : \"\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    onClick: function() {\n                                                        return handleChange(customer);\n                                                    },\n                                                    className: \"cursor-pointer\",\n                                                    priority: true,\n                                                    src: _img_Edit_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    onClick: function() {\n                                                        return handleDelete(customer.id);\n                                                    },\n                                                    className: \"cursor-pointer\",\n                                                    priority: true,\n                                                    src: _img_Trash_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, customer.id, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Customers, \"CXxy7qu/GvLl5W2oLixq13ROo0E=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Customers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customers);\nvar _c;\n$RefreshReg$(_c, \"Customers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXN0b21lcnMvQ3VzdG9tZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNtQztBQUM5QjtBQUVXO0FBQ0U7QUFDdUM7O0FBS25GLElBQU1RLFNBQVMsR0FBRyxXQUFNOztJQUN0QixJQUFNQyxRQUFRLEdBQUdSLHNEQUFjLEVBQUU7SUFDakMsSUFBTSxTQUFXLEdBQUtDLHNEQUFjLENBQUMsU0FBQ1MsS0FBSztlQUFLQSxLQUFLLENBQUNDLGNBQWM7S0FBQSxDQUFDLENBQTdERixTQUFTO0lBR25CLElBQU1HLFlBQVksR0FBRyxTQUFDQyxFQUFTLEVBQUs7UUFDaENMLFFBQVEsQ0FBQ0gsNEVBQWMsQ0FBQ1EsRUFBRSxDQUFDLENBQUM7S0FDL0I7SUFDRCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0MsSUFBZSxFQUFLO1FBQ3RDUCxRQUFRLENBQUNGLDRFQUFjLENBQUNTLElBQUksQ0FBQyxDQUFDO0tBQ2pDO0lBR0MscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDJDQUEyQzs7MEJBQ3hELDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMseUNBQXlDOzBCQUFDLFlBQVU7Ozs7O3FCQUFLOzBCQUN2RSw4REFBQ0UsT0FBSztnQkFBQ0YsU0FBUyxFQUFDLHFDQUFxQzs7a0NBQ3BELDhEQUFDRyxPQUFLO2tDQUNKLDRFQUFDQyxJQUFFOzs4Q0FDRCw4REFBQ0MsSUFBRTtvQ0FBQ0MsS0FBSyxFQUFDLEtBQUs7b0NBQUNOLFNBQVMsRUFBQyxzRUFBc0U7OENBQUMsTUFFakc7Ozs7O3lDQUFLOzhDQUNMLDhEQUFDSyxJQUFFO29DQUFDQyxLQUFLLEVBQUMsS0FBSztvQ0FBQ04sU0FBUyxFQUFDLHNFQUFzRTs4Q0FBQyxTQUVqRzs7Ozs7eUNBQUs7OENBQ0wsOERBQUNLLElBQUU7b0NBQUNDLEtBQUssRUFBQyxLQUFLO29DQUFDTixTQUFTLEVBQUMsc0VBQXNFOzhDQUFDLE9BRWpHOzs7Ozt5Q0FBSzs4Q0FDTCw4REFBQ0ssSUFBRTtvQ0FBQ0MsS0FBSyxFQUFDLEtBQUs7b0NBQUNOLFNBQVMsRUFBQyxzRUFBc0U7OENBQUMsT0FFakc7Ozs7O3lDQUFLOzhDQUNMLDhEQUFDSyxJQUFFO29DQUFDQyxLQUFLLEVBQUMsS0FBSztvQ0FBQ04sU0FBUyxFQUFDLHNFQUFzRTs4Q0FBQyxTQUVqRzs7Ozs7eUNBQUs7OENBQ0wsOERBQUNPLElBQUU7b0NBQUNQLFNBQVMsRUFBQyw2QkFBNkI7Ozs7O3lDQUFNOzs7Ozs7aUNBQzlDOzs7Ozs2QkFDQztrQ0FDUiw4REFBQ1EsT0FBSzt3QkFBQ1IsU0FBUyxFQUFDLG1DQUFtQztrQ0FDakQsQ0FBQyxDQUFDUixTQUFTLENBQUNpQixNQUFNLElBQ2pCakIsU0FBUyxDQUFDa0IsR0FBRyxDQUFDLFNBQUNDLFFBQVE7aURBQ3JCLDhEQUFDUCxJQUFFOztrREFDRCw4REFBQ0csSUFBRTt3Q0FBQ1AsU0FBUyxFQUFDLDZCQUE2QjtrREFDekMsNEVBQUNELEtBQUc7NENBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzhEQUNoQyw4REFBQ0QsS0FBRztvREFBQ2EsdUJBQXVCLEVBQUU7d0RBQUVDLE1BQU0sRUFBRUYsUUFBUSxDQUFDRyxHQUFHO3FEQUFFO29EQUFFZCxTQUFTLEVBQUMsTUFBTTs7Ozs7eURBQUc7OERBQzNFLDhEQUFDRCxLQUFHOzhEQUFFWSxRQUFRLENBQUNJLFNBQVM7Ozs7O3lEQUFPOzs7Ozs7aURBQzNCOzs7Ozs2Q0FDSDtrREFDTCw4REFBQ1IsSUFBRTt3Q0FBQ1AsU0FBUyxFQUFDLDZCQUE2QjtrREFBRVcsUUFBUSxDQUFDSyxPQUFPOzs7Ozs2Q0FBTTtrREFDbkUsOERBQUNULElBQUU7d0NBQUNQLFNBQVMsRUFBQyw2QkFBNkI7a0RBQUVXLFFBQVEsQ0FBQ00sS0FBSzs7Ozs7NkNBQU07a0RBQ2pFLDhEQUFDVixJQUFFO3dDQUFDUCxTQUFTLEVBQUUsZ0NBQStCLENBQXNELE9BQXBEVyxRQUFRLENBQUNPLGNBQWMsS0FBSyxNQUFNLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBRTs7Ozs7NkNBQU87a0RBQzVHLDhEQUFDWCxJQUFFO3dDQUFDUCxTQUFTLEVBQUMsNkJBQTZCO2tEQUN6Qyw0RUFBQ0QsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLHlCQUF5Qjs7OERBQ3RDLDhEQUFDZixtREFBSztvREFBQ2tDLE9BQU8sRUFBRTsrREFBSXRCLFlBQVksQ0FBQ2MsUUFBUSxDQUFDO3FEQUFBO29EQUFFWCxTQUFTLEVBQUMsZ0JBQWdCO29EQUFDb0IsUUFBUTtvREFBQ0MsR0FBRyxFQUFFbkMscURBQVE7Ozs7O3lEQUFJOzhEQUNqRyw4REFBQ0QsbURBQUs7b0RBQUNrQyxPQUFPLEVBQUU7K0RBQUl4QixZQUFZLENBQUNnQixRQUFRLENBQUNmLEVBQUUsQ0FBRTtxREFBQTtvREFBRUksU0FBUyxFQUFDLGdCQUFnQjtvREFBQ29CLFFBQVE7b0RBQUNDLEdBQUcsRUFBRWxDLHNEQUFTOzs7Ozt5REFBSTs7Ozs7O2lEQUNsRzs7Ozs7NkNBQ0g7OytCQWZFd0IsUUFBUSxDQUFDZixFQUFFOzs7O3FDQWdCZjt5QkFDTixDQUFDOzs7Ozs2QkFDRTs7Ozs7O3FCQUNGOzs7Ozs7YUFDSixDQUNOO0NBQ0g7R0E5REtOLFNBQVM7O1FBQ0lQLGtEQUFjO1FBQ1RDLGtEQUFjOzs7QUFGaENNLEtBQUFBLFNBQVM7QUFnRWYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DdXN0b21lcnMvQ3VzdG9tZXJzLnRzeD9jN2UzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBkZWxldGVDdXN0b21lckFjdGlvbiwgZ2V0Q3VzdG9tZXJzQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgZWRpdGVJbWcgZnJvbSAnLi4vLi4vaW1nL0VkaXQuc3ZnJztcclxuaW1wb3J0IGRlbGV0ZUltZyBmcm9tICcuLi8uLi9pbWcvVHJhc2guc3ZnJztcclxuaW1wb3J0IHsgZGVsZXRlQ3VzdG9tZXIsIHNldEN1cnJlbnREYXRhIH0gZnJvbSAnLi4vLi4vc3RvcmUvc2xpY2VzL2N1c3RvbWVyc1NsaWNlJztcclxuaW1wb3J0IHsgSUN1c3RvbWVycyB9IGZyb20gJy4uLy4uL3N0b3JlL3NsaWNlcy9jdXN0b21lcnNUeXBlcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEN1c3RvbWVycyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBjdXN0b21lcnMgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VzdG9tZXJzU2xpY2UpO1xyXG4gIFxyXG5cclxuY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkOnN0cmluZykgPT4ge1xyXG4gICAgZGlzcGF0Y2goZGVsZXRlQ3VzdG9tZXIoaWQpKVxyXG59XHJcbmNvbnN0IGhhbmRsZUNoYW5nZSA9IChkYXRhOklDdXN0b21lcnMpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEN1cnJlbnREYXRhKGRhdGEpKVxyXG59XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtMSBnYXAtWzIwcHhdIHAtWzQwcHhdIFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1pbnRlciB0ZXh0LWxnIGZvbnQtYm9sZCBsZWFkaW5nLTYgXCI+IEN1c3RvbWVyczwvaDI+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgQ29tcGFueVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgQWRtaW5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICBBY3Rpb25zXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj48L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICAgIHshIWN1c3RvbWVycy5sZW5ndGggJiZcclxuICAgICAgICAgICAgY3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIpID0+IChcclxuICAgICAgICAgICAgICA8dHIga2V5PXtjdXN0b21lci5pZH0+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY3VzdG9tZXIuc3ZnIH19IGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2N1c3RvbWVyLmZpcnN0TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPntjdXN0b21lci5jb21wYW55fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+e2N1c3RvbWVyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHcgJHtjdXN0b21lci5zZWxlY3RlZEJ1dHRvbiA9PT0gJ1VzZXInID8gJyMwRUE1RTknIDogJyd9YH0+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKT0+aGFuZGxlQ2hhbmdlKGN1c3RvbWVyKX0gY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcicgcHJpb3JpdHkgc3JjPXtlZGl0ZUltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugb25DbGljaz17KCk9PmhhbmRsZURlbGV0ZShjdXN0b21lci5pZCEpfSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJyBwcmlvcml0eSBzcmM9e2RlbGV0ZUltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiSW1hZ2UiLCJlZGl0ZUltZyIsImRlbGV0ZUltZyIsImRlbGV0ZUN1c3RvbWVyIiwic2V0Q3VycmVudERhdGEiLCJDdXN0b21lcnMiLCJkaXNwYXRjaCIsImN1c3RvbWVycyIsInN0YXRlIiwiY3VzdG9tZXJzU2xpY2UiLCJoYW5kbGVEZWxldGUiLCJpZCIsImhhbmRsZUNoYW5nZSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0ZCIsInRib2R5IiwibGVuZ3RoIiwibWFwIiwiY3VzdG9tZXIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInN2ZyIsImZpcnN0TmFtZSIsImNvbXBhbnkiLCJlbWFpbCIsInNlbGVjdGVkQnV0dG9uIiwib25DbGljayIsInByaW9yaXR5Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Customers/Customers.tsx\n"));

/***/ })

});