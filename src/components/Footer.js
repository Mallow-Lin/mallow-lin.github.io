import React from 'react'
import mottoLogo from '../../assets/images/logo_with_motto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center bg-[#1b6666] '>
            <div className='flex justify-center h-[315px] py-14'>
                <div className='flex flex-col w-[320px] space-y-2'>
                    <img src={mottoLogo} alt='logo' className='w-[200px]' />
                    <p className='text-[#ecb403] font-serif'>WellDone Inspection Inc is a DOB Class Two special inspections agency committed to providing comprehensive engineering reports.</p>
                </div>
                <div className='border-[#3f3f3f] border-l-[1px] border-solid h-full mx-20'></div>
                <div className='flex flex-col w-[250px] items-center space-y-4 text-[#ecb403]'>
                    <p className='text-[30px] font-bold font-oswald'>Services</p>
                    <p className='text-[18px] font-aleo'>Statement of Responsibility</p>
                    <p className='text-[18px] font-aleo'>Pile Driving</p>
                    <p className='text-[18px] font-aleo'>Energy Code Compliance</p>
                </div>
                <div className='border-[#3f3f3f] border-l-[1px] border-solid h-full mx-20'></div>
                <div className='flex flex-col items-start space-y-4 text-[#ecb403]'>
                    <p className='text-[30px] font-bold font-oswald'>Contact</p>
                    <div className='flex space-x-4 items-center text-[18px]'>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        <p className='font-merriweather'>10 Hallets Point, Astoria, NY, 11102</p>
                    </div>
                    <div className='flex space-x-4 items-center text-[18px]'>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p className='text-[18px] font-merriweather'>welldoneinspection@gmail.com</p>
                    </div>
                    <div className='flex space-x-4 items-center text-[18px]'>
                        <FontAwesomeIcon icon={faPhone}/>
                        <p className='text-[18px] font-merriweather'>(917) 214-1886</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center h-[50px] bg-[#3f3f3f] space-x-4'>
                <p className='text-white font-semibold'>@ 2024 WellDone Inspection, Inc. All rights reserved.</p>
                <p className='font-medium text-blue-400'>Terms of Service</p>
                <p className='font-medium text-blue-400'> Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer