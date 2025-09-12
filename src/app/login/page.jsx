"use client"

import SocialSignIn from '../../components/shared/SocialSignIn'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'


export default function page() {

    const router = useRouter()
    const searchParams = useSearchParams()
    const path = searchParams.get("redirect")

    const handleLogin = async (event) => {
        // console.log("Login")
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const resp = await signIn("credentials", {
            email, password, redirect: true, callbackUrl: path ? path : "/"
        })
        // console.log(resp)
        if (resp.status === 200) {
            router.push("/")
        }
    }

    return (
        <div className='flex justify-center p-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center'>
                <div className='hidden md:block mr-0 md:mr-20'>
                    <Image
                        src="/assets/images/login/login.svg"
                        width={400}
                        height={340}
                        alt="Login"
                    />
                </div>
                <div className='border-2 border-gray-200 rounded-2xl p-10 w-full max-w-sm shrink-0 shadow-2xl'>
                    <h2 className='text-center text-primary font-bold text-3xl'>Sign In</h2>
                    <form onSubmit={handleLogin} action="">
                        <div className='flex flex-col justify-center'>
                            <label htmlFor="email" className=''>Email</label>
                            <input type="text" name='email' placeholder="Your Email" className="input my-3" />
                            <label htmlFor="password" className=''>Password</label>
                            <input type="password" name='password' placeholder="Your Password" className="input my-3" />
                        </div>
                        <button type='submit' className='btn btn-primary w-full'>Log In</button>
                    </form>
                    <div className='flex flex-col items-center py-2.5'>
                        <h1>Or sign in with</h1>
                        <SocialSignIn />
                        <h1>Create an Account? <Link className='text-primary' href="/signup">Sign Up</Link></h1>
                    </div>
                </div>

            </div>
        </div>
    )
}
