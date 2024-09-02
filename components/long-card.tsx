import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LongCardProps{
    title:string
    description:string
    image:string
    fecha:string
    href:string
}

export default function LongCard({image,description,fecha,href,title}:LongCardProps) {
    return (
        <Link href={href} target='_blank' className='cursor-pointer'>
        <article className='flex flex-row gap-3 overflow-hidden hover:shadow-xl transition-all duration-300 ease-out p-2 rounded-xl my-2'>
            <Image src={image} alt='' width={50} height={50} className='rounded-full object-cover'/>
            <div className='w-full flex flex-row justify-between items-center'>
                <div className='flex flex-col items-start'>
                <h1 className='font-bold'>{title}</h1>
                <p className='text-sm'>{description}</p>
                </div>
                <p className='text-sm text-black/60'>{fecha}</p>
            </div>
        </article>
        </Link>
    )
}
