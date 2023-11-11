import { createAction } from "@reduxjs/toolkit";
import { IPostData } from "../../types";

export const getCustomersAction = createAction("getUserDataActon");
export const setCustomerAction = createAction<IPostData>("setCustomerAction");
export const deleteCustomerAction = createAction<string>("deleteCustomerAction")