
"use client";

import { useState, useEffect } from "react";
import TableWithPagi from "@/components/Table/TableWithPagi";
import { adminColumns } from "@/components/Table/Columns"; 
import jsonData from "@/data/adminData.json";
import CustomButton from "@/components/Button/CustomButton";
import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
import AddNewAdmin from "@/components/Admin/AddNewAdmin"; 
import { Admin } from "@/components/Table/Columns"; 
import { Separator } from "@radix-ui/react-separator";

const AdminTable = () => {
    const [isNewAdminPopupOpen, setIsNewAdminPopupOpen] = useState(false);
    const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
    const [filteredData, setFilteredData] = useState<Admin[]>([]);

    useEffect(() => {
        setFilteredData(jsonData?.adminData as Admin[] || []);
    }, []);

    const handleDelete = (admin: Admin) => {
        if (admin) {
            setSelectedAdmin(admin);
            setIsDeleteConfirmPopupOpen(true);
        }
    };

    return (
        <>
            <div className="flex justify-between mb-2">
                <h5 className="flex items-center font-semibold font-inter"> Admin Details</h5>
                <CustomButton onClick={() => setIsNewAdminPopupOpen(true)} buttonLabel="New Admin" buttonClassName="text-white"/>
            </div>

            <TableWithPagi<Admin>
                columns={adminColumns} // Define these columns for the admin table
                data={filteredData}
                itemsPerPage={15}
                className="custom-table-class"
                handleDelete={handleDelete}
                getRowId={(row) => row.adminId}
                handleEdit={() => {}}
            />

            <Separator orientation="vertical" className="mt-4 mb-4 border-2 bg-black " />

            {isNewAdminPopupOpen && (
                <AddNewAdmin
                    isDialogOpen={isNewAdminPopupOpen}
                    setIsDialogOpen={setIsNewAdminPopupOpen}
                />
            )}

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

export default AdminTable;
