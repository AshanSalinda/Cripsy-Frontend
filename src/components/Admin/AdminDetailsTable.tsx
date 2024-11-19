"use client";
import { useState, useEffect } from "react";
import ProductTableWithPagi from "@/components/Table/ProductTableWithPagi"; 
import { adminColumns } from "@/components/Table/Columns"; 
import adminData from "@/data/adminData.json"; 
import CustomButton from "@/components/Button/CustomButton";
import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
import { Admin } from "@/components/Table/Columns";

const AdminDetailsTable = () => {
    const [isNewAdminPopupOpen, setIsNewAdminPopupOpen] = useState(false);
    const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
    const [filteredData, setFilteredData] = useState<Admin[]>([]);

    useEffect(() => {
        setFilteredData(adminData?.adminData || []); 
    }, []);

    const handleDelete = (admin: Admin) => {
        if (admin) {
            setSelectedAdmin(admin);
            setIsDeleteConfirmPopupOpen(true);
        }
    };

    return (
        <>
            <div className="flex justify-between mb-3 mt-6">
                <h5 className="flex items-center font-semibold font-inter ml-[120px]">Admin Details</h5> 
                <CustomButton onClick={() => setIsNewAdminPopupOpen(true)} buttonLabel="New Admin" buttonClassName="text" />
            </div>

            <ProductTableWithPagi<Admin>
                columns={adminColumns}
                data={filteredData}
                itemsPerPage={15}
                className="custom-table-class"
                handleDelete={handleDelete}
                getRowId={(row) => row.adminId} // Use adminId as the unique identifier
                handleEdit={() => { }}
            />

            {/* If you have a component to add new admins, include it here */}
            {/* {isNewAdminPopupOpen && (
                <AddNewAdmin
                    isDialogOpen={isNewAdminPopupOpen}
                    setIsDialogOpen={setIsNewAdminPopupOpen}
                />
            )} */}

            {isDeleteConfirmPopupOpen && selectedAdmin && (
                <DeleteConfirm
                    element={selectedAdmin?.adminName} 
                    onDelete={() => {
                        setFilteredData((prevData) =>
                            prevData.filter((admin) => admin.adminId !== selectedAdmin.adminId)
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

export default AdminDetailsTable;
