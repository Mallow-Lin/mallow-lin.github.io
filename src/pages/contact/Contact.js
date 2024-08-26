import React, { useState } from 'react'
import emailjs from 'emailjs-com';


const Contact = (props) => {

    return (
        <div className='pb-10 min-h-screen items-center flex flex-col font-aleo' style={{ paddingTop: props.topPadding }}>
            <h1 className={`text-[60px] font-semibold leading-[4rem]`}>Contact Us</h1>
            <p className={`text-xl text-gray-600`}>Get support anytime via chat, email, phone, or social media</p>
            {/* Email form */}
            <div className='flex justify-center py-6'>
                <ContactForm />
                <div className='my-2 h-auto border-[#beb5b5] border-l-2 mx-10'></div>
                <div className='flex flex-col text-[#6b6a6a] max-w-[600px]'>
                    <h1 className='text-black font-bold text-[22px] mb-3'>We are easy to find—let us know your needs</h1>
                    <div className='mb-4'>
                        <h3 className='text-black text-[18px] font-semibold mb-1'>Headquarters</h3>
                        <p>10 Hallets Point</p>
                        <p>Astoria, NY, 11102</p>
                    </div>
                    <div className='mb-6'>
                        <h3 className='text-black text-[18px] font-semibold mb-1'>Contacts</h3>
                        <p>Email: welldoneinspection@gmail.com</p>
                        <p>Phone: (917) 214-1886</p>
                    </div>
                    <p>If you're a current or past client and have feedback for us, we want to hear from you. Please leave us a message or review here and let us know how we are doing!</p>
                </div>
            </div>
        </div>
    )
}

const ContactForm = ({ }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const updateData = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_matdhdd', 'template_bm8yifp', e.target, 'nC56A9vCQTFPqtabV')
            .then((res) => {
                console.log(res.text)
            }, (error) => {
                console.log(error.text)
            })

        console.log(`Form submitted`)
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        })
        setErrors({})
    }

    return (
        <form className='flex flex-col max-w-[400px] w-full' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <input
                    placeholder='Name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={updateData}
                    required
                    className='bg-gray-100 p-3 my-3 rounded-md border border-gray-300'
                />
            </div>
            <div className='flex flex-col'>
                <input
                    placeholder='Email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={updateData}
                    required
                    className='bg-gray-100 p-3 my-3 rounded-md border border-gray-300'
                />
            </div>
            <div className='flex flex-col'>
                <input
                    placeholder='Phone'
                    name='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={updateData}
                    required
                    className='bg-gray-100 p-3 my-3 rounded-md border border-gray-300'
                />
            </div>
            <div className='flex flex-col'>
                <textarea
                    rows='3'
                    placeholder='Message'
                    name='message'
                    value={formData.message}
                    onChange={updateData}
                    required
                    className='bg-gray-100 p-3 my-3 rounded-md border border-gray-300'
                />
            </div>
            <button
                type='submit'
                className='self-start border-2 border-black py-[7px] px-20 font-roboto bg-[#1b6666] text-[#ecb403] rounded-md text-[30px] font-semibold' >Submit</button>
        </form>
    )
}

export default Contact