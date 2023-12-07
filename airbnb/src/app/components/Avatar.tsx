'use client';

import Image from "next/image";

const Avatar = () => {
    return (
        <Image
            className="rounded-full"
            height='40'
            width='30'
            alt="Avatar"
            src='/image/placeholder.jpg'
        />
    )
}

export default Avatar