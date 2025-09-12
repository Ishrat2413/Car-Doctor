"use client"

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline, IoSearchSharp } from 'react-icons/io5';

const Navbar = () => {

    const session = useSession()
    // console.log(session)
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navItems.map((item) => (
                                    <Link className="font-semibold hover:text-primary duration-300" href={item.path} key={item.path}>{item.title}</Link>
                                ))
                            }
                        </ul>
                    </div>
                    <Link href={"/"}><Image height={70} width={80} src="/assets/logo.svg" alt="Car Doctor" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="flex items-center space-x-6">
                        {
                            navItems.map((item) => (
                                <Link className="font-semibold hover:text-primary duration-300" href={item.path} key={item.path}>{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='flex space-x-3 items-center text-xl'>
                        <IoCartOutline className='hover:text-primary' />
                        <IoSearchSharp className='hover:text-primary' />
                        <a className="btn btn-outline btn-primary px-6">Appointment</a>
                        {session?.status === "loading" &&
                            <h6>Loading..</h6>}
                        {session?.status === "unauthenticated" &&
                            <Link href="/login" className="btn btn-primary px-6">Login</Link >}
                        {session?.status === "authenticated" &&
                            <button className='btn btn-primary px-6' onClick={() => signOut()}>Logout</button>}

                    </div>
                </div>
            </div>
        </div>
    );
};
const navItems = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Services",
        path: "/services"
    },
    {
        title: "My Bookings",
        path: "/my-booking"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Contact",
        path: "/contact"
    },
]

export default Navbar;