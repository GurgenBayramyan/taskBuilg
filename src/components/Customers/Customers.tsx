import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Image from 'next/image';
import { deleteCustomerAction, getCustomersAction } from '../../store/actionTypes';
import editeImg from '../../img/Edit.svg';
import deleteImg from '../../img/Trash.svg';
import { deleteCustomer, setCurrentData } from '../../store/slices/customersSlice';
import { ICustomers } from '../../store/slices/customersTypes';



const Customers = () => {
  const dispatch = useAppDispatch();
  const { customers } = useAppSelector((state) => state.customersSlice);
  

const handleDelete = (id:string) => {
    dispatch(deleteCustomer(id))
}
const handleChange = (data:ICustomers) => {
    dispatch(setCurrentData(data))
}


  return (
    <div className="flex flex-col flex-1 gap-[20px] p-[40px] ">
      <h2 className="font-inter text-lg font-bold leading-6 "> Customers</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
              Company
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
              Admin
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
              Actions
            </th>
            <td className="px-6 py-4 whitespace-nowrap"></td>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {!!customers.length &&
            customers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div dangerouslySetInnerHTML={{ __html: customer.svg }} className="mr-2" />
                    <div>{customer.firstName}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.company}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                <td className={`px-6 py-4 whitespace-nowrap w-[25px] ${customer.selectedButton === 'User' ? '#0EA5E9' : ''}`}></td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Image onClick={()=>handleChange(customer)} className='cursor-pointer' priority src={editeImg} />
                    <Image onClick={()=>handleDelete(customer.id!)} className='cursor-pointer' priority src={deleteImg} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
