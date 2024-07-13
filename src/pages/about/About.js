import React from 'react'
import Logo from '../../assets/images/logo_no_motto.png'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const About = (props) => {
    const { ref: blockRef, inView: blockInView } = useInView({ triggerOnce: true })

    return (
        <div className='justify-center flex pb-10' style={{ paddingTop: props.topPadding + 50 }}>
            <div ref={blockRef}
                className={`flex flex-col items-center w-screen`} >
                <p className={`text-[60px] font-semibold font-aleo ${blockInView ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} duration-1000`}>ABOUT US</p>
                <div className='flex flex-col w-2/3 rounded-3xl py-10 items-center bg-gray-200'>
                    <div className='flex space-x-4 items-center px-4'>
                        <div className={`flex flex-col relative items-center group w-1/2 ${blockInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} duration-1000`}
                        >
                            <img src={Logo} className='object-contain group-hover:scale-75 group-hover:-mt-10 duration-500'></img>
                            <p className='opacity-0 group-hover:opacity-100 group-hover:-mt-10 duration-500'>Text placeholder describing image</p>
                        </div>
                        <div className={`flex flex-col p-4 space-y-2 text-xl w-full font-aleo  ${blockInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} duration-1000`}
                        >
                            <p>WellDone Inspection Inc. is a full service quality control company & Special Inspection Agency. We are accredited by NYCDOB and registered with DOB Class Two with our team of highly skilled engineers and inspectors, certified by ACI, ICC, and AWS.
                            </p>
                            <p>Located at the center of New York City, we stand at the forefront of ensuring building safety and excellence across the vibrant landscape of New York City. We specialize in comprehensive Civil, Structural, and Mechanical Inspections, all conducted with the commitment to code compliance and industry standards.</p>
                        </div>
                    </div>
                    <button className={`flex justify-center items-center group space-x-4 w-1/2 hover:w-3/5 hover:text-[#ecb403] border-[3px] px-6 py-3 mt-6 font-semibold rounded-xl border-white hover:border-[#ecb403] hover:bg-[#1b6666] ${blockInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} duration-500`}>
                        <p className='-mr-6 group-hover:mr-0 duration-500'>We are easy to find. Let us know your needs.</p>
                        <FontAwesomeIcon icon={faComments} className='opacity-0 group-hover:flex group-hover:opacity-100 duration-500' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About