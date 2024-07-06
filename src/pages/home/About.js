import React from 'react'

const About = () => {
    return (
        <div className='flex py-20 px-40'>
            <div className='flex flex-col w-full justify-between'>
                <div className='flex items-center'>
                    <p className='text-[35px] font-bold'>About Us</p>
                    <hr className='border-1 border-black flex-grow mx-4'></hr>
                </div>
                <h2 className='font-serif text-[20px]'>
                    WellDone Inspection Inc. is a full service quality control company and registered with DOB Class Two, providing comprehensive special inspections. Our engineers and inspectors are experienced in the field and are certified by ACI, ICC and AWS. We are comitted to provide effective Civil, Structural and Mechanical Inspections that are in compliance with codes and standard thereby maintaining public safety and client satisfaction. We provide comprehensive reports in a timely fashion that itemize issues and assign responsibility.
                </h2>
                <hr className='border-1 border-black mr-4'></hr>
            </div>
            <div className='size-[250px] border-black border-2 border-solid rounded-xl' >Put Image Here</div>
        </div>
    )
}

export default About