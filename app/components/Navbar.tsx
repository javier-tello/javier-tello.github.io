"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

const NavLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);

    return(
        <nav className="fixed top-0 left-0 right-0 z-10  bg-[#3A506B] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-4">
                <Link href="/" className="text-xl md:text-4xl text-[#F7F7F7] font-semibold">MY PAGE</Link>
                <div className="mobile-menu block md:hidden">
                    {
                        navbarOpen ? (
                            <button onClick={() => setNavBarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white:">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavBarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white:">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
                        {
                            NavLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
        </nav>
    )
}

export default Navbar;