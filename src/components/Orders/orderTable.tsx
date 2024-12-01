"use client";
import {useEffect,useState} from 'react';
import CustomButton from '../Button/CustomButton';
import { orderColumns, Order } from '../Table/Columns';
import TableWithPagi from '../Table/TableWithPagi';
import jsonData from '../../data/data.json'; // Import the JSON file
import { FaPlus } from "react-icons/fa";


const OrderTable = () => {

    const [filteredData, setFilteredData] = useState<Order[]>([]);

    const handleEdit = (order: Order) => {
        console.log("Edit order:", order);
    };

    const setIsNewBranchPopupOpen = (isOpen: boolean) => {
        console.log("Set new branch popup open:", isOpen);
    };

    useEffect(() => {
        setFilteredData(jsonData?.order || []);
    }, []);

    return (
        <div className='shadow-xl rounded-lg m-8 px-4 py-9'>
            <div className="flex   justify-between mb-2">
                <h4 className="flex  text-base items-center font-semibold font-inter">Your Orders</h4>
                <CustomButton
                    onClick={() => setIsNewBranchPopupOpen(true)}
                    icon={<FaPlus/>}
                    buttonClassName="flex justify-center items-center text-black border border-green-500 rounded-full w-14 h-14 m-0 b-0 text-lg "
                    />
            </div>

            <TableWithPagi<Order>
                columns={orderColumns}
                data={filteredData}
                itemsPerPage={15}
                className="custom-table-class"
                getRowId={(row) => row.orderId}
                handleEdit={handleEdit}
            />
        </div>
    );
};

export default OrderTable;
