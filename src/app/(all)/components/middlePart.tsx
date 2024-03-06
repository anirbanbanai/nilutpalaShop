"use client"
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PiMessengerLogoFill } from 'react-icons/pi';

const MiddlePart = () => {
    return (
        <div className='bg-gray-300 w-28 flex flex-col  items-center fixed z-30 top-1/3 right-0 p-3 rounded-3xl ' >
            <h5><PiMessengerLogoFill className='text-3xl mb-3 text-center'/></h5>
            <h5><FaWhatsapp className='text-3xl'/></h5>
        </div>
    );
};

export default MiddlePart;