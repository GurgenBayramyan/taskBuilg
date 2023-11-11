import { ICustomers } from "../store/slices/customersTypes"

export const findDeletedObj = (arr:ICustomers[],id:string) => {
    return arr.filter(el => el.id !== id)
}
export const helper = (arr: ICustomers[], object: ICustomers): ICustomers[] => {
    const index = arr.findIndex((el) => el.id === object.id);

    if (index !== -1) {
        arr[index] = object; 
    }

    return arr;
};
