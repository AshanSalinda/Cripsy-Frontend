"use client";
import { useState, useEffect } from "react";
import ProductTableWithPagi from "@/components/Table/ProductTableWithPagi";
import { deliveryPersonColumns } from "@/components/Table/Columns";
import delieveryPersonData from "@/data/delieveryPersonData.json";
import CustomButton from "@/components/Button/CustomButton";
import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
import { DeliveryPerson } from "@/components/Table/Columns";
import AddDeliveryPersonForm from "@/section/AddDeliveryPersonForm/AddDeliveryPersonForm";
import AddDeliveryPerson from "@/components/Admin/AddNewDelieveryPerson";

const DeliveryPersonDetailsTable = () => {
    const [isNewAdminPopupOpen, setIsNewAdminPopupOpen] = useState(false);
    const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
    const [selectedDeliveryPerson, setSelectedDeliveryPerson] = useState<DeliveryPerson | null>(null);
    const [filteredData, setFilteredData] = useState<DeliveryPerson[]>([]);

    useEffect(() => {
        setFilteredData(delieveryPersonData?.delieveryPersonData || []);
    }, []);

    const handleDelete = (admin: DeliveryPerson) => {
        if (admin) {
            setSelectedDeliveryPerson(admin);
            setIsDeleteConfirmPopupOpen(true);
        }
    };

    const handleAddAdmin = (newAdmin: DeliveryPerson) => {
        setFilteredData((prevData) => [...prevData, newAdmin]);
    };

    const handleCancelAddAdmin = () => {
        setIsNewAdminPopupOpen(false);
    };

    // const handleAddNewDeliveryPerson = (newPerson: DeliveryPersonFormData) => {
    //     // Update your delivery person list with the new person
    //     console.log("New Delivery Person:", newPerson);
    // };

    return (
        <>
            <div className="flex justify-between mb-3 mt-6">
                <h5 className="flex items-center font-semibold font-inter ml-[120px]">
                    Admin Details
                </h5>
                <CustomButton
                    onClick={() => setIsNewAdminPopupOpen(true)}
                    buttonLabel="New Admin"
                    buttonClassName="text"
                />
            </div>

            <ProductTableWithPagi<DeliveryPerson>
                columns={deliveryPersonColumns}
                data={filteredData}
                itemsPerPage={15}
                className="custom-table-class"
                handleDelete={handleDelete}
                getRowId={(row) => row.deliveryPersonId}
                handleEdit={() => { }}
            />

            {/* {isNewAdminPopupOpen && (
                <AddDeliveryPersonForm
                // onSubmit={(newAdmin) => {
                //     handleAddAdmin(newAdmin);
                //     setIsNewAdminPopupOpen(false);
                // }}
                // onCancel={handleCancelAddAdmin}
                />
            )} */}

            {/* Order Popup */}
            {isNewAdminPopupOpen && (
                <AddDeliveryPerson
                    isOpen={isNewAdminPopupOpen}
                    onClose={() => setIsNewAdminPopupOpen(false)}
                    //title={`Order ID: ${selectedDeliveryPerson.} - ${selectedDeliveryPerson.productName}`}
                    title={"hjj"}
                    description="Manage the details of the selected order."
                    onSave={() => setIsNewAdminPopupOpen(false)}
                >

                </AddDeliveryPerson>
            )}

            {isDeleteConfirmPopupOpen && selectedDeliveryPerson && (
                <DeleteConfirm
                    element={selectedDeliveryPerson?.deliveryPersonName}
                    onDelete={() => {
                        setFilteredData((prevData) =>
                            prevData.filter((admin) => admin.deliveryPersonId !== selectedDeliveryPerson.deliveryPersonId)
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

export default DeliveryPersonDetailsTable;
