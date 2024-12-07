import React, { useEffect, useState } from 'react';
import Stepper from '@/components/Stepper/Stepper';
import { getOrderById } from '@/apis/orderApi/orderApi';
 // Assuming a toast utility is available

export interface OrderStatesCardProps {
  orderId: number;
}

const OrderStatesCard: React.FC<OrderStatesCardProps> = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState({
    payment: '',
    orderStatus: '',
    subTotal: 0,
    netTotal: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const data = await getOrderById(orderId);
        setOrderDetails({
          payment: data.paymentMethod,
          orderStatus: data.status,
          subTotal: data.subTotal,
          netTotal: data.netTotal,
        });
      } catch (error) {
        console.error('Failed to fetch order details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return (
      <div className="w-fit p-5 h-auto shadow-custom-dark rounded-lg">
        <p className="text-center text-slate-500">Loading...</p>
      </div>
    );
  }

  const { payment, orderStatus, subTotal, netTotal } = orderDetails;

  return (
    <div className="w-fit p-5 h-auto shadow-custom-dark rounded-lg">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-slate-950 font-normal">Awaiting</h2>
      </div>

      <div className="flex">
        <div className="flex">
          {/* Gift Image */}
          <div className="flex-shrink-0">
            <img
              src="ordering.gif"
              alt="Example GIF"
              width={300}
              height={250}
              className="bg-none"
            />
          </div>

          <div>
            {/* Order Status Stepper */}
            <div>
              <Stepper status={orderStatus} />
            </div>

            {/* Order Status Details */}
            <div className="flex justify-between items-baseline gap-x-40 pt-10 pl-10">
              <div className="order-1">
                <p className="text-lg">
                  Payment <span className="text-slate-500 pl-6">{payment}</span>
                </p>
                <p className="pt-5 text-lg">Total Summary</p>
                <p className="text-slate-500 pt-3">
                  Sub Total <span className="pl-14">Rs {subTotal}.00</span>
                </p>
                <p className="text-slate-500 pt-3">
                  Shipping Fee <span className="pl-6">Rs 200.00</span>
                </p>
                <p className="font-semibold pt-5 text-lg">
                  Net Total <span className="pl-9 text-lg">Rs {netTotal}.00</span>
                </p>
              </div>

              {/* Special Note */}
              <div className="order-2">
                <p className="text-carnation-500">
                  Special Note:
                  <br />
                  <span className="text-slate-500">
                    Orders cannot be canceled after processing is complete
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatesCard;
