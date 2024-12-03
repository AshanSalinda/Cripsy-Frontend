import React from 'react'
//Awiating Order States Card (Customer View)
const OrderStatesCard = () => {
  const productName = "Sample Product"; // Define productName

  return (
    <div>
      <div>
        <h2 className="text-xl text-red-600">Awaiting</h2>
      </div>
      <div>
        <div>
            <h2 className="text-2xl font-bold">{productName}</h2>
            <p className="text-slate-500">ORD:<span className="text-slate-500">12345</span></p>
            {/* Image */}
            <img src="https://tenor.com/bkVfz.gif" alt="Awaiting Order"  className='w-52 h-auto'/>
            <p className='text-slate-500'>Qty:</p>
        </div>
      </div>
    </div>
  )
}

export default OrderStatesCard
