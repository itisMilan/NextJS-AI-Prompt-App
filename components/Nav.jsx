"use client";


import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {useState,useEffect} from 'react';
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
import Provider from './Provider';

const Nav = () => {
    const isUserLoggedIn=true;

    const [providers,setProviders]=useState(null);
    useEffect(()=>{
        const setProviders=async()=>{
            const response=await getProviders();
        setProviders(response);
    
        }
        setProviders();

    },[])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image 
            width={30} 
            alt="promptland Logo" 
            height={30}
            className="object-contain" 
            src="/assets/images/logo.svg"/>
        <p className='logo_text'>PromptLand</p>
        </Link>
        {/* Desktop Navigaion */}

        <div className='sm:flex hidden'>
          {isUserLoggedIn?(
            <div className='flex gap-3 md:gap-5'>
                <Link href='/create-prompt'
                className='black_btn'>
                    Create Post
                </Link>
                <button type='button' onClick={signOut} className='outline_btn'>
                    Sign Out
                </button>
                <Link href="/profile">
                    <Image src="/assets/images/profile.svg"
                    width={37}
                    height={37}
                    className='rounded-full'
                    alt='profile'
                    ></Image>
                </Link>
</div> 
         ):(
            <>
            {providers &&
            Object.values(providers).map((provider)=>(<button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>Sign In</button>))}
            </>
         )}
        </div>
        {/* Mobile Navigaion */}
        <div className='sm:hidden flex relative'>
      {isUserLoggedIn ? (
        <div className='flex'>
            <Image 
            src="/assets/images/logo.svg"
            width={37}
            height={37}
            className='rounded-full'
            alt='profile'
            onClick={()=>{
                
            }}
            />
            </div>
      ):(
        <>
        {providers &&
        Object.values(providers).map((provider)=>(<button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>Sign In</button>))}
        </>
      )}
        </div>

    </nav>
  )
}

export default Nav