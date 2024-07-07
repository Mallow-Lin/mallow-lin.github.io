import React from 'react'

const services = [
    {
        title: "TR1 Statement of Responsibility",
        description: "The main technical report to be filled with the NYC DOB. Comprehensive oversight and responsibility for compliance with all applicable codes and regulations.",
        background: "https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/478de7a8db3a44cfa90b124aa8b8173a~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1735558754&x-signature=zbZn70c6zaZEontOzQ2Vm4Xczyk%3D"
    },
    {
        title: "TR5 Pile Driving",
        description: "The technical report for the Pile Driving and Deep Foundation Elements. Expertise in the installation and testing of deep foundation elements for various construction projects.",
        background: "https://images.pexels.com/photos/17249492/pexels-photo-17249492/free-photo-of-close-up-of-a-music-sheet-and-a-violin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "TR8 Energy Code Compliance",
        description: "The technical report for the Energy Code Compliance Inspections. We ensure your project meets all energy efficiency requirements and standards.",
        background: "https://i.pinimg.com/564x/bb/26/c7/bb26c78aa5a812e8019cba5b606ef31f.jpg",
    },
]

const Service = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20 px-40 space-y-10 bg-gray-100'>
            <div className='text-[50px] font-semibold'>Services</div>
            <div className='flex w-full justify-center items-center space-x-36'>
                {
                    services.map((service, index) => {
                        // console.log(service)
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
                group-hover:text-white duration-500'>{service.description}</p>
                <button className='py-[10px] px-[20px] font-roboto text-white border-white border-[1px] text-[13px] opacity-0 duration-300
                group-hover:opacity-100 hover:bg-black'>LEARN MORE</button>
            </div>
        </div>
    )
}

export default Service