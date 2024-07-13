import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import mottoLogo from '../assets/images/logo_with_motto.png'

const tabs = [
    "About", "Services", "Resources", "Work", "Contact"
]

const Navbar = (props) => {
    const navbarRef = useRef(null)

    const tabsRef = useRef([])
    const [activeTabIndex, setActiveTabIndex] = useState(null)
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0)
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0)

    const setTabPosition = (activeTabIdx) => {
        const currentTab = tabsRef.current[activeTabIdx]
        setTabUnderlineWidth(currentTab?.clientWidth ?? 0)
        setTabUnderlineLeft(currentTab?.offsetLeft ?? 0)
    }

    useEffect(() => {
        setTabPosition(activeTabIndex)
    }, [activeTabIndex])

    const [navbarStyle, setNavbarStyle] = useState('bg-white text-black pt-8');
    const [collapsed, setCollapsed] = useState(false);

    const navigator = useNavigate()

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarStyle('bg-black bg-opacity-40 text-white py-4')
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

    useEffect(() => {
        if (navbarRef.current) {
            props.setNavbarHeight(navbarRef.current.offsetHeight)
        }
    }, [navbarRef.current])

    const handleLogoClick = () => {
        setActiveTabIndex(null)
        navigator('/')
        scrollTo(0, 0)
    }

    return (
        <nav ref={navbarRef} className={`z-20 fixed w-full py-4 px-20 border-b-2 border-b-gray-400 ${navbarStyle} transition-all duration-500`}>
            <div className='flex justify-between items-center'>
                <div
                    className={`${collapsed ? "scale-[0.8]" : "scale-100"} duration-500 cursor-pointer`}
                    onClick={handleLogoClick}
                >
                    <img src={mottoLogo} alt='logo' className='w-[200px]' />
                </div>
                <div className={`flex w-[550px] items-center h-12  font-semibold duration-500 ${collapsed ? "text-lg" : "text-xl"} relative`}>
                    <span
                        className='absolute top-0 bottom-0 -z-10 flex overflow-hidden dureation-300 rounded-xl bg-[#1b6666] w-full duration-300'
                        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }} />
                    {
                        tabs.map((tab, index) => {
                            const isActive = activeTabIndex === index
                            return (
                                <Link
                                    key={index}
                                    ref={(elem) => tabsRef.current[index] = elem}
                                    to={`/${tab}`}
                                    onClick={_ => {
                                        setActiveTabIndex(index)
                                        window.scrollTo(0, 0)
                                    }}
                                    className={`px-4 duration-100 ${isActive ? "text-[#ecb403]" : "hover:text-[$ecb403]"}`}
                                >
                                    {tab}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            {
                activeTabIndex === null && <div className={`flex justify-center font-bold text-xl overflow-hidden transition-all ${collapsed ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'} duration-300`}>
                    Welcome to WellDone Inspections!
                </div>
            }
        </nav>
    )
}

export default Navbar