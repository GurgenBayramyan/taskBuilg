import axios from "axios"
import { IPostData } from "../types";

export const getCustomer = async(url:string) => {
    const resp = await axios.get(url);
    return resp.data
}
export const setCustomer = async(url:string,data:IPostData) => {
    const resp = await axios.post(url,data);
    return resp.data
}
export const deleteCustomerService = async(url:string) => {
    const resp = await axios.delete(url);
    
}