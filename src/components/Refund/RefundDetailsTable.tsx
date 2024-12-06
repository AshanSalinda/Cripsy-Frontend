"use client";
import { useState, useEffect } from "react";
import {orderColumns, Refund} from '@/components/Table/Columns';
import TableWithPagi from '../Table/TableWithPagi';
import {getOrderByStatus} from "@/apis/orderApi/orderApi";
import {Property} from "csstype";
import Order = Property.Order;

export const RefundDetailsTable = () => {
    const [filteredData, setFilteredData] = useState<Order[]>([]);

    useEffect(() => {
        const getData=async () => {
            setFilteredData(await getOrderByStatus("Refund"));
        }
        getData()

    }, []);

    const handleEdit = (row: Refund) => {
        console.log(row);
    }

  return (
    <>
        <div className="flex justify-between mb-3 mt-6">
            <h5 className="flex items-center text-lg font-semibold font-inter">Refund Details</h5>
        </div>
        <div className="w-full">

            <TableWithPagi<Ordeer>
                columns={orderColumns}
                data={filteredData}
                itemsPerPage={15}
                className='custom-table-class '
        getRowId={(row) => row.orderId}
        handleEdit={handleEdit}
        
    
        />

</div>
    
    </>
  )
}
