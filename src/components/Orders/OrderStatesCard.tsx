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
  'Delivered'
];

function getStatusIndex(steps: string) {
  const index = status.indexOf(steps);
  return index === -1 ? 'Status not found' : index;
}



const OrderStatesCard: React.FC<OrderStatesCardProps> = ({
  payment,
  orderStatus,
  subTotal,
  netTotal

}) => {

  return (
    <div>
      <div>
        <h2 className="text-xl text-slate-950 font-normal">Awaiting</h2>
      </div>
      
      <div className='flex h-screen'>
        <div className='flex'>
          <div>
            <img
              src="example.gif"
              alt="Example GIF"
              width={400}
              height={300}

            />
          </div>
          <div>
            <div>
              <Stepper
                status={0} 
              />
            </div>

            <div>
              <p className='text-base'>Payment <span className='text-slate-500'>{payment}</span></p>
              <p className='text-sm'>Total Summery</p>
              <p className='text-slate-500'>Sub Total <span>Rs {subTotal}.00</span></p>
              <p className='text-slate-500'>Shipping Fee <span>Rs 200.00</span></p>
              <p className='font-semibold'>Net Total <span>Rs {netTotal}.00</span></p>
            </div>
            <div>
              <p className='text-carnation-500'>Special Note:<br />
                <span className='text-slate-500'>Orders cannot be canceled after processing is complete</span></p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default OrderStatesCard
