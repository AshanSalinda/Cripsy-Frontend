'use client';
import React, { useState } from "react";

type DeliveryPerson = {
    personId: string;
    name: string;
    email: string;
    contact: string;
};

const DeliveryPersonTable: React.FC = () => {
    const [deliveryPersons, setDeliveryPersons] = useState<DeliveryPerson[]>([
        {
            personId: "DP001",
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "+94712345678",
        },
        {
            personId: "DP002",
            name: "Jane Smith",
            email: "jane.smith@example.com",
            contact: "+94798765432",
        },
    ]);

    const addDeliveryPerson = () => {
        const newPerson: DeliveryPerson = {
            personId: `DP${String(deliveryPersons.length + 1).padStart(3, "0")}`,
            name: `New Person ${deliveryPersons.length + 1}`,
            email: `new.person${deliveryPersons.length + 1}@example.com`,
            contact: `+9471234${Math.floor(1000 + Math.random() * 9000)}`,
        };
        setDeliveryPersons([...deliveryPersons, newPerson]);
    };

    const deleteDeliveryPerson = (personId: string) => {
        const updatedList = deliveryPersons.filter(
            (person) => person.personId !== personId
        );
        setDeliveryPersons(updatedList);
    };

    return (
        <div className="max-w-4xl mx-auto mt-8">
            {/* Add Delivery Person Button */}
            <div className="mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={addDeliveryPerson}
                >
                    Add Delivery Person
                </button>
            </div>

            {/* Delivery Person Table */}
            <table className="table-auto border-collapse border border-gray-400 w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Person ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Contact</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveryPersons.map((person) => (
                        <tr key={person.personId} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{person.personId}</td>
                            <td className="border border-gray-300 px-4 py-2">{person.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{person.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{person.contact}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => deleteDeliveryPerson(person.personId)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeliveryPersonTable;
