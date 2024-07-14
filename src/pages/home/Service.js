import React from 'react'
import services from '../../data/services'

const Service = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20 px-40 space-y-10 bg-gray-100'>
            <div className='text-[50px] font-semibold'>Services</div>
            <div className='flex w-full justify-center items-center space-x-36'>
                {
                    services.map((service, index) => {
                        return <ServiceCard key={index} service={service} />
                    })
                }
            </div>
        </div>

    )
}

const ServiceCard = ({ service }) => {
    return (
        <div className={`group h-[400px] w-[300px] bg-[#808080] rounded-xl shadow-card overflow-hidden flex relative justify-center items-center duration-[0.8s]
        bg-center bg-no-repeat bg-[length:300px] hover:bg-left hover:bg-[length:600px]`}
            style={{ backgroundImage: `url(${service.background})` }}>
            <p className='absolute text-xl font-bold top-0 w-full text-white p-3 bg-black group-hover:bg-transparent'>{service.title}</p>
            <div className='h-[calc(100%-10px)] w-[calc(100%-10px)] rounded-xl duration-500  border-transparent justify-center items-center flex flex-col space-y-6
            group-hover:border-[1px] group-hover:border-white group-hover:border-solid'>
                <p className='text-left text-[15px] px-[15px] text-transparent
                group-hover:text-white duration-500'>{service.shortDescription}</p>
                <button className='py-[10px] px-[20px] font-roboto text-white border-white border-[1px] text-[13px] opacity-0 
                group-hover:opacity-100 hover:bg-[#1b6666] hover:text-[#ecb403] duration-300'>LEARN MORE</button>
            </div>
        </div>
    )
}

export default Service