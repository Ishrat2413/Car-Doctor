"use client"

import SocialSignIn from '../../components/shared/SocialSignIn'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {

    const handleSignup = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        // console.log(newUser);
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup/api`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })
        // console.log(resp);
        if (resp.status === 200) {
            event.target.reset()
        }
    }

    return (
        <div>
            <div className='flex justify-center p-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center'>
                    <div className='hidden md:block mr-0 md:mr-20'>
                        <Image src="/assets/images/login/login.svg" height="340" width="400" alt='Login' />
                    </div>
                    <div className='border-2 border-gray-200 rounded-2xl p-10 w-full max-w-sm shrink-0 shadow-2xl'>
                        <h2 className='text-center text-primary font-bold text-3xl'>Sign Up</h2>
                        <form onSubmit={handleSignup} action="">
                            <div className='flex flex-col justify-center'>
                                <label htmlFor="name" className=''>Name</label>
                                <input type="text" name='name' placeholder="Your Name" className="input my-3" />
                                <label htmlFor="email" className=''>Email</label>
                                <input type="text" name='email' placeholder="Your Email" className="input my-3" />
                                <label htmlFor="password" className=''>Confirm Password</label>
                                <input type="password" name='password' placeholder="Your Password" className="input my-3" />
                            </div>
                            <button type='submit' className='btn btn-primary w-full'>Sign Up</button>
                        </form>
                        <div className='flex flex-col items-center py-2.5'>
                            <h1>Or sign in with</h1>
                            <SocialSignIn />
                            <h1>Already have an Account? <Link className='text-primary' href="/login">Sign In</Link></h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
