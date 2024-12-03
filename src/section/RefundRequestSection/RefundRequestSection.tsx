import RefundCard from '@/components/Product/RefundCard'
import React from 'react'

export const RefundRequestSection = () => {
  return (
    <div>
      
       <RefundCard
       productName="Smartphone X"
       orderId="12345"
       price={999.99}
       reason="Brand New 100% Original. The sound quality is exceptional, "
       orderDate="2024-12-01"
       deliveredDate="2024-12-02"
        title="Smartphone X"
        imageSrc=""
       customerName="John Doe"
     />
      
    </div>
  )
}
