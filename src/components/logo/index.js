// Logo.js
import React from 'react';
import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/' className="flex items-center text-2xl font-bold text-gray-800">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M10.4 14.4c-.4.4-.8.4-1.2.4-.4 0-.8-.2-1.2-.4l-2.4-2.4c-.4-.4-.4-1.2 0-1.6.4-.4 1.2-.4 1.6 0l2.4 2.4c.4.4.4 1.2 0 1.6zM15.6 9.6l-2.4 2.4c-.4.4-1.2.4-1.6 0-.4-.4-.4-1.2 0-1.6l2.4-2.4c.4-.4 1.2-.4 1.6 0 .4.4.4 1.2 0 1.6z" />
                </svg>
            </div>
            <span>VolunteerLink</span>
        </Link>
    );
};

export default Logo;
