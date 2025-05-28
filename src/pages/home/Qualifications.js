import React from 'react'

const Qualifications = () => {

    return (
        <div className='flex space-x-8 px-10 py-5 sm:py-10 md:py-0 lg:px-40 lg:py-0'>
            <div className='flex flex-col justify-between flex-grow'>
                <div className='flex items-center'>
                    <p className='md:text-[35px] font-bold text-[20px]'>Qualifications</p>
                    <hr className='border-1 border-black flex-grow mx-4'></hr>
                </div>
                <h2 className='font-serif gap-4 mt-6 mb-6 md:text-[20px] mb-6 text-[15px]'>
                    <p>NY / NJ State Licensed P.E. with Structural and Geotechnical Background</p>
                    <p>AWS Certified Welding Inspector</p>
                    <p>ICC Master of Special Inspection</p>
                    <p>ICC Certified Concrete, Mansory, Welding, Bolting, Mechanical</p>
                    <p>ACI Concrete Certified Inspector / Technicia</p>
                    <p>LEED AP</p>
                    <p>PMI Project Management Professionals</p>
                    <p></p>
                </h2>
                <hr className='border-1 border-black mr-4'></hr>
            </div>

        </div>
    )
}

export default Qualifications
