"use client";

import React from "react";

const LoginForm = () => {

    return (
        <div className="container mx-auto w-1/2">
            <div className="container mx-auto background-50">
                <div className="container mx-auto px-4 flex items-center space-x-8 w-80">
                    <div className="container mx-auto">
                        <h1 className='text-4xl'>Login</h1>
                        <p>to shopping</p>
                    </div>
                    <div className="container mx-auto">
                        <img className="h-40" src="/CripsyLogo.png" alt="Login Photo"/>
                    </div>
                </div>
                <h3 className="flex items-center font-semibold font-inter text-4xl">Registered Branches</h3>


                <div className="w-1/2">
                    <img className="h-[300px] w-[300px]" src="/LoginPhoto.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
