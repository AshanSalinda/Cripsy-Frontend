"use client";
import {useState, useEffect} from "react";
import TableWithPagi from "@/components/Table/TableWithPagi";
import {Order, orderColumns} from "@/components/Table/Columns";
import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
import {Separator} from "@radix-ui/react-separator";
import {useRouter} from "next/navigation";
import {getAllOrders} from "@/apis/orderApi/OrderApi";

const AdminOrderDetailTable = () => {
    const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [filteredData, setFilteredData] = useState<Order[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchOrderDetails = async () => {
            const fetchedOrders = await getAllOrders();
            setFilteredData(fetchedOrders);
        };
        fetchOrderDetails();
    }, []);

    const handleEdit = (product: Order) => {
        //router.push(`/admin/addOrder?orderId=${product.orderId}`);
    };


    return (
        <>
            <div className="flex justify-between mb-3 mt-6">
                <h5 className="flex items-center text-lg font-semibold font-inter">Order Details</h5>
            </div>

            <TableWithPagi<Order>
                columns={orderColumns}
                data={filteredData}
                itemsPerPage={15}
                className="custom-table-class"
                getRowId={(row) => row.orderId}
                handleEdit={handleEdit} // Pass the handleEdit method here
            />


            <Separator orientation="vertical" className="mt-4 mb-4 border-2 bg-black"/>

            <Separator
                className="SeparatorRoot h-5"
                decorative
                orientation="vertical"
                style={{margin: "0 15px"}}
            />

            {/* Uncomment and implement AddNewOrder as needed */}
            {/* {isNewOrderPopupOpen && (
                <AddNewOrder
                    isDialogOpen={isNewOrderPopupOpen}
                    setIsDialogOpen={setIsNewOrderPopupOpen}
                />
            )} */}

            {isDeleteConfirmPopupOpen && selectedOrder && (
                <DeleteConfirm
                    element={selectedOrder?.orderId.toString()}
                    onDelete={async () => {
                        setFilteredData((prevData) =>
                            prevData.filter((product) => product.orderId !== selectedOrder.orderId)
                        );
                        setIsDeleteConfirmPopupOpen(false);
                    }}
                    onCancel={() => setIsDeleteConfirmPopupOpen(false)}
                    isVisible={isDeleteConfirmPopupOpen}
                />
            )}
        </>
    );
};

export default AdminOrderDetailTable;
