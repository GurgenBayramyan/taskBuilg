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

/***/ "./src/components/AddCustomer/AddCustomer.tsx":
/*!****************************************************!*\
  !*** ./src/components/AddCustomer/AddCustomer.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var _scemas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scemas */ \"./src/scemas/index.ts\");\n/* harmony import */ var jdenticon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jdenticon */ \"./node_modules/jdenticon/dist/jdenticon-module.mjs\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var _store_slices_customersSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/slices/customersSlice */ \"./src/store/slices/customersSlice.ts\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AddCustomer = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_3__.statusType.user), selectedStatus = ref[0], setSelectedStatus = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), viewPassword = ref1[0], setViewPassword = ref1[1];\n    var dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();\n    var currentData = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppSelector)(function(state) {\n        return state.customersSlice;\n    }).currentData;\n    var ref2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(_scemas__WEBPACK_IMPORTED_MODULE_4__.schemaCustomer)\n    }), register = ref2.register, handleSubmit = ref2.handleSubmit, errors = ref2.formState.errors, watch = ref2.watch, control = ref2.control, setValue = ref2.setValue, reset = ref2.reset;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (currentData) {\n            setValue(\"firstName\", currentData.firstName);\n            setValue(\"lastName\", currentData.lastName);\n            setValue(\"company\", currentData.company);\n            setValue(\"selectedButton\", currentData.selectedButton);\n            setValue(\"email\", currentData.email);\n        }\n    }, [\n        currentData\n    ]);\n    var watchPassword = watch(\"password\");\n    var selectedButton = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useWatch)({\n        control: control,\n        name: \"selectedButton\"\n    });\n    var mySubmit = function(data) {\n        var randomSeed = (0,nanoid__WEBPACK_IMPORTED_MODULE_9__.nanoid)();\n        var svgString = (0,jdenticon__WEBPACK_IMPORTED_MODULE_5__.toSvg)(randomSeed, 35);\n        dispatch((0,_store_slices_customersSlice__WEBPACK_IMPORTED_MODULE_7__.addCustomer)((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, data), {\n            id: crypto.randomUUID(),\n            svg: svgString\n        }))), reset();\n    };\n    var handleStatusClick = function(status) {\n        setValue(\"selectedButton\", status);\n        setSelectedStatus(status);\n    };\n    var toggleViewPassword = function() {\n        setViewPassword(function(prev) {\n            return !prev;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-[512px] gap-[20px] p-[40px] bg-#E2E8F0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-inter text-lg font-bold leading-6\",\n            children: \"Add Customer\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\AddCustomer\\\\AddCustomer.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\components\\\\AddCustomer\\\\AddCustomer.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, _this);\n};\n_s(AddCustomer, \"ChOJfRDSrLEaxex7x/KwOWYgIg0=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_6__.useAppSelector,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useWatch\n    ];\n});\n_c = AddCustomer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddCustomer);\nvar _c;\n$RefreshReg$(_c, \"AddCustomer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRDdXN0b21lci9BZGRDdXN0b21lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBbUQ7QUFDNkI7QUFDMUI7QUFDK0M7QUFFckU7QUFHYztBQUNaO0FBQzJCO0FBRUc7O0FBR2hFLElBQU1hLFdBQVcsR0FBRyxXQUFNOztJQUN0QixJQUE0Q1gsR0FBcUUsR0FBckVBLCtDQUFRLENBQTZDSSx1REFBZSxDQUFDLEVBQTFHUyxjQUFjLEdBQXVCYixHQUFxRSxHQUE1RixFQUFFYyxpQkFBaUIsR0FBSWQsR0FBcUUsR0FBekU7SUFDeEMsSUFBdUNBLElBQXdCLEdBQXhCQSwrQ0FBUSxDQUFVLEtBQUssQ0FBQyxFQUF4RGUsWUFBWSxHQUFvQmYsSUFBd0IsR0FBNUMsRUFBQ2dCLGVBQWUsR0FBSWhCLElBQXdCLEdBQTVCO0lBQ25DLElBQU1pQixRQUFRLEdBQUdULHNEQUFjLEVBQUU7SUFDakMsSUFBTSxXQUFZLEdBQUlDLHNEQUFjLENBQUNVLFNBQUFBLEtBQUs7ZUFBSUEsS0FBSyxDQUFDQyxjQUFjO0tBQUEsQ0FBQyxDQUE1REYsV0FBVztJQUVwQixJQVFJakIsSUFHRixHQUhFQSx3REFBTyxDQUFDO1FBQ1ZvQixRQUFRLEVBQUVsQixvRUFBVyxDQUFDRyxtREFBYyxDQUFDO0tBRXRDLENBQUMsRUFWQWdCLFFBQVEsR0FPTnJCLElBR0YsQ0FWQXFCLFFBQVEsRUFDUkMsWUFBWSxHQU1WdEIsSUFHRixDQVRBc0IsWUFBWSxFQUNaQyxNQUFtQixHQUtqQnZCLElBR0YsQ0FSQXVCLFNBQVMsQ0FBSUMsTUFBTSxFQUNuQkMsS0FBSyxHQUlIekIsSUFHRixDQVBBeUIsS0FBSyxFQUNMQyxPQUFPLEdBR0wxQixJQUdGLENBTkEwQixPQUFPLEVBQ1BDLFFBQVEsR0FFTjNCLElBR0YsQ0FMQTJCLFFBQVEsRUFDUkMsS0FBSyxHQUNINUIsSUFHRixDQUpBNEIsS0FBSztJQUtQOUIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSW1CLFdBQVcsRUFBRTtZQUNmVSxRQUFRLENBQUMsV0FBVyxFQUFFVixXQUFXLENBQUNZLFNBQVMsQ0FBRSxDQUFDO1lBQzlDRixRQUFRLENBQUMsVUFBVSxFQUFFVixXQUFXLENBQUNhLFFBQVEsQ0FBRSxDQUFDO1lBQzVDSCxRQUFRLENBQUMsU0FBUyxFQUFFVixXQUFXLENBQUNjLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDSixRQUFRLENBQUMsZ0JBQWdCLEVBQUVWLFdBQVcsQ0FBQ2UsY0FBYyxDQUFDLENBQUM7WUFDdkRMLFFBQVEsQ0FBQyxPQUFPLEVBQUVWLFdBQVcsQ0FBQ2dCLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0tBQ0YsRUFBRTtRQUFDaEIsV0FBVztLQUFDLENBQUMsQ0FBQztJQUVsQixJQUFNaUIsYUFBYSxHQUFHVCxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLElBQU1PLGNBQWMsR0FBRy9CLHlEQUFRLENBQUM7UUFDOUJ5QixPQUFPLEVBQVBBLE9BQU87UUFDUFMsSUFBSSxFQUFFLGdCQUFnQjtLQUN2QixDQUFDO0lBQ0YsSUFBTUMsUUFBUSxHQUE2QixTQUFDQyxJQUFJLEVBQUs7UUFDbkQsSUFBTUMsVUFBVSxHQUFHbEMsOENBQU0sRUFBRTtRQUMzQixJQUFNbUMsU0FBUyxHQUFHakMsZ0RBQUssQ0FBQ2dDLFVBQVUsRUFBRSxFQUFFLENBQUM7UUFDdkN0QixRQUFRLENBQUNQLHlFQUFXLENBQUMsMEtBQ2Q0QixJQUFJO1lBQ1BHLEVBQUUsRUFBQ0MsTUFBTSxDQUFDQyxVQUFVLEVBQUU7WUFDdEJDLEdBQUcsRUFBQ0osU0FBUztVQUNoQixDQUFDLENBQUMsRUFDSFgsS0FBSyxFQUFFO0tBQ1I7SUFLRCxJQUFNZ0IsaUJBQWlCLEdBQUcsU0FBQ0MsTUFBaUQsRUFBSztRQUMvRWxCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRWtCLE1BQU0sQ0FBQyxDQUFDO1FBQ25DaEMsaUJBQWlCLENBQUNnQyxNQUFNLENBQUMsQ0FBQztLQUMzQjtJQUNELElBQU1DLGtCQUFrQixHQUFHLFdBQU07UUFDL0IvQixlQUFlLENBQUMsU0FBQ2dDLElBQUk7bUJBQUcsQ0FBQ0EsSUFBSTtTQUFBLENBQUM7S0FDL0I7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsd0RBQXdEO2tCQUNyRSw0RUFBQ0MsSUFBRTtZQUFDRCxTQUFTLEVBQUMsd0NBQXdDO3NCQUFDLGNBQVk7Ozs7O2lCQUFLOzs7OzthQUVwRSxDQUNOO0NBQ0g7R0E3REt2QyxXQUFXOztRQUdJSCxrREFBYztRQUNUQyxrREFBYztRQVVsQ1Isb0RBQU87UUFlWUMscURBQVE7OztBQTdCM0JTLEtBQUFBLFdBQVc7QUErRGpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkQ3VzdG9tZXIvQWRkQ3VzdG9tZXIudHN4P2RlNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIsIEZpZWxkVmFsdWVzLCB1c2VXYXRjaCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCI7XHJcbmltcG9ydCB7IGVycm9yQ2xhc3MsIGlucHV0U3R5bGVzLCBsYWJlbFN0eWxlcywgbmFtZXNJbnB1dFN0eWxlcywgc3RhdHVzVHlwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcclxuaW1wb3J0IGV5ZUljb24gZnJvbSAnLi4vLi4vaW1nL0V5ZS5zdmcnXHJcbmltcG9ydCBvZmZQYXNzd29yZCBmcm9tICcuLi8uLi9pbWcvb2ZmUGFzc3dvcmQuc3ZnJztcclxuaW1wb3J0IHsgc2NoZW1hQ3VzdG9tZXIgfSBmcm9tICcuLi8uLi9zY2VtYXMnO1xyXG5pbXBvcnQgeyB0b1N2ZyB9IGZyb20gXCJqZGVudGljb25cIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xyXG5pbXBvcnQgeyBJUG9zdERhdGEgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcbmltcG9ydCB7IGFkZEN1c3RvbWVyIH0gZnJvbSAnLi4vLi4vc3RvcmUvc2xpY2VzL2N1c3RvbWVyc1NsaWNlJztcclxuXHJcblxyXG5jb25zdCBBZGRDdXN0b21lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFN0YXR1cywgc2V0U2VsZWN0ZWRTdGF0dXNdID0gdXNlU3RhdGU8c3RhdHVzVHlwZS51c2VyIHwgc3RhdHVzVHlwZS5hZG1pbmlzdHJhdG9yPihzdGF0dXNUeXBlLnVzZXIpO1xyXG4gICAgY29uc3QgW3ZpZXdQYXNzd29yZCxzZXRWaWV3UGFzc3dvcmRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge2N1cnJlbnREYXRhfSA9IHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1c3RvbWVyc1NsaWNlKVxyXG4gICAgXHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcbiAgICB3YXRjaCxcclxuICAgIGNvbnRyb2wsXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIHJlc2V0XHJcbiAgfSA9IHVzZUZvcm0oe1xyXG4gICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYUN1c3RvbWVyKSxcclxuXHJcbiAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50RGF0YSkge1xyXG4gICAgICBzZXRWYWx1ZSgnZmlyc3ROYW1lJywgY3VycmVudERhdGEuZmlyc3ROYW1lICk7XHJcbiAgICAgIHNldFZhbHVlKCdsYXN0TmFtZScsIGN1cnJlbnREYXRhLmxhc3ROYW1lICk7XHJcbiAgICAgIHNldFZhbHVlKCdjb21wYW55JywgY3VycmVudERhdGEuY29tcGFueSk7XHJcbiAgICAgIHNldFZhbHVlKCdzZWxlY3RlZEJ1dHRvbicsIGN1cnJlbnREYXRhLnNlbGVjdGVkQnV0dG9uKTtcclxuICAgICAgc2V0VmFsdWUoJ2VtYWlsJywgY3VycmVudERhdGEuZW1haWwpO1xyXG4gICAgfVxyXG4gIH0sIFtjdXJyZW50RGF0YV0pO1xyXG5cclxuICBjb25zdCB3YXRjaFBhc3N3b3JkID0gd2F0Y2goXCJwYXNzd29yZFwiKVxyXG4gIGNvbnN0IHNlbGVjdGVkQnV0dG9uID0gdXNlV2F0Y2goe1xyXG4gICAgY29udHJvbCxcclxuICAgIG5hbWU6ICdzZWxlY3RlZEJ1dHRvbicsXHJcbiAgfSk7XHJcbiAgY29uc3QgbXlTdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8SVBvc3REYXRhPiA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCByYW5kb21TZWVkID0gbmFub2lkKCk7XHJcbiAgICBjb25zdCBzdmdTdHJpbmcgPSB0b1N2ZyhyYW5kb21TZWVkLCAzNSk7XHJcbiAgICBkaXNwYXRjaChhZGRDdXN0b21lcih7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBpZDpjcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG4gICAgICAgIHN2ZzpzdmdTdHJpbmdcclxuICAgIH0pKSxcclxuICAgIHJlc2V0KClcclxuICB9O1xyXG5cclxuXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0dXNDbGljayA9IChzdGF0dXM6c3RhdHVzVHlwZS51c2VyIHwgc3RhdHVzVHlwZS5hZG1pbmlzdHJhdG9yKSA9PiB7XHJcbiAgICBzZXRWYWx1ZSgnc2VsZWN0ZWRCdXR0b24nLCBzdGF0dXMpO1xyXG4gICAgc2V0U2VsZWN0ZWRTdGF0dXMoc3RhdHVzKTtcclxuICB9O1xyXG4gIGNvbnN0IHRvZ2dsZVZpZXdQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIHNldFZpZXdQYXNzd29yZCgocHJldik9PiFwcmV2KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LVs1MTJweF0gZ2FwLVsyMHB4XSBwLVs0MHB4XSBiZy0jRTJFOEYwXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWludGVyIHRleHQtbGcgZm9udC1ib2xkIGxlYWRpbmctNlwiPkFkZCBDdXN0b21lcjwvaDI+XHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEN1c3RvbWVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJ1c2VXYXRjaCIsInl1cFJlc29sdmVyIiwic3RhdHVzVHlwZSIsIm5hbm9pZCIsInNjaGVtYUN1c3RvbWVyIiwidG9TdmciLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiYWRkQ3VzdG9tZXIiLCJBZGRDdXN0b21lciIsInVzZXIiLCJzZWxlY3RlZFN0YXR1cyIsInNldFNlbGVjdGVkU3RhdHVzIiwidmlld1Bhc3N3b3JkIiwic2V0Vmlld1Bhc3N3b3JkIiwiZGlzcGF0Y2giLCJjdXJyZW50RGF0YSIsInN0YXRlIiwiY3VzdG9tZXJzU2xpY2UiLCJyZXNvbHZlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwid2F0Y2giLCJjb250cm9sIiwic2V0VmFsdWUiLCJyZXNldCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY29tcGFueSIsInNlbGVjdGVkQnV0dG9uIiwiZW1haWwiLCJ3YXRjaFBhc3N3b3JkIiwibmFtZSIsIm15U3VibWl0IiwiZGF0YSIsInJhbmRvbVNlZWQiLCJzdmdTdHJpbmciLCJpZCIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJzdmciLCJoYW5kbGVTdGF0dXNDbGljayIsInN0YXR1cyIsInRvZ2dsZVZpZXdQYXNzd29yZCIsInByZXYiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AddCustomer/AddCustomer.tsx\n"));

/***/ })

});