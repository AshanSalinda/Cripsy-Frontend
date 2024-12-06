import React from 'react'
import Stepper from '@/components/Stepper/Stepper';
//Awiating Order States Card (Customer View)

export interface OrderStatesCardProps {
  payment: string;
  orderStatus: string;
  subTotal: number;
  netTotal: number;

}

const steps = [
  'Order Placed',
  'Processing',
  'Shipped',
  'Delivering',
  'Delivered'
];

function getStatusIndex(steps: string) {
  const index = status.indexOf(steps);
  return index === -1 ? 'Status not found' : index;
}



const OrderStatesCard: React.FC<OrderStatesCardProps> = ({
  payment,
  subTotal,
  netTotal

}) => {

  return (
    <div className='w-fit  p-5 h-auto shadow-custom-dark rounded-lg'>
      {/* header */ }
      <div>
        <h2 className="text-2xl text-slate-950 font-normal">Awaiting</h2>
      </div>

      
      <div className='flex '>
        <div className='flex'>
          {/* Gift Image */}
          <div className='flex-shrink-0'>
            <img
              src="example.gif"
              alt="Example GIF"
              width={300}
              height={250}
              className='bg-none'

            />
          </div>

          
          <div>
            {/* Order Status Stepper */}
            <div >
              <Stepper
                status="Delivered"
              />
            </div>
              
              {/* Order Status Details */}
           <div className='flex justify-between items-baseline gap-x-40 pt-10 pl-10 '>

            <div className='order-1' >
              <p className='text-lg '>Payment <span className='text-slate-500 pl-6'>{payment}</span></p>
              <p className=' pt-5 text-lg'>Total Summery</p>
              <p className='text-slate-500 pt-3'>Sub Total <span className='pl-14'>Rs {subTotal}.00</span></p>
              <p className='text-slate-500 pt-3 '>Shipping Fee <span className='pl-6'>Rs 200.00</span></p>
              <p className='font-semibold pt-5 text-lg '>Net Total <span className='pl-9 text-lg'>Rs {netTotal}.00</span></p>
            </div>

            {/* Special Note */}
            <div className='order-2'>
              <p className='text-carnation-500'>Special Note:<br />
                <span className='text-slate-500'>Orders cannot be canceled after processing is complete</span></p>
            </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default OrderStatesCard
