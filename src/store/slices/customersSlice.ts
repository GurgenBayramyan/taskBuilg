import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICustomers, ICustomersState } from "./customersTypes";
import { helper } from "../../helpers";
const initialState:ICustomersState = {
    customers:[],
    currentData:null
}
const customersSlice = createSlice({
    name:"customersSlice",
    initialState,
    reducers:{
        deleteCustomer:(state,{payload}:PayloadAction<string>) =>{
            state.currentData = null
            state.customers = state.customers.filter(el=>el.id !== payload)
        },
        addCustomer:(state,{payload}) => {
            state.currentData = null
            state.customers.push(payload)
        },
        setCurrentData:(state,{payload}:PayloadAction<ICustomers | null>)=>{
            state.currentData = payload
        },
        changeCurrentItem:(state,{payload})  => {
            state.customers = helper(state.customers,payload)
            state.currentData = null
        }
        
    }
})
export default customersSlice;
export const {deleteCustomer,addCustomer,setCurrentData,changeCurrentItem} = customersSlice.actions