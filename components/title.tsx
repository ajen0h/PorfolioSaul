import { cn } from '@/lib/utils'
import React from 'react'

export default function Title({ title,className}: { title: string,className?:string }) {
    return (
        <div className={cn(" mt-10 mb-3 flex flex-row justify-start gap-3",className)}>
            <h1 className='font-bold text-2xl'>{title}</h1>
        </div>
    )
}
