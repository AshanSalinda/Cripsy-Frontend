"use client";
import React from 'react';
import { Button } from '../ui/button';
import { IoAlertCircleOutline } from "react-icons/io5";

interface DeleteConfirmProps {
    element: string;
    onDelete: () => void;
    onCancel: () => void;
    isVisible: boolean;
}

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({ element, onDelete, onCancel, isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-6 text-center bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                   
                        <IoAlertCircleOutline color="red" size="4em" opacity={0.6} aria-label="Delete icon" />
                    
                </div>

                <h4 className="mb-4 font-semibold text-md">Are you sure you want to delete {element}?</h4>

                <div className="flex justify-center space-x-4">
                    <Button onClick={onCancel} className="w-1/3 px-4 py-2 text-black bg-gray-100 rounded-lg hover:bg-gray-200">
                        Cancel
                    </Button>
                    <Button onClick={onDelete} className="w-1/3 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700">
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirm;
