import type { NextPage } from 'next';
import Head from 'next/head';
import AddCustomer from '../components/AddCustomer/AddCustomer';
import Customers from '../components/Customers/Customers';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className='flex gap-[35px]'>
        <AddCustomer />
        <Customers />
      </div>
     
    </>
  );
};

export default Home;
