import React, { useState, useEffect } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import person from '../../assets/person.png';
import { Link } from 'react-router-dom';
import OtherNav from './OtherNav';

const Header = () => {
    let Links = [
        { name: "Destinations", link: "/" },
        { name: "Travel Styles", link: "/" },
        { name: "Corporate", link: "/" },
        { name: "24X7 helpline", link: "/" },
        { name: "Register business", link: "/" }
    ];
    let [open, setOpen] = useState(false);
    let [showOtherNav, setShowOtherNav] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowOtherNav(false);
            } else {
                setShowOtherNav(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='shadow-md w-full fixed top-0 left-0 z-50'>
                <div className='md:flex items-center justify-between bg-black md:px-10 px-7 py-7 z-50 overflow-x-hidden '>
                    {/* logo section */}
                    <div className='font-bold text-2xl cursor-pointer flex items-center gap-4'>
                        <BookOpenIcon className='w-7 h-7 text-blue-600' />
                        <Link to='/'><span className='text-gray-200'>TravelBeem</span></Link>
                    </div>
                    {/* Menu icon */}
                    <div onClick={() => setOpen(!open)} className='absolute right-16 top-8 cursor-pointer md:hidden w-7 h-7 text-gray-200'>
                        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                    </div>
                    {/* link items */}
                    <ul className={`md:flex md:items-center p-11 md:p-0 md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pr-6 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                        {Links.map((link, index) => (
                            <li key={index} className='md:ml-8 md:my-0 font-bold'>
                                <a href={link.link} className='text-gray-200 hover:text-gray-400 px-4 text-base transition duration-500'>{link.name}</a>
                            </li>
                        ))}
                        <img src={person} alt='Person Logo' className='w-6 h-6 ml-4' />
                    </ul>
                </div>
            </div>

            {showOtherNav ? (
                <div className="transition-opacity duration-500 ease-linear opacity-100 OtherNav  ">
                    <OtherNav />
                </div>
            ) : (
                <div className="transition-opacity duration-500 ease-linear opacity-0 OtherNav ">
                    <OtherNav />
                </div>
            )}
        </>
    );
};

export default Header;
