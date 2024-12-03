"use client";

import OrderTable from '@/components/Orders/orderTable';
import React from 'react'

const Page = () => {
    return (
      <div className='p-9'>
        <p className='text-gray-500 text-sm pl-8'>Delivery / Order</p>
        <OrderTable/>

      </div>
    )
  }
  
  export default Page
  
