import React from 'react'
import { Badge } from './ui/badge'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InsigniaProps {
    title?: string
    variant?: "default" | "secondary" | "destructive" | "outline"
    Icon?: LucideIcon
    className?: string
    sizeIcon?: number
}

export default function Insignia({ title, variant = "default", Icon, className, sizeIcon = 16 }: InsigniaProps) {
    return (

        <Badge variant={variant} className='border-[#262333] border'>
            <div className={cn('flex flex-row items-center justify-start gap-2', className)}>
                {Icon ? (<Icon size={sizeIcon} />) : null}
                {title}
            </div>
        </Badge>


    )
}
