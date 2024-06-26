'use client';      
import Logo from './Logo'
import Container from '../Container'
import React from 'react'
import Search from './Search'
import UserMenu from './UserMenu'
import { SafeUser } from '@/app/types';
import Categories from './Categories';

interface Navbarprops {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<Navbarprops> = ({
    currentUser=null
}) => {
    console.log(currentUser)
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>
            <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                <Logo />
                <Search />
                <UserMenu currentUser={currentUser} />
                </div>
            </Container>
        </div>
        <Categories />
    </div>
  )
}

export default Navbar