import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface ProjectCardProps {
    image: string
    title: string
    description: string
    href: string
    children: ReactNode
}

export default function ProjectCard({ description, image, title, href, children }: ProjectCardProps) {
    return (
        <article className='flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full rounded-xl'>
            <Link href={href} className='cursor-pointer' target='_blank' >
                <div className='w-full h-full relative overflow-hidden hover:scale-105 transition-all'>
                    <Image src={image} alt='' height={1000} width={1000} className='w-full object-cover' />
                </div>
            </Link>
            <div className='flex flex-col gap-3 p-4'>
                <h1 className='font-bold'>{title}</h1>
                <p className='text-sm'>{description}</p>
                <div >
                    {children}
                </div>
            </div>
        </article>
    )
}
