// BranchTable.tsx
"use client";
import { useState, useEffect } from "react";
import TableWithPagi from "@/components/Table/TableWithPagi";
import { branchColumns } from "@/components/Table/Columns";
import jsonData from "@/data/data.json";
import CustomButton from "@/components/Button/CustomButton";
import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
import AddNewBranch from "@/components/TestBranch/AddNewBranch";
import { Branch } from "@/components/Table/Columns"; 
import { Separator } from "@radix-ui/react-separator";

const BranchTable = () => {
    const [isNewBranchPopupOpen, setIsNewBranchPopupOpen] = useState(false);
    const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
    const [filteredData, setFilteredData] = useState<Branch[]>([]);

    useEffect(() => {
        setFilteredData(jsonData?.branchData || []);
    }, []);

    const handleDelete = (branch: Branch) => {
        if (branch) {
            setSelectedBranch(branch);
            setIsDeleteConfirmPopupOpen(true);
        }
    };

    return (
        <>
            <div className="flex justify-between mb-2">
                <h3 className="flex items-center font-semibold font-inter">Registered Branches</h3>
                <CustomButton onClick={() => setIsNewBranchPopupOpen(true)} buttonLabel="New Branch" buttonClassName="text-white"/>
            </div>

            <TableWithPagi<Branch>
                columns={branchColumns}
                data={filteredData}
                itemsPerPage={15}
                className="custom-table-class"
                handleDelete={handleDelete}
                getRowId={(row) => row.branchId}
                handleEdit={() => {}}
            />

            <Separator orientation="vertical" className="mt-4 mb-4 border-2 bg-black " />

            <Separator
                className="SeparatorRoot h-5"
                decorative
                orientation="vertical"
                style={{ margin: "0 15px" }}
            />

            {isNewBranchPopupOpen && (
                <AddNewBranch
                    isDialogOpen={isNewBranchPopupOpen}
                    setIsDialogOpen={setIsNewBranchPopupOpen}
                />
            )}

            {isDeleteConfirmPopupOpen && selectedBranch && (
                <DeleteConfirm
                    element={selectedBranch?.branchName}
                    onDelete={() => {
                        setFilteredData((prevData) =>
                            prevData.filter((branch) => branch.branchId !== selectedBranch.branchId)
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

export default BranchTable;
