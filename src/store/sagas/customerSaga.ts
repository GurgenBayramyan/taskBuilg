import { call, put, takeLatest } from "redux-saga/effects";
import { deleteCustomerAction, getCustomersAction, setCustomerAction } from "../actionTypes";
import axios, { AxiosResponse } from 'axios';
import {deleteCustomerService, getCustomer, setCustomer} from '../../services/index.'
import { setAllCustomers, setCustomerReducer } from "../slices/customersSlice";
import { ICustomers } from "../slices/customersTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { IPostData } from "../../types";

function* getCustomerSaga():Generator<any, void>{
    try{
        const data:any = yield call(getCustomer,"api/AddCustomer") 
        yield put(setAllCustomers(data))
    }catch(err){
        console.log(err)
    }
    
}

function* setCustomerSaga({payload}:PayloadAction<IPostData>):Generator<any, void>{
    const data = payload
    try{
        const resp:any = yield call(setCustomer,"api/AddCustomer",data)
        yield put(setCustomerReducer(resp!.customer))
    }catch(err){
        console.log(err)
    }
}
function* deleteCustomer({payload}:PayloadAction<string>):Generator<any, void>{
    const id = payload
    try{
        const data:any = yield call(getCustomer,"api/AddCustomer") 
        const resp:any = yield call(deleteCustomerService,`api/AddCustomer/${id}`);
            
        
    }catch(err){
        console.log(err)
    }
}

export function* watchCustomerSaga(){
    yield takeLatest(getCustomersAction,getCustomerSaga)
    yield takeLatest(setCustomerAction,setCustomerSaga)
    yield takeLatest(deleteCustomerAction,deleteCustomer)
}