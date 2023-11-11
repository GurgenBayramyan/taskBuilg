import { combineReducers } from "redux";
import customersSlice from "./slices/customersSlice";




export const rootReducer = combineReducers({
    [customersSlice.name]:customersSlice.reducer
})