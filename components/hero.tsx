import Image from 'next/image'
import React from 'react'
import Title from './title'
import Insignia from './insignia'
import { Github, Linkedin, Mail, NotepadText } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
    return (
        <article className='bg-[#f7f7f7] h-full w-full p-5 shadow-[4px_6px_0_#170f06] border border-[#170f06] grid grid-cols-1 sm:grid-cols-[250px_1fr] gap-4 justify-end '>
            <div className='w-full h-full relative border border-[#170f06]'>
                <Image src={"/perfil.jpg"} alt='' height={1000} width={1000} className='object-cover w-full h-full' />
            </div>
            <section id="Sobre mi">
                <div className='flex flex-col gap-5'>
                    <Title title="Saúl Romero Perea 👋" className='my-0' />
                    <p><span className='font-semibold'>¡Hola! Soy Saúl, tengo 22 años y soy desarrollador web.</span> Me encanta convertir en realidad las ideas que se me ocurren y darles vida a través del código. Estudié desarrollo web en Córdoba, lo que me ha permitido, mediante la programación, hacer que esas ideas cobren forma.{" "}
                    Me gusta explorar diferentes recursos, incluso aquellos que no están directamente relacionados con el desarrollo web, para expandir mis habilidades y encontrar nuevas formas de crear.{" "}
                    Este es mi portafolio, donde compartiré los proyectos que voy desarrollando. ¡Espero que lo disfruten! 🤗</p>
                    <div className='flex flex-row gap-2 flex-wrap'>
                        <Link href={"/cv.pdf"} download={"cv.pdf"}>
                            <Insignia Icon={NotepadText} title='Curriculum Vitae' sizeIcon={20} className='p-2' />
                        </Link>
                        <Link href={"https://github.com/ajen0h"} target='_blank'>
                            <Insignia Icon={Github} title='Github' sizeIcon={20} className='p-2' />
                        </Link>
                        <Link href={"mailto:sromeroperea@gmail.com"}>
                            <Insignia Icon={Mail} title='Email' sizeIcon={20} className='p-2' />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/sa%C3%BAlromeroperea/"}>
                            <Insignia Icon={Linkedin} title='LinkedIn' sizeIcon={20} className='p-2' />
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    )
}
