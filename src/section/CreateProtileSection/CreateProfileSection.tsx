"use client";
import React, { useState } from "react";

export const CreateProfileSection = () => {
  const [profile, setProfile] = useState({
    firstName: "Jhone",
    lastName: "Smith",
    email: "jhone.sm@gmail.com",
    contactNo: "+94777123456",
    birthday: "10/05/1990",
    gender: "Male",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
    <h6 className="text-1xl text-gray-400">Account / My Profile</h6>
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
         
      {/* My Profile Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">My Profile</h2>
        <button className="text-blue-500 hover:underline flex items-center">
          <span>Edit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.218 19.496a8.214 8.214 0 01-3.432 2.046l-2.037.622.622-2.037a8.214 8.214 0 012.046-3.432L16.862 3.487z"
            />
          </svg>
        </button>
      </div>

      {/* Centered Profile Picture and Email */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUuYcnZ-xqlGZiDZvuUy_iLx3Nj6LSaZSzQ&s"
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <p className="text-gray-500 font-light mt-2">{profile.email}</p>
      </div>

      {/* Profile Form */}
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-carnation-400">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder={profile.firstName}
            value=""
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-carnation-400">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder={profile.lastName}
            value=""
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-carnation-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={profile.email}
            value=""
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-500"
          />
        </div>
        <div>
          <label htmlFor="contactNo" className="block text-sm font-medium text-carnation-400">
            Contact No
          </label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            placeholder={profile.contactNo}
            value=""
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-500"
          />
        </div>
        <div>
          <label htmlFor="birthday" className="block text-sm font-medium text-carnation-400">
            Birthday
          </label>
          <input
            type="text"
            id="birthday"
            name="birthday"
            placeholder={profile.birthday}
            value=""
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-500"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-carnation-400">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            placeholder={profile.gender}
            value=""
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-500"
          />
        </div>
      </form>

      <button
        className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-carnation-400mt-6 bg-gradient-to-r from-red-500 to-black text-white py-2 px-4 rounded hover:from-red-600 hover:to-black"
        type="button"
      >
        Change the Password?
      </button>
    </div>

    </div>
  );
};