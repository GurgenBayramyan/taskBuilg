import { statusType } from "../../constants";

export interface ICustomers{
    id?:string,
    svg:string,
    firstName:string,
    lastName:string,
    company:string,
    email:string,
    selectedButton:statusType.administrator | statusType.user,
    password?:string
}
export interface ICustomersState{
    customers:ICustomers[],
    currentData:ICustomers | null
}