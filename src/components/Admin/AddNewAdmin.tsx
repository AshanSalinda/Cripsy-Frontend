"use client";
import { useState } from "react";

interface AddNewAdminProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (open: boolean) => void;
    onAddAdmin: (admin: { adminId: string; adminName: string; email: string; contactNo: string }) => void;
}

const AddNewAdmin: React.FC<AddNewAdminProps> = ({ isDialogOpen, setIsDialogOpen, onAddAdmin }) => {
    const [adminDetails, setAdminDetails] = useState({
        adminId: "",
        adminName: "",
        email: "",
        contactNo: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAdminDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onAddAdmin(adminDetails);
        setIsDialogOpen(false);
        setAdminDetails({ adminId: "", adminName: "", email: "", contactNo: "" });
    };

    return (
        isDialogOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-md w-96">
                    <h3 className="text-lg font-bold mb-4">Add New Admin</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            name="adminId"
                            placeholder="Admin ID"
                            value={adminDetails.adminId}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="adminName"
                            placeholder="Admin Name"
                            value={adminDetails.adminName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={adminDetails.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="contactNo"
                            placeholder="Contact No"
                            value={adminDetails.contactNo}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                className="bg-gray-300 px-4 py-2 rounded"
                                onClick={() => setIsDialogOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={handleSubmit}
                            >
                                Add Admin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

export default AddNewAdmin;
