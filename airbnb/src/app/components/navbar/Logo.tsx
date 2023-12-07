'use client'

import Image from 'next/image'
import {useRouter} from 'next/navigation'

const Logo =()=>{
    const router = useRouter();

    return(
        <Image 
        alt='Logo' 
        className='hidden md:block cursor-pointer h-[40px]'
        height='40'
        width='100'
        src='/image/logo.png'
        />
    )
}

export default Logo;