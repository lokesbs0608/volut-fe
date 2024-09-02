import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800">Contact Us</h1>
                <div className="mt-6">
                    <p className="text-lg font-semibold text-gray-700">Name:</p>
                    <p className="text-gray-600">Janav B S</p>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-700">Email:</p>
                    <p className="text-gray-600">lokeshbs0608@example.com</p>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-700">Mobile Number:</p>
                    <p className="text-gray-600">+91 95131 45995</p>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-700">Address:</p>
                    <p className="text-gray-600">Bangalore, Karnataka, India</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
