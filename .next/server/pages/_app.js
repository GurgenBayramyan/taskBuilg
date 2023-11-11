/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findDeletedObj\": () => (/* binding */ findDeletedObj),\n/* harmony export */   \"helper\": () => (/* binding */ helper)\n/* harmony export */ });\nconst findDeletedObj = (arr, id)=>{\n    return arr.filter((el)=>el.id !== id);\n};\nconst helper = (arr, object)=>{\n    const index = arr.findIndex((el)=>el.id === object.id);\n    if (index !== -1) {\n        arr[index] = object;\n    }\n    return arr;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVPLE1BQU1BLGNBQWMsR0FBRyxDQUFDQyxHQUFnQixFQUFDQyxFQUFTLEdBQUs7SUFDMUQsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUNDLENBQUFBLEVBQUUsR0FBSUEsRUFBRSxDQUFDRixFQUFFLEtBQUtBLEVBQUUsQ0FBQztDQUN4QztBQUNNLE1BQU1HLE1BQU0sR0FBRyxDQUFDSixHQUFpQixFQUFFSyxNQUFrQixHQUFtQjtJQUMzRSxNQUFNQyxLQUFLLEdBQUdOLEdBQUcsQ0FBQ08sU0FBUyxDQUFDLENBQUNKLEVBQUUsR0FBS0EsRUFBRSxDQUFDRixFQUFFLEtBQUtJLE1BQU0sQ0FBQ0osRUFBRSxDQUFDO0lBRXhELElBQUlLLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNkTixHQUFHLENBQUNNLEtBQUssQ0FBQyxHQUFHRCxNQUFNLENBQUM7S0FDdkI7SUFFRCxPQUFPTCxHQUFHLENBQUM7Q0FDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC10YXNrLy4vc3JjL2hlbHBlcnMvaW5kZXgudHM/ZWFiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ3VzdG9tZXJzIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9jdXN0b21lcnNUeXBlc1wiXHJcblxyXG5leHBvcnQgY29uc3QgZmluZERlbGV0ZWRPYmogPSAoYXJyOklDdXN0b21lcnNbXSxpZDpzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBhcnIuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBpZClcclxufVxyXG5leHBvcnQgY29uc3QgaGVscGVyID0gKGFycjogSUN1c3RvbWVyc1tdLCBvYmplY3Q6IElDdXN0b21lcnMpOiBJQ3VzdG9tZXJzW10gPT4ge1xyXG4gICAgY29uc3QgaW5kZXggPSBhcnIuZmluZEluZGV4KChlbCkgPT4gZWwuaWQgPT09IG9iamVjdC5pZCk7XHJcblxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGFycltpbmRleF0gPSBvYmplY3Q7IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnI7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJmaW5kRGVsZXRlZE9iaiIsImFyciIsImlkIiwiZmlsdGVyIiwiZWwiLCJoZWxwZXIiLCJvYmplY3QiLCJpbmRleCIsImZpbmRJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/index.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/store/index.ts\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst TestTaskApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__.PersistGate, {\n            loading: null,\n            persistor: _store__WEBPACK_IMPORTED_MODULE_3__.persistor,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\test-task\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestTaskApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQytCO0FBQ1E7QUFDRztBQUNvQjtBQUU5RCxNQUFNSSxXQUFXLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxHQUFLO0lBQzFELHFCQUNFLDhEQUFDTixpREFBUTtRQUFDQyxLQUFLLEVBQUVBLDhDQUFLO2tCQUNwQiw0RUFBQ0Usd0VBQVc7WUFBQ0ksT0FBTyxFQUFFLElBQUk7WUFBRUwsU0FBUyxFQUFFQSw2Q0FBUztzQkFDOUMsNEVBQUNHLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7eUJBQUk7Ozs7O3FCQUNoQjs7Ozs7aUJBRUwsQ0FDWDtDQUNIO0FBRUQsaUVBQWVGLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdGFzay8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSAse3BlcnNpc3Rvcn0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnO1xyXG5cclxuY29uc3QgVGVzdFRhc2tBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFBlcnNpc3RHYXRlIGxvYWRpbmc9e251bGx9IHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgXHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0VGFza0FwcDtcclxuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJwZXJzaXN0b3IiLCJQZXJzaXN0R2F0ZSIsIlRlc3RUYXNrQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"persistor\": () => (/* binding */ persistor)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ \"./src/store/rootReducer.ts\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst persistConfig = {\n    key: \"root\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default())\n};\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistReducer)(persistConfig, _rootReducer__WEBPACK_IMPORTED_MODULE_1__.rootReducer);\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: persistedReducer,\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: {\n                ignoredActions: [\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.FLUSH,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.REHYDRATE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.PAUSE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.PERSIST,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.PURGE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.REGISTER\n                ]\n            }\n        })\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistStore)(store);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ047QUFXckI7QUFDeUI7QUFFaEQsTUFBTVcsYUFBYSxHQUFHO0lBQ3BCQyxHQUFHLEVBQUUsTUFBTTtJQUNYRixPQUFPO0NBQ1I7QUFDRCxNQUFNRyxnQkFBZ0IsR0FBR1YsNkRBQWMsQ0FBQ1EsYUFBYSxFQUFFVixxREFBVyxDQUFDO0FBRW5FLE1BQU1hLEtBQUssR0FBR2QsZ0VBQWMsQ0FBQztJQUMzQmUsT0FBTyxFQUFFRixnQkFBZ0I7SUFDekJHLFVBQVUsRUFBRSxDQUFDQyxvQkFBb0IsR0FDL0JBLG9CQUFvQixDQUFDO1lBQ25CQyxpQkFBaUIsRUFBRTtnQkFDakJDLGNBQWMsRUFBRTtvQkFBQ2YsZ0RBQUs7b0JBQUVDLG9EQUFTO29CQUFFQyxnREFBSztvQkFBRUMsa0RBQU87b0JBQUVDLGdEQUFLO29CQUFFQyxtREFBUTtpQkFBQzthQUNwRTtTQUNGLENBQUM7Q0FDTCxDQUFDO0FBQ0ssTUFBTVcsU0FBUyxHQUFHbEIsMkRBQVksQ0FBQ1ksS0FBSyxDQUFDLENBQUM7QUFFN0MsaUVBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdGFzay8uL3NyYy9zdG9yZS9pbmRleC50cz9jZWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tIFwiLi9yb290UmVkdWNlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBwZXJzaXN0U3RvcmUsXHJcbiAgcGVyc2lzdFJlZHVjZXIsXHJcbiAgRkxVU0gsXHJcbiAgUkVIWURSQVRFLFxyXG4gIFBBVVNFLFxyXG4gIFBFUlNJU1QsXHJcbiAgUFVSR0UsXHJcbiAgUkVHSVNURVJcclxufSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICBrZXk6IFwicm9vdFwiLFxyXG4gIHN0b3JhZ2VcclxufTtcclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxyXG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xyXG4gICAgICBzZXJpYWxpemFibGVDaGVjazoge1xyXG4gICAgICAgIGlnbm9yZWRBY3Rpb25zOiBbRkxVU0gsIFJFSFlEUkFURSwgUEFVU0UsIFBFUlNJU1QsIFBVUkdFLCBSRUdJU1RFUl0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xyXG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJyb290UmVkdWNlciIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwiRkxVU0giLCJSRUhZRFJBVEUiLCJQQVVTRSIsIlBFUlNJU1QiLCJQVVJHRSIsIlJFR0lTVEVSIiwic3RvcmFnZSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJpZ25vcmVkQWN0aW9ucyIsInBlcnNpc3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/index.ts\n");

/***/ }),

/***/ "./src/store/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/store/rootReducer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rootReducer\": () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_customersSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/customersSlice */ \"./src/store/slices/customersSlice.ts\");\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    [_slices_customersSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name]: _slices_customersSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reducer\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcm9vdFJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNhO0FBSzlDLE1BQU1FLFdBQVcsR0FBR0Ysc0RBQWUsQ0FBQztJQUN2QyxDQUFDQyxtRUFBbUIsQ0FBQyxFQUFDQSxzRUFBc0I7Q0FDL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdGFzay8uL3NyYy9zdG9yZS9yb290UmVkdWNlci50cz9kMjE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3VzdG9tZXJzU2xpY2UgZnJvbSBcIi4vc2xpY2VzL2N1c3RvbWVyc1NsaWNlXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgW2N1c3RvbWVyc1NsaWNlLm5hbWVdOmN1c3RvbWVyc1NsaWNlLnJlZHVjZXJcclxufSkiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiY3VzdG9tZXJzU2xpY2UiLCJyb290UmVkdWNlciIsIm5hbWUiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/rootReducer.ts\n");

/***/ }),

/***/ "./src/store/slices/customersSlice.ts":
/*!********************************************!*\
  !*** ./src/store/slices/customersSlice.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCustomer\": () => (/* binding */ addCustomer),\n/* harmony export */   \"changeCurrentItem\": () => (/* binding */ changeCurrentItem),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"deleteCustomer\": () => (/* binding */ deleteCustomer),\n/* harmony export */   \"setCurrentData\": () => (/* binding */ setCurrentData)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ \"./src/helpers/index.ts\");\n\n\nconst initialState = {\n    customers: [],\n    currentData: null\n};\nconst customersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"customersSlice\",\n    initialState,\n    reducers: {\n        deleteCustomer: (state, { payload  })=>{\n            state.currentData = null;\n            state.customers = state.customers.filter((el)=>el.id !== payload);\n        },\n        addCustomer: (state, { payload  })=>{\n            state.currentData = null;\n            state.customers.push(payload);\n        },\n        setCurrentData: (state, { payload  })=>{\n            state.currentData = payload;\n        },\n        changeCurrentItem: (state, { payload  })=>{\n            state.customers = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.helper)(state.customers, payload);\n            state.currentData = null;\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customersSlice);\nconst { deleteCustomer , addCustomer , setCurrentData , changeCurrentItem  } = customersSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL2N1c3RvbWVyc1NsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThEO0FBRXZCO0FBQ3ZDLE1BQU1FLFlBQVksR0FBbUI7SUFDakNDLFNBQVMsRUFBQyxFQUFFO0lBQ1pDLFdBQVcsRUFBQyxJQUFJO0NBQ25CO0FBQ0QsTUFBTUMsY0FBYyxHQUFHTCw2REFBVyxDQUFDO0lBQy9CTSxJQUFJLEVBQUMsZ0JBQWdCO0lBQ3JCSixZQUFZO0lBQ1pLLFFBQVEsRUFBQztRQUNMQyxjQUFjLEVBQUMsQ0FBQ0MsS0FBSyxFQUFDLEVBQUNDLE9BQU8sR0FBdUIsR0FBSTtZQUNyREQsS0FBSyxDQUFDTCxXQUFXLEdBQUcsSUFBSTtZQUN4QkssS0FBSyxDQUFDTixTQUFTLEdBQUdNLEtBQUssQ0FBQ04sU0FBUyxDQUFDUSxNQUFNLENBQUNDLENBQUFBLEVBQUUsR0FBRUEsRUFBRSxDQUFDQyxFQUFFLEtBQUtILE9BQU8sQ0FBQztTQUNsRTtRQUNESSxXQUFXLEVBQUMsQ0FBQ0wsS0FBSyxFQUFDLEVBQUNDLE9BQU8sR0FBQyxHQUFLO1lBQzdCRCxLQUFLLENBQUNMLFdBQVcsR0FBRyxJQUFJO1lBQ3hCSyxLQUFLLENBQUNOLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDTCxPQUFPLENBQUM7U0FDaEM7UUFDRE0sY0FBYyxFQUFDLENBQUNQLEtBQUssRUFBQyxFQUFDQyxPQUFPLEdBQWtDLEdBQUc7WUFDL0RELEtBQUssQ0FBQ0wsV0FBVyxHQUFHTSxPQUFPO1NBQzlCO1FBQ0RPLGlCQUFpQixFQUFDLENBQUNSLEtBQUssRUFBQyxFQUFDQyxPQUFPLEdBQUMsR0FBTTtZQUNwQ0QsS0FBSyxDQUFDTixTQUFTLEdBQUdGLGdEQUFNLENBQUNRLEtBQUssQ0FBQ04sU0FBUyxFQUFDTyxPQUFPLENBQUM7WUFDakRELEtBQUssQ0FBQ0wsV0FBVyxHQUFHLElBQUk7U0FDM0I7S0FFSjtDQUNKLENBQUM7QUFDRixpRUFBZUMsY0FBYyxFQUFDO0FBQ3ZCLE1BQU0sRUFBQ0csY0FBYyxHQUFDTSxXQUFXLEdBQUNFLGNBQWMsR0FBQ0MsaUJBQWlCLEdBQUMsR0FBR1osY0FBYyxDQUFDYSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC10YXNrLy4vc3JjL3N0b3JlL3NsaWNlcy9jdXN0b21lcnNTbGljZS50cz8zZTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgSUN1c3RvbWVycywgSUN1c3RvbWVyc1N0YXRlIH0gZnJvbSBcIi4vY3VzdG9tZXJzVHlwZXNcIjtcclxuaW1wb3J0IHsgaGVscGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuY29uc3QgaW5pdGlhbFN0YXRlOklDdXN0b21lcnNTdGF0ZSA9IHtcclxuICAgIGN1c3RvbWVyczpbXSxcclxuICAgIGN1cnJlbnREYXRhOm51bGxcclxufVxyXG5jb25zdCBjdXN0b21lcnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6XCJjdXN0b21lcnNTbGljZVwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6e1xyXG4gICAgICAgIGRlbGV0ZUN1c3RvbWVyOihzdGF0ZSx7cGF5bG9hZH06UGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PntcclxuICAgICAgICAgICAgc3RhdGUuY3VycmVudERhdGEgPSBudWxsXHJcbiAgICAgICAgICAgIHN0YXRlLmN1c3RvbWVycyA9IHN0YXRlLmN1c3RvbWVycy5maWx0ZXIoZWw9PmVsLmlkICE9PSBwYXlsb2FkKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkQ3VzdG9tZXI6KHN0YXRlLHtwYXlsb2FkfSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50RGF0YSA9IG51bGxcclxuICAgICAgICAgICAgc3RhdGUuY3VzdG9tZXJzLnB1c2gocGF5bG9hZClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEN1cnJlbnREYXRhOihzdGF0ZSx7cGF5bG9hZH06UGF5bG9hZEFjdGlvbjxJQ3VzdG9tZXJzIHwgbnVsbD4pPT57XHJcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnREYXRhID0gcGF5bG9hZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlQ3VycmVudEl0ZW06KHN0YXRlLHtwYXlsb2FkfSkgID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuY3VzdG9tZXJzID0gaGVscGVyKHN0YXRlLmN1c3RvbWVycyxwYXlsb2FkKVxyXG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50RGF0YSA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbWVyc1NsaWNlO1xyXG5leHBvcnQgY29uc3Qge2RlbGV0ZUN1c3RvbWVyLGFkZEN1c3RvbWVyLHNldEN1cnJlbnREYXRhLGNoYW5nZUN1cnJlbnRJdGVtfSA9IGN1c3RvbWVyc1NsaWNlLmFjdGlvbnMiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJoZWxwZXIiLCJpbml0aWFsU3RhdGUiLCJjdXN0b21lcnMiLCJjdXJyZW50RGF0YSIsImN1c3RvbWVyc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZGVsZXRlQ3VzdG9tZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJmaWx0ZXIiLCJlbCIsImlkIiwiYWRkQ3VzdG9tZXIiLCJwdXNoIiwic2V0Q3VycmVudERhdGEiLCJjaGFuZ2VDdXJyZW50SXRlbSIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/slices/customersSlice.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();