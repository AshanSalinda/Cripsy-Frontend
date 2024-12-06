'use client';
import React, { useState } from 'react';

type DeliveryPerson = {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    birthday: string;
    gender: string;
};

const AddDeliveryPerson: React.FC = () => {
    const [personDetails, setPersonDetails] = useState<DeliveryPerson>({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        birthday: '',
        gender: '',
    });

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPersonDetails({ ...personDetails, [name]: value });
    };

    // Handle adding person (can be extended to save to a database or state)
    const handleAddPerson = () => {
        console.log('New Delivery Person Added:', personDetails);
        // You can add logic to save to a state or call an API here
        alert('Delivery Person Added!');
    };

    // Clear the form fields
    const handleClearForm = () => {
        setPersonDetails({
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            birthday: '',
            gender: '',
        });
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 p-4 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Add Delivery Person</h2>
            <form className="space-y-4">
                {/* First Name */}
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={personDetails.firstName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={personDetails.lastName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={personDetails.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Contact No */}
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="contact">
                        Contact No.
                    </label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={personDetails.contact}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Birthday */}
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="birthday">
                        Birthday
                    </label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={personDetails.birthday}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="gender">
                        Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={personDetails.gender}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <button
                        type="button"
                        onClick={handleAddPerson}
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                    >
                        Add Person
                    </button>
                    <button
                        type="button"
                        onClick={handleClearForm}
                        className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddDeliveryPerson;
