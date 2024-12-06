import RefundCard from '@/components/Product/RefundCard'
import React from 'react'
import refund from 	 '@/data/data.json'

export const RefundRequestSection = () => {

  return (
    <div className='p-7' >
        
       <RefundCard
       productName={"Polo T-Shirt"}
       refoundId={"ORD123456"}
       price={200000}
       reason={"Not satisfied with the product"}
       orderDate={"2021-09-01"}
       deliveredDate={"2021-09-05"}
       customerName={"John Doe"}
     />
      
      
    </div>
  )
}
