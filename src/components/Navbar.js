import React, { useEffect, useState } from 'react'
import mottoLogo from '../assets/images/logo_with_motto.png'

const Navbar = () => {
    const [navbarStyle, setNavbarStyle] = useState('bg-white text-black');
    const [collapsed, setCollapsed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarStyle('bg-black bg-opacity-40 text-white')
            setCollapsed(true)
        } else {
            setNavbarStyle('bg-white text-black pt-8')
            setCollapsed(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`z-20 fixed w-full py-4 px-20 ${navbarStyle} transition-all duration-500`}>
            <div className='flex justify-between items-center'>
                <div className={`${collapsed ? "scale-100" : "scale-125"} duration-500`}>
                    <img src={mottoLogo} alt='logo' className='w-[180px]' />
                </div>
                <div className={`flex space-x-8 font-semibold text-lg duration-500 ${collapsed ? "text-lg" : "text-xl"}`}>
                    <a href='about'>About</a>
                    <a href='services'>Services</a>
                    <a href='resources'>Resources</a>
                    <a href='work'>Work</a>
                    <a href='contact'>Contact</a>
                </div>
            </div>
            <div className={`flex justify-center font-bold text-xl overflow-hidden transition-all ${collapsed ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'} duration-300`}>
                Welcome to WellDone Inspections!
            </div>
        </nav>
    )
}

export default Navbar