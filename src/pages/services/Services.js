import React from 'react'
import { useInView } from 'react-intersection-observer'
import SlideInWrapper from '../../animation-wrappers/SlideInWrapper'
import services from '../../data/services'
import { Link } from 'react-router-dom'

const Service = (props) => {
    const serviceRefs = []
    const inViews = []

    services.forEach(_ => {
        const { ref: serviceRef, inView: serviceInView } = useInView()
        serviceRefs.push(serviceRef)
        inViews.push(serviceInView)
    })


    return (
        <div className='flex flex-col p-10 overflow-x-hidden' style={{ paddingTop: props.topPadding }}>
            <p className='font-semibold font-aleo text-[60px]'>Services</p>
            <div className=''>
                {
                    services.map((service, index) => {
                        return (
                            <div key={index} ref={serviceRefs[index]}>
                                <SlideInWrapper
                                    className="flex space-x-10 border-t-2 border-gray-400 py-6" isInView={inViews[index]} direction={index % 2 === 0 ? "left" : "right"}
                                >
                                    <ServiceCard service={service} />
                                    <div className='flex flex-col justify-center items-start space-y-6'>
                                        <p>{service.longDescription}</p>
                                        <Link
                                            to={service.link}
                                            className='inline-block border-2 border-black py-[7px] px-[15px] font-roboto hover:bg-[#1b6666] hover:text-[#ecb403] duration-300'
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </SlideInWrapper>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ServiceCard = ({ service }) => {
    return (
        <div className={`group size-[300px] flex-shrink-0 rounded-xl shadow-card overflow-hidden relative duration-[0.8s]
        bg-center bg-no-repeat bg-[length:300px] hover:bg-left hover:bg-[length:600px]`}
            style={{ backgroundImage: `url(${service.background})` }}>
            <p className='absolute text-lg font-bold top-0 w-full text-white p-3 bg-black group-hover:bg-transparent'>{service.title}</p>
        </div>
    )
}

export default Service