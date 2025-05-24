import React from 'react'
import mottoLogo from '../assets/images/logo_with_motto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import services from '../data/services';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    const {
        setActiveTabIndex
    } = props

    return (
        <div className='flex flex-col justify-center bg-[#1b6666]'>
            <div className='flex justify-center h-[315px] py-14'>
                <div className='flex flex-col w-[320px] space-y-2'>
                    <img src={mottoLogo} alt='logo' className='w-[200px]' />
                    <p className='text-[#ecb403] font-serif'>We are MWBE - certified Minority and Women-owned Business Enterprise.</p>
                </div>
                <div className='border-[#3f3f3f] border-l-[1px] border-solid h-full mx-20'></div>
                <div className='flex flex-col w-[250px] items-center space-y-4 text-[#ecb403]'>
                    <p className='text-[30px] font-bold font-oswald'>Services</p>
                    {/* {
                        services.map((service, index) => {
                            return (
                                <Link
                                    key={index}
                                    onClick={() => {
                                        setActiveTabIndex(1)
                                        window.scrollTo(0, 0)
                                    }}
                                    to={"/services"}
                                    className='text-[18px] font-aleo'
                                >
                                    {service.name}
                                </Link>
                            )
                        })
                    } */}
                      <p className='font-merriweather'>TR Inspections</p>
                      <p className='font-merriweather'>Engineering</p>
                      <p className='font-merriweather'>TPP</p>
                      <p className='font-merriweather'>SSP</p>
                      <p className='font-merriweather'>Structural Shop Drawings</p>
                </div>
                <div className='border-[#3f3f3f] border-l-[1px] border-solid h-full mx-20'></div>
                <div className='flex flex-col items-start space-y-4 text-[#ecb403]'>
                    <p className='text-[30px] font-bold font-oswald'>Contact</p>
                    <div className='flex space-x-4 items-center text-[18px]'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p className='font-merriweather'>10 Hallets Point, Astoria, NY, 11102</p>
                    </div>
                    <div className='flex space-x-4 items-center text-[18px]'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className='text-[18px] font-merriweather'>welldoneinspect@gmail.com</p>
                    </div>
                    <div className='flex space-x-4 items-center text-[18px]'>
                        <FontAwesomeIcon icon={faPhone} />
                        <p className='text-[18px] font-merriweather'>(917) 213-1886</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center h-[50px] bg-[#3f3f3f] space-x-4'>
                <p className='text-white font-semibold'>@ 2025 WellDone Inspection, Inc. All rights reserved.</p>
                <p className='font-medium text-blue-400'>Terms of Service</p>
                <p className='font-medium text-blue-400'> Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer