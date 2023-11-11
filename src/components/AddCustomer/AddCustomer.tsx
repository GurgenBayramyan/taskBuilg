import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, FieldValues, useWatch } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { errorClass, inputStyles, labelStyles, namesInputStyles, statusType } from '../../constants';
import Image from 'next/image';
import { nanoid } from 'nanoid';

import eyeIcon from '../../img/Eye.svg'
import offPassword from '../../img/offPassword.svg';
import { scemaChange, schemaCustomer } from '../../scemas';
import { toSvg } from "jdenticon";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IPostData } from '../../types';
import { addCustomer } from '../../store/slices/customersSlice';
import { ICustomers } from '../../store/slices/customersTypes';


const AddCustomer = () => {
    const [selectedStatus, setSelectedStatus] = useState<statusType.user | statusType.administrator>(statusType.user);
    const [viewPassword,setViewPassword] = useState<boolean>(false);
    const { currentData } = useAppSelector((state) => state.customersSlice);
  
    const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schemaCustomer),
 
  });
  useEffect(()=>{
    setValue('selectedButton', statusType.user);
  },[])

  const watchPassword = watch("password")
  const selectedButton = useWatch({
    control,
    name: 'selectedButton',
  });
  const mySubmit: SubmitHandler<IPostData> = (data) => {
    const randomSeed = nanoid();
    const svgString = toSvg(randomSeed, 35);
    dispatch(addCustomer({
        ...data,
        id:crypto.randomUUID(),
        svg:svgString
    }))
    reset()
  };

  const handleStatusClick = (status:statusType.user | statusType.administrator) => {
    setValue('selectedButton', status);
    setSelectedStatus(status);
  };
  const toggleViewPassword = () => {
    setViewPassword((prev)=>!prev)
  }

  return (
    <div className="flex flex-col w-[512px] gap-[20px] p-[40px] bg-#E2E8F0">
      <h2 className="font-inter text-lg font-bold leading-6">Add Customer</h2>
      <form className=" w-[100%]  flex flex-col gap-[20px]" onSubmit={handleSubmit(mySubmit)}>
        <div className='flex gap-3'>
          <div className='flex flex-col  gap-2'>
            <label className={labelStyles} htmlFor="firstName">FirstName</label>
            <input type="text" className={namesInputStyles} id='firstName' {...register("firstName")} />
            {errors.firstName && <span className={errorClass}>{errors.firstName?.message}</span>}
          </div>
          <div className='flex flex-col  gap-2'>
            <label className={labelStyles} htmlFor="lastName">LastName</label>
            <input type="text" className={namesInputStyles} id='lastName' {...register("lastName")} />
            {errors.lastName && <span className={errorClass} >{errors.lastName?.message}</span>}
          </div>
        </div>
        <div className='flex flex-col  gap-2'>
          <label className={labelStyles} htmlFor="company">Company</label>
          <input type="text" className={inputStyles} id='company'{...register("company")} />
          {errors.company  && <span className={errorClass}>{errors.company?.message}</span>}
        </div>
        <div className='flex flex-col  gap-2'>
          <label className={labelStyles}>Status</label>
          <div className='flex p-[4px] bg-#E2E8F0 text-blcack'>
            <div
              onClick={() => handleStatusClick(statusType.user)}
              className={`w-[50%] font-inter text-base font-normal leading-6 tracking-normal text-center pt-1 pr-6 pb-1 pl-6 cursor-pointer ${
                selectedStatus === statusType.user ? ' text-blcack shadow-sm border border-r border-solid border-gray-300 bg-#FFFFFF'  : ''
              }`}
            >
              User
            </div>
            <div
              onClick={() => handleStatusClick(statusType.administrator)}
              className={`w-[50%] font-inter text-base font-normal leading-6 tracking-normal text-center pt-1 pr-6 pb-1 pl-6 cursor-pointer ${
                selectedStatus === statusType.administrator ? ' text-blcack  shadow-sm border border-r border-solid border-gray-300 bg-#FFFFFF' : ''
              }`}
            >
              Administrator
            </div>
          </div>
        </div>
        <div className='flex flex-col  gap-2'>
          <label className={labelStyles} htmlFor="email">Email</label>
          <input type="text" className={inputStyles} id='email'{...register("email")} />
          {errors.email && <span className={errorClass}>{errors.email.message}</span>}
        </div>
        <div className='flex flex-col  gap-2 '>
          <label className={labelStyles} htmlFor="password">Password</label>
          <div className='flex w-[100%] h-[40px] p-[8px 12px 8px 12px] border rounded-[8px] border-solid border-gray-300  '>
          <input type={viewPassword ? "text" : "password"}  className='w-[95%] p-2 focus:border-none focus:outline-none' id='password' {...register("password")} />
            {viewPassword ?        <Image
                onClick={toggleViewPassword}
                className='flex-1 cursor-pointer'
                priority
                src={offPassword}
                alt="eye image"
                title='eye'
                /> :    <Image
                onClick={toggleViewPassword}
                className='flex-1 cursor-pointer'
                priority
                src={eyeIcon}
                alt="eye image"
                title='eye'
                />  }
        
                 
            
        </div>
         {!watchPassword ? <span className="text-xs text-gray-500">8+ characters</span>: errors.password &&  <span className={errorClass}>{errors.password.message}</span>}
          </div>
        

        <button type='submit' className="bg-blue-500 text-white w-[432px] h-[40px]  border rounded-[8px] border-solid border-gray-300 gap-10">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
