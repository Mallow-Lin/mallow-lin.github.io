import React from 'react'
import mottoLogo from '../../assets/images/logo_with_motto.png'
import founderPicture from '../../assets/images/Qiufan-Jiang.png'

const About = () => {
    return (
        <div className='flex space-x-8 py-20 px-40'>
            <div className='flex flex-col justify-between flex-grow'>
                <div className='flex items-center'>
                    <p className='text-[35px] font-bold'>About Us</p>
                    <hr className='border-1 border-black flex-grow mx-4'></hr>
                </div>
                <h2 className='font-serif text-[20px]'>
                    WellDone Inspection Inc. is a full service quality control company and registered with DOB Class Two, providing comprehensive special inspections. Our engineers and inspectors are experienced in the field and are certified by ACI, ICC and AWS. We are comitted to provide effective Civil, Structural and Mechanical Inspections that are in compliance with codes and standard thereby maintaining public safety and client satisfaction. We provide comprehensive reports in a timely fashion that itemize issues and assign responsibility.
                </h2>
                <hr className='border-1 border-black mr-4'></hr>
            </div>
            <div className='group relative flex-none size-[300px]'>
                <img src={founderPicture} alt='logo' className='absolute w-full h-full object-fill border-2 rounded-3xl bg-white ml-[-5px] mt-[-5px] group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] duration-500 z-10' />
                <div className='bg-white border-4 w-full h-full rounded-3xl flex items-end justify-center p-1
                ml-[5px] mt-[5px] group-hover:translate-x-[10px] group-hover:translate-y-[20px] duration-500'>
                    <p className='font-bold'>James Jiang, P.E., Founder & CEO</p>
                </div>
            </div>
        </div>
    )
}

export default About